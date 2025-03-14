import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { AdditionalSkills } from "@/components/additional-skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-950 dark:to-slate-900">
      <Header />
      <div className="container mx-auto px-4 py-8 md:pl-20">
        <Hero />
        <Experience />
        <Skills />
        <Education />
        <AdditionalSkills />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

