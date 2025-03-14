"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-provider"
import {
  MoonIcon,
  SunIcon,
  GlobeIcon,
  BriefcaseIcon,
  WrenchIcon,
  GraduationCapIcon,
  PhoneIcon,
  MenuIcon,
  XIcon,
  HomeIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const { setTheme, theme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "th" : "en")
  }

  const navItems = [
    {
      href: "#",
      label: t("nav.home"),
      icon: <HomeIcon className="h-5 w-5" />,
    },
    {
      href: "#experience",
      label: t("nav.experience"),
      icon: <BriefcaseIcon className="h-5 w-5" />,
    },
    {
      href: "#skills",
      label: t("nav.skills"),
      icon: <WrenchIcon className="h-5 w-5" />,
    },
    {
      href: "#education",
      label: t("nav.education"),
      icon: <GraduationCapIcon className="h-5 w-5" />,
    },
    {
      href: "#contact",
      label: t("nav.contact"),
      icon: <PhoneIcon className="h-5 w-5" />,
    },
  ]

  return (
    <>
      {/* Top Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-slate-900/80" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-blue-600 dark:text-blue-400"
            >
              Nukker
            </motion.div>

            {/* Desktop Controls */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleLanguage}>
                <GlobeIcon className="h-5 w-5" />
                <span className="ml-2 text-sm font-medium">{language.toUpperCase()}</span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>{t("theme.light")}</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>{t("theme.dark")}</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>{t("theme.system")}</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4"
            >
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full">{item.icon}</div>
                    {item.label}
                  </a>
                ))}

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                  <Button variant="ghost" size="sm" onClick={toggleLanguage}>
                    <GlobeIcon className="h-4 w-4 mr-2" />
                    {language === "en" ? "English" : "ไทย"}
                  </Button>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="icon">
                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => setTheme("light")}>{t("theme.light")}</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>{t("theme.dark")}</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>{t("theme.system")}</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      {/* Side Navigation (Desktop) */}
      <TooltipProvider>
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6"
        >
          {navItems.map((item, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a
                  href={item.href}
                  className="bg-white dark:bg-slate-800 w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
                >
                  <div className="text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {item.icon}
                  </div>
                </a>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-blue-600 text-white border-none">
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.nav>
      </TooltipProvider>
    </>
  )
}

