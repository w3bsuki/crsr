"use client";

import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { GradientButton } from "./gradient-button";

interface HeroGeometricProps {
    badge: string;
    title1: string;
    title2: string;
}

interface Transforms {
    rotateX: MotionValue<number>;
    rotateY: MotionValue<number>;
}

export function ClientHero({ badge, title1, title2 }: HeroGeometricProps) {
    const [isMobile, setIsMobile] = useState(false);
    const [mounted, setMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { stiffness: 125, damping: 25 };
    
    // Initialize transforms after component mounts
    const [transforms, setTransforms] = useState<Transforms | null>(null);

    useEffect(() => {
        setMounted(true);
        const rotateX = useSpring(useTransform(mouseY, [0, window.innerHeight], [15, -15]), springConfig);
        const rotateY = useSpring(useTransform(mouseX, [0, window.innerWidth], [-15, 15]), springConfig);
        setTransforms({ rotateX, rotateY });

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        const handleMouseMove = (e: MouseEvent) => {
            if (!isMobile) {
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener('resize', checkMobile);
        };
    }, [mouseX, mouseY, springConfig]);

    // Don't render until after mount
    if (!mounted || !transforms) {
        return (
            <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 py-16 md:py-24">
                <div className="relative z-10 text-center">
                    <div className="mx-auto mb-6 h-10 w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500" />
                    <div className="inline-block mb-4 md:mb-6 text-xs md:text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                        Loading...
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6 opacity-50">
                        <span className="block">{title1}</span>
                        <span className="block bg-gradient-to-r from-indigo-500 via-rose-400 to-indigo-500 bg-clip-text text-transparent">
                            {title2}
                        </span>
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 text-center"
            >
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                        duration: 1
                    }}
                    whileHover={!isMobile ? { 
                        scale: 1.1,
                        rotate: 180,
                        transition: { duration: 0.8 }
                    } : undefined}
                    className="mx-auto mb-6 h-10 w-10 md:h-12 md:w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500"
                />
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="inline-block mb-4 md:mb-6 text-xs md:text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent"
                >
                    {badge}
                </motion.span>
                <motion.h1 
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
                    style={{
                        perspective: "1000px",
                        transform: "perspective(1000px)",
                        rotateX: !isMobile ? transforms.rotateX : 0,
                        rotateY: !isMobile ? transforms.rotateY : 0
                    }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="block"
                    >
                        {title1}
                    </motion.span>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        className="block bg-gradient-to-r from-indigo-500 via-rose-400 to-indigo-500 bg-clip-text text-transparent"
                    >
                        {title2}
                    </motion.span>
                </motion.h1>
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="relative mx-auto max-w-[800px] mb-8 md:mb-12"
                >
                    <div 
                        className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                            background: mounted && !isMobile ? useMotionTemplate`radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(79,70,229,0.15), transparent 80%)` as unknown as string : undefined
                        }}
                    />
                    <p className="text-base sm:text-lg md:text-xl text-white/70 px-4 md:px-0">
                        Experience the next generation of AI-powered solutions. Our platform combines cutting-edge technology with intuitive design to deliver unprecedented results.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <GradientButton className="w-full sm:w-auto min-w-[200px]">Get Started</GradientButton>
                    <GradientButton variant="secondary" className="w-full sm:w-auto min-w-[200px]">Learn More</GradientButton>
                </motion.div>
            </motion.div>
        </div>
    );
} 