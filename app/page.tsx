"use client";

import Link from "next/link"
import { Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import dynamic from 'next/dynamic'
import { MobileNav } from "@/components/ui/mobile-nav"

const Connect = dynamic(() => import('@/components/Connect').then(mod => mod.Connect), { ssr: false })
const Hero = dynamic(() => import('@/components/ui/hero-section').then(mod => mod.Hero), { 
  ssr: false,
  loading: () => <LoadingFallback height="100vh" />
})
const FeatureSections = dynamic(() => import('@/components/ui/feature-sections').then(mod => mod.FeatureSections), { 
  ssr: false,
  loading: () => <LoadingFallback />
})
const AgentsSection = dynamic(() => import('@/components/ui/agents-section').then(mod => mod.AgentsSection), {
  ssr: false,
  loading: () => <LoadingFallback />
})
const SolutionsSection = dynamic(() => import('@/components/ui/SolutionsSection').then(mod => mod.default), {
  ssr: false,
  loading: () => <LoadingFallback />
})
const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs').then(mod => mod.default), {
  ssr: false,
  loading: () => <LoadingFallback />
})
const UseCases = dynamic(() => import('@/components/UseCases').then(mod => mod.default), {
  ssr: false,
  loading: () => <LoadingFallback />
})
const Integrations = dynamic(() => import('@/components/Integrations').then(mod => mod.default), {
  ssr: false,
  loading: () => <LoadingFallback />
})
const Testimonials = dynamic(() => import('@/components/Testimonials').then(mod => mod.default), {
  ssr: false,
  loading: () => <LoadingFallback />
})

const LoadingFallback = ({ height = "600px" }: { height?: string }) => (
  <div className={`w-full flex items-center justify-center`} style={{ height }}>
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
          <nav className="h-[72px] flex items-center px-4 md:px-6">
            <div className="flex-1 md:w-[280px]">
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center justify-center gap-16">
                {["SOLUTIONS", "USE CASES", "ABOUT"].map((item) => (
                  <Link 
                    key={item} 
                    href={`/${item.toLowerCase().replace(" ", "-")}`} 
                    className="text-[13px] text-white hover:opacity-80 transition-opacity tracking-[0.2em] font-medium"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end flex-1 md:w-[280px] gap-2 md:gap-5">
              {/* Desktop Buttons */}
              <div className="hidden md:flex items-center gap-5">
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
                  GET STARTED
                </Button>
              </div>

              {/* Mobile Navigation */}
              <MobileNav />
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
        <FeatureSections />
        <AgentsSection />
        <SolutionsSection />
        <WhyChooseUs />
        <UseCases />
        <Integrations />
        <Testimonials />
        <Connect />
      </main>

      <footer className="bg-black text-white/70 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">AI Development</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Machine Learning</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Neural Networks</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Enterprise AI</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Status</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm">
            <p>&copy; 2024 TAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

