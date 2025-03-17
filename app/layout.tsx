import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_Thai } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"

// กำหนดค่าฟอนต์ Noto Sans Thai
const notoSansThai = Noto_Sans_Thai({ 
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-noto-sans-thai',
})

export const metadata: Metadata = {
  title: "Sorawit Siamhong | Resume",
  description: "Full Stack Developer Resume - Sorawit Siamhong (Nukker)",
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
      </body>
    </html>
  )
}
