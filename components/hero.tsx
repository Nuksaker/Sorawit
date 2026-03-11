"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail, ArrowRight, Terminal, Server, Code2 } from "lucide-react"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Hero() {
  const { t, language } = useLanguage()

  const stats = [
    { value: t("hero.yearsExp"), label: t("hero.yearsExpLabel") },
    { value: t("hero.projectsCount"), label: t("hero.projectsLabel") },
    { value: t("hero.techStackCount"), label: t("hero.techStackLabel") },
  ]

  const floatingTags = [
    { icon: <Server className="w-3.5 h-3.5" />, labelKey: "hero.floatingTags.tag1" },
    { icon: <Code2 className="w-3.5 h-3.5" />, labelKey: "hero.floatingTags.tag2" },
    { icon: <Terminal className="w-3.5 h-3.5" />, labelKey: "hero.floatingTags.tag3" },
  ]

  return (
    <section className="relative py-20 md:py-28 overflow-visible">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/40 mb-6"
          >
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
              {t("hero.openToWork")}
            </span>
          </motion.div>

          {/* Greeting & Name */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] mb-2"
          >
            {t("hero.greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-3 leading-[1.05] tracking-tight"
          >
            {t("hero.name")}
          </motion.h1>

          {/* Title + Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              {t("hero.title")}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-base font-medium text-slate-400 dark:text-slate-500 mb-6 tracking-wide"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-600 dark:text-slate-400 mb-8 text-base leading-relaxed max-w-xl"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 h-11 font-semibold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all cursor-pointer">
                  <Download className="h-4 w-4 mr-2" />
                  {t("hero.download")}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
                <DropdownMenuItem asChild className="cursor-pointer font-medium hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <a href="/files/en/CV.pdf" download>
                    {t("hero.downloadEn")}
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer font-medium hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <a href="/files/th/CV.pdf" download>
                    {t("hero.downloadTh")}
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="outline"
              className="h-11 px-6 font-semibold border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
              asChild
            >
              <a href="mailto:nukker.srw@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {t("hero.contact")}
              </a>
            </Button>

            <div className="flex gap-2 items-center">
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
                asChild
              >
                <a href="https://github.com/Nuksaker" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-11 w-11 rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors"
                asChild
              >
                <a href="https://linkedin.com/in/nukkersrw" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-8 border-t border-slate-100 dark:border-slate-800 pt-8"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</div>
                <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5 whitespace-nowrap">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT: Profile Image
            NOTE: overflow-visible so floating tags are not clipped */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 lg:order-2 relative flex justify-center overflow-visible"
        >
          {/* Glow */}
          <div className="absolute inset-8 bg-gradient-to-br from-blue-500/20 to-indigo-500/10 rounded-[2.5rem] blur-2xl" />

          {/* Main image */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-[2.5rem] overflow-hidden border-4 border-white/80 dark:border-slate-700/80 shadow-2xl"
          >
            <Image
              src="/images/profiles/IMG_Profile.png"
              alt={t("hero.name")}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/20" />
          </motion.div>

          {/* Floating tech tags — positioned relative to the outer div, NOT the image */}
          {floatingTags.map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, i % 2 === 0 ? -8 : 8, 0],
              }}
              transition={{
                opacity: { delay: 0.5 + i * 0.15, duration: 0.4 },
                scale: { delay: 0.5 + i * 0.15, duration: 0.4 },
                y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
              }}
              className={`absolute z-20 flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap ${
                i === 0 ? "-left-6 top-10" :
                i === 1 ? "-right-8 top-1/3" :
                "-left-6 bottom-14"
              }`}
            >
              <span className="text-blue-500">{tag.icon}</span>
              {t(tag.labelKey)}
            </motion.div>
          ))}

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { delay: 0.8, duration: 0.4 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute z-20 -bottom-4 right-2 bg-white dark:bg-slate-800 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 border border-slate-100 dark:border-slate-700 whitespace-nowrap"
          >
            <span className="text-lg">📍</span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{t("hero.location")}</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="flex justify-center mt-20"
      >
        <a
          href="#projects"
          className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600 hover:text-blue-500 dark:hover:text-blue-400 transition-colors group"
        >
          <span className="text-xs font-semibold uppercase tracking-widest">{t("hero.scrollHint")}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight className="h-4 w-4 rotate-90 group-hover:text-blue-500 transition-colors" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
