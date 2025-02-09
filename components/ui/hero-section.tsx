"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Brain, MessageCircle, Zap } from "lucide-react"
import Link from "next/link"
import { Icons } from "./icons"
import { cn } from "@/lib/utils"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Components
const AgentShowcase = () => {
  const agents = [
    {
      name: "Aidr",
      role: "Intelligent Automation",
      icon: Brain,
      color: "purple"
    },
    {
      name: "Aidy",
      role: "Customer Service",
      icon: MessageCircle,
      color: "blue"
    },
    {
      name: "Aido",
      role: "Business Assistant",
      icon: Zap,
      color: "pink"
    }
  ]

  // Duplicate the agents array for seamless loop
  const displayAgents = [...agents, ...agents, ...agents]

  return (
    <div className="w-full overflow-hidden bg-black/50 backdrop-blur-sm border-t border-white/5">
      <div className="relative flex py-16">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="flex items-center gap-24 animate-marquee whitespace-nowrap">
          {displayAgents.map((agent, i) => {
            const Icon = agent.icon
            return (
              <div 
                key={`${agent.name}-${i}`} 
                className="shrink-0 group"
              >
                <div className="flex items-center gap-4 px-4">
                  <div className={cn(
                    "flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 transition-colors duration-300",
                    agent.color === "purple" && "group-hover:bg-purple-500/20",
                    agent.color === "blue" && "group-hover:bg-blue-500/20",
                    agent.color === "pink" && "group-hover:bg-pink-500/20"
                  )}>
                    <Icon className={cn(
                      "h-8 w-8 transition-colors duration-300",
                      agent.color === "purple" && "text-purple-400 group-hover:text-purple-300",
                      agent.color === "blue" && "text-blue-400 group-hover:text-blue-300",
                      agent.color === "pink" && "text-pink-400 group-hover:text-pink-300"
                    )} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {agent.name}
                    </h3>
                    <p className="text-sm text-white/60">
                      {agent.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const Background = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-30%,#9333ea15,transparent)]" />
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.15]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="32"
          height="56"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <path
            d="M16 0l16 28-16 28L0 28 16 0z"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
)

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center bg-black pt-[72px]">
      <Background />
      
      <div className="relative flex-1 flex flex-col justify-center">
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mx-auto text-center max-w-4xl"
          >
            {/* Badge */}
            <motion.div variants={fadeIn} className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2">
                <Sparkles className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-white/80">Intelligent AI Solutions</span>
                <Button variant="link" className="h-auto p-0 text-sm text-purple-400">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeIn}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
            >
              <span className="text-white">
                Transform Your Business{" "}
              </span>
              <span className="bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent">
                With AI
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="text-xl sm:text-2xl text-white/60 mx-auto max-w-2xl mb-12"
            >
              Unlock the power of AI with our intelligent agents and tailored solutions 
              for businesses of all sizes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Link href="/get-started">
                <Button 
                  size="lg"
                  className="bg-purple-500 hover:bg-purple-600 text-white min-w-[200px]"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/10 text-white hover:bg-white/5 min-w-[200px]"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Agent Showcase */}
      <div className="relative mt-auto">
        <AgentShowcase />
      </div>
    </section>
  )
} 