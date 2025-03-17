"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [text, setText] = useState("")
  const [isTextComplete, setIsTextComplete] = useState(false)
  const [isRevealing, setIsRevealing] = useState(false)
  const fullName = "SORAWIT SIAMHONG"

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setText(fullName.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        // Wait a moment after text is complete before starting the reveal animation
        setTimeout(() => {
          setIsTextComplete(true)
          // Wait a bit more before starting the page reveal
          setTimeout(() => {
            setIsRevealing(true)
          }, 50)
        }, 1000)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-blue-50 dark:bg-[#2943904d] font-kodchasan">
      {isRevealing ? (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onAnimationComplete={() => {
            setTimeout(() => {
              onComplete()
            }, 50)
          }}
        >
          <div className="relative w-full h-full">
            {/* Top reveal */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-tr from-slate-200  to-white dark:from-slate-100 dark:to-slate-50"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {/* Bottom reveal */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-br from-slate-200  to-white dark:from-slate-100 dark:to-slate-50"
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      ) : (
        <div className="text-center h-[100px]">
          {isTextComplete ? (
            <div className="flex justify-center items-center h-[100px]">
              {/* Left part of text */}
              <motion.span
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-50 to-white dark:from-white dark:via-white dark:to-white text-transparent bg-clip-text"
                initial={{ x: 0 }}
                animate={{ x: "-30px" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {fullName.substring(0, Math.floor(fullName.length / 2))}
              </motion.span>

              {/* Right part of text */}
              <motion.span
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-50 to-white dark:from-white dark:via-white dark:to-white text-transparent bg-clip-text"
                initial={{ x: 0 }}
                animate={{ x: "30px" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {fullName.substring(Math.floor(fullName.length / 2))}
              </motion.span>
            </div>
          ) : (
            <h1 className="h-[100px] text-3xl md:text-5xl font-bold">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="inline-block bg-gradient-to-b from-gray-900 to-gray-600 dark:from-slate-50 dark:to-white text-transparent bg-clip-text"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    filter: ["blur(8px)", "blur(4px)", "blur(2px)", "blur(0px)"],
                  }}
                  transition={{
                    duration: 0.8,
                    times: [0, 0.3, 0.6, 1],
                    ease: "easeOut",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          )}
        </div>
      )}
    </div>
  )
}

