"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { useState } from "react"

interface SkillItem {
  name: string
  level: "Expert" | "Advanced" | "Intermediate" | "Basic"
}

interface SkillCategory {
  id: string
  label: string
  emoji: string
  color: string
  bgColor: string
  skills: SkillItem[]
}

const levelStyles: Record<string, string> = {
  Expert: "bg-blue-600 text-white",
  Advanced: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Intermediate: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  Basic: "bg-slate-50 text-slate-400 dark:bg-slate-900 dark:text-slate-500",
}

const levelDot: Record<string, string> = {
  Expert: "bg-blue-500",
  Advanced: "bg-blue-400",
  Intermediate: "bg-slate-400",
  Basic: "bg-slate-300",
}

export function Skills() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("backend")

  const skillCategories: SkillCategory[] = [
    {
      id: "backend",
      label: "Backend",
      emoji: "⚙️",
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800/40",
      skills: [
        { name: "PHP", level: "Expert" },
        { name: "CodeIgniter 4", level: "Expert" },
        { name: "Laravel", level: "Advanced" },
        { name: "NestJS", level: "Intermediate" },
        { name: "Node.js", level: "Intermediate" },
        { name: "REST API Design", level: "Expert" },
        { name: "Python", level: "Basic" },
        { name: "RabbitMQ / MQ", level: "Intermediate" },
      ],
    },
    {
      id: "frontend",
      label: "Frontend",
      emoji: "🎨",
      color: "text-violet-600 dark:text-violet-400",
      bgColor: "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800/40",
      skills: [
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Expert" },
        { name: "Vue.js", level: "Advanced" },
        { name: "Nuxt 2/3", level: "Advanced" },
        { name: "React", level: "Intermediate" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML / CSS", level: "Expert" },
      ],
    },
    {
      id: "database",
      label: "Database",
      emoji: "🗄️",
      color: "text-sky-600 dark:text-sky-400",
      bgColor: "bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800/40",
      skills: [
        { name: "SQL Server (MSSQL)", level: "Advanced" },
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Basic" },
        { name: "Redis", level: "Intermediate" },
        { name: "Stored Procedures", level: "Advanced" },
        { name: "Database Architecture", level: "Advanced" },
        { name: "Query Optimization", level: "Intermediate" },
      ],
    },
    {
      id: "devops",
      label: "DevOps",
      emoji: "🚀",
      color: "text-emerald-600 dark:text-emerald-400",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800/40",
      skills: [
        { name: "Jenkins CI/CD", level: "Intermediate" },
        { name: "Docker", level: "Intermediate" },
        { name: "Git / GitLab / GitHub", level: "Expert" },
        { name: "IIS (Windows Server)", level: "Intermediate" },
        { name: "Linux (Ubuntu)", level: "Intermediate" },
        { name: "Cloudflare DNS", level: "Intermediate" },
        { name: "SSL Configuration", level: "Intermediate" },
        // { name: "Nginx", level: "Basic" },
      ],
    },
    {
      id: "tools",
      label: "Tools & Testing",
      emoji: "🔧",
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800/40",
      skills: [
        { name: "OWASP ZAP", level: "Intermediate" },
        { name: "Postman", level: "Advanced" },
        { name: "JMeter", level: "Basic" },
        { name: "Google Analytics", level: "Intermediate" },
        { name: "Matomo", level: "Intermediate" },
        { name: "Figma", level: "Intermediate" },
        { name: "Vercel", level: "Basic" },
        { name: "Photoshop", level: "Intermediate" },
      ],
    },
    {
      id: "ai",
      label: "AI & Productivity",
      emoji: "🤖",
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800/40",
      skills: [
        { name: "ChatGPT", level: "Expert" },
        { name: "Claude", level: "Advanced" },
        { name: "Gemini", level: "Advanced" },
        { name: "GitHub Copilot", level: "Advanced" },
        { name: "Tabnine", level: "Intermediate" },
        { name: "Kiro", level: "Intermediate" },
        { name: "Antigravity", level: "Advanced" },
      ],
    },
  ]

  const activeData = skillCategories.find((c) => c.id === activeCategory)

  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-2">
            Expertise
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
            {t("sections.skills")}
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm border transition-all duration-300
                ${activeCategory === cat.id
                  ? `${cat.bgColor} ${cat.color} shadow-sm scale-105`
                  : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-slate-300"
                }
              `}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Panel */}
        {activeData && (
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white dark:bg-slate-800/60 rounded-3xl border border-slate-100 dark:border-slate-700/50 p-8 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">{activeData.emoji}</span>
              <h3 className={`text-xl font-black ${activeData.color}`}>
                {activeData.label} Skills
              </h3>
              <div className="flex-1 h-px bg-slate-100 dark:bg-slate-700 ml-2" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {activeData.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-700/50 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${levelDot[skill.level]}`} />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${levelStyles[skill.level]}`}>
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Level:</span>
              {Object.entries(levelStyles).map(([level, style]) => (
                <div key={level} className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${levelDot[level]}`} />
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}
