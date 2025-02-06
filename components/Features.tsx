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
  Sparkles
} from "lucide-react"
import { GradientButton } from "./ui/gradient-button"

// Define feature type
interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  benefits: string[];
  category: "Performance" | "Security" | "Intelligence";
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
    title: "Real-time Processing",
    description: "Process and analyze data instantly with our high-performance AI engine",
    icon: Zap,
    gradient: "from-blue-500/10 to-cyan-500/10",
    benefits: [
      "Sub-millisecond latency",
      "Parallel processing",
      "Auto-scaling",
      "Load balancing"
    ],
    category: "Performance"
  },
  {
    title: "Neural Networks",
    description: "Advanced neural networks for complex pattern recognition and learning",
    icon: Brain,
    gradient: "from-purple-500/10 to-pink-500/10",
    benefits: [
      "Deep learning",
      "Pattern recognition",
      "Adaptive learning",
      "Transfer learning"
    ],
    category: "Intelligence"
  },
  {
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with AI-powered analytics",
    icon: LineChart,
    gradient: "from-green-500/10 to-emerald-500/10",
    benefits: [
      "Trend analysis",
      "Risk assessment",
      "Market prediction",
      "Anomaly detection"
    ],
    category: "Intelligence"
  },
  {
    title: "Quantum Computing",
    description: "Future-ready algorithms optimized for quantum computing architecture",
    icon: Cpu,
    gradient: "from-amber-500/10 to-orange-500/10",
    benefits: [
      "Quantum optimization",
      "Superposition",
      "Quantum encryption",
      "Parallel processing"
    ],
    category: "Performance"
  },
  {
    title: "Enterprise Security",
    description: "Military-grade security for your AI models and sensitive data",
    icon: Lock,
    gradient: "from-red-500/10 to-rose-500/10",
    benefits: [
      "End-to-end encryption",
      "Access control",
      "Audit logging",
      "Compliance"
    ],
    category: "Security"
  },
  {
    title: "Distributed Systems",
    description: "Scale your AI operations across global infrastructure",
    icon: Network,
    gradient: "from-indigo-500/10 to-violet-500/10",
    benefits: [
      "Global deployment",
      "Edge computing",
      "High availability",
      "Fault tolerance"
    ],
    category: "Performance"
  },
  {
    title: "Model Optimization",
    description: "Optimize AI models for maximum efficiency and accuracy",
    icon: Layers,
    gradient: "from-teal-500/10 to-emerald-500/10",
    benefits: [
      "Model compression",
      "Performance tuning",
      "Resource optimization",
      "Accuracy improvement"
    ],
    category: "Performance"
  },
  {
    title: "Advanced AI Models",
    description: "Access state-of-the-art AI models and algorithms",
    icon: Sparkles,
    gradient: "from-fuchsia-500/10 to-pink-500/10",
    benefits: [
      "GPT integration",
      "Custom models",
      "Model fine-tuning",
      "Hybrid AI"
    ],
    category: "Intelligence"
  }
]

const categories = {
  Performance: {
    title: "Performance",
    description: "Lightning-fast processing and scalable infrastructure",
    gradient: "from-blue-400 to-cyan-400"
  },
  Security: {
    title: "Security",
    description: "Enterprise-grade security and compliance",
    gradient: "from-red-400 to-rose-400"
  },
  Intelligence: {
    title: "Intelligence",
    description: "Advanced AI capabilities and smart analytics",
    gradient: "from-purple-400 to-pink-400"
  }
}

export default memo(function Features() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-white/5 backdrop-blur-sm mb-8">
            <Cpu className="w-6 h-6 text-blue-400 mr-2" />
            <span className="text-white/80">Core Features</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Advanced AI Features
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Discover our comprehensive suite of AI features designed to transform your business operations and drive innovation.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <GradientButton>Explore Features</GradientButton>
            <GradientButton variant="secondary">View Documentation</GradientButton>
          </div>
        </div>

        {/* Category sections */}
        {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
          <div key={category} className="mb-16 last:mb-0">
            <div className="mb-8">
              <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${categories[category].gradient} bg-clip-text text-transparent`}>
                {categories[category].title}
              </h3>
              <p className="text-white/60">{categories[category].description}</p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features
                .filter(feature => feature.category === category)
                .map((feature) => (
                  <FeatureCard key={feature.title} feature={feature} />
                ))}
            </div>
          </div>
        ))}

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 backdrop-blur-sm">
            <BarChart className="w-5 h-5 text-white/40 mr-2" />
            <span className="text-white/40 text-sm">Powering next-generation AI applications</span>
          </div>
        </div>
      </div>
    </section>
  )
}) 