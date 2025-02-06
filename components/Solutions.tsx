"use client";

import { memo } from "react";
import { 
  Bot, 
  Brain, 
  Network, 
  Shield, 
  Sparkles,
  BarChart,
  Cloud,
  Code,
  ArrowRight,
  ChevronRight,
  Cpu,
  Workflow
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GradientButton } from "./ui/gradient-button";
import Link from "next/link";

const solutions = [
  {
    title: "Generative AI",
    description: "Create content, images, and code with state-of-the-art AI models",
    icon: Sparkles,
    gradient: "from-purple-500 to-pink-500",
    features: [
      "Text-to-Image Generation",
      "Code Completion",
      "Content Creation",
      "Custom Model Training"
    ]
  },
  {
    title: "Machine Learning",
    description: "Build and deploy custom ML models for your specific needs",
    icon: Brain,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Predictive Analytics",
      "Pattern Recognition",
      "Automated Learning",
      "Model Optimization"
    ]
  },
  {
    title: "Neural Networks",
    description: "Deep learning solutions for complex problem-solving",
    icon: Network,
    gradient: "from-green-500 to-emerald-500",
    features: [
      "Deep Learning",
      "Image Recognition",
      "Natural Language Processing",
      "Speech Recognition"
    ]
  },
  {
    title: "Cloud AI",
    description: "Scalable AI solutions powered by cloud infrastructure",
    icon: Cloud,
    gradient: "from-amber-500 to-orange-500",
    features: [
      "Distributed Computing",
      "Auto-scaling",
      "High Availability",
      "Global Deployment"
    ]
  },
  {
    title: "AI Security",
    description: "Protect your AI systems with advanced security measures",
    icon: Shield,
    gradient: "from-red-500 to-rose-500",
    features: [
      "Model Protection",
      "Data Privacy",
      "Secure Training",
      "Access Control"
    ]
  },
  {
    title: "AI Development",
    description: "Custom AI development services for your business",
    icon: Code,
    gradient: "from-indigo-500 to-violet-500",
    features: [
      "Custom Solutions",
      "API Integration",
      "Technical Consulting",
      "Maintenance & Support"
    ]
  }
];

const SolutionCard = memo(function SolutionCard({ 
  solution,
  index
}: { 
  solution: typeof solutions[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/5 to-white/0 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm p-8 transition-colors duration-300 hover:border-purple-500/30">
        {/* Icon with gradient background */}
        <div className="mb-6 relative">
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${solution.gradient} opacity-10 blur-xl transition-opacity duration-300 group-hover:opacity-20`} />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black">
            <solution.icon className="h-7 w-7 text-white" />
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
          {solution.title}
        </h3>
        
        <p className="text-white/60 mb-6">
          {solution.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-6">
          {solution.features.map((feature, i) => (
            <motion.li
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-center gap-2 text-sm text-white/50"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-purple-500/50" />
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* Learn more link */}
        <div className="pt-6 border-t border-white/5">
          <Link 
            href={`/solutions/${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Learn more
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
});

export default function Solutions() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
      
      <motion.div style={{ y }} className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
          >
            <Cpu className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">Enterprise Solutions</span>
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              With AI
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/60 max-w-2xl mx-auto mb-8"
          >
            Leverage our comprehensive suite of AI solutions to automate processes, optimize operations, and drive unprecedented growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <GradientButton className="group">
              Explore Solutions
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </GradientButton>
            <Link href="/contact">
              <GradientButton variant="secondary">
                Contact Sales
              </GradientButton>
            </Link>
          </motion.div>
        </div>

        {/* Solutions grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <SolutionCard key={solution.title} solution={solution} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 backdrop-blur-sm">
            <Workflow className="w-5 h-5 text-white/40 mr-2" />
            <span className="text-white/40 text-sm">Powering next-generation AI applications</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 