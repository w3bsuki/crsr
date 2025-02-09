import type { Metadata } from 'next'
import './globals.css'
import { Footerdemo } from "@/components/ui/footer-section"
import { Inter } from "next/font/google"
import { GradientCursor } from "@/components/ui/gradient-cursor"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"
import { BackToTop } from "@/components/ui/back-to-top"
import { Providers } from './providers'
import { ThemeToggle } from '@/components/ui/theme-toggle'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Cursor - The AI-Powered IDE',
  description: 'Experience the future of coding with Cursor, the AI-powered IDE that enhances your development workflow.',
  keywords: ['IDE', 'AI', 'Development', 'Coding', 'Programming'],
  authors: [{ name: 'Cursor Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-screen antialiased')}>
        <Providers>
          <ScrollProgress />
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
          <BackToTop />
        </Providers>
      </body>
    </html>
  )
}
