"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Dynamically import GradientButton to reduce initial bundle size
const GradientButton = dynamic(() => import('./gradient-button').then(mod => mod.GradientButton), {
  ssr: false,
  loading: () => <button className="w-full sm:w-auto min-w-[200px] px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-medium">
    Loading...
  </button>
});

interface HeroGeometricProps {
    badge: string;
    title1: string;
    title2: string;
}

// Separate mobile component for better code splitting
function MobileHero({ badge, title1, title2 }: HeroGeometricProps) {
    return (
        <div className="relative w-full max-w-[1400px] mx-auto px-4 py-12">
            <div className="text-center">
                <div className="mx-auto mb-4 h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500" />
                <div className="inline-block mb-4 text-xs font-medium tracking-wider uppercase bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                    {badge}
                </div>
                <h1 className="text-4xl font-bold tracking-tight leading-[1.1] mb-6">
                    <span className="block mb-2">{title1}</span>
                    <span className="block bg-gradient-to-r from-indigo-500 via-rose-400 to-indigo-500 bg-clip-text text-transparent">
                        {title2}
                    </span>
                </h1>
                <div className="mx-auto max-w-[800px] mb-8">
                    <p className="text-base text-white/70 px-4">
                        Experience the next generation of AI-powered solutions. Our platform combines cutting-edge technology with intuitive design to deliver unprecedented results.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <GradientButton className="w-full">Get Started</GradientButton>
                    <GradientButton variant="secondary" className="w-full">Learn More</GradientButton>
                </div>
            </div>
        </div>
    );
}

export function ClientHero(props: HeroGeometricProps) {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        checkMobile();
        
        let timeoutId: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(checkMobile, 100);
        };
        
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    if (isMobile) {
        return <MobileHero {...props} />;
    }

    return (
        <div className="relative w-full max-w-[1400px] mx-auto px-4 py-16">
            <div className="text-center">
                <div className="mx-auto mb-6 h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500" />
                <span className="inline-block mb-6 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                    {props.badge}
                </span>
                <h1 className="text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                    <span className="block">{props.title1}</span>
                    <span className="block bg-gradient-to-r from-indigo-500 via-rose-400 to-indigo-500 bg-clip-text text-transparent">
                        {props.title2}
                    </span>
                </h1>
                <div className="mx-auto max-w-[800px] mb-8">
                    <p className="text-lg text-white/70">
                        Experience the next generation of AI-powered solutions. Our platform combines cutting-edge technology with intuitive design to deliver unprecedented results.
                    </p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <GradientButton className="min-w-[200px]">Get Started</GradientButton>
                    <GradientButton variant="secondary" className="min-w-[200px]">Learn More</GradientButton>
                </div>
            </div>
        </div>
    );
} 