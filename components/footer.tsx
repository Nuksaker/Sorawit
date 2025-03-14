"use client"

import { useLanguage } from "./language-provider"
import { motion } from "framer-motion"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold text-blue-400">Nukker</div>
            <p className="text-slate-400 mt-2">{t("footer.tagline")}</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-400">&copy; {currentYear} Sorawit Siamhong</p>
            <p className="text-slate-500 text-sm mt-1">{t("footer.rights")}</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

