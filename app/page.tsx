"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/project"
import { Education } from "@/components/education"
import { AdditionalSkills } from "@/components/additional-skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Loader } from "@/components/loader"
import { useEffect, useState } from "react"
import { BackToTop } from "@/components/include/back-to-top"
import { AnimatePresence, motion } from "framer-motion"

export default function Home() {
  const [loading, setLoading] = useState(true)

  const handleLoaderComplete = () => {
    setLoading(false)
  }

  return (
    <>
      <AnimatePresence>{loading && <Loader onComplete={handleLoaderComplete} />}</AnimatePresence>

      <motion.main
        className="min-h-screen bg-slate-50 dark:bg-slate-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="md:pl-4">
            <Hero />
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent my-4" />
            <About />
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent my-4" />
            <Projects />
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent my-4" />
            <Experience />
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent my-4" />
            <Skills />
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent my-4" />
            <Education />
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent my-4" />
            <AdditionalSkills />
            <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent my-4" />
            <Contact />
          </div>
        </div>
        <Footer />
        <BackToTop />
      </motion.main>
    </>
  )
}
