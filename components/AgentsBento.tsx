"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Bot, Code, Cpu, Fingerprint, Sparkles, Zap, Blocks, Workflow, GitBranch, Puzzle, Database } from "lucide-react"

const agents = [
  {
    name: "CodeWizard",
    icon: Code,
    description: "Expert in full-stack development with years of experience in building scalable applications. Specializes in React, Node.js, and cloud architecture.",
    color: "from-blue-500 to-cyan-300",
    expertise: ["Full-Stack Development", "Cloud Architecture", "System Design"],
    status: "Available",
  },
  {
    name: "DataMaster",
    icon: Cpu,
    description: "Data scientist and analyst with expertise in machine learning, statistical analysis, and data visualization. Transforms complex data into actionable insights.",
    color: "from-purple-500 to-pink-300",
    expertise: ["Machine Learning", "Data Analysis", "Visualization"],
    status: "Training",
  },
  {
    name: "AIAssistant",
    icon: Bot,
    description: "Advanced AI assistant powered by cutting-edge language models. Helps with coding, writing, and problem-solving across various domains.",
    color: "from-green-500 to-emerald-300",
    expertise: ["Natural Language", "Code Generation", "Problem Solving"],
    status: "Online",
  },
  {
    name: "SecurityPro",
    icon: Fingerprint,
    description: "Cybersecurity expert focused on protecting systems and data. Specializes in threat detection, encryption, and security best practices.",
    color: "from-red-500 to-orange-300",
    expertise: ["Cybersecurity", "Encryption", "Risk Assessment"],
    status: "Monitoring",
  },
  {
    name: "OptimizeBot",
    icon: Zap,
    description: "Performance optimization specialist that analyzes and improves system efficiency. Expert in debugging and code optimization.",
    color: "from-yellow-500 to-amber-300",
    expertise: ["Performance Tuning", "Code Optimization", "Debugging"],
    status: "Analyzing",
  },
  {
    name: "InnovateAI",
    icon: Sparkles,
    description: "Creative AI solution architect that drives innovation through cutting-edge technology integration and novel approaches to complex problems.",
    color: "from-indigo-500 to-violet-300",
    expertise: ["Innovation", "Solution Design", "Creative Tech"],
    status: "Ideating",
  },
]

const solutions = [
  {
    name: "Workflow Automation",
    icon: Workflow,
    description: "Streamline your processes with intelligent automation. Build custom workflows that adapt to your needs and scale with your business.",
    color: "from-amber-500 to-orange-300",
    expertise: ["Process Automation", "Custom Workflows", "Integration"],
    status: "Enterprise",
  },
  {
    name: "Data Pipeline",
    icon: GitBranch,
    description: "Build robust data pipelines that process, transform, and analyze your data in real-time. Make informed decisions faster.",
    color: "from-indigo-500 to-violet-300",
    expertise: ["ETL", "Real-time Processing", "Analytics"],
    status: "Available",
  },
  {
    name: "AI Integration",
    icon: Puzzle,
    description: "Seamlessly integrate AI capabilities into your existing systems. Enhance your applications with powerful machine learning models.",
    color: "from-rose-500 to-pink-300",
    expertise: ["API Integration", "Model Deployment", "Scaling"],
    status: "Beta",
  }
]

const BentoItem = ({ item, className }: { item: (typeof agents)[0] | (typeof solutions)[0]; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`group relative overflow-hidden rounded-xl bg-gradient-to-br ${item.color} p-8 min-h-[400px] flex flex-col ${className}`}
  >
    <div className="flex items-start justify-between">
      <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm">
        <item.icon className="h-8 w-8" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
          {item.status}
        </span>
        <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </div>

    <div className="mt-6 flex-grow">
      <motion.h2 className="text-3xl font-bold mb-3">{item.name}</motion.h2>
      <p className="text-base opacity-90 mb-6">{item.description}</p>
      
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider opacity-80">Expertise</h3>
        <div className="flex flex-wrap gap-2">
          {item.expertise.map((skill) => (
            <span 
              key={skill}
              className="text-sm bg-white/10 backdrop-blur-sm rounded-full px-3 py-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
)

const BentoSection = ({ title, items }: { title: string; items: typeof agents | typeof solutions }) => (
  <div className="flex-1">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl font-bold mb-8 text-white/90"
    >
      {title}
    </motion.h2>
    <div className="grid gap-6">
      {items.map((item) => (
        <BentoItem key={item.name} item={item} />
      ))}
    </div>
  </div>
)

export function AgentsBento() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 py-20">
      <div className="flex gap-8">
        <BentoSection title="Agents" items={agents} />
        <BentoSection title="Solutions" items={solutions} />
      </div>
    </div>
  )
}

