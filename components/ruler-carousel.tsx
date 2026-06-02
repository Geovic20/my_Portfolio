"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Rewind, FastForward } from "lucide-react";

export interface TechStack {
  id: number;
  name: string;
  icon: React.ReactNode;
}

// Icons SVG Components
export const HtmlIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26"/>
  </svg>
);

export const CssIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z" fill="#1572B6"/>
  </svg>
);

export const JavascriptIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <rect width="24" height="24" fill="#F7DF1E"/>
    <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330"/>
  </svg>
);

export const ReactIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
    </g>
  </svg>
);

export const NodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.602.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.135-.141.135-.241V6.921c0-.103-.055-.198-.137-.246l-8.791-5.072c-.081-.047-.189-.047-.273 0L2.075 6.675c-.084.048-.139.144-.139.246v10.146c0 .1.055.194.139.241l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.352 18.675C.533 18.215 0 17.352 0 16.43V6.284c0-.922.533-1.786 1.352-2.245L10.147-.963c.8-.452 1.866-.452 2.657 0l8.796 5.002c.819.459 1.352 1.323 1.352 2.245v10.146c0 .922-.533 1.783-1.352 2.245l-8.796 5.078c-.28.163-.601.247-.926.247z" fill="#339933"/>
  </svg>
);

export const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/>
  </svg>
);

// Create infinite items by triplicating the array
const createInfiniteItems = (originalItems: TechStack[]) => {
  const items: Array<Omit<TechStack, 'id'> & { id: string; originalIndex: number }> = [];
  for (let i = 0; i < 3; i++) {
    originalItems.forEach((item, index) => {
      items.push({
        ...item,
        id: `${i}-${item.id}`,
        originalIndex: index,
      });
    });
  }
  return items;
};

const RulerLines = ({
  top = true,
  totalLines = 100,
}: {
  top?: boolean;
  totalLines?: number;
}) => {
  const lines = [];
  const lineSpacing = 100 / (totalLines - 1);

  for (let i = 0; i < totalLines; i++) {
    const isFifth = i % 5 === 0;
    const isCenter = i === Math.floor(totalLines / 2);

    let height = "h-2";
    let color = "bg-black";

    if (isCenter) {
      height = "h-7";
      color = "bg-black";
    } else if (isFifth) {
      height = "h-4";
      color = "bg-black";
    }

    const positionClass = top ? "" : "bottom-0";

    lines.push(
      <div
        key={i}
        className={`absolute w-1 ${height} ${color} ${positionClass}`}
        style={{ left: `${i * lineSpacing}%` }}
      />
    );
  }
  return <div className="relative w-full h-12 px-4 bg-white dark:bg-black border-t-3 border-b-3 border-black dark:border-white">{lines}</div>;
};

export function RulerCarousel({
  originalItems,
}: {
  originalItems: TechStack[];
}) {
  const infiniteItems = createInfiniteItems(originalItems);
  const itemsPerSet = originalItems.length;

  // Start with the middle set, item 3 (centered)
  const [activeIndex, setActiveIndex] = useState(itemsPerSet + 3);
  const [isResetting, setIsResetting] = useState(false);
  const previousIndexRef = useRef(itemsPerSet + 3);

  const handleItemClick = (newIndex: number) => {
    if (isResetting) return;

    const targetOriginalIndex = newIndex % itemsPerSet;

    const possibleIndices = [
      targetOriginalIndex,
      targetOriginalIndex + itemsPerSet,
      targetOriginalIndex + itemsPerSet * 2,
    ];

    let closestIndex = possibleIndices[0];
    let smallestDistance = Math.abs(possibleIndices[0] - activeIndex);

    for (const index of possibleIndices) {
      const distance = Math.abs(index - activeIndex);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    }

    previousIndexRef.current = activeIndex;
    setActiveIndex(closestIndex);
  };

  const handlePrevious = () => {
    if (isResetting) return;
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isResetting) return;
    setActiveIndex((prev) => prev + 1);
  };

  // Handle infinite scrolling
  useEffect(() => {
    if (isResetting) return;

    if (activeIndex < itemsPerSet) {
      setIsResetting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex + itemsPerSet);
        setIsResetting(false);
      }, 0);
    } else if (activeIndex >= itemsPerSet * 2) {
      setIsResetting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex - itemsPerSet);
        setIsResetting(false);
      }, 0);
    }
  }, [activeIndex, itemsPerSet, isResetting]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isResetting) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((prev) => prev - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((prev) => prev + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResetting]);

  // Calculate target position - center the active item
  const centerPosition = 5;
  const targetX = -500 + (centerPosition - (activeIndex % itemsPerSet)) * 500;

  // Get current page info
  const currentPage = (activeIndex % itemsPerSet) + 1;
  const totalPages = itemsPerSet;

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white dark:bg-black py-12">
      <div className="w-full flex flex-col justify-center relative">
        <div className="flex items-center justify-center">
          <RulerLines top />
        </div>
        <div className="flex items-center justify-center w-full h-[280px] relative overflow-hidden">
          <motion.div
            className="flex items-center gap-[100px]"
            animate={{
              x: isResetting ? targetX : targetX,
            }}
            transition={
              isResetting
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    mass: 1,
                  }
            }
          >
            {infiniteItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleItemClick(index)}
                  className={`flex flex-col items-center justify-center cursor-pointer gap-4 ${
                    isActive ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-400"
                  }`}
                  animate={{
                    scale: isActive ? 0.6 : 1,
                    opacity: 1,
                  }}
                  transition={
                    isResetting
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }
                  }
                  style={{
                    width: "400px",
                  }}
                >
                  {/* Icon container with neo-brutalist style */}
                  <div
                    className={`w-24 h-24 flex items-center justify-center border-3 border-black dark:border-white transition-all ${
                      isActive
                        ? "bg-black dark:bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
                        : "bg-white dark:bg-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                    }`}
                  >
                    <div
                      className={`w-14 h-14 ${
                        isActive
                          ? "text-white dark:text-black"
                          : "text-gray-600 dark:text-gray-300"
                      }`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Text */}
                  <span
                    className={`text-xl font-black tracking-wider ${
                      isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-gray-500"
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <div className="flex items-center justify-center">
          <RulerLines top={false} />
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-12">
        <button
          onClick={handlePrevious}
          disabled={isResetting}
          className="p-3 border-3 border-black dark:border-white bg-white dark:bg-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all disabled:opacity-50"
          aria-label="Previous item"
        >
          <Rewind className="w-6 h-6 text-black dark:text-white" />
        </button>

        <div className="flex items-center gap-3 px-6 py-3 border-3 border-black dark:border-white bg-white dark:bg-black">
          <span className="text-xl font-black text-black dark:text-white">
            {currentPage}
          </span>
          <span className="text-xl font-black text-gray-400 dark:text-gray-600">
            /
          </span>
          <span className="text-xl font-black text-black dark:text-white">
            {totalPages}
          </span>
        </div>

        <button
          onClick={handleNext}
          disabled={isResetting}
          className="p-3 border-3 border-black dark:border-white bg-white dark:bg-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] transition-all disabled:opacity-50"
          aria-label="Next item"
        >
          <FastForward className="w-6 h-6 text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}
