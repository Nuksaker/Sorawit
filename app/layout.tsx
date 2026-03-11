import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_Thai } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { SpeedInsights } from '@vercel/speed-insights/next'

// กำหนดค่าฟอนต์ Noto Sans Thai
const notoSansThai = Noto_Sans_Thai({ 
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-thai',
})

export const metadata: Metadata = {
  title: "Sorawit Siamhong | Full-Stack Developer · Gro · POS · Bangkok",
  description: "Full-Stack Developer with 3+ years building enterprise web applications, POS systems, and government portals. Specialist in backend architecture, REST APIs, DevOps (Jenkins CI/CD), and SQL Server. Based in Bangkok, Thailand.",
  keywords: ["Full-Stack Developer", "Backend Developer", "PHP", "Vue", "Nuxt", "TypeScript", "SQL Server", "Jenkins CI/CD", "POS System", "Bangkok", "Thailand"],
  openGraph: {
    title: "Sorawit Siamhong | Full-Stack Developer",
    description: "3+ years building enterprise web applications, POS systems, and government portals.",
    url: "https://sorawit.vercel.app",
    siteName: "Sorawit Siamhong Portfolio",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={notoSansThai.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
