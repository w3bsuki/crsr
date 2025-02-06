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
const FeatureCard = memo(function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="group relative">
      <div className={`absolute inset-0 rounded-2xl opacity-50 bg-gradient-to-br ${feature.gradient} 
        transition-opacity duration-300 group-hover:opacity-70`} />
      
      <div className="relative p-6 rounded-2xl border border-white/[0.08]">
        <div className="flex items-start justify-between mb-6">
          <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} 
            bg-opacity-10 transition-transform duration-300 group-hover:scale-110`}>
            <feature.icon className="w-6 h-6 text-white/90" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium bg-white/10 rounded-full px-3 py-1">
              {feature.category}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
        <p className="text-white/60 mb-6">{feature.description}</p>

        <ul className="space-y-2">
          {feature.benefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2 text-white/70">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})

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
                  .map((feature, index) => (
                    <div
                      key={feature.title}
                      className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors duration-300"
                    >
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