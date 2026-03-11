"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, ChevronRight, Server, GitBranch, Layers, Zap, Globe } from "lucide-react"
import Image from "next/image"
import { projects as projectsData } from "@/data/projects"

// Static case study config — only IDs, emoji, category, techStack
// All text content comes from translations
const caseStudyConfig = [
  {
    id: "pos",
    category: "Enterprise" as const,
    emoji: "🏪",
    techStack: ["CodeIgniter 3", "HMVC", "PHP", "SQL Server", "Stored Procedures", "Next.js", "NestJS", "TypeScript", "Bootstrap"],
    liveUrl: undefined as string | undefined,
  },
  {
    id: "mqDashboard",
    category: "DevOps" as const,
    emoji: "📡",
    techStack: ["Python", "Laravel", "PHP", "RabbitMQ", "REST API", "JavaScript", "Tailwind CSS"],
    liveUrl: undefined as string | undefined,
  },
  {
    id: "government",
    category: "Government" as const,
    emoji: "🏛️",
    techStack: ["Nuxt 2/3", "TypeScript", "Vue.js", "CodeIgniter 4", "PHP", "SQL Server","MySQL", "Google/Matomo Analytics", "Redis", "IIS", "Windows Server", "Jenkins", "Cloudflare", "OWASP ZAP"],
    // liveUrl: "https://www.ect.go.th",
    liveUrl: undefined as string | undefined,
  },
]

const categoryColors: Record<string, string> = {
  Enterprise: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  DevOps: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  Government: "bg-violet-50 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 border-violet-200 dark:border-violet-800",
  Architecture: "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800",
}

export function Projects() {
  const { t, language } = useLanguage()
  const [activeCase, setActiveCase] = useState<string | null>(null)

  const currentProjects = projectsData[language] ?? projectsData["en"]
  // Filter out internal projects without public URLs
  const publicProjects = currentProjects.filter((p) => p.url && p.url !== "-")

  const getImpactItems = (id: string): string[] => {
    const items: string[] = []
    for (let i = 1; i <= 5; i++) {
      const val = t(`projects.caseStudies.${id}.impact.${i}`)
      // Only include if the key resolved (not returning the key itself)
      if (val && !val.startsWith("projects.caseStudies")) items.push(val)
    }
    return items
  }

  const activeCaseConfig = caseStudyConfig.find((c) => c.id === activeCase)

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* ── SECTION 1: Case Studies ── */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-2">
            {t("projects.sectionLabel")}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
            {t("sections.projects")}
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            {t("projects.sectionDesc")}
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          {caseStudyConfig.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              onClick={() => setActiveCase(activeCase === cs.id ? null : cs.id)}
              className={`relative cursor-pointer rounded-2xl border p-5 transition-all duration-300 overflow-hidden group ${
                activeCase === cs.id
                  ? "border-blue-300 dark:border-blue-700 bg-white dark:bg-slate-800 shadow-xl shadow-blue-500/10"
                  : "border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/50 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-lg"
              }`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full" />

              <div className="flex items-start gap-3 mb-3">
                <div className="text-2xl">{cs.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-bold ${categoryColors[cs.category]}`}>
                      {t(`projects.categories.${cs.category}`)}
                    </span>
                    {/* <span className="text-xs text-slate-400">{t(`projects.caseStudies.${cs.id}.period`)}</span> */}
                  </div>
                  <h3 className="font-black text-slate-900 dark:text-white text-base leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {t(`projects.caseStudies.${cs.id}.title`)}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {t(`projects.caseStudies.${cs.id}.subtitle`)}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: activeCase === cs.id ? 90 : 0 }}
                  className="text-slate-400 shrink-0 mt-1"
                >
                  <ChevronRight className="h-4 w-4" />
                </motion.div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-3">
                {t(`projects.caseStudies.${cs.id}.problem`)}
              </p>

              <div className="flex flex-wrap gap-1">
                {cs.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-mono"
                  >
                    {tech}
                  </span>
                ))}
                {cs.techStack.length > 4 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-400 font-medium">
                    +{cs.techStack.length - 4}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expanded Case Study Detail Panel */}
        <AnimatePresence>
          {activeCase && activeCaseConfig && (
            <motion.div
              key={activeCase}
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden mb-12"
            >
              <div className="bg-white dark:bg-slate-800 rounded-3xl border border-blue-200 dark:border-blue-800/50 shadow-xl shadow-blue-500/5 p-7">
                <div className="flex items-center gap-3 mb-7 flex-wrap">
                  <span className="text-3xl">{activeCaseConfig.emoji}</span>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">
                      {t(`projects.caseStudies.${activeCase}.title`)}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                      {t(`projects.caseStudies.${activeCase}.subtitle`)}
                    </p>
                  </div>
                  {activeCaseConfig.liveUrl && (
                    <a
                      href={activeCaseConfig.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-auto flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      {t("projects.viewLive")}
                    </a>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-red-50 dark:bg-red-900/20">
                        <Layers className="h-4 w-4 text-red-500" />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wide">
                        {t("projects.problem")}
                      </h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {t(`projects.caseStudies.${activeCase}.problem`)}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                        <Server className="h-4 w-4 text-blue-500" />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wide">
                        {t("projects.solution")}
                      </h4>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {t(`projects.caseStudies.${activeCase}.solution`)}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                        <Zap className="h-4 w-4 text-emerald-500" />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs uppercase tracking-wide">
                        {t("projects.impact")}
                      </h4>
                    </div>
                    <ul className="space-y-2">
                      {getImpactItems(activeCase).map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0 mt-1.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-2 mb-3">
                    <GitBranch className="h-4 w-4 text-slate-400" />
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {t("projects.fullTechStack")}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {activeCaseConfig.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── SECTION 2: Client Projects (from projects.ts) ── */}
        <div className="text-center mb-8">
          <p className="text-sm font-bold text-violet-600 dark:text-violet-400 uppercase tracking-[0.2em] mb-2">
            {t("projects.clientSectionLabel")}
          </p>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">
            {t("sections.clientProjects")}
          </h3>
          <div className="w-12 h-1 bg-violet-500 rounded-full mx-auto mb-3" />
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-lg mx-auto">
            {t("projects.clientSectionDesc")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {publicProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-lg transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-40 overflow-hidden bg-slate-100 dark:bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none"
                  }}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-white text-xs font-bold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-white/30 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Globe className="h-3.5 w-3.5" />
                    {t("projects.visitSite")}
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm leading-tight line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h4>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech: string) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Role */}
                {project.role && (
                  <p className="text-[11px] text-slate-400 mt-3 font-medium truncate">
                    🎯 {project.role}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}