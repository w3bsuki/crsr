"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Bot, Brain, Check, ChevronRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface Solution {
  title: string
  description: string
  benefits: string[]
  agent: string
  ctaText: string
  ctaLink: string
}

const solutions: Solution[] = [
  {
    title: "Intelligent Automation Platform",
    description:
      "Transform your operations with Aidr, our intelligent automation platform. Aidr seamlessly connects your existing systems, automates complex workflows, and unlocks the power of AI to drive efficiency, reduce costs, and free up your team to focus on strategic initiatives. From data processing and reporting to customer onboarding and supply chain management, Aidr adapts to your unique needs.",
    benefits: [
      "Streamline complex workflows",
      "Reduce manual tasks and errors",
      "Integrate seamlessly with existing systems",
      "Gain actionable insights from your data",
      "Scale your operations efficiently",
    ],
    agent: "Aidr",
    ctaText: "Book a Consultation",
    ctaLink: "#contact",
  },
  {
    title: "AI-Powered Customer Experience",
    description:
      "Deliver exceptional customer experiences with Aidy, your AI-powered customer service agent. Aidy provides instant, personalized support via phone and text, handles dispatch requests (for transportation businesses), answers frequently asked questions, and seamlessly integrates with your existing CRM and communication platforms. Available in multiple languages, Aidy ensures your customers always receive prompt and helpful assistance.",
    benefits: [
      "24/7 availability, even during peak hours",
      "Reduced wait times and improved customer satisfaction",
      "Multilingual support for a global customer base",
      "Lower operational costs compared to traditional call centers",
      "Seamless integration with existing systems",
    ],
    agent: "Aidy",
    ctaText: "See Aidy in Action",
    ctaLink: "#contact",
  },
  {
    title: "Smart Business Assistant",
    description:
      "Empower your team and streamline your internal operations with Aido, the smart and affordable AI assistant. Aido automates routine administrative tasks, manages schedules, organizes documents, and facilitates internal communication, freeing up your employees to focus on higher-value work. It's like having an extra team member, without the extra cost.",
    benefits: [
      "Automated data entry and reporting",
      "Simplified scheduling and calendar management",
      "Improved internal communication and collaboration",
      "Reduced administrative overhead",
      "Increased employee productivity and satisfaction",
    ],
    agent: "Aido",
    ctaText: "Explore Aido's Capabilities",
    ctaLink: "#contact",
  },
  {
    title: "Custom AI Development",
    description:
      "Don't see what you are looking for? Our team can create any custom solution or automation!",
    benefits: [
      "Unique solutions",
      "AI optimized for your needs"
    ],
    agent: "Aidr, Aidy, Aido",
    ctaText: "Request a Consultation",
    ctaLink: "#contact",
  },
  {
    title: "AI Strategy Consulting",
    description:
      "Not sure where to start with AI? Our expert consultants will work with you to develop a comprehensive AI strategy tailored to your specific business goals. We'll help you identify opportunities, assess feasibility, select the right technologies, and create a roadmap for successful AI implementation.",
    benefits: [
      "Expert guidance from experienced AI professionals",
      "Clear, actionable AI strategy aligned with business goals",
      "Reduced risk and faster time to value",
      "Future-proof your business with AI",
    ],
    agent: "Aido",
    ctaText: "Get a Free Consultation",
    ctaLink: "#contact",
  },
];

const FadeInSlideUp = memo(function FadeInSlideUp({ 
  children,
  index 
}: { 
  children: React.ReactNode
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {children}
    </motion.div>
  );
});

const SolutionCard = memo(function SolutionCard({ 
  solution,
  index 
}: { 
  solution: Solution
  index: number
}) {
  return (
    <FadeInSlideUp index={index}>
      <div className="group relative h-full">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 opacity-0 blur-[2px] transition-all duration-500 group-hover:opacity-40" />
        <div className="relative h-full rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-8 flex flex-col">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors mb-3">
              {solution.title}
            </h3>
            <p className="text-white/60 leading-relaxed">
              {solution.description}
            </p>
          </div>

          {/* Benefits */}
          <div className="flex-grow mb-8">
            <h4 className="text-sm font-medium text-white/80 mb-4">Key Benefits</h4>
            <ul className="space-y-3">
              {solution.benefits.map((benefit, i) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                  className="flex items-start gap-3"
                >
                  <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/20">
                    <Check className="h-3.5 w-3.5 text-purple-400" />
                  </div>
                  <span className="text-sm text-white/60">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-4">
            {/* Powered By */}
            <div className="flex items-center gap-2 text-sm text-white/40">
              <Bot className="h-4 w-4" />
              <span>Powered by {solution.agent}</span>
            </div>

            {/* CTA */}
            <Link href={solution.ctaLink}>
              <div className="group/btn relative inline-flex w-full">
                <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 opacity-50 blur-[2px] transition duration-1000 group-hover/btn:opacity-75" />
                <button className="relative w-full flex items-center justify-center gap-2 rounded-lg bg-black px-6 py-3 text-base font-semibold text-white transition duration-200 hover:bg-neutral-950">
                  {solution.ctaText}
                  <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </FadeInSlideUp>
  );
});

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative py-32 overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/10 backdrop-blur-sm mb-8"
          >
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Our Solutions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Transform Your Business{" "}
            </span>
            <span className="bg-gradient-to-br from-purple-400 to-violet-400 bg-clip-text text-transparent">
              With AI
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/60 max-w-3xl mx-auto"
          >
            Explore our comprehensive suite of AI solutions designed to automate processes, enhance customer experiences, and drive unprecedented growth for your business.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.title}
              solution={solution}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 