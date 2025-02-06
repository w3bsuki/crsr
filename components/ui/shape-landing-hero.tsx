"use client";

import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Bot, Brain, Sparkles, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-purple-500/30 [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]" />
      <motion.div
        initial={{ opacity: 0.5, scale: 1, x: -500, y: 0 }}
        animate={{ opacity: 1, scale: 1.25, x: 500, y: -100 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent blur-3xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,#9333ea29,transparent)]" />
    </div>
  );
};

const GlowingButton = ({ children, className, ...props }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-violet-500 opacity-50 blur transition duration-1000 group-hover:opacity-75" />
      <button 
        className={cn(
          "relative flex items-center gap-2 rounded-lg bg-black px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-neutral-950",
          className
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

const TextReveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );
};

const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-purple-500/50"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -100],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export function HeroGeometric() {
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
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black"
    >
      <BackgroundBeams />
      <FloatingParticles />
      
      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <TextReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                AI-Powered Solutions
              </span>
            </div>
          </TextReveal>

          {/* Main heading */}
          <TextReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                Transform Your Business{" "}
              </span>
              <span className="bg-gradient-to-br from-purple-400 to-violet-400 bg-clip-text text-transparent">
                With AI
              </span>
            </h1>
          </TextReveal>

          {/* Description */}
          <TextReveal delay={0.2}>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mb-8">
              Leverage our advanced AI solutions to automate processes and drive unprecedented growth.
            </p>
          </TextReveal>

          {/* CTAs */}
          <TextReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <GlowingButton>
                Book a Demo
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </GlowingButton>
              
              <div className="flex items-center gap-4">
                <Link href="/agents">
                  <button className="flex items-center gap-2 rounded-lg border border-neutral-800 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/5">
                    Agents
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/solutions">
                  <button className="flex items-center gap-2 rounded-lg border border-neutral-800 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-white/5">
                    Solutions
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </TextReveal>

          {/* Stats */}
          <TextReveal delay={0.4}>
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-1">
                  500+
                </div>
                <div className="text-sm text-white/40">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-1">
                  99.9%
                </div>
                <div className="text-sm text-white/40">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-1">
                  24/7
                </div>
                <div className="text-sm text-white/40">Support</div>
              </div>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
} 