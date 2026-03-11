"use client"

import { useLanguage } from "@/components/language-provider"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 mt-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Brand */}
          <div>
            <span className="text-lg font-black text-slate-900 dark:text-white">Sorawit Siamhong</span>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{t("footer.tagline")}</p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
            {["about", "projects", "experience", "skills", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="capitalize hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>

          {/* Social & rights */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-3">
              <a href="mailto:nukker.srw@gmail.com" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://github.com/Nuksaker" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Github className="h-4 w-4" />
              </a>
              <a href="https://linkedin.com/in/nukkersrw" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <p className="text-xs text-slate-400 dark:text-slate-600">
              © {currentYear} Sorawit Siamhong · {t("footer.rights")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
