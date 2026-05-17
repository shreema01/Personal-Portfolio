import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Shreema Dey Purba | Web Developer",
  description:
    "Junior Web Developer from India specializing in modern web development with React, Next.js, and more. Computer Engineering student at RK University.",
  keywords: [
    "Shreema Dey Purba",
    "Web Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "India",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased bg-background",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
    </html>
  )
}
