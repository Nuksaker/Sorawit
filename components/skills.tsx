"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "PHP", level: "Expert" },
        { name: "JavaScript", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Python", level: "Basic" },
        { name: "SQL", level: "Advanced" },
        { name: "HTML", level: "Expert" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Laravel", level: "Expert" },
        { name: "CodeIgniter", level: "Advanced" },
        { name: "React", level: "Intermediate" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Vue", level: "Advanced" },
        { name: "Nuxt", level: "Advanced" },
        { name: "Node.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Bootstrap", level: "Expert" },
        { name: "EJS", level: "Intermediate" },
        { name: "GraphQL", level: "Basic" },
        { name: "REST API", level: "Expert" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: "Intermediate" },
        { name: "Git", level: "Expert" },
        { name: "Jenkins CI/CD", level: "Intermediate" },
        { name: "IIS", level: "Intermediate" },
        { name: "Cloudflare", level: "Basic" },
        { name: "Postman", level: "Intermediate" },
      ]
    },
    {
      title: "Design, Analytics & Testing",
      skills: [
        { name: "Figma", level: "Intermediate" },
        { name: "Photoshop", level: "Intermediate" },
        { name: "Google Analytics", level: "Intermediate" },
        { name: "Matomo", level: "Intermediate" },
        { name: "JMeter", level: "Basic" },
        { name: "OWASP ZAP", level: "Basic" },
      ]
    },
    {
      title: "Platforms & Services",
      skills: [
        { name: "Vercel", level: "Basic" },
        { name: "Google Cloud Console", level: "Basic" },
        { name: "Line Developer Console", level: "Basic" },
        { name: "GitLab", level: "Intermediate" },
        { name: "GitHub", level: "Intermediate" },
      ]
    }
  ]

  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          <span className="inline-block border-b-4 border-blue-500 pb-2">{t("sections.skills")}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-md bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-6 bg-blue-500 rounded-full" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: skillIndex * 0.03 }}
                        viewport={{ once: true }}
                      >
                        <Badge
                          variant="secondary"
                          className={`
                            px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                            ${skill.level === "Expert" ? "bg-blue-600 text-white hover:bg-blue-700" :
                              skill.level === "Advanced" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200" :
                                "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"}
                          `}
                        >
                          {skill.name}
                          <span className="ml-1.5 text-[10px] uppercase tracking-tighter opacity-60">
                            {skill.level}
                          </span>
                        </Badge>
                      </motion.div>
                    ))}
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

