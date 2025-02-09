"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Bot, Brain, Code, Sparkles, Zap, MessageCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAnimation } from '@/hooks/use-animation'
import { useSpring, animated } from '@react-spring/web'
import { useGesture } from '@use-gesture/react'
import { Badge } from './badge'
import toast from 'react-hot-toast'

// Types
interface Agent {
  id: string
  name: string
  icon: React.ElementType
  shortDesc: string
  status: "Online" | "Learning" | "Standby"
  type: string
  capabilities: string[]
  coreFunctions: string[]
  color: string
}

// Data
const agents: Agent[] = [
  {
    id: "aidr",
    name: "AIDR",
    icon: Brain,
    shortDesc: "Ultimate AI Agent",
    status: "Online",
    type: "Advanced Neural Network",
    capabilities: [
      "Process Automation",
      "Workflow Optimization",
      "Data Processing",
      "System Integration",
      "Real-time Analytics"
    ],
    coreFunctions: [
      "Neural Processing",
      "Deep Learning",
      "Predictive Analysis",
      "Autonomous Decision Making",
      "Advanced Problem Solving"
    ],
    color: "purple"
  },
  {
    id: "aidy",
    name: "AIDY",
    icon: MessageCircle,
    shortDesc: "Customer Support Agent",
    status: "Online",
    type: "Support Intelligence",
    capabilities: [
      "Multi-language Support",
      "Sentiment Analysis",
      "Query Resolution",
      "CRM Integration",
      "Voice & Text Support"
    ],
    coreFunctions: [
      "Natural Language Processing",
      "Emotional Intelligence",
      "Context Understanding",
      "Real-time Response",
      "Knowledge Base Integration"
    ],
    color: "blue"
  },
  {
    id: "aido",
    name: "AIDO",
    icon: Zap,
    shortDesc: "Business Assistant",
    status: "Online",
    type: "Business Intelligence",
    capabilities: [
      "Task Automation",
      "Schedule Management",
      "Document Processing",
      "Team Coordination",
      "Resource Planning"
    ],
    coreFunctions: [
      "Business Analysis",
      "Process Optimization",
      "Resource Management",
      "Task Prioritization",
      "Workflow Automation"
    ],
    color: "pink"
  }
]

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
}

const slideIn = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3 }
  }
}

const colorMap = {
  purple: {
    bg: 'bg-purple-950/80 dark:bg-purple-950/90',
    border: 'border-purple-500/30 dark:border-purple-500/40',
    hover: 'hover:border-purple-500/50 dark:hover:border-purple-500/60',
    text: 'text-purple-400 dark:text-purple-300',
    shadow: 'shadow-lg shadow-purple-500/10',
  },
  blue: {
    bg: 'bg-blue-950/80 dark:bg-blue-950/90',
    border: 'border-blue-500/30 dark:border-blue-500/40',
    hover: 'hover:border-blue-500/50 dark:hover:border-blue-500/60',
    text: 'text-blue-400 dark:text-blue-300',
    shadow: 'shadow-lg shadow-blue-500/10',
  },
  pink: {
    bg: 'bg-pink-950/80 dark:bg-pink-950/90',
    border: 'border-pink-500/30 dark:border-pink-500/40',
    hover: 'hover:border-pink-500/50 dark:hover:border-pink-500/60',
    text: 'text-pink-400 dark:text-pink-300',
    shadow: 'shadow-lg shadow-pink-500/10',
  },
};

interface AgentCardProps {
  name: string;
  description: string;
  type: string;
  color: keyof typeof colorMap;
  coreFunctions: string[];
  capabilities: string[];
}

const AgentCard = ({ name, description, type, color, coreFunctions, capabilities }: AgentCardProps) => {
  const animation = useAnimation({ y: 60, duration: 1 });
  const [{ scale, rotateX, rotateY }, api] = useSpring(() => ({
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    config: { mass: 1, tension: 300, friction: 30 },
  }));

  const bind = useGesture({
    onHover: ({ hovering }) => {
      api.start({ scale: hovering ? 1.02 : 1 });
    },
    onMove: ({ xy: [mx, my], currentTarget }) => {
      const rect = (currentTarget as HTMLElement).getBoundingClientRect();
      const x = mx - rect.left;
      const y = my - rect.top;
      const rotX = (y - rect.height / 2) / 20;
      const rotY = (x - rect.width / 2) / 20;
      api.start({ rotateX: -rotX, rotateY: rotY });
    },
  });

  const handleClick = () => {
    toast.success(`${name} is ready to assist you!`, {
      icon: '🤖',
      duration: 2000,
    });
  };

  return (
    <animated.div
      {...bind()}
      style={{
        scale,
        rotateX,
        rotateY,
        transform: 'perspective(1000px)',
      }}
      className="relative"
    >
      <motion.div
        ref={animation.ref}
        style={animation.style}
        onClick={handleClick}
        className={cn(
          'group relative rounded-2xl border p-6 transition-all duration-300',
          'cursor-pointer select-none',
          'bg-black/40',
          colorMap[color].bg,
          colorMap[color].border,
          colorMap[color].hover,
          colorMap[color].shadow
        )}
      >
        {/* Status Indicator and Type */}
        <div className="flex items-center justify-between mb-6">
          <Badge 
            variant="outline" 
            className={cn(
              'font-medium px-3 py-1 text-xs tracking-wide uppercase',
              colorMap[color].text
            )}
          >
            {type}
          </Badge>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="text-xs text-green-400">Online</span>
          </div>
        </div>

        {/* Agent Identity */}
        <div className="mb-6">
          <div className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4',
            colorMap[color].bg,
            'ring-2 ring-offset-2 ring-offset-black',
            colorMap[color].border
          )}>
            <span className={cn(
              'text-2xl font-bold',
              colorMap[color].text
            )}>
              {name.charAt(0)}
            </span>
          </div>
          <h3 className="text-2xl font-bold tracking-tight mb-2">{name}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>

        {/* Core Functions */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-2">
            <div className={cn('h-1 w-1 rounded-full', colorMap[color].text)} />
            <h4 className="text-sm font-semibold">Core Functions</h4>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {coreFunctions.slice(0, 4).map((func, index) => (
              <div
                key={index}
                className={cn(
                  'px-3 py-1.5 rounded-lg text-xs font-medium',
                  'bg-black/60',
                  'border border-white/10',
                  'transition-colors duration-200',
                  'group-hover:border-white/20',
                  'group-hover:bg-black/80'
                )}
              >
                {func}
              </div>
            ))}
          </div>
        </div>

        {/* Capabilities */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className={cn('h-1 w-1 rounded-full', colorMap[color].text)} />
            <h4 className="text-sm font-semibold">Capabilities</h4>
          </div>
          <ul className="space-y-2">
            {capabilities.slice(0, 3).map((capability, index) => (
              <li 
                key={index} 
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className={cn(
                  'flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                  'bg-black/60',
                  'group-hover:bg-black/80',
                  'transition-colors duration-200'
                )}>
                  <div className={cn('h-1.5 w-1.5 rounded-full', colorMap[color].text)} />
                </div>
                {capability}
              </li>
            ))}
          </ul>
        </div>

        {/* Interaction Hint */}
        <div className="absolute bottom-6 right-6 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
          <div className={cn(
            'flex items-center gap-1 text-xs font-medium',
            colorMap[color].text
          )}>
            <span>Interact</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </div>
        </div>
      </motion.div>
    </animated.div>
  );
};

const AgentDetails = ({ agent }: { agent: Agent }) => {
  const Icon = agent.icon
  
  return (
    <motion.div
      key={agent.id}
      initial="hidden"
      animate="visible"
      variants={slideIn}
      className="h-full"
    >
      <Card className="h-full border-white/10 bg-black/40 backdrop-blur-sm p-8">
        <div className="flex items-start gap-6 mb-10">
          <div className={cn(
            "flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/5",
            agent.color === "purple" && "text-purple-400",
            agent.color === "blue" && "text-blue-400",
            agent.color === "pink" && "text-pink-400"
          )}>
            <Icon className="h-8 w-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">{agent.name}</h2>
            <p className="text-lg text-white/60 leading-relaxed">{agent.shortDesc}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Features</h3>
            <div className="grid gap-3">
              {agent.coreFunctions.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-white/70"
                >
                  <div className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    agent.color === "purple" && "bg-purple-400/40",
                    agent.color === "blue" && "bg-blue-400/40",
                    agent.color === "pink" && "bg-pink-400/40"
                  )} />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Benefits</h3>
            <div className="grid gap-3">
              {agent.capabilities.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-white/70"
                >
                  <Sparkles className={cn(
                    "h-4 w-4",
                    agent.color === "purple" && "text-purple-400/40",
                    agent.color === "blue" && "text-blue-400/40",
                    agent.color === "pink" && "text-pink-400/40"
                  )} />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Button 
          className={cn(
            "w-full mt-10",
            agent.color === "purple" && "bg-purple-500 hover:bg-purple-600",
            agent.color === "blue" && "bg-blue-500 hover:bg-blue-600",
            agent.color === "pink" && "bg-pink-500 hover:bg-pink-600"
          )}
        >
          Get Started with {agent.name}
        </Button>
      </Card>
    </motion.div>
  )
}

export function AgentsSection() {
  const animation = useAnimation({ y: 80, duration: 1.2 })

  return (
    <section
      ref={animation.ref}
      style={animation.style}
      className="container space-y-8 py-12 lg:py-20"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Meet Our AI Agents
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Discover our specialized AI agents designed to revolutionize your workflow with cutting-edge
          capabilities and intelligent automation.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        {agents.map((agent) => (
          <AgentCard key={agent.name} name={agent.name} description={agent.shortDesc} type={agent.type} color={agent.color as keyof typeof colorMap} coreFunctions={agent.coreFunctions} capabilities={agent.capabilities} />
        ))}
      </div>
    </section>
  )
} 