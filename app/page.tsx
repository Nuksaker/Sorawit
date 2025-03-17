"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { AdditionalSkills } from "@/components/additional-skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Loader } from "@/components/loader"
import { useEffect, useState } from "react"
import { BackToTop } from "@/components/include/back-to-top"
import { Projects } from "@/components/project"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [loading, setLoading] = useState(true)

  const handleLoaderComplete = () => {
    setLoading(false)
  }

  return (
    <>
      <AnimatePresence>{loading && <Loader onComplete={handleLoaderComplete} />}</AnimatePresence>

      <motion.main
        className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-slate-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <div className="container mx-auto px-4 py-8 md:pl-20">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <AdditionalSkills />
          <Contact />
        </div>
        <Footer />
        <BackToTop />
      </motion.main>
    </>
  )
}

