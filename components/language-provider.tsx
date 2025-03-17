"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "th"

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const CACHE_KEY_PREFIX = "language_translations_"
const CACHE_EXPIRY_KEY = "language_translations_expiry"
const CACHE_DURATION = 24 * 60 * 60 * 1000 // 1 day in milliseconds

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState<Record<string, any>>({})

  useEffect(() => {
    const loadTranslations = async () => {
      if (typeof window !== "undefined") {
        const cachedExpiry = localStorage.getItem(CACHE_EXPIRY_KEY)
        const now = new Date().getTime()

        // if (cachedExpiry && parseInt(cachedExpiry) > now) {
        //   const cachedEn = localStorage.getItem(`${CACHE_KEY_PREFIX}en`)
        //   const cachedTh = localStorage.getItem(`${CACHE_KEY_PREFIX}th`)

        //   if (cachedEn && cachedTh) {
        //     setTranslations({
        //       en: JSON.parse(cachedEn),
        //       th: JSON.parse(cachedTh),
        //     })
        //     // console.log("✅ Translations loaded from cache:", {
        //     //   en: JSON.parse(cachedEn),
        //     //   th: JSON.parse(cachedTh),
        //     // })
        //     return
        //   }
        // }

        try {
          // โหลดจากไฟล์ JSON
          const enTranslations = await import("@/translations/en.json").then((m) => m.default)
          const thTranslations = await import("@/translations/th.json").then((m) => m.default)

          setTranslations({
            en: enTranslations,
            th: thTranslations,
          })

          // console.log("✅ Translations loaded from file:", {
          //   en: enTranslations,
          //   th: thTranslations,
          // })

          // Cache ข้อมูลลง localStorage
          const expiryTime = new Date().getTime() + CACHE_DURATION
          localStorage.setItem(CACHE_EXPIRY_KEY, expiryTime.toString())
          localStorage.setItem(`${CACHE_KEY_PREFIX}en`, JSON.stringify(enTranslations))
          localStorage.setItem(`${CACHE_KEY_PREFIX}th`, JSON.stringify(thTranslations))
        } catch (error) {
          console.error("Failed to load translations:", error)
        }
      }
    }

    loadTranslations()
  }, [])


  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_language", language)
    }
  }, [language])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("preferred_language") as Language
      if (savedLanguage === "en" || savedLanguage === "th") {
        setLanguage(savedLanguage)
      }
    }
  }, [])

  // 👉 รองรับ key แบบ nested ด้วยการใช้ split(".")
  const t = (key: string, fallback?: string): string => {
    if (!translations[language]) return fallback || key

    return key.split('.').reduce((obj, k) => {
      if (obj && typeof obj === 'object' && k in obj) {
        return obj[k]
      }
      return fallback || key
    }, translations[language])
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
