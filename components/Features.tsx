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
  Check,
  ArrowRight,
  ChevronRight,
  Fingerprint
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

const features = [
  {
    title: "AI & Machine Learning",
    description: "Advanced AI capabilities for enterprise solutions",
    icon: Brain,
    gradient: "from-blue-500/10 to-cyan-500/10",
    features: [
      {
        name: "Neural Networks",
        highlight: "Deep learning architecture",
        description: "Build and train custom neural networks for complex tasks",
        icon: Network
      },
      {
        name: "Machine Learning",
        highlight: "Automated learning systems",
        description: "Implement ML models that improve over time",
        icon: Brain
      },
      {
        name: "Natural Language",
        highlight: "Text understanding",
        description: "Process and understand human language naturally",
        icon: MessageSquare
      }
    ]
  },
  {
    title: "Enterprise Solutions",
    description: "Scalable solutions for business transformation",
    icon: Building2,
    gradient: "from-purple-500/10 to-pink-500/10",
    features: [
      {
        name: "Process Automation",
        highlight: "Workflow optimization",
        description: "Automate repetitive tasks and business processes",
        icon: Workflow
      },
      {
        name: "Data Analytics",
        highlight: "Business intelligence",
        description: "Extract insights from your business data",
        icon: BarChart
      },
      {
        name: "Security & Compliance",
        highlight: "Enterprise security",
        description: "Ensure data protection and regulatory compliance",
        icon: Lock
      }
    ]
  },
  {
    title: "Infrastructure & Deployment",
    description: "Robust infrastructure for AI systems",
    icon: Database,
    gradient: "from-green-500/10 to-emerald-500/10",
    features: [
      {
        name: "Cloud Integration",
        highlight: "Scalable deployment",
        description: "Deploy AI solutions across cloud platforms",
        icon: Layers
      },
      {
        name: "Performance",
        highlight: "Optimized systems",
        description: "High-performance computing for AI workloads",
        icon: Zap
      },
      {
        name: "Monitoring",
        highlight: "System oversight",
        description: "Real-time monitoring and system health checks",
        icon: LineChart
      }
    ]
  }
]

const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#9333ea29,transparent)]" />
      <motion.div
        initial={{ opacity: 0.5, scale: 1, x: -500, y: 0 }}
        animate={{ opacity: 1, scale: 1.25, x: 500, y: -100 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-3xl"
      />
    </div>
  )
}

const FeatureCard = memo(function FeatureCard({ 
  feature,
  index 
}: { 
  feature: typeof features[0]["features"][0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-violet-500/30 to-purple-500/30 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20">
            <feature.icon className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
              {feature.name}
            </h3>
            <p className="text-sm text-white/40">
              {feature.highlight}
            </p>
          </div>
        </div>
        <p className="text-sm text-white/60 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
})

const CategorySection = memo(function CategorySection({
  category,
  index
}: {
  category: typeof features[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <div className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient}`}>
            <category.icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">
              {category.title}
            </h2>
            <p className="text-white/60">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.features.map((feature, featureIndex) => (
          <FeatureCard
            key={feature.name}
            feature={feature}
            index={featureIndex}
          />
        ))}
      </div>
    </motion.div>
  )
})

export default function Features() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundBeams />
      
      <motion.div style={{ y }} className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/20 backdrop-blur-sm mb-6"
          >
            <Fingerprint className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              AI-Powered Features
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Intelligent Solutions for{" "}
            </span>
            <span className="bg-gradient-to-br from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Modern Business
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-8"
          >
            Explore our comprehensive suite of AI features designed to transform your business operations.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="space-y-32">
          {features.map((category, index) => (
            <CategorySection
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <Link href="/solutions">
            <div className="group relative inline-flex">
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 opacity-50 blur transition duration-1000 group-hover:opacity-75" />
              <button className="relative flex items-center gap-2 rounded-lg bg-black px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-neutral-950">
                Explore All Features
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
} 