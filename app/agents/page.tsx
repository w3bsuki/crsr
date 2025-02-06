import { AgentsBento } from "@/components/AgentsBento"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
      <main className="container mx-auto px-4">
        <AgentsBento />
      </main>
    </div>
  )
}

