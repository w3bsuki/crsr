"use client";

import { memo } from "react";
import { 
  Bot, 
  Brain, 
  Building2, 
  Code2, 
  Workflow,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Boxes,
  LineChart,
  ShieldCheck,
  Cpu,
  Network,
  Zap
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const useCases = [
  {
    title: "Financial Services",
    description: "Transform financial operations with AI-powered automation and analytics",
    icon: LineChart,
    gradient: "from-blue-500 to-cyan-500",
    stats: [
      { value: "85%", label: "Cost Reduction" },
      { value: "3.5x", label: "ROI" },
      { value: "95%", label: "Accuracy" }
    ],
    features: [
      "Risk Assessment",
      "Fraud Detection",
      "Portfolio Management",
      "Market Analysis"
    ],
    image: "/images/finance.webp"
  },
  {
    title: "Healthcare",
    description: "Enhance patient care and streamline medical operations with AI",
    icon: ShieldCheck,
    gradient: "from-emerald-500 to-green-500",
    stats: [
      { value: "90%", label: "Diagnosis Accuracy" },
      { value: "60%", label: "Time Saved" },
      { value: "24/7", label: "Monitoring" }
    ],
    features: [
      "Patient Monitoring",
      "Diagnostic Support",
      "Treatment Planning",
      "Resource Optimization"
    ],
    image: "/images/healthcare.webp"
  },
  {
    title: "Manufacturing",
    description: "Optimize production and quality control with intelligent automation",
    icon: Cpu,
    gradient: "from-purple-500 to-violet-500",
    stats: [
      { value: "40%", label: "Efficiency Gain" },
      { value: "75%", label: "Defect Reduction" },
      { value: "99.9%", label: "Uptime" }
    ],
    features: [
      "Predictive Maintenance",
      "Quality Control",
      "Supply Chain Optimization",
      "Production Planning"
    ],
    image: "/images/manufacturing.webp"
  }
];

const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#9333ea29,transparent)]" />
      <motion.div
        initial={{ opacity: 0.5, scale: 1, x: -500, y: 0 }}
        animate={{ opacity: 1, scale: 1.25, x: 500, y: -100 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-3xl"
      />
    </div>
  );
};

const UseCaseCard = memo(function UseCaseCard({ 
  useCase,
  index 
}: { 
  useCase: typeof useCases[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative"
    >
      {/* Card Background */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-violet-500/30 to-purple-500/30 opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative rounded-3xl border border-white/10 bg-black/50 backdrop-blur-sm p-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${useCase.gradient}`}>
            <useCase.icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
              {useCase.title}
            </h3>
            <p className="text-white/60 text-sm">
              {useCase.description}
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {useCase.stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-white/5">
              <div className="text-2xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {useCase.features.map((feature, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-br ${useCase.gradient}`} />
              <span className="text-sm text-white/70">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-6 border-t border-white/5">
          <Link href={`/use-cases/${useCase.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
              Learn more
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
});

export default function UseCases() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="relative py-32 overflow-hidden">
      <BackgroundBeams />
      
      <motion.div style={{ y }} className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/20 backdrop-blur-sm mb-6"
          >
            <Boxes className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Industry Solutions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Transforming Industries{" "}
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
            Discover how our AI solutions are revolutionizing different industries and delivering measurable results.
          </motion.p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={useCase.title}
              useCase={useCase}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link href="/contact">
            <div className="group relative inline-flex">
              <div className="absolute -inset-px rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 opacity-50 blur transition duration-1000 group-hover:opacity-75" />
              <button className="relative flex items-center gap-2 rounded-lg bg-black px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-neutral-950">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
} 