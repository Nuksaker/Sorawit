"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCapIcon, CalendarIcon, BookOpenIcon } from "lucide-react"

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          <span className="inline-block border-b-4 border-blue-500 pb-2">{t("sections.education")}</span>
        </h2>

        <Card className="overflow-hidden border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
          <CardHeader className="bg-slate-50 dark:bg-slate-800/50">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">
                  <GraduationCapIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-xl text-blue-600 dark:text-blue-400">{t("education.degree")}</CardTitle>
                  <div className="text-lg font-medium text-slate-700 dark:text-slate-300">
                    {t("education.university")}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <CalendarIcon className="h-4 w-4" />
                <span>{t("education.year")}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium flex items-center gap-2 text-slate-800 dark:text-slate-200 mb-2">
                  <BookOpenIcon className="h-5 w-5 text-blue-500" />
                  {t("education.coursework.title")}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">{t("education.coursework.description")}</p>
              </div>
              <div>
                <h4 className="text-lg font-medium flex items-center gap-2 text-slate-800 dark:text-slate-200 mb-2">
                  <BookOpenIcon className="h-5 w-5 text-blue-500" />
                  {t("education.project.title")}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">{t("education.project.description")}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

