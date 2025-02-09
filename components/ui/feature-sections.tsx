"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Brain, Network, MessageSquare, Bot, Cpu, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface Metric {
  value: string
  label: string
}

interface Feature {
  icon: React.ElementType
  title: string
  description: string
}

interface FeatureSectionProps {
  icon: React.ElementType
  title: string
  subtitle: string
  metrics: Metric[]
  features: Feature[]
  color: "blue" | "purple" | "pink"
}

const FeatureSection = ({ 
  icon: Icon,
  title,
  subtitle,
  metrics,
  features,
  color
}: FeatureSectionProps) => {
  const colorStyles = {
    blue: {
      bgGradient: "bg-gradient-to-br from-blue-500/[0.08] to-cyan-500/[0.08]",
      borderGradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10",
      iconGradient: "from-blue-500 to-cyan-500"
    },
    purple: {
      bgGradient: "bg-gradient-to-br from-purple-500/[0.08] to-violet-500/[0.08]",
      borderGradient: "from-purple-500/10 to-violet-500/10",
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/10",
      iconGradient: "from-purple-500 to-violet-500"
    },
    pink: {
      bgGradient: "bg-gradient-to-br from-pink-500/[0.08] to-rose-500/[0.08]",
      borderGradient: "from-pink-500/10 to-rose-500/10",
      iconColor: "text-pink-400",
      iconBg: "bg-pink-500/10",
      iconGradient: "from-pink-500 to-rose-500"
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden"
    >
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <div className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
            colorStyles[color].iconBg
          )}>
            <Icon className={cn("h-6 w-6", colorStyles[color].iconColor)} />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-1">
              {title}
            </h2>
            <p className="text-sm text-white/60">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((metric) => (
            <div 
              key={metric.label}
              className="text-center"
            >
              <div className="text-xl font-bold text-white mb-0.5">
                {metric.value}
              </div>
              <div className="text-xs text-white/60">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-3">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className={cn(
                  "flex items-start gap-3 rounded-xl border border-white/[0.08] p-4",
                  "transition duration-300",
                  colorStyles[color].bgGradient
                )}>
                  <div className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                    colorStyles[color].iconBg
                  )}>
                    <FeatureIcon className={cn("h-5 w-5", colorStyles[color].iconColor)} />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/60 line-clamp-2">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export function FeatureSections() {
  const sections = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      subtitle: "Advanced AI capabilities for enterprise solutions",
      color: "blue" as const,
      metrics: [
        { value: "99.9%", label: "Accuracy" },
        { value: "-80%", label: "Processing Time" },
        { value: "500MB", label: "Model Size" }
      ],
      features: [
        {
          icon: Network,
          title: "Neural Networks",
          description: "Build and deploy custom neural networks for complex data processing and pattern recognition"
        },
        {
          icon: Brain,
          title: "Machine Learning",
          description: "Implement self-improving ML models that adapt and evolve with your business needs"
        },
        {
          icon: MessageSquare,
          title: "Natural Language",
          description: "Advanced NLP capabilities for human-like text comprehension and generation"
        }
      ]
    },
    {
      icon: Bot,
      title: "Intelligent Automation",
      subtitle: "Streamline operations with AI-powered automation",
      color: "purple" as const,
      metrics: [
        { value: "60%", label: "Cost Reduction" },
        { value: "24/7", label: "Availability" },
        { value: "100+", label: "Integrations" }
      ],
      features: [
        {
          icon: Cpu,
          title: "Process Automation",
          description: "Automate complex workflows and business processes with intelligent decision-making"
        },
        {
          icon: Network,
          title: "System Integration",
          description: "Seamlessly connect and coordinate multiple systems and applications"
        },
        {
          icon: Sparkles,
          title: "Smart Analytics",
          description: "Real-time insights and predictive analytics for better decision making"
        }
      ]
    },
    {
      icon: MessageSquare,
      title: "Customer Experience",
      subtitle: "Transform customer interactions with AI",
      color: "pink" as const,
      metrics: [
        { value: "90%", label: "Satisfaction" },
        { value: "<1s", label: "Response Time" },
        { value: "15+", label: "Languages" }
      ],
      features: [
        {
          icon: Bot,
          title: "AI Assistants",
          description: "24/7 intelligent support with natural conversation capabilities"
        },
        {
          icon: Sparkles,
          title: "Personalization",
          description: "Tailored interactions based on customer preferences and history"
        },
        {
          icon: MessageSquare,
          title: "Multi-channel",
          description: "Consistent experience across all communication channels"
        }
      ]
    }
  ]

  return (
    <section className="relative py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 mb-6"
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-white/80">
              Our Capabilities
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Advanced AI Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-white/60 max-w-2xl mx-auto"
          >
            Explore our comprehensive suite of AI technologies designed to transform your business
          </motion.p>
        </div>

        {/* Feature Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <FeatureSection
              key={section.title}
              {...section}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 