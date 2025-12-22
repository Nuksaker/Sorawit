"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Zap, Lightbulb } from "lucide-react"

export function AdditionalSkills() {
  const { t } = useLanguage()

  const additionalSkills = [
    {
      title: t("additionalSkills.problemSolving.title"),
      description: t("additionalSkills.problemSolving.description"),
      icon: <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      color: "blue"
    },
    {
      title: t("additionalSkills.teamwork.title"),
      description: t("additionalSkills.teamwork.description"),
      icon: <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
      color: "indigo"
    },
    {
      title: t("additionalSkills.adaptability.title"),
      description: t("additionalSkills.adaptability.description"),
      icon: <Zap className="h-8 w-8 text-amber-500 dark:text-amber-400" />,
      color: "amber"
    },
    {
      title: t("additionalSkills.innovation.title"),
      description: t("additionalSkills.innovation.description"),
      icon: <Lightbulb className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />,
      color: "emerald"
    },
  ]

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          <span className="inline-block border-b-4 border-blue-500 pb-2">{t("sections.additionalSkills")}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-none shadow-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm group overflow-hidden relative">
                <CardContent className="p-8">
                  {/* Background Decoration */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-${skill.color}-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-${skill.color}-500/10 transition-colors duration-500`} />
                  
                  <div className="flex flex-col gap-4 relative z-10 text-center sm:text-left items-center sm:items-start">
                    <div className={`p-4 rounded-2xl bg-${skill.color}-100 dark:bg-${skill.color}-900/30 group-hover:scale-110 transition-transform duration-500`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

