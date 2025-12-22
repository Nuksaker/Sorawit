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

        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-none shadow-2xl bg-white dark:bg-slate-800 rounded-3xl group transition-all duration-500 hover:translate-y-[-4px]">
            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />
            
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Left Side: University Icon and Brand */}
                <div className="md:w-1/3 p-8 bg-slate-50 dark:bg-slate-800/80 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-700 flex flex-col items-center justify-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-20 animate-pulse" />
                    <div className="relative bg-white dark:bg-slate-700 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-600 group-hover:rotate-6 transition-transform duration-500">
                      <GraduationCapIcon className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {t("education.university")}
                  </h3>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full border border-blue-100 dark:border-blue-800/50">
                    <CalendarIcon className="h-3 w-3 mr-1.5" />
                    {t("education.year")}
                  </div>
                </div>

                {/* Right Side: Educational Details */}
                <div className="md:w-2/3 p-8 md:p-10">
                  <div className="mb-8">
                    {/* <div className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">
                      Academic Achievement
                    </div> */}
                    <CardTitle className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-4">
                      {t("education.degree")}
                    </CardTitle>
                    <div className="h-1.5 w-20 bg-blue-500 rounded-full mb-6" />
                  </div>

                  <div className="space-y-8">
                    <div className="relative">
                      <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                        <BookOpenIcon className="h-4 w-4 text-blue-500" />
                        {t("education.coursework.title")}
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed max-w-lg">
                        {t("education.coursework.description")}
                      </p>
                    </div>

                    <div className="relative">
                      <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-3">
                        <BookOpenIcon className="h-4 w-4 text-blue-500" />
                        {t("education.project.title")}
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed bg-slate-50/50 dark:bg-slate-700/30 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                        {t("education.project.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}

