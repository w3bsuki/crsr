"use client";

import { GradientButton } from "./gradient-button";

interface HeroGeometricProps {
    badge: string;
    title1: string;
    title2: string;
}

export function ClientHero({ badge, title1, title2 }: HeroGeometricProps) {
    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 py-16">
            <div className="text-center">
                <div className="mx-auto mb-6 h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-rose-500" />
                <span className="inline-block mb-6 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
                    {badge}
                </span>
                <h1 className="text-5xl font-bold tracking-tight mb-6">
                    <span className="block">{title1}</span>
                    <span className="block bg-gradient-to-r from-indigo-500 via-rose-400 to-indigo-500 bg-clip-text text-transparent">
                        {title2}
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