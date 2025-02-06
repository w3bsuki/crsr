import Link from "next/link"
import { Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Connect } from "@/components/Connect"
import { AgentsBento } from "@/components/AgentsBento"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path d="M7 8l10 8M7 16l10-8" strokeWidth={2} strokeLinecap="round" />
              </svg>
              <span className="font-semibold text-lg">CURSOR</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["AGENTS", "SERVICES", "LESSONS", "FAQ"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-sm hover:text-primary transition-colors">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-primary transition-colors">
              SIGN IN
            </Button>
            <Button
              variant="outline"
              className="gap-2 bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              <Apple className="w-4 h-4" />
              DOWNLOAD
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-1 pt-16">
        <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center p-4">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">The AI Code Editor</h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Built to make you extraordinarily productive.
              <br />
              Cursor is the best way to code with AI.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              <Apple className="w-5 h-5" />
              DOWNLOAD FOR MAC
            </Button>
          </div>
        </div>
        <AgentsBento />
        <Connect />
      </main>

      <footer className="bg-black text-white/70 py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Product", items: ["Download", "Pricing", "Security", "Trust"] },
              { title: "Resources", items: ["Agents", "Services", "Lessons", "FAQ"] },
              { title: "Company", items: ["About Us", "Careers", "Press", "Contact"] },
              { title: "Legal", items: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-semibold text-white mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                  <path d="M7 8l10 8M7 16l10-8" strokeWidth={2} strokeLinecap="round" />
                </svg>
                <span className="font-semibold">CURSOR</span>
              </div>
              <p className="text-sm">© {new Date().getFullYear()} Cursor. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

