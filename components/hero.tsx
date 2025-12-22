"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const { t, language } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
            <motion.span 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.5 }}
               className="text-blue-600 dark:text-blue-400 block text-2xl md:text-3xl font-bold mb-2 uppercase tracking-widest"
            >
              {t("hero.greeting")}
            </motion.span>
            {t("hero.name")}
          </h1>
          <div className="h-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {t("hero.title")}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">{t("hero.description")}</p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <a
                href={`/files/${language}/CV.pdf`}
                download
                className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                {t("hero.download")}
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a href="mailto:nukker.srw@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                {t("hero.contact")}
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/Nuksaker" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/nukkersrw" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2 relative flex justify-center"
        >
          {/* Decorative Backdrops */}
          <div className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -inset-4 border border-dashed border-blue-200 dark:border-blue-800 rounded-full"
          />

          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-96 md:h-96 rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl skew-y-3"
          >
            <Image
              src="/images/profiles/IMG_Profile.png"
              alt="Sorawit Siamhong"
              fill
              className="object-cover scale-110 -rotate-3"
              priority
            />
          </motion.div>
          
          {/* Floating Badges */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 dark:border-slate-700"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
            <span className="text-sm font-bold uppercase tracking-tighter">{t("hero.openToWork")}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

