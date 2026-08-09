"use client";

import { useState, useRef, useEffect, useLayoutEffect, useCallback } from "react";
import { Rewind, FastForward } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export interface TechStack {
  id: number;
  name: string;
  icon: React.ReactNode;
}

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const AUTOPLAY_MS = 3000;
const PAUSE_AFTER_INTERACTION_MS = 5000;
const TRACK_EASING = "620ms cubic-bezier(0.22, 1, 0.36, 1)";
const ITEM_EASING = "380ms cubic-bezier(0.22, 1, 0.36, 1)";

// The list is tripled so the active index can always sit in the middle copy,
// leaving a full set of items rendered on either side.
const COPIES = 3;

const createInfiniteItems = (originalItems: TechStack[]) => {
  const items: Array<Omit<TechStack, "id"> & { id: string; originalIndex: number }> = [];
  for (let copy = 0; copy < COPIES; copy++) {
    originalItems.forEach((item, index) => {
      items.push({ ...item, id: `${copy}-${item.id}`, originalIndex: index });
    });
  }
  return items;
};

const RulerLines = ({ top = true, totalLines = 100 }: { top?: boolean; totalLines?: number }) => {
  const lines = [];
  const lineSpacing = 100 / (totalLines - 1);

  for (let i = 0; i < totalLines; i++) {
    const isFifth = i % 5 === 0;
    const isCenter = i === Math.floor(totalLines / 2);

    let height = "h-2";
    if (isCenter) height = "h-7";
    else if (isFifth) height = "h-4";

    lines.push(
      <div
        key={i}
        className={`absolute w-1 bg-black ${height} ${top ? "" : "bottom-0"}`}
        // Centred on its own position so the last tick cannot spill past the
        // container edge, which used to widen the whole document by 4px.
        style={{ left: `${i * lineSpacing}%`, transform: "translateX(-50%)" }}
      />
    );
  }

  return (
    <div className="relative w-full h-12 px-4 bg-white border-t-3 border-b-3 border-black overflow-hidden">
      {lines}
    </div>
  );
};

export function RulerCarousel({ originalItems }: { originalItems: TechStack[] }) {
  const { t } = useLanguage();
  const infiniteItems = createInfiniteItems(originalItems);
  const itemsPerSet = originalItems.length;

  const [activeIndex, setActiveIndex] = useState(itemsPerSet);
  const [offset, setOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  // Skips the transition so index normalisation and resizes never animate.
  const [instant, setInstant] = useState(true);

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Read by the resize observer, which must not re-subscribe on every index change.
  const activeIndexRef = useRef(activeIndex);
  activeIndexRef.current = activeIndex;

  const pauseAutoScroll = useCallback(() => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), PAUSE_AFTER_INTERACTION_MS);
  }, []);

  const goPrevious = useCallback(() => {
    setActiveIndex((prev) => prev - 1);
    pauseAutoScroll();
  }, [pauseAutoScroll]);

  const goNext = useCallback(() => {
    setActiveIndex((prev) => prev + 1);
    pauseAutoScroll();
  }, [pauseAutoScroll]);

  // Centre the active item by measuring where it actually sits, so the layout
  // stays correct at any viewport width and any item size.
  const measure = useCallback((index: number) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const item = track.children[index] as HTMLElement | undefined;
    if (!item) return;

    const itemCentre = item.offsetLeft + item.offsetWidth / 2;
    setOffset(viewport.clientWidth / 2 - itemCentre);
  }, []);

  useIsomorphicLayoutEffect(() => {
    measure(activeIndex);
  }, [activeIndex, measure]);

  // Re-centre on resize. Mounted once so the observer's initial callback can be
  // skipped — otherwise every index change would re-observe and force `instant`.
  useIsomorphicLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let isInitialCallback = true;
    const observer = new ResizeObserver(() => {
      if (isInitialCallback) {
        isInitialCallback = false;
        return;
      }
      setInstant(true);
      measure(activeIndexRef.current);
    });

    observer.observe(viewport);
    return () => observer.disconnect();
  }, [measure]);

  // Keep the active index inside the middle copy. The jump is a whole set wide,
  // so the item under the centre line is identical before and after.
  useEffect(() => {
    if (activeIndex < itemsPerSet) {
      setInstant(true);
      setActiveIndex((prev) => prev + itemsPerSet);
    } else if (activeIndex >= itemsPerSet * 2) {
      setInstant(true);
      setActiveIndex((prev) => prev - itemsPerSet);
    }
  }, [activeIndex, itemsPerSet]);

  // Re-enable transitions once the instant frame has been painted.
  useEffect(() => {
    if (!instant) return;
    const frame = requestAnimationFrame(() => setInstant(false));
    return () => cancelAnimationFrame(frame);
  }, [instant, offset]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotion) return;
    const interval = setInterval(() => setActiveIndex((prev) => prev + 1), AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [isPaused, reduceMotion]);

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  // Scoped to the carousel: arrow keys elsewhere on the page keep scrolling.
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrevious();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    }
  };

  const animated = !instant && !reduceMotion;
  const currentPage = (((activeIndex % itemsPerSet) + itemsPerSet) % itemsPerSet) + 1;

  return (
    <div
      className="w-full flex flex-col items-center justify-center bg-white py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
        setIsPaused(false);
      }}
    >
      <div
        className="w-full flex flex-col justify-center relative"
        role="group"
        aria-roledescription="carrousel"
        aria-label={t("carousel.label")}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onFocus={pauseAutoScroll}
      >
        <div className="flex items-center justify-center">
          <RulerLines top />
        </div>

        <div
          ref={viewportRef}
          className="relative w-full h-[200px] sm:h-[240px] md:h-[280px] overflow-hidden"
        >
          <div
            ref={trackRef}
            className="absolute top-0 left-0 h-full flex items-center gap-[28px] sm:gap-[56px] md:gap-[100px] will-change-transform"
            style={{
              transform: `translate3d(${offset}px, 0, 0)`,
              transition: animated ? `transform ${TRACK_EASING}` : "none",
            }}
          >
            {infiniteItems.map((item, index) => {
              const isActive = index === activeIndex;
              // Only the middle copy is exposed: the clones would otherwise repeat
              // every technology three times for screen readers and tab navigation.
              const isClone = index < itemsPerSet || index >= itemsPerSet * 2;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveIndex(index);
                    pauseAutoScroll();
                  }}
                  aria-hidden={isClone || undefined}
                  tabIndex={isClone ? -1 : 0}
                  className="w-[150px] sm:w-[220px] md:w-[320px] lg:w-[380px] shrink-0 flex flex-col items-center justify-center gap-3 md:gap-4 cursor-pointer"
                  style={{
                    transform: `scale(${isActive ? 1 : 0.72})`,
                    opacity: isActive ? 1 : 0.5,
                    transition: animated ? `transform ${ITEM_EASING}, opacity ${ITEM_EASING}` : "none",
                  }}
                >
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center border-3 border-black transition-colors ${
                      isActive
                        ? "bg-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                        : "bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
                    }`}
                  >
                    <div className={`w-12 h-12 md:w-14 md:h-14 ${isActive ? "text-white" : "text-gray-600"}`}>
                      {item.icon}
                    </div>
                  </div>

                  <span
                    className={`text-base md:text-xl font-black tracking-wider text-center ${
                      isActive ? "text-black" : "text-gray-400"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <RulerLines top={false} />
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12">
        <button
          type="button"
          onClick={goPrevious}
          className="p-3 border-3 border-black bg-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
          aria-label={t("carousel.previous")}
        >
          <Rewind className="w-5 h-5 md:w-6 md:h-6 text-black" />
        </button>

        <div
          className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 border-3 border-black bg-white"
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="text-lg md:text-xl font-black text-black">{currentPage}</span>
          <span className="text-lg md:text-xl font-black text-gray-400">/</span>
          <span className="text-lg md:text-xl font-black text-black">{itemsPerSet}</span>
        </div>

        <button
          type="button"
          onClick={goNext}
          className="p-3 border-3 border-black bg-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
          aria-label={t("carousel.next")}
        >
          <FastForward className="w-5 h-5 md:w-6 md:h-6 text-black" />
        </button>
      </div>
    </div>
  );
}
