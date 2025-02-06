import type { Metadata } from 'next'
import './globals.css'
import { Footerdemo } from "@/components/ui/footer-section"
import { Inter } from "next/font/google"
import { GradientCursor } from "@/components/ui/gradient-cursor"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { BackToTop } from "@/components/ui/back-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'AI-Powered Solutions | Next Generation Intelligence',
  description: 'Discover cutting-edge AI solutions for your business needs. Featuring intelligent agents, neural networks, and quantum-ready algorithms.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ScrollIndicator />
        <GradientCursor />
        <BackToTop />
        <main>
          {children}
        </main>
        <Footerdemo />
      </body>
    </html>
  )
}
