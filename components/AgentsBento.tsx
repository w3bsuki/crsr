"use client"

import { memo } from "react"
import { Bot, Code, Cpu, Fingerprint, Sparkles, Zap, Workflow, GitBranch, Puzzle } from "lucide-react"

const agents = [
  {
    name: "CodeWizard",
    icon: Code,
    description: "Expert in full-stack development with years of experience in building scalable applications.",
    color: "bg-gradient-to-br from-blue-500 to-cyan-300",
    expertise: ["Full-Stack", "Cloud", "System Design"],
    status: "Available",
  },
  {
    name: "DataMaster",
    icon: Cpu,
    description: "Data scientist and analyst with expertise in machine learning and data visualization.",
    color: "bg-gradient-to-br from-purple-500 to-pink-300",
    expertise: ["ML", "Analysis", "Visualization"],
    status: "Training",
  },
  {
    name: "AIAssistant",
    icon: Bot,
    description: "Advanced AI assistant powered by cutting-edge language models.",
    color: "bg-gradient-to-br from-green-500 to-emerald-300",
    expertise: ["NLP", "Code Gen", "Problem Solving"],
    status: "Online",
  },
]

const solutions = [
  {
    name: "Workflow Automation",
    icon: Workflow,
    description: "Streamline your processes with intelligent automation.",
    color: "bg-gradient-to-br from-amber-500 to-orange-300",
    expertise: ["Automation", "Workflows", "Integration"],
    status: "Enterprise",
  },
  {
    name: "Data Pipeline",
    icon: GitBranch,
    description: "Build robust data pipelines that process and analyze your data in real-time.",
    color: "bg-gradient-to-br from-indigo-500 to-violet-300",
    expertise: ["ETL", "Processing", "Analytics"],
    status: "Available",
  },
  {
    name: "AI Integration",
    icon: Puzzle,
    description: "Seamlessly integrate AI capabilities into your existing systems.",
    color: "bg-gradient-to-br from-rose-500 to-pink-300",
    expertise: ["API", "ML Models", "Scaling"],
    status: "Beta",
  }
]

const BentoItem = memo(function BentoItem({ 
  item, 
  className 
}: { 
  item: (typeof agents)[0] | (typeof solutions)[0]; 
  className?: string; 
}) {
  const Icon = item.icon;
  
  return (
    <div className={`
      relative overflow-hidden rounded-xl p-6
      border border-white/[0.08] bg-black/20 backdrop-blur-sm
      ${className}
    `}>
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div className={`
            flex items-center justify-center w-12 h-12 rounded-full
            ${item.color} bg-opacity-10
          `}>
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
            {item.status}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
        <p className="text-base text-white/60 mb-6">{item.description}</p>
        
        <div className="mt-auto">
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
    </div>
  );
});

const BentoSection = memo(function BentoSection({ 
  title, 
  items 
}: { 
  title: string; 
  items: typeof agents | typeof solutions; 
}) {
  return (
    <div className="flex-1">
      <h2 className="text-2xl font-bold mb-8 text-white/90">
        {title}
      </h2>
      <div className="grid gap-6">
        {items.map((item) => (
          <BentoItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
});

export function AgentsBento() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <BentoSection title="Agents" items={agents} />
        <BentoSection title="Solutions" items={solutions} />
      </div>
    </div>
  );
}

