"use client";

import Link from "next/link"
import { Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import { Suspense } from "react"

const Connect = dynamic(() => import('@/components/Connect').then(mod => mod.Connect), { ssr: false })
const HeroGeometric = dynamic(() => import('@/components/ui/shape-landing-hero').then(mod => mod.HeroGeometric), { ssr: false })
const Features = dynamic(() => import('@/components/Features'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[800px] flex items-center justify-center">
      <div className="animate-pulse text-white/50">Loading...</div>
    </div>
  )
})

const LoadingFallback = () => (
  <div className="w-full h-[800px] flex items-center justify-center">
    <div className="animate-pulse text-white/50">Loading...</div>
  </div>
);

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98]
    }
  }
}

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto">
          <nav className="h-[72px] flex items-center">
            <div className="w-[280px] pl-6">
              <Link 
                href="/" 
                className="group flex items-center gap-3 hover:opacity-90 transition-opacity"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  className="w-[26px] h-[26px] group-hover:scale-[0.97] transition-transform"
                >
                  <path 
                    d="M7 8l10 8M7 16l10-8" 
                    strokeWidth={2} 
                    strokeLinecap="round" 
                  />
                </svg>
                <span className="font-semibold text-[18px] tracking-wider text-white leading-none pt-0.5">
                  TAI
                </span>
              </Link>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="flex items-center justify-center gap-16">
                {["AGENTS", "SOLUTIONS", "ABOUT"].map((item) => (
                  <Link 
                    key={item} 
                    href={`/${item.toLowerCase()}`} 
                    className="text-[13px] text-white hover:opacity-80 transition-opacity tracking-[0.2em] font-medium"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-[280px] flex items-center justify-end pr-6 gap-5">
              <Button 
                variant="ghost" 
                size="sm"
                className="h-9 px-4 text-[13px] text-white hover:text-white hover:bg-white/[0.03] transition-all tracking-[0.2em] font-medium"
              >
                SIGN IN
              </Button>
              <Button
                variant="outline"
                className="h-9 px-4 gap-2.5 text-[13px] bg-transparent border-white/[0.15] text-white hover:bg-white hover:text-black transition-all tracking-[0.2em] font-medium"
              >
                <Apple className="w-[15px] h-[15px]" />
                DOWNLOAD
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <Suspense fallback={<LoadingFallback />}>
            <HeroGeometric 
              badge="AI Agent SDK"
              title1="One Solution,"
              title2="Our AI"
            />
          </Suspense>
        </div>

        <div className="relative py-32 overflow-hidden">
          <Suspense fallback={<LoadingFallback />}>
            <Features />
          </Suspense>
        </div>

        <Suspense fallback={<LoadingFallback />}>
          <Connect />
        </Suspense>

        <footer className="bg-black text-white/70 py-16 border-t border-white/10">
          {/* Footer content remains the same */}
        </footer>
      </main>
    </div>
  )
}

