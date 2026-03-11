"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactItems = [
  {
    key: "email",
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "nukker.srw@gmail.com",
    href: "mailto:nukker.srw@gmail.com",
    ctaKey: "contact.sendEmail",
    color: "blue",
  },
  {
    key: "phone",
    icon: <Phone className="h-5 w-5" />,
    labelKey: "contact.phone",
    value: "+66 93-480-2749",
    href: "tel:+66934802749",
    ctaKey: "contact.callNow",
    color: "emerald",
  },
  {
    key: "linkedin",
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/nukkersrw",
    href: "https://linkedin.com/in/nukkersrw",
    ctaKey: "contact.connect",
    color: "indigo",
  },
  {
    key: "github",
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    value: "github.com/Nuksaker",
    href: "https://github.com/Nuksaker",
    ctaKey: "contact.viewCode",
    color: "slate",
  },
] as const

const colorMap = {
  blue: {
    bg: "hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-blue-500/10",
    icon: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400",
    cta: "text-blue-600 dark:text-blue-400",
  },
  emerald: {
    bg: "hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-emerald-500/10",
    icon: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400",
    cta: "text-emerald-600 dark:text-emerald-400",
  },
  indigo: {
    bg: "hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-indigo-500/10",
    icon: "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400",
    cta: "text-indigo-600 dark:text-indigo-400",
  },
  slate: {
    bg: "hover:border-slate-400 dark:hover:border-slate-500 hover:shadow-slate-500/10",
    icon: "bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300",
    cta: "text-slate-600 dark:text-slate-400",
  },
}

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-2">
            {t("contact.sectionLabel")}
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">
            {t("sections.contact")}
          </h2>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-sm leading-relaxed">
            {t("contact.description")}
          </p>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center mb-8 shadow-xl shadow-blue-500/20"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
            {t("contact.ctaTitle")}
          </h3>
          <p className="text-blue-100 mb-6 text-sm max-w-md mx-auto">
            {t("contact.ctaDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button
              className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 h-11 shadow-none"
              asChild
            >
              <a href="mailto:nukker.srw@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                nukker.srw@gmail.com
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-white/70 bg-white/15 text-white hover:bg-white/25 font-semibold px-6 h-11"
              asChild
            >
              <a href="https://linkedin.com/in/nukkersrw" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactItems.map((contact, index) => {
            const colors = colorMap[contact.color]
            return (
              <motion.a
                key={contact.key}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`group bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 transition-all duration-300 hover:shadow-lg ${colors.bg}`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${colors.icon}`}>
                  {contact.icon}
                </div>
                <div className="mb-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                    {"labelKey" in contact ? t(contact.labelKey) : contact.label}
                  </div>
                  <div className="font-semibold text-slate-900 dark:text-white text-sm truncate">
                    {contact.value}
                  </div>
                </div>
                <div className={`text-xs font-bold flex items-center gap-1 transition-colors ${colors.cta}`}>
                  {t(contact.ctaKey)}
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
