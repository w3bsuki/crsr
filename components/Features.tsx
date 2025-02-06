"use client"

import { memo, useEffect, useState } from "react"
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
  ChevronRight
} from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { GradientButton } from "./ui/gradient-button"
import Image from "next/image"

// Define feature type
interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  benefits: string[];
  category: "Performance" | "Security" | "Intelligence" | "Enterprise Solutions" | "AI Agents";
}

const SolutionCard = memo(function SolutionCard({ feature }: { feature: Feature }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl border border-white/10 bg-black p-6 hover:border-purple-500/50 transition-colors duration-300"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        {/* Icon with animated gradient background */}
        <div className="mb-6 relative">
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
          <div className="relative z-10 w-12 h-12 rounded-xl bg-black flex items-center justify-center border border-white/10">
            <feature.icon className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
          {feature.title}
        </h3>
        
        <p className="text-white/60 mb-6 line-clamp-2">
          {feature.description}
        </p>
        
        <div className="space-y-3">
          {feature.benefits.map((benefit) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center">
                <Check className="w-3 h-3 text-purple-400" />
              </div>
              <span className="text-sm text-white/70">{benefit}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-white/5">
          <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
            Learn more
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
});

const AgentCard = memo(function AgentCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500/50 via-cyan-500/50 to-purple-500/50 opacity-0 blur-sm transition-all duration-500 group-hover:opacity-100" />
      
      <div className="relative rounded-2xl border border-white/10 bg-black p-8">
        {/* Top section with agent icon and status */}
        <div className="mb-6 flex justify-between items-start">
          <div className="relative">
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-20`} />
            <div className="relative z-10 h-16 w-16 rounded-2xl bg-black border border-white/10 p-4">
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
          <h3 className="mb-2 text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {feature.title}
          </h3>
          <p className="text-white/60">{feature.description}</p>
        </div>

        {/* Capabilities section */}
        <div className="space-y-4">
          <div className="text-sm font-medium text-white/80">Capabilities</div>
          <div className="grid grid-cols-2 gap-3">
            {feature.benefits.map((benefit) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group/item"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                <div className="relative rounded-lg border border-white/5 bg-white/5 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-white/70">{benefit}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive elements */}
        <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="text-sm text-white/40">
            Response time: ~1s
          </div>
          <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
            Connect
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
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
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      
      <motion.div style={{ y }} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-2 rounded-2xl bg-white/5 backdrop-blur-sm mb-8 border border-white/10"
          >
            <Sparkles className="w-6 h-6 text-purple-400 mr-2" />
            <span className="text-white/80">Enterprise AI Solutions</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent"
          >
            Transform Your Business with AI
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Leverage our advanced AI agents and enterprise solutions to automate processes, optimize operations, and drive business growth.
          </motion.p>
        </div>

        {/* Categories with improved spacing and animations */}
        <div className="grid gap-32 mb-24">
          {Object.entries(categories).map(([key, category], index) => (
            <div key={key} className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className={`inline-block text-2xl font-bold mb-4 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
                <p className="text-white/60">{category.description}</p>
              </motion.div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {features
                  .filter(feature => feature.category === key)
                  .map((feature, featureIndex) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      {key === "AI Agents" ? (
                        <AgentCard feature={feature} />
                      ) : (
                        <SolutionCard feature={feature} />
                      )}
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton className="group">
              Schedule a Demo
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </GradientButton>
            <GradientButton variant="secondary">
              View Documentation
            </GradientButton>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 