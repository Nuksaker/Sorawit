"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0)
  const [isRevealing, setIsRevealing] = useState(false)
  const [scaleFactor, setScaleFactor] = useState(1)
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) setScaleFactor(0.5)
        else if (window.innerWidth < 1024) setScaleFactor(0.75)
        else setScaleFactor(1)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  
  const greetings = [
    { text: "สวัสดี", lang: "TH" },
    { text: "Hello", lang: "EN" },
    { text: "Welcome", lang: "EN" },
    { text: "SORAWIT", lang: "NAME" }
  ]

  const techIcons = [
    { src: "/icons/php.png", x: -190, y: -90, size: 70, delay: 0 },
    { src: "/icons/js.png", x: -180, y: 50, size: 45, delay: 0.4 },
    { src: "/icons/node.png", x: 130, y: 80, size: 60, delay: 0.1 },
    { src: "/icons/typescript.png", x: -70, y: -140, size: 50, delay: 0.3 },
    { src: "/icons/docker.png", x: 90, y: -150, size: 50, delay: 0.5 },
    { src: "/icons/react.png", x: -50, y: 130, size: 50, delay: 0.2 },
    { src: "/icons/typescript.png", x: 180, y: -30, size: 50, delay: 0.6 }
  ]

  useEffect(() => {
    if (step < greetings.length) {
      const timer = setTimeout(() => {
        setStep(prev => prev + 1)
      }, step === greetings.length - 1 ? 1000 : 400)
      return () => clearTimeout(timer)
    } else {
      setIsRevealing(true)
    }
  }, [step])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-white dark:bg-slate-950 font-kodchasan">
      {isRevealing ? (
        <motion.div
           className="absolute inset-0 z-50"
           initial={{ opacity: 1 }}
           animate={{ opacity: 0 }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
           onAnimationComplete={onComplete}
        >
          <motion.div 
            className="absolute inset-0 bg-blue-600"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            style={{ originY: 0 }}
          />
        </motion.div>
      ) : (
        <div className="relative flex flex-col items-center w-full h-full justify-center">
          {/* Tech Cloud Parallax */}
          <div className="absolute inset-0 pointer-events-none">
            {techIcons.map((icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0.2], 
                  scale: [0.8, 1.1, 1],
                  x: [icon.x, icon.x + (Math.random() * 40 - 20)],
                  y: [icon.y, icon.y + (Math.random() * 40 - 20)],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2, 
                  delay: icon.delay,
                  x: { duration: 5 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 6, repeat: Infinity, ease: "linear" }
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 dark:opacity-20 flex items-center justify-center p-2 rounded-xl bg-white/10 backdrop-blur-sm"
                style={{ 
                  left: `calc(50% + ${icon.x * scaleFactor}px)`, 
                  top: `calc(50% + ${icon.y * scaleFactor}px)` 
                }}
              >
                <Image 
                  src={icon.src} 
                  alt="tech icon" 
                  width={icon.size * scaleFactor} 
                  height={icon.size * scaleFactor} 
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Greeting Text */}
          <div className="relative h-20 md:h-24 flex items-center justify-center overflow-hidden">
            <motion.div
              key={step}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white"
            >
              {greetings[Math.min(step, greetings.length - 1)].text}
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-xs font-bold tracking-[0.5em] text-slate-300 dark:text-slate-700 uppercase"
          >
            Portfolio &copy; {year}
          </motion.div>
        </div>
      )}
    </div>
  )
}

