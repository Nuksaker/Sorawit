"use client"

import { useLanguage } from "@/components/language-provider"
import { AnimatePresence, motion } from "framer-motion"
import { BriefcaseIcon, CalendarIcon, ChevronDownIcon, BuildingIcon, MapPin } from "lucide-react"
import { useState, useMemo, useEffect } from "react"
import { differenceInMonths, parse } from "date-fns"

const EXPERIENCE_IDS = ["adasoft", "synerry"] as const

export function Experience() {
  const { t } = useLanguage()
  const [expandedExperience, setExpandedExperience] = useState<string | null>("adasoft")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleExperience = (id: string) => {
    setExpandedExperience(expandedExperience === id ? null : id)
  }

  const experiences = useMemo(() =>
    EXPERIENCE_IDS.map((id) => ({
      id,
      title: t(`experience.${id}.title`),
      company: t(`experience.${id}.company`),
      location: t("experience.location"),
      type: t("experience.fullTime"),
      startDate: t(`experience.${id}.startDate`),
      endDate: id === "adasoft" ? undefined : t(`experience.${id}.endDate`),
      responsibilities: Array.from({ length: 8 }, (_, i) =>
        t(`experience.${id}.responsibilities.${i + 1}`)
      ),
      tags:
        id === "adasoft"
          ? ["CodeIgniter 3", "PHP", "HMVC", "Python", "Laravel", "Jenkins", "RabbitMQ", "SQL Server", "Next.js", "NestJS"]
          : ["Nuxt 2/3", "TypeScript", "CodeIgniter 4", "PHP", "Node.js", "Jenkins", "Redis", "SQL Server", "OWASP ZAP", "Windows Server"],
    })),
  [t])

  const formatDuration = (startStr: string, endStr?: string) => {
    try {
      const start = parse(startStr, "yyyy-MM-dd", new Date())
      const end = endStr ? parse(endStr, "yyyy-MM-dd", new Date()) : new Date()
      const totalMonths = differenceInMonths(end, start) + 1
      const years = Math.floor(totalMonths / 12)
      const months = totalMonths % 12
      let result = ""
      if (years > 0) result += `${years} ${years > 1 ? "yrs" : "yr"} `
      if (months > 0) result += `${months} ${months > 1 ? "mos" : "mo"}`
      if (years === 0 && months === 0) result = "< 1 mo"
      return result.trim()
    } catch {
      return ""
    }
  }

  const formatDateLabel = (dateStr?: string) => {
    if (!dateStr || dateStr === "Present" || dateStr === "ปัจจุบัน") return t("experience.present")
    try {
      const date = parse(dateStr, "yyyy-MM-dd", new Date())
      return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    } catch {
      return dateStr
    }
  }

  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-2">Career</p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
            {t("sections.experience")}
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-slate-200 dark:via-slate-700 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 transition-colors duration-300 ${
                  expandedExperience === exp.id
                    ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-400"
                }`}>
                  <BriefcaseIcon className="h-3.5 w-3.5" />
                </div>

                <div
                  className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                    expandedExperience === exp.id
                      ? "border-blue-200 dark:border-blue-800/50 shadow-lg shadow-blue-500/5 bg-white dark:bg-slate-800"
                      : "border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/50 hover:border-blue-200 dark:hover:border-blue-800/40 hover:shadow-md"
                  }`}
                  onClick={() => toggleExperience(exp.id)}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-sm">
                            <BuildingIcon className="h-3.5 w-3.5" />
                            {exp.company}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 font-medium">
                            {exp.type}
                          </span>
                          {!exp.endDate && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-bold">
                              {t("experience.current")}
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3">{exp.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <CalendarIcon className="h-3.5 w-3.5 text-blue-400" />
                            {formatDateLabel(exp.startDate)} – {formatDateLabel(exp.endDate)}
                            {isMounted && (
                              <span className="ml-1 px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold">
                                {formatDuration(exp.startDate, exp.endDate)}
                              </span>
                            )}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-slate-400" />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedExperience === exp.id ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="text-slate-400 shrink-0 mt-1"
                      >
                        <ChevronDownIcon className="h-5 w-5" />
                      </motion.div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-medium font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expanded Responsibilities */}
                  <AnimatePresence>
                    {expandedExperience === exp.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-slate-100 dark:border-slate-700 pt-5">
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                            {t("experience.keyAchievements")}
                          </p>
                          <ul className="space-y-3">
                            {exp.responsibilities.map((responsibility, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: i * 0.04 }}
                                className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed"
                              >
                                <span className="w-5 h-5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                                  {i + 1}
                                </span>
                                <span>{responsibility}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}

            {/* End note */}
            <div className="relative pl-20">
              <div className="absolute left-4 top-3 w-8 h-8 rounded-full border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-full" />
              </div>
              <div className="py-3">
                <p className="text-sm text-slate-400 dark:text-slate-500 font-medium">
                  {t("experience.endNote")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
