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
  <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 py-16 md:py-24">
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400 font-medium">Enterprise AI Platform</span>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                  {title1}{" "}
                </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {title2}
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-white/60 max-w-xl">
                Transform your business with our enterprise AI platform. Automate processes, optimize operations, and drive growth with intelligent solutions.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton className="group">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </GradientButton>
                <Link href="/demo">
                  <GradientButton variant="secondary">
                    Schedule Demo
                  </GradientButton>
                </Link>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <FeatureHighlight icon={Brain} text="Advanced AI Models" />
                <FeatureHighlight icon={Bot} text="Intelligent Agents" />
                <FeatureHighlight icon={Sparkles} text="Process Automation" />
                <FeatureHighlight icon={ArrowRight} text="Quick Integration" />
              </div>
            </motion.div>
          </div>

          {/* Right column - 3D Visualization */}
          <div className="relative lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              <div className="relative h-full rounded-3xl border border-white/10 bg-black/50 backdrop-blur-xl p-8">
                {/* Add your 3D visualization or demo content here */}
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                      <StatsItem value="99.9%" label="Uptime" />
                      <StatsItem value="500+" label="Enterprise Clients" />
                      <StatsItem value="24/7" label="Support" />
                      <StatsItem value="1B+" label="API Requests" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 