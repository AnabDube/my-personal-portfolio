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
  title: "Justin O. Mogire - Data Analyst & AI Researcher",
  description:
    "Turning data into decisions through AI, statistics, and visualization. Portfolio of Justin O. Mogire, Data Analyst, AI Researcher, and Biostatistics Graduate Student.",
  keywords: ["Data Analyst", "AI Researcher", "Biostatistics", "Machine Learning", "Data Visualization", "Python", "R"],
  authors: [{ name: "Justin O. Mogire" }],
  creator: "Justin O. Mogire",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justinmogire.vercel.app",
    title: "Justin O. Mogire - Data Analyst & AI Researcher",
    description: "Turning data into decisions through AI, statistics, and visualization.",
    siteName: "Justin Oyugi Mogire Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin O. Mogire - Data Analyst & AI Researcher",
    description: "Turning data into decisions through AI, statistics, and visualization.",
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
