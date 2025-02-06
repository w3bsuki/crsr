"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { GradientButton } from "./gradient-button";
import Link from "next/link";
import dynamic from 'next/dynamic';
import { ArrowRight, Bot, Brain, Sparkles } from "lucide-react";

const ClientHero = dynamic(() => import('./client-hero').then(mod => mod.ClientHero), {
  ssr: false,
  loading: () => <HeroLoadingState />
});

const HeroLoadingState = () => (
  <div className="relative w-full max-w-[1200px] mx-auto px-4 md:px-6 py-16 md:py-24">
    <div className="animate-pulse space-y-8">
      <div className="h-4 bg-white/5 rounded w-24 mx-auto" />
      <div className="h-12 bg-white/5 rounded w-96 mx-auto" />
      <div className="h-4 bg-white/5 rounded w-64 mx-auto" />
    </div>
  </div>
);

const StatsItem = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <div className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
      {value}
    </div>
    <div className="text-sm text-white/60">{label}</div>
  </div>
);

const FeatureHighlight = ({ icon: Icon, text }: { icon: React.ElementType; text: string }) => (
  <div className="flex items-center gap-2 text-white/70">
    <Icon className="w-4 h-4 text-purple-400" />
    <span className="text-sm">{text}</span>
  </div>
);

interface HeroGeometricProps {
  badge: string;
  title1: string;
  title2: string;
}

export function HeroGeometric({ badge, title1, title2 }: HeroGeometricProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 2 - 1;
    const y = (clientY / innerHeight) * 2 - 1;
    setMousePosition({ x, y });
  };

  return (
    <section 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, transparent 70%)",
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />

      <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400 font-medium">{badge}</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              {title1}{" "}
            </span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {title2}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-white/60 max-w-xl mb-8"
          >
            Transform your business with our enterprise AI platform. Automate processes and drive growth with intelligent solutions.
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <GradientButton className="group text-lg px-8 py-3">
              Book a Demo
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </GradientButton>

            {/* Secondary CTAs */}
            <div className="flex items-center gap-4">
              <Link href="/agents">
                <GradientButton variant="secondary" className="text-sm px-6">
                  Agents
                </GradientButton>
              </Link>
              <Link href="/solutions">
                <GradientButton variant="secondary" className="text-sm px-6">
                  Solutions
                </GradientButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 