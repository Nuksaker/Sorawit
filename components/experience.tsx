"use client"

import { useLanguage } from "@/components/language-provider"
import { AnimatePresence, motion } from "framer-motion"
import { BriefcaseIcon, CalendarIcon, ChevronDownIcon } from "lucide-react"
import { useState, useMemo, useEffect } from "react"
import { differenceInMonths, parse } from "date-fns"
import { log } from "console"

interface ExperienceItem {
  id: string
  title: string
  company: string
  startDate: string
  endDate?: string
  responsibilities: string[]
}

export function Experience() {
  const { t, language } = useLanguage()
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleExperience = (id: string) => {
    if (expandedExperience === id) {
      setExpandedExperience(null)
    } else {
      setExpandedExperience(id)
    }
  }

  const experiences: ExperienceItem[] = useMemo(() => [
    {
      id: "adasoft",
      title: t("experience.adasoft.title"),
      company: t("experience.adasoft.company"),
      startDate: "2024-10-01",
      responsibilities: Array.from({ length: 8 }, (_, i) => t(`experience.adasoft.responsibilities.${i + 1}`)),
    },
    {
      id: "synerry",
      title: t("experience.synerry.title"),
      company: t("experience.synerry.company"),
      startDate: "2023-02-01",
      endDate: "2024-10-01",
      responsibilities: Array.from({ length: 8 }, (_, i) => t(`experience.synerry.responsibilities.${i + 1}`)),
    },
  ], [t])

  const formatDuration = (startStr: string, endStr?: string) => {
    const start = parse(startStr, "yyyy-MM-dd", new Date())
    const end = endStr ? parse(endStr, "yyyy-MM-dd", new Date()) : new Date()

    const totalMonths = differenceInMonths(end, start) + 1
    const years = Math.floor(totalMonths / 12)
    const months = totalMonths % 12

    let result = ""
    if (language === "th") {
      if (years > 0) result += `${years} ปี `
      if (months > 0) result += `${months} เดือน`
      if (years === 0 && months === 0) result = "น้อยกว่า 1 เดือน"
    } else {
      if (years > 0) result += `${years} ${years > 1 ? "years" : "year"} `
      if (months > 0) result += `${months} ${months > 1 ? "months" : "month"}`
      if (years === 0 && months === 0) result = "Less than a month"
    }
    return result.trim()
  }

  const formatDateLabel = (dateStr?: string) => {
    if (!dateStr) return t("experience.present")
    const date = parse(dateStr, "yyyy-MM-dd", new Date())
    return date.toLocaleDateString(t("language") === "th" ? "th-TH" : "en-US", {
      month: "long",
      year: "numeric",
    })
  }

  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          <span className="inline-block border-b-4 border-blue-500 pb-2">{t("sections.experience")}</span>
        </h2>

        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-800 bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-125">
                <BriefcaseIcon className="h-5 w-5" />
              </div>

              {/* Card */}
              <div
                className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:border-blue-500/50 transition-all cursor-pointer`}
                onClick={() => toggleExperience(exp.id)}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.title}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedExperience === exp.id ? 180 : 0 }}
                      className="text-slate-400 shrink-0"
                    >
                      <ChevronDownIcon className="h-5 w-5" />
                    </motion.div>
                  </div>
                  
                  <div className="text-lg font-medium text-blue-600 dark:text-blue-400">
                    {exp.company}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2">
                    <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 font-medium">
                      <CalendarIcon className="h-4 w-4 mr-1.5 text-blue-500/70" />
                      {formatDateLabel(exp.startDate)} - {formatDateLabel(exp.endDate)}
                    </div>
                    <div className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full border border-blue-100 dark:border-blue-900/30">
                      {formatDuration(exp.startDate, exp.endDate)}
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedExperience === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-6 space-y-3">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

