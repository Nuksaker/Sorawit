"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export function Skills() {
  const { t } = useLanguage()

  const developmentSkills = [
    {
      name: "PHP",
      frameworks: ["Laravel", "CodeIgniter"],
      icon: "/icons/php.svg",
    },
    {
      name: "HTML",
      frameworks: [],
      icon: "/icons/html5.svg",
    },
    {
      name: "CSS",
      frameworks: ["Bootstrap", "Tailwind"],
      icon: "/icons/css3.svg",
    },
    {
      name: "JavaScript",
      frameworks: ["jQuery"],
      icon: "/icons/javascript.svg",
    },
    {
      name: "Node",
      frameworks: [],
      icon: "/icons/nodejs.svg",
    },
    {
      name: "TypeScript",
      frameworks: [],
      icon: "/icons/typescript.svg",
    },
    {
      name: "SQL",
      frameworks: [],
      icon: "/icons/database.svg",
    },
    {
      name: "Vue",
      frameworks: ["Nuxt"],
      icon: "/icons/vue.svg",
    },
    {
      name: "React",
      frameworks: [],
      icon: "/icons/react.svg",
    },
    {
      name: "GraphQL",
      level: "Basic",
      frameworks: [],
      icon: "/icons/graphql.svg",
    },
    {
      name: "Python",
      level: "Basic",
      frameworks: [],
      icon: "/icons/python.svg",
    },
  ]

  const otherSkills = [
    { name: "Git, Git Control", icon: "/icons/git.svg" },
    { name: "GitLab", icon: "/icons/gitlab.svg" },
    { name: "GitHub", icon: "/icons/github.svg" },
    { name: "IIS", icon: "/icons/server.svg" },
    { name: "Jenkins", icon: "/icons/jenkins.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "Photoshop", icon: "/icons/photoshop.svg" },
    { name: "Figma", icon: "/icons/figma.svg" },
    { name: "Owarp zap", icon: "/icons/zap.svg" },
    { name: "JMeter", icon: "/icons/jmeter.svg" },
    { name: "Google Analytics", icon: "/icons/analytics.svg" },
    { name: "Matomo Analytics", icon: "/icons/analytics.svg" },
    { name: "Cloudflare (Basic)", icon: "/icons/cloudflare.svg" },
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
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {developmentSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full p-3">
                        <Image
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="object-contain"
                          onError={(e) => {
                            // Fallback to placeholder if icon fails to load
                            e.currentTarget.src = "/placeholder.svg?height=40&width=40"
                          }}
                        />
                      </div>
                      <div className="text-center">
                        <div className="font-medium text-slate-900 dark:text-white">{skill.name}</div>
                        {skill.level && (
                          <span className="text-xs text-slate-500 dark:text-slate-400">({skill.level})</span>
                        )}
                        {skill.frameworks && skill.frameworks.length > 0 && (
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {skill.frameworks.join(", ")}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="other">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {otherSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center"
                    >
                      <div className="w-16 h-16 mb-3 flex items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-full p-3">
                        <Image
                          src={skill.icon || "/placeholder.svg"}
                          alt={skill.name}
                          width={40}
                          height={40}
                          className="object-contain"
                          onError={(e) => {
                            // Fallback to placeholder if icon fails to load
                            e.currentTarget.src = "/placeholder.svg?height=40&width=40"
                          }}
                        />
                      </div>
                      <div className="text-center font-medium text-slate-900 dark:text-white">{skill.name}</div>
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

