"use client";

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GradientButton } from "./gradient-button";
import Link from "next/link";
import dynamic from 'next/dynamic';

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
    isMobile = false,
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
    isMobile?: boolean;
}) {
    // Reduce animation complexity on mobile
    const animation = isMobile ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 1, delay }
    } : {
        initial: {
            opacity: 0,
            y: -150,
            rotate: rotate - 15,
        },
        animate: {
            opacity: 1,
            y: 0,
            rotate: rotate,
        },
        transition: {
            duration: 2.4,
            delay,
            ease: [0.23, 0.86, 0.39, 0.96],
            opacity: { duration: 1.2 },
        }
    };

    return (
        <motion.div
            {...animation}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={!isMobile ? {
                    y: [0, 15, 0],
                } : undefined}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width: isMobile ? width * 0.7 : width,
                    height: isMobile ? height * 0.7 : height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
                        "clip-path-hexagon transform-gpu",
                        "before:absolute before:inset-[1px]",
                        "before:bg-gradient-to-r before:from-transparent before:via-white/[0.05] before:to-transparent",
                        "before:animate-pulse-slow"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

// Import the client-side only component with no SSR
const ClientHero = dynamic(() => import('./client-hero').then(mod => mod.ClientHero), {
  ssr: false,
  loading: () => (
    <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 py-16 md:py-24">
      <div className="relative z-10 text-center">
        <div className="mx-auto mb-6 h-10 w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500" />
        <div className="inline-block mb-4 md:mb-6 text-xs md:text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
          Loading...
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6 opacity-50">
          <span className="block">One Solution,</span>
          <span className="block bg-gradient-to-r from-indigo-500 via-rose-400 to-indigo-500 bg-clip-text text-transparent">
            Our AI
          </span>
        </h1>
      </div>
    </div>
  )
});

interface HeroGeometricProps {
    badge: string;
    title1: string;
    title2: string;
}

interface Transforms {
    rotateX: MotionValue<number>;
    rotateY: MotionValue<number>;
}

export function HeroGeometric(props: HeroGeometricProps) {
    return <ClientHero {...props} />;
} 