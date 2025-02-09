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
        description: "Build and deploy custom neural networks for complex data processing and pattern recognition",
        icon: Network,
        gradient: "from-blue-500/10 to-cyan-500/10"
      },
      {
        name: "Machine Learning",
        highlight: "Automated learning systems",
        description: "Implement self-improving ML models that adapt and evolve with your business needs",
        icon: Brain,
        gradient: "from-blue-500/10 to-cyan-500/10"
      },
      {
        name: "Natural Language",
        highlight: "Text understanding",
        description: "Advanced NLP capabilities for human-like text comprehension and generation",
        icon: MessageSquare,
        gradient: "from-blue-500/10 to-cyan-500/10"
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
        description: "End-to-end automation of complex business processes and workflows",
        icon: Workflow,
        gradient: "from-purple-500/10 to-pink-500/10"
      },
      {
        name: "Data Analytics",
        highlight: "Business intelligence",
        description: "Real-time analytics and insights for data-driven decision making",
        icon: BarChart,
        gradient: "from-purple-500/10 to-pink-500/10"
      },
      {
        name: "Security & Compliance",
        highlight: "Enterprise security",
        description: "Bank-grade security with regulatory compliance built-in",
        icon: Lock,
        gradient: "from-purple-500/10 to-pink-500/10"
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
        description: "Seamless integration with major cloud providers and platforms",
        icon: Layers,
        gradient: "from-green-500/10 to-emerald-500/10"
      },
      {
        name: "Performance",
        highlight: "Optimized systems",
        description: "High-performance computing optimized for AI workloads",
        icon: Zap,
        gradient: "from-green-500/10 to-emerald-500/10"
      },
      {
        name: "Monitoring",
        highlight: "System oversight",
        description: "24/7 monitoring with predictive maintenance and alerts",
        icon: LineChart,
        gradient: "from-green-500/10 to-emerald-500/10"
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
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent blur-3xl"
      />
    </div>
  )
}

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
      className="group relative h-full"
    >
      <div className={cn(
        "absolute -inset-px rounded-2xl bg-gradient-to-br opacity-0 blur-[2px] transition-all duration-500 group-hover:opacity-40",
        gradient
      )} />
      <div className="relative h-full rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-8 flex flex-col">
        <div className="flex items-start gap-4 mb-6">
          <div className={cn(
            "relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br",
            gradient
          )}>
            <feature.icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
              {feature.name}
            </h3>
            <p className="text-sm text-white/40 mt-1">
              {feature.highlight}
            </p>
          </div>
        </div>
        <p className="text-sm text-white/60 leading-relaxed flex-grow">
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
          "absolute -inset-px rounded-3xl bg-gradient-to-br opacity-20 blur-[2px]",
          category.borderGradient
        )} />
        <div className="relative rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm p-10">
          {/* Header */}
          <div className="flex items-start gap-6 mb-12">
            <div className={cn(
              "relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br",
              category.iconGradient
            )}>
              <category.icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-3">
                {category.title}
              </h2>
              <p className="text-white/60 max-w-2xl text-lg">
                {category.description}
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {category.stats.map((stat) => (
              <div 
                key={stat.label}
                className="relative group overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-6 text-center"
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-10",
                  category.iconGradient
                )} />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/40">
                  {stat.label}
                </div>
              </div>
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
      
      <motion.div style={{ y }} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/10 backdrop-blur-sm mb-8"
          >
            <Fingerprint className="w-5 h-5 text-purple-400" />
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
            className="text-lg text-white/60 max-w-2xl mx-auto"
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
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 opacity-50 blur-[2px] transition duration-1000 group-hover:opacity-75" />
              <button className="relative flex items-center gap-2 rounded-lg bg-black px-8 py-4 text-base font-semibold text-white transition duration-200 hover:bg-neutral-950">
                Explore All Features
                <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
} 