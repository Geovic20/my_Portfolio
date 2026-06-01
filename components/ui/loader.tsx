"use client"

import { useEffect, useState } from "react"

export interface LoaderProps {
  className?: string
  progress?: number // Optional external progress control
}

const LOADING_STEPS = [
  { max: 20, text: "Lancement des moteurs..." },
  { max: 45, text: "Mise en page papier..." },
  { max: 70, text: "Coloration des blocs..." },
  { max: 90, text: "Alignement des pixels..." },
  { max: 100, text: "Presque prêt !" },
]

export function Loader({ className = "", progress: externalProgress }: LoaderProps) {
  const [internalProgress, setInternalProgress] = useState(0)

  useEffect(() => {
    // Only simulate if progress is not controlled externally
    if (externalProgress !== undefined) return

    const timer = setInterval(() => {
      setInternalProgress((prev) => {
        if (prev >= 95) {
          return Math.min(prev + 0.5, 99)
        }
        const increment = Math.floor(Math.random() * 12) + 4
        return Math.min(prev + increment, 95)
      })
    }, 250)

    return () => clearInterval(timer)
  }, [externalProgress])

  const progress = externalProgress !== undefined ? externalProgress : internalProgress

  // Find the appropriate loading text based on current progress
  const currentStep = LOADING_STEPS.find((step) => progress <= step.max) || LOADING_STEPS[LOADING_STEPS.length - 1]

  return (
    <div className={`flex flex-col items-center justify-center p-8 bg-transparent w-full max-w-sm md:max-w-md mx-auto ${className}`}>
      {/* Boxed brutalist wrapper */}
      <div className="w-full bg-white border-[3px] border-black rounded-3xl p-5 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Status Line */}
        <div className="w-full flex justify-between font-mono font-bold text-[14px] md:text-[15px] text-[#0B0B0B] mb-3 px-1">
          <span className="truncate max-w-[75%]">{currentStep.text}</span>
          <span>{Math.floor(progress)}%</span>
        </div>

        {/* Segmented Progress Bar */}
        <div className="w-full h-8 bg-white border-[3px] border-black rounded-2xl overflow-hidden flex p-1 gap-1">
          {Array.from({ length: 10 }).map((_, idx) => {
            const blockPercent = (idx + 1) * 10
            const isActive = progress >= blockPercent - 2 // small tolerance for animation
            
            // Colors matching the portfolio theme
            const colors = ["bg-[#FF4A60]", "bg-[#2F81F7]", "bg-[#FFC224]"]
            const currentColor = colors[idx % colors.length]

            return (
              <div
                key={idx}
                className={`h-full flex-1 rounded-md border-r border-black/5 last:border-0 transition-all duration-300 transform ${
                  isActive 
                    ? `${currentColor} border-r-[2px] border-black translate-y-0 scale-100 opacity-100 shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.2)]` 
                    : "bg-gray-100 scale-95 opacity-30 translate-y-[2px]"
                }`}
              />
            )
          })}
        </div>

        {/* Footer Technical Line */}
        <div className="w-full mt-4 flex justify-between font-mono text-[10px] text-gray-400 border-t border-gray-100 pt-3">
          <span>SYS_STATUS: ACTIVE</span>
          <span>PORTFOLIO_LOADER_V2</span>
        </div>
      </div>
    </div>
  )
}
