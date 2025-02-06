"use client";

import { memo } from "react";
import { 
  Bot, 
  Brain, 
  Network, 
  Shield, 
  Sparkles,
  Cloud,
  Code,
  ArrowRight,
  ChevronRight,
  Cpu,
  Workflow,
  Boxes
} from "lucide-react";
import { motion, useScroll, useTransform, useMotionTemplate, MotionValue } from "framer-motion";
import { GradientButton } from "./ui/gradient-button";
import Link from "next/link";
import { cn } from "@/lib/utils";

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

function MovingGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-purple-500/30 [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]" />
      <motion.div
        initial={{ opacity: 0.5, scale: 1, x: -500, y: 0 }}
        animate={{ opacity: 1, scale: 1.25, x: 500, y: -100 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-3xl"
      />
    </div>
  );
}

interface CardPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function CardPattern({ mouseX, mouseY, className, ...props }: CardPatternProps) {
  const maskImage = useMotionTemplate`radial-gradient(
    350px at ${mouseX}px ${mouseY}px,
    white,
    transparent
  )`;

  return (
    <div className={cn("pointer-events-none", className)} {...props}>
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] bg-gradient-to-br from-purple-500/25 to-violet-500/25" />
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 opacity-0 transition-opacity duration-500 group-hover:opacity-5"
        style={{ maskImage }}
      />
    </div>
  );
}

const SolutionCard = memo(function SolutionCard({ 
  solution,
  mouseX,
  mouseY,
  index
}: { 
  solution: typeof solutions[0];
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-neutral-800/50 to-neutral-950/50 backdrop-blur-sm" />
      <CardPattern mouseX={mouseX} mouseY={mouseY} className="absolute inset-0 rounded-3xl" />
      
      <div className="relative rounded-3xl h-full p-8">
        {/* Icon */}
        <div className="mb-6 inline-flex">
          <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${solution.gradient}`}>
            <solution.icon className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {solution.title}
          </h3>
          
          <p className="text-white/60 text-sm leading-relaxed">
            {solution.description}
          </p>

          {/* Features */}
          <ul className="grid grid-cols-2 gap-3">
            {solution.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-center gap-2 text-xs text-white/50"
              >
                <div className={`h-1 w-1 rounded-full bg-gradient-to-br ${solution.gradient}`} />
                {feature}
              </motion.li>
            ))}
          </ul>

          {/* Link */}
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

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <MovingGradient />
      
      <motion.div style={{ y }} className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="relative text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/20 backdrop-blur-sm mb-6"
          >
            <Boxes className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Enterprise Solutions
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
            className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-8"
          >
            Leverage our comprehensive suite of AI solutions to automate processes, optimize operations, and drive unprecedented growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/solutions">
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 opacity-50 blur transition duration-1000 group-hover:opacity-75" />
                <button className="relative flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-neutral-950">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </Link>
            <Link href="/contact">
              <button className="flex items-center gap-2 rounded-lg border border-neutral-800 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/5">
                Contact Sales
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Solutions grid */}
        <div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          onMouseMove={onMouseMove}
        >
          {solutions.map((solution, index) => (
            <SolutionCard 
              key={solution.title} 
              solution={solution} 
              mouseX={mouseX}
              mouseY={mouseY}
              index={index} 
            />
          ))}
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/10 to-violet-500/10 px-4 py-2 text-sm text-white/40 backdrop-blur-sm">
            <Workflow className="w-4 h-4" />
            Powering next-generation AI applications
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 