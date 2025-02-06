"use client"

import { memo } from "react"
import { 
  Cpu,
  Zap,
  Brain,
  BarChart,
  Lock,
  LineChart,
  Network,
  Layers,
  Sparkles,
  Workflow,
  Building2,
  Database,
  Bot,
  MessageSquare,
  Check
} from "lucide-react"
import { GradientButton } from "./ui/gradient-button"

// Define feature type
interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  benefits: string[];
  category: "Performance" | "Security" | "Intelligence" | "Enterprise Solutions" | "AI Agents";
}

// Memoized card component for better performance
const SolutionCard = memo(function SolutionCard({ feature }: { feature: Feature }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors duration-300">
      <div className={`absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-br ${feature.gradient} transition-opacity duration-300 group-hover:opacity-5`} />
      
      <div className="relative">
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-2 rounded-xl bg-gradient-to-br ${feature.gradient}`}>
            <feature.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="font-semibold text-lg text-white/90">{feature.title}</h3>
        </div>
        
        <p className="text-white/60 mb-6">{feature.description}</p>
        
        <ul className="space-y-2">
          {feature.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center text-sm text-white/50">
              <Check className="w-4 h-4 mr-2 text-emerald-400" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

const AgentCard = memo(function AgentCard({ feature }: { feature: Feature }) {
  return (
    <div className="group relative">
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-purple-500/50 opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100" />
      
      <div className="relative rounded-2xl border border-white/10 bg-black p-8">
        {/* Top section with agent icon and status */}
        <div className="mb-6 flex justify-between items-start">
          <div className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-[1px]`}>
            <div className="absolute inset-0 rounded-2xl bg-black/50 blur-sm" />
            <div className="relative h-full w-full rounded-2xl bg-black p-3">
              <feature.icon className="h-full w-full text-white" />
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400">Online</span>
          </div>
        </div>

        {/* Agent name and description */}
        <div className="mb-6">
          <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
          <p className="text-white/60">{feature.description}</p>
        </div>

        {/* Capabilities section */}
        <div className="space-y-4">
          <div className="text-sm font-medium text-white/80">Capabilities</div>
          <ul className="grid grid-cols-2 gap-3">
            {feature.benefits.map((benefit) => (
              <li 
                key={benefit} 
                className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-sm text-white/70"
              >
                <Check className="h-4 w-4 text-emerald-400" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Interactive elements */}
        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-white/40">
            Response time: ~1s
          </div>
          <button className="rounded-lg bg-white/5 px-3 py-1 text-sm text-white/70 hover:bg-white/10 transition-colors">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
});

// Static features data
const features: Feature[] = [
  {
    title: "Business Process Automation",
    description: "End-to-end automation solutions for enterprise workflows and operations",
    icon: Workflow,
    gradient: "from-blue-500/10 to-cyan-500/10",
    benefits: [
      "Workflow Optimization",
      "Document Processing",
      "Data Entry Automation",
      "Process Mining"
    ],
    category: "Enterprise Solutions"
  },
  {
    title: "Industry Solutions",
    description: "Tailored AI solutions for specific industry verticals and use cases",
    icon: Building2,
    gradient: "from-purple-500/10 to-pink-500/10",
    benefits: [
      "Manufacturing",
      "Healthcare",
      "Financial Services",
      "Retail & E-commerce"
    ],
    category: "Enterprise Solutions"
  },
  {
    title: "Data Operations",
    description: "Streamline your data operations with AI-powered automation",
    icon: Database,
    gradient: "from-green-500/10 to-emerald-500/10",
    benefits: [
      "Data Labeling",
      "Content Moderation",
      "Document Processing",
      "Quality Assurance"
    ],
    category: "Enterprise Solutions"
  },
  {
    title: "Aidr - AI Manager",
    description: "Your intelligent project manager and strategic advisor",
    icon: Brain,
    gradient: "from-amber-500/10 to-orange-500/10",
    benefits: [
      "Project Management",
      "Resource Allocation",
      "Strategic Planning",
      "Performance Analytics"
    ],
    category: "AI Agents"
  },
  {
    title: "Aido - Task Administrator",
    description: "Efficient task execution and administrative support",
    icon: Bot,
    gradient: "from-red-500/10 to-rose-500/10",
    benefits: [
      "Task Automation",
      "Process Coordination",
      "System Administration",
      "Workflow Optimization"
    ],
    category: "AI Agents"
  },
  {
    title: "Aidy - Customer Support",
    description: "24/7 intelligent customer support via voice and text",
    icon: MessageSquare,
    gradient: "from-indigo-500/10 to-violet-500/10",
    benefits: [
      "Voice Assistance",
      "Text Support",
      "Query Resolution",
      "Customer Analytics"
    ],
    category: "AI Agents"
  }
]

const categories = {
  "Enterprise Solutions": {
    title: "Enterprise Solutions",
    description: "Comprehensive AI solutions for business transformation",
    gradient: "from-blue-400 to-cyan-400"
  },
  "AI Agents": {
    title: "AI Agents",
    description: "Intelligent agents for specialized business functions",
    gradient: "from-purple-400 to-pink-400"
  }
}

export default function Features() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with improved gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-white/5 backdrop-blur-sm mb-8 border border-white/10">
            <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
            <span className="text-white/80">Enterprise AI Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Transform Your Business with AI
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Leverage our advanced AI agents and enterprise solutions to automate processes, optimize operations, and drive business growth.
          </p>
        </div>

        {/* Categories with improved spacing and animations */}
        <div className="grid gap-16 mb-24">
          {Object.entries(categories).map(([key, category]) => (
            <div key={key} className="space-y-8">
              <div className="text-center">
                <h3 className={`inline-block text-2xl font-bold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <p className="text-white/60">{category.description}</p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features
                  .filter(feature => feature.category === key)
                  .map((feature) => (
                    key === "AI Agents" ? (
                      <AgentCard key={feature.title} feature={feature} />
                    ) : (
                      <SolutionCard key={feature.title} feature={feature} />
                    )
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton>
              Schedule a Demo
            </GradientButton>
            <GradientButton variant="secondary">
              View Documentation
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  )
} 