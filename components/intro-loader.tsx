"use client"

import { useEffect, useState } from "react"
import { Loader } from "@/components/ui/loader"

export function IntroLoader({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const totalDuration = 2000 // 2 seconds
    const intervalStep = 20 // Update every 20ms
    const totalSteps = totalDuration / intervalStep
    const increment = 100 / totalSteps

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + increment
        if (nextProgress >= 100) {
          clearInterval(timer)
          // Trigger fade out
          setTimeout(() => {
            setFadeOut(true)
            // Completely unmount the loader overlay after the fade transition (300ms)
            setTimeout(() => {
              setIsVisible(false)
            }, 300)
          }, 100)
          return 100
        }
        return nextProgress
      })
    }, intervalStep)

    return () => clearInterval(timer)
  }, [])

  return (
    <>
      {isVisible && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-[#FFFFFF] transition-opacity duration-300 ease-out ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <Loader progress={progress} />
        </div>
      )}
      {/* 
        Render the portfolio content in the background. 
        This allows Next.js to start fetching resources and images 
        while the user is looking at the beautiful 2s loading animation.
      */}
      <div className={isVisible ? "h-screen overflow-hidden" : ""}>
        {children}
      </div>
    </>
  )
}
