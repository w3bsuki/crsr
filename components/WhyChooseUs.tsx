"use client";

import { memo } from "react";
import { 
  Award,
  Zap,
  Users,
  Clock,
  Shield,
  Sparkles,
  BarChart3,
  Globe,
  Bot
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Advantage {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  iconGradient: string;
}

const advantages: Advantage[] = [
  {
    title: "Industry Leadership",
    description: "Recognized as a leader in AI innovation with multiple industry awards",
    icon: Award,
    gradient: "from-yellow-500/20 to-amber-500/20",
    iconGradient: "from-yellow-500 to-amber-500"
  },
  {
    title: "Rapid Deployment",
    description: "Get your AI solutions up and running in days, not months",
    icon: Zap,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Expert Team",
    description: "Work with world-class AI researchers and engineers",
    icon: Users,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconGradient: "from-purple-500 to-pink-500"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support for your systems",
    icon: Clock,
    gradient: "from-green-500/20 to-emerald-500/20",
    iconGradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security and data protection measures",
    icon: Shield,
    gradient: "from-red-500/20 to-rose-500/20",
    iconGradient: "from-red-500 to-rose-500"
  },
  {
    title: "Global Presence",
    description: "Supporting clients across 30+ countries worldwide",
    icon: Globe,
    gradient: "from-indigo-500/20 to-violet-500/20",
    iconGradient: "from-indigo-500 to-violet-500"
  },
  {
    title: "Proven Results",
    description: "Measurable ROI and performance improvements",
    icon: BarChart3,
    gradient: "from-orange-500/20 to-amber-500/20",
    iconGradient: "from-orange-500 to-amber-500"
  },
  {
    title: "AI Agents",
    description: "Intelligent agents for specialized business functions",
    icon: Bot,
    gradient: "from-teal-500/20 to-emerald-500/20",
    iconGradient: "from-teal-500 to-emerald-500"
  }
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "500+", label: "Projects Delivered" },
  { value: "30+", label: "Countries Served" }
];

const AdvantageCard = memo(function AdvantageCard({ 
  advantage,
  index 
}: { 
  advantage: typeof advantages[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-[180px] w-full"
    >
      <div className={cn(
        "absolute -inset-px rounded-2xl bg-gradient-to-br opacity-20 blur-[2px] transition-all duration-500 group-hover:opacity-40",
        advantage.gradient
      )} />
      <div className="relative h-full rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-6 flex flex-col">
        <div className="flex items-start gap-4">
          <div className={cn(
            "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br",
            advantage.iconGradient
          )}>
            <advantage.icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1 min-h-[76px]">
            <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
              {advantage.title}
            </h3>
            <p className="text-sm text-white/40 mt-1 line-clamp-2">
              {advantage.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

const StatCard = memo(function StatCard({ 
  stat,
  index 
}: { 
  stat: typeof stats[0]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 opacity-20 blur-[2px] transition-opacity duration-300 group-hover:opacity-40" />
      <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-6 text-center">
        <div className="text-4xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent mb-2">
          {stat.value}
        </div>
        <div className="text-sm text-white/40">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
});

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 overflow-hidden">
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
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              The Leading{" "}
            </span>
            <span className="bg-gradient-to-br from-purple-400 to-violet-400 bg-clip-text text-transparent">
              AI Agency
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-white/60 max-w-2xl mx-auto mb-16"
          >
            Partner with us to leverage cutting-edge AI technology and transform your business with our proven expertise.
          </motion.p>
        </div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-20"
        >
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={advantage.title}
              advantage={advantage}
              index={index}
            />
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
} 