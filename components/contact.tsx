"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Contact() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8" />,
      label: "Email",
      value: "nukker.srw@gmail.com",
      href: "mailto:nukker.srw@gmail.com",
      color: "blue"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      label: t("contact.phone"),
      value: "+66 93-480-2749",
      href: "tel:+66934802749",
      color: "green"
    },
    {
      icon: <Linkedin className="h-8 w-8" />,
      label: "LinkedIn",
      value: "nukkersrw",
      href: "https://linkedin.com/in/nukkersrw",
      color: "indigo"
    },
    {
      icon: <Github className="h-8 w-8" />,
      label: "GitHub",
      value: "Nuksaker",
      href: "https://github.com/Nuksaker",
      color: "slate"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-none shadow-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm group-hover:bg-blue-600 dark:group-hover:bg-blue-600 transition-all duration-500 overflow-hidden relative">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className={`mb-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-700/50 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500 text-blue-600 dark:text-blue-400 group-hover:text-white`}>
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-blue-100 mb-1">
                      {contact.label}
                    </div>
                    <div className="font-bold text-slate-900 dark:text-white group-hover:text-white truncate max-w-full">
                      {contact.value}
                    </div>
                  </div>
                  
                  {/* Subtle Hover Decoration */}
                  <div className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

