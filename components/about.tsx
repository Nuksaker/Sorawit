"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Code2, Server, ShieldCheck, Database, Cpu, Link2 } from "lucide-react"

const expertiseIcons = [
  <Server key="backend" className="h-5 w-5" />,
  <Code2 key="devops" className="h-5 w-5" />,
  <Cpu key="enterprise" className="h-5 w-5" />,
  <Database key="database" className="h-5 w-5" />,
  <ShieldCheck key="security" className="h-5 w-5" />,
  <Link2 key="integration" className="h-5 w-5" />,
]

const expertiseKeys = ["backend", "devops", "enterprise", "database", "security", "integration"]

const expertiseColors = [
  "from-blue-500 to-blue-600",
  "from-emerald-500 to-teal-600",
  "from-violet-500 to-purple-600",
  "from-amber-500 to-orange-500",
  "from-red-500 to-pink-500",
  "from-indigo-500 to-blue-600",
]

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
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-2">
            {t("about.sectionLabel")}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
            {t("sections.about")}
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="relative pl-5 border-l-2 border-blue-500 space-y-4">
              {["bio1", "bio2", "bio3", "bio4", "bio5"].map((key) => (
                <p
                  key={key}
                  className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]"
                  dangerouslySetInnerHTML={{ __html: t(`about.${key}`) }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: Expertise Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {expertiseKeys.map((key, i) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="group bg-white dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300"
              >
                <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${expertiseColors[i]} text-white mb-3 group-hover:scale-110 transition-transform`}>
                  {expertiseIcons[i]}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                  {t(`about.highlights.${key}.label`)}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t(`about.highlights.${key}.desc`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
