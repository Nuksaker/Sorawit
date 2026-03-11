"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Target, Users, Zap, Lightbulb } from "lucide-react"

const SKILL_KEYS = ["problemSolving", "teamwork", "adaptability", "innovation"] as const
const ICONS = [
  <Target className="h-6 w-6" key="target" />,
  <Users className="h-6 w-6" key="users" />,
  <Zap className="h-6 w-6" key="zap" />,
  <Lightbulb className="h-6 w-6" key="lightbulb" />,
]
const GRADIENTS = [
  "from-blue-500 to-blue-600",
  "from-indigo-500 to-indigo-600",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
]

export function AdditionalSkills() {
  const { t } = useLanguage()

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-2">
            {t("additionalSkills.sectionLabel")}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
            {t("sections.additionalSkills")}
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SKILL_KEYS.map((key, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300"
            >
              <div className={`h-1 bg-gradient-to-r ${GRADIENTS[index]}`} />
              <div className="p-6 flex gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${GRADIENTS[index]} text-white shrink-0 group-hover:scale-110 transition-transform duration-300 self-start`}>
                  {ICONS[index]}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">
                    {t(`additionalSkills.${key}.title`)}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {t(`additionalSkills.${key}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
