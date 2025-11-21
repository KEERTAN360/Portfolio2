import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" })

export const metadata: Metadata = {
  title: "Keertan Vijay | Marketing Freelancer",
  description: "Strategic marketing solutions for startups and established brands.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-slate-50 text-slate-900 selection:bg-red-100 selection:text-red-900`}
      >
        <Navbar />
        <main className="min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-7xl mx-auto">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
