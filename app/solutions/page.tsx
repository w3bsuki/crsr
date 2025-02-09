"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Brain, MessageCircle, Cpu, Zap, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Types
interface Solution {
  id: string
  title: string
  description: string
  benefits: string[]
  agent: string
  icon: React.ElementType
}

// Data
const solutions: Solution[] = [
  {
    id: "automation",
    title: "Intelligent Automation Platform",
    description:
      "Transform your operations with Aidr, our intelligent automation platform. Aidr seamlessly connects your existing systems, automates complex workflows, and unlocks the power of AI to drive efficiency, reduce costs, and free up your team to focus on strategic initiatives. \n\nFrom data processing and reporting to customer onboarding and supply chain management, Aidr adapts to your unique needs.  It leverages advanced n8n workflows and machine learning models to optimize processes across your entire organization. \n\nExperience the power of a truly intelligent automation solution.",
    benefits: [
      "Streamline complex workflows and eliminate manual bottlenecks",
      "Reduce operational costs and minimize human error",
      "Integrate seamlessly with your existing CRM, ERP, and other business systems",
      "Gain actionable insights from your data with automated reporting and analysis",
      "Scale your operations efficiently and adapt to changing business needs",
    ],
    agent: "Aidr",
    icon: Brain,
  },
  {
    id: "customer-experience",
    title: "AI-Powered Customer Experience",
    description:
      "Deliver exceptional customer experiences with Aidy, your AI-powered customer service agent. Aidy provides instant, personalized support via phone and text, handles dispatch requests (for transportation businesses), answers frequently asked questions, and seamlessly integrates with your existing CRM and communication platforms. \n\nAidy is available 24/7 in multiple languages, ensuring your customers always receive prompt and helpful assistance, regardless of time zone or language barriers. Improve customer satisfaction and reduce operational costs with our cutting-edge AI solution.",
    benefits: [
      "Provide 24/7 customer support, even during peak hours",
      "Reduce wait times and improve first-call resolution rates",
      "Offer multilingual support for a global customer base",
      "Lower operational costs compared to traditional call centers",
      "Seamlessly integrate with your existing CRM and communication channels",
    ],
    agent: "Aidy",
    icon: MessageCircle,
  },
  {
    id: "business-assistant",
    title: "Smart Business Assistant",
    description:
      "Empower your team and streamline your internal operations with Aido, the smart and affordable AI assistant. Aido automates routine administrative tasks, manages schedules, organizes documents, and facilitates internal communication, freeing up your employees to focus on higher-value work.\n\nAido acts as a virtual assistant for your entire team, handling tedious tasks like data entry, report generation, meeting scheduling, and internal knowledge base management. It's like having an extra team member, without the extra cost.",
    benefits: [
      "Automate data entry, report generation, and other time-consuming tasks",
      "Simplify scheduling and calendar management for individuals and teams",
      "Improve internal communication and collaboration with AI-powered tools",
      "Reduce administrative overhead and free up valuable employee time",
      "Increase overall productivity and employee satisfaction",
    ],
    agent: "Aido",
    icon: Cpu,
  },
  {
    id: "custom-development",
    title: "Custom AI Development",
    description:
      "Don't see exactly what you need? Our team of expert AI engineers and developers can create custom AI solutions tailored to your specific requirements.  We specialize in building bespoke AI agents, machine learning models, and automation workflows to address your unique challenges and opportunities. \n\nFrom initial concept and design to development, deployment, and ongoing support, we'll work closely with you to build a solution that delivers measurable results.",
    benefits: [
      "Solutions perfectly tailored to your specific business needs",
      "Cutting-edge AI technology and development expertise",
      "Full-cycle development, from concept to deployment and support",
      "Competitive advantage through unique AI capabilities",
    ],
    agent: "Aidr, Aidy, Aido",
    icon: Zap,
  },
  {
    id: "strategy-consulting",
    title: "AI Strategy Consulting",
    description:
      "Not sure where to start with AI? Our expert consultants will work with you to develop a comprehensive AI strategy aligned with your business goals. We'll help you identify opportunities, assess feasibility, select the right technologies, and create a roadmap for successful AI implementation. \n\nLeverage our deep industry knowledge and technical expertise to navigate the complex world of AI and unlock its transformative potential for your organization.",
    benefits: [
      "Expert guidance from experienced AI professionals",
      "Clear, actionable AI strategy aligned with your business objectives",
      "Reduced risk and faster time to value for your AI initiatives",
      "Future-proof your business with a well-defined AI roadmap",
    ],
    agent: "Aido",
    icon: Users,
  },
]

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
const SolutionCard = ({ solution, index }: { solution: Solution; index: number }) => {
  const Icon = solution.icon
  const paragraphs = solution.description.split('\n\n')

  return (
    <motion.div variants={fadeIn}>
      <Card className="h-full bg-black/40 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/5">
              <Icon className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <CardTitle className="text-xl text-white">{solution.title}</CardTitle>
              <CardDescription className="text-white/60">Powered by {solution.agent}</CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Description */}
          <div className="space-y-4">
            {paragraphs.map((paragraph, i) => (
              <p key={i} className="text-white/70 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white/80 uppercase tracking-wider">Key Benefits</h4>
            <ul className="space-y-3">
              {solution.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                  </div>
                  <span className="text-sm text-white/70">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>

        <CardFooter>
          <Button 
            className="w-full bg-white/5 hover:bg-white/10 text-white" 
            asChild
          >
            <Link href={`/solutions/${solution.id}`}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-black py-24">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black/90" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.div variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 mb-8">
              <Zap className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-white/80">
                Our Solutions
              </span>
            </div>
          </motion.div>

          <motion.h1 
            variants={fadeIn}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="text-white">
              Transform Your Business{" "}
            </span>
            <span className="text-purple-400">
              With AI
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeIn}
            className="text-lg text-white/60 max-w-3xl mx-auto"
          >
            Explore our comprehensive suite of AI solutions designed to automate processes, 
            enhance customer experiences, and drive unprecedented growth.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="grid gap-8 md:grid-cols-2"
        >
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={solution.id} 
              solution={solution} 
              index={index} 
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
} 