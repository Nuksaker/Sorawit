"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { UserIcon } from "lucide-react"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          <span className="inline-block border-b-4 border-blue-500 pb-2">{t("sections.about")}</span>
        </h2>

        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border-l-4 border-l-blue-500 p-8 hover:shadow-md transition-all">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
              <UserIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                {t("about.description")}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
