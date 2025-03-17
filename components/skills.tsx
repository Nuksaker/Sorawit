"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const { t } = useLanguage()

  const developmentSkills = [
    { name: "PHP", frameworks: [] },
    { name: "Laravel", frameworks: [] },
    { name: "CodeIgniter", frameworks: [] },
    { name: "HTML", frameworks: [] },
    { name: "CSS", frameworks: ["Bootstrap", "Tailwind"] },
    { name: "Node", frameworks: ['EJS'] },
    { name: "JavaScript", frameworks: [] },
    { name: "TypeScript", frameworks: [] },
    { name: "SQL", frameworks: [] },
    { name: "Vue", frameworks: [] },
    { name: "Nuxt", frameworks: [] },
    { name: "React", frameworks: [] },
    { name: "Next", level: "Basic", frameworks: [] },
    { name: "GraphQL", level: "Basic", frameworks: [] },
    { name: "Python", level: "Basic", frameworks: [] },
  ]

  const otherSkills = [
    "Git",
    "GitLab",
    "GitHub",
    "Git Control",
    "IIS",
    "Jenkins",
    "Docker",
    "Photoshop",
    "Figma",
    "Owarp zap",
    "JMeter",
    "Google Analytics",
    "Matomo Analytics",
    "Cloudflare (Basic)",
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

        <Tabs defaultValue="development" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="development">{t("skills.tabs.development")}</TabsTrigger>
            <TabsTrigger value="other">{t("skills.tabs.other")}</TabsTrigger>
          </TabsList>

          <TabsContent value="development">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {developmentSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-2 text-base bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
                      >
                        {skill.name}
                        {skill.level && <span className="ml-1 text-xs opacity-70">({skill.level})</span>}
                        {skill.frameworks && skill.frameworks.length > 0 && (
                          <span className="ml-1 text-xs opacity-70">({skill.frameworks.join(", ")})</span>
                        )}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="other">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {otherSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="outline"
                        className="px-3 py-2 text-base hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  )
}

