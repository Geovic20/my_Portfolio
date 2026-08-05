"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Rewind, FastForward } from "lucide-react";
import Image from "next/image";

export interface TechStack {
  id: number;
  name: string;
  icon: React.ReactNode;
}

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
