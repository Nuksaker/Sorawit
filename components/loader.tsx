"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Show the minimal loading animation for 2.4 seconds
    const timer = setTimeout(() => {
      setIsExiting(true)
      
      // Wait for the slide-up transition to finish before removing from DOM
      setTimeout(() => {
        onComplete()
      }, 1000) 
      
    }, 2400)
    
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 font-kodchasan select-none"
      // Premium Reveal: Screen slides UP and curves slightly at the bottom edge (Jelly effect)
      initial={{ y: "0%", borderBottomLeftRadius: "0%", borderBottomRightRadius: "0%" }}
      animate={
        isExiting 
          ? { y: "-100vh", borderBottomLeftRadius: "40%", borderBottomRightRadius: "40%" } 
          : { y: "0%", borderBottomLeftRadius: "0%", borderBottomRightRadius: "0%" }
      }
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div 
        className="relative flex flex-col items-center justify-center pointer-events-none w-full h-full"
        // Fade and scale down the text slightly just before the curtain lifts
        animate={isExiting ? { opacity: 0, scale: 0.95, y: -20 } : { opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="relative mb-4 overflow-hidden py-2 px-1">
           <motion.div
             className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-[0.2em] relative z-10 uppercase text-center"
             initial={{ opacity: 0, y: "100%" }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           >
             SORAWIT
           </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xs md:text-sm font-semibold tracking-[0.4em] text-blue-600 dark:text-blue-400 uppercase"
        >
          ENTERPRISE DEVELOPER
        </motion.div>
        
        {/* Minimal Progress Line */}
        <div className="absolute top-[55%] mt-6 w-32 h-[1px] bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
           <motion.div
             className="h-full bg-blue-500 rounded-full"
             initial={{ x: "-100%" }}
             animate={{ x: "300%" }}
             transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
           />
        </div>
      </motion.div>
    </motion.div>
  )
}
