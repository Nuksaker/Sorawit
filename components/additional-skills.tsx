"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function AdditionalSkills() {
  const { t } = useLanguage()

  const additionalSkills = [
    {
      title: t("additionalSkills.problemSolving.title"),
      description: t("additionalSkills.problemSolving.description"),
    },
    {
      title: t("additionalSkills.teamwork.title"),
      description: t("additionalSkills.teamwork.description"),
    },
    {
      title: t("additionalSkills.adaptability.title"),
      description: t("additionalSkills.adaptability.description"),
    },
    {
      title: t("additionalSkills.innovation.title"),
      description: t("additionalSkills.innovation.description"),
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex gap-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-lg text-slate-800 dark:text-slate-200 mb-2">{skill.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{skill.description}</p>
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

