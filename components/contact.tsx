"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "nukker.srw@gmail.com",
      href: "mailto:nukker.srw@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: t("contact.phone"),
      value: "+66 93-480-2749",
      href: "tel:+66934802749",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/nukkersrw",
      href: "https://linkedin.com/in/nukkersrw",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/Nuksaker",
      href: "https://github.com/Nuksaker",
    },
  ]

  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white">
          <span className="inline-block border-b-4 border-blue-500 pb-2">{t("sections.contact")}</span>
        </h2>

        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">{contact.icon}</div>
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{contact.label}</div>
                    <div className="font-medium text-slate-900 dark:text-white">{contact.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

