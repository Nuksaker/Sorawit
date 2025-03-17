"use client"

import { useLanguage } from "@/components/language-provider"
import { AnimatePresence, motion } from "framer-motion"
import { BriefcaseIcon, CalendarIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { useState } from "react"

export function Experience() {
  const { t } = useLanguage()
  const [expandedExperience, setExpandedExperience] = useState<string | null>(null)

  const toggleExperience = (id: string) => {
    if (expandedExperience === id) {
      setExpandedExperience(null)
    } else {
      setExpandedExperience(id)
    }
  }

  const experiences = [
    {
      id: "adasoft",
      title: t("experience.adasoft.title"),
      company: t("experience.adasoft.company"),
      period: t("experience.adasoft.period"),
      responsibilities: [
        t("experience.adasoft.responsibilities.1"),
        t("experience.adasoft.responsibilities.2"),
        t("experience.adasoft.responsibilities.3"),
        t("experience.adasoft.responsibilities.4"),
        t("experience.adasoft.responsibilities.5"),
        t("experience.adasoft.responsibilities.6"),
        t("experience.adasoft.responsibilities.7"),
      ],
    },
    {
      id: "synerry",
      title: t("experience.synerry.title"),
      company: t("experience.synerry.company"),
      period: t("experience.synerry.period"),
      responsibilities: [
        t("experience.synerry.responsibilities.1"),
        t("experience.synerry.responsibilities.2"),
        t("experience.synerry.responsibilities.3"),
        t("experience.synerry.responsibilities.4"),
        t("experience.synerry.responsibilities.5"),
        t("experience.synerry.responsibilities.6"),
        t("experience.synerry.responsibilities.7"),
        t("experience.synerry.responsibilities.8"),
      ],
    },
  ]

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

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`
                  bg-white dark:bg-slate-800 rounded-lg shadow-sm overflow-hidden 
                  border-l-4 border-l-blue-500 hover:shadow-md transition-all
                  ${expandedExperience === exp.id ? "shadow-md" : ""}
                `}
              >
                <div className="p-6 cursor-pointer" onClick={() => toggleExperience(exp.id)}>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mt-1">
                        <BriefcaseIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{exp.title}</h3>
                        <div className="text-lg font-medium text-slate-700 dark:text-slate-300">{exp.company}</div>
                        <div className="flex items-center mt-2 text-sm text-slate-500 dark:text-slate-400">
                          <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <span className="text-sm font-medium">
                        {expandedExperience === exp.id ? t("experience.readLess") : t("experience.readMore")}
                      </span>
                      <motion.div
                        animate={{ rotate: expandedExperience === exp.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDownIcon className="h-5 w-5" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {expandedExperience === exp.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.3,
                        opacity: { duration: 0.2 },
                        height: {
                          duration: 0.3,
                          ease: "easeInOut"
                        }
                      }}
                      className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-700"
                    >
                      <ul className="space-y-2 mt-2">
                        {exp.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                            <span className="text-blue-500 mt-1">•</span>
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

