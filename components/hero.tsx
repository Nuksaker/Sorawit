"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="text-blue-600 dark:text-blue-400">{t("hero.greeting")}</span>
            <br />
            {t("hero.name")}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-300 mb-6">
            {t("hero.title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">{t("hero.description")}</p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <a
                href="/files/CV_Mr_Sorawit_Siamhong.pdf"
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/Vector4.png)' }} 
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 border-b-4 border-blue-200 dark:border-blue-100 overflow-hidden">
            <Image
              src="images\profiles\IMG_Profile.png?height=320&width=320"
              alt="Sorawit Siamhong"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

