"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from "framer-motion";
import { useEffect, useState, useRef, memo } from "react";
import Link from "next/link";
import { ArrowRight, Bot, Brain, Sparkles, ChevronRight, Award, Zap, Users, Clock, Shield, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroGeometricProps {
  badge: string;
  title1: string;
  title2: string;
}

const advantages = [
  {
    title: "Industry Leadership",
    description: "Recognized as a leader in AI innovation",
    icon: Award,
    gradient: "from-yellow-500/20 to-amber-500/20",
    iconGradient: "from-yellow-500 to-amber-500"
  },
  {
    title: "Rapid Deployment",
    description: "Get your AI solutions up and running in days",
    icon: Zap,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconGradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Expert Team",
    description: "Work with world-class AI researchers",
    icon: Users,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconGradient: "from-purple-500 to-pink-500"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock monitoring and support",
    icon: Clock,
    gradient: "from-green-500/20 to-emerald-500/20",
    iconGradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security measures",
    icon: Shield,
    gradient: "from-red-500/20 to-rose-500/20",
    iconGradient: "from-red-500 to-rose-500"
  },
  {
    title: "Global Presence",
    description: "Supporting clients across 30+ countries",
    icon: Globe,
    gradient: "from-indigo-500/20 to-violet-500/20",
    iconGradient: "from-indigo-500 to-violet-500"
  }
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "500+", label: "Projects Delivered" },
  { value: "30+", label: "Countries Served" }
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
      className="group relative h-full"
    >
      <div className={cn(
        "absolute -inset-px rounded-2xl bg-gradient-to-br opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-40",
        advantage.gradient
      )} />
      <div className="relative h-full rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={cn(
            "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br",
            advantage.iconGradient
          )}>
            <advantage.icon className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors">
              {advantage.title}
            </h3>
            <p className="text-sm text-white/40">
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
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 opacity-20 blur-sm transition-opacity duration-300 group-hover:opacity-40" />
      <div className="relative rounded-2xl border border-white/10 bg-black/50 backdrop-blur-sm p-8 text-center">
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

export function HeroGeometric({ badge, title1, title2 }: HeroGeometricProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setMousePosition({ x, y });
  };

  const x = useSpring(0, { stiffness: 100, damping: 30 });
  const y = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    x.set(mousePosition.x * 20);
    y.set(mousePosition.y * 20);
  }, [mousePosition, x, y]);

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black py-20"
    >
      <BackgroundBeams />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/20 backdrop-blur-sm mb-8"
          >
            <Award className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              {badge}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
          >
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              {title1}{" "}
            </span>
            <span className="bg-gradient-to-br from-purple-400 to-violet-400 bg-clip-text text-transparent">
              {title2}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-12"
          >
            Partner with us to leverage cutting-edge AI technology and transform your business with our proven expertise.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <Link href="/solutions">
              <div className="group relative">
                <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 opacity-50 blur transition duration-1000 group-hover:opacity-75" />
                <button className="relative flex items-center gap-2 rounded-lg bg-black px-8 py-4 text-base font-semibold text-white transition duration-200 hover:bg-neutral-950">
                  Get Started
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </Link>
            <Link href="/contact">
              <button className="flex items-center gap-2 rounded-lg border border-white/10 px-8 py-4 text-base font-semibold text-white transition duration-200 hover:bg-white/5">
                Schedule Demo
                <ChevronRight className="w-5 h-5" />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20"
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
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