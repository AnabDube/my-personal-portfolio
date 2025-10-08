import type React from "react"
import type { Metadata } from "next"
import { Geist, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Anab Ali Dube - Data Analyst & AI Researcher",
  description:
    "I turn raw data into actionable insights through AI, analytics, and visualization. Portfolio of Anab Ali Dube, Data Analyst and AI Researcher specializing in Excel, Power BI, Python, SQL, and AI.",
  keywords: ["Data Analyst", "AI Researcher", "Excel", "Power BI", "Python", "SQL", "Data Visualization", "Machine Learning", "Statistics"],
  authors: [{ name: "Anab Ali Dube" }],
  creator: "Anab Ali Dube",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anabdube.vercel.app",
    title: "Anab Ali Dube - Data Analyst & AI Researcher",
    description: "I turn raw data into actionable insights through AI, analytics, and visualization.",
    siteName: "Anab Ali Dube Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anab Ali Dube - Data Analyst & AI Researcher",
    description: "I turn raw data into actionable insights through AI, analytics, and visualization.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} antialiased`} suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
