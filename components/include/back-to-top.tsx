"use client"

import { useState, useEffect } from "react"
import { ArrowUpIcon } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)
    const { t } = useLanguage()

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 500) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors"
                    aria-label={t("backToTop")}
                    title={t("backToTop")}
                >
                    <ArrowUpIcon className="h-6 w-6" />
                </motion.button>
            )}
        </AnimatePresence>
    )
}
