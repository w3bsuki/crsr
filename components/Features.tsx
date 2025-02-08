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
  Fingerprint,
  Globe
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "AI & Machine Learning",
    description: "Advanced AI capabilities for enterprise solutions",
    icon: Brain,
    gradient: "from-blue-500/10 to-cyan-500/10",
    borderGradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-500 to-cyan-500",
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
    ],
    stats: [
      { label: "Accuracy", value: "99.9%" },
      { label: "Processing Time", value: "-80%" },
      { label: "Model Size", value: "500MB" }
    ]
  },
  {
    title: "Enterprise Solutions",
    description: "Scalable solutions for business transformation",
    icon: Building2,
    gradient: "from-purple-500/10 to-pink-500/10",
    borderGradient: "from-purple-500/20 to-pink-500/20",
    iconGradient: "from-purple-500 to-pink-500",
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
    ],
    stats: [
      { label: "Efficiency", value: "+60%" },
      { label: "Cost Savings", value: "40%" },
      { label: "ROI", value: "3.5x" }
    ]
  },
  {
    title: "Infrastructure & Deployment",
    description: "Robust infrastructure for AI systems",
    icon: Database,
    gradient: "from-green-500/10 to-emerald-500/10",
    borderGradient: "from-green-500/20 to-emerald-500/20",
    iconGradient: "from-green-500 to-emerald-500",
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
    ],
    stats: [
      { label: "Uptime", value: "99.99%" },
      { label: "Scale", value: "Global" },
      { label: "Response", value: "<50ms" }
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

const StatCard = memo(function StatCard({ 
  stat,
  gradient
}: { 
  stat: { label: string; value: string }
  gradient: string
}) {
  return (
    <div className="relative group">
      <div className={cn(
        "absolute -inset-px rounded-lg bg-gradient-to-br opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-40",
        gradient
      )} />
      <div className="relative rounded-lg border border-white/10 bg-black/30 backdrop-blur-sm p-4">
        <div className="text-xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent mb-1">
          {stat.value}
        </div>
        <div className="text-sm text-white/40">
          {stat.label}
        </div>
      </div>
    </div>
  )
})

const FeatureCard = memo(function FeatureCard({ 
  feature,
  gradient,
  index 
}: { 
  feature: typeof features[0]["features"][0]
  gradient: string
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
      <div className={cn(
        "absolute -inset-px rounded-xl bg-gradient-to-br opacity-0 blur transition-opacity duration-300 group-hover:opacity-100",
        gradient
      )} />
      <div className="relative rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={cn(
            "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br",
            gradient
          )}>
            <feature.icon className="h-6 w-6 text-white" />
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
      {/* Category Card */}
      <div className="relative mb-16">
        <div className={cn(
          "absolute -inset-px rounded-2xl bg-gradient-to-br opacity-20 blur-sm",
          category.borderGradient
        )} />
        <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-8">
          {/* Header */}
          <div className="flex items-center gap-6 mb-8">
            <div className={cn(
              "relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br",
              category.iconGradient
            )}>
              <category.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                {category.title}
              </h2>
              <p className="text-white/60 max-w-xl">
                {category.description}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {category.stats.map((stat) => (
              <StatCard
                key={stat.label}
                stat={stat}
                gradient={category.iconGradient}
              />
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.features.map((feature, featureIndex) => (
              <FeatureCard
                key={feature.name}
                feature={feature}
                gradient={category.iconGradient}
                index={featureIndex}
              />
            ))}
          </div>
        </div>
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
      
      <motion.div style={{ y }} className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mt-12"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20">
                <Globe className="h-6 w-6 text-purple-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">30+</div>
                <div className="text-sm text-white/40">Countries Served</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20">
                <Building2 className="h-6 w-6 text-purple-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-white/40">Enterprise Clients</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20">
                <Brain className="h-6 w-6 text-purple-400" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-white">1B+</div>
                <div className="text-sm text-white/40">AI Predictions</div>
              </div>
            </div>
          </motion.div>
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