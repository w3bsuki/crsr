"use client";

import { useEffect, useCallback, useState } from "react";
import { GradientButton } from "./gradient-button";
import dynamic from 'next/dynamic';

interface HeroGeometricProps {
    badge: string;
    title1: string;
    title2: string;
}

// Prevent layout shift with defined heights
const CONTAINER_HEIGHTS = {
    mobile: 'min-h-[600px]',
    tablet: 'md:min-h-[700px]',
    desktop: 'lg:min-h-[800px]',
};

export function ClientHero({ badge, title1, title2 }: HeroGeometricProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Mark component as loaded after hydration
        setIsLoaded(true);
    }, []);

    return (
        <section 
            className={`
                relative w-full max-w-[1400px] mx-auto 
                px-4 sm:px-6 lg:px-8 
                py-8 sm:py-12 lg:py-16
                ${CONTAINER_HEIGHTS.mobile} 
                ${CONTAINER_HEIGHTS.tablet} 
                ${CONTAINER_HEIGHTS.desktop}
                flex items-center justify-center
                transition-opacity duration-300
                ${isLoaded ? 'opacity-100' : 'opacity-0'}
            `}
        >
            <div className="text-center max-w-4xl mx-auto">
                {/* Logo/Icon with responsive sizing */}
                <div 
                    className="
                        mx-auto mb-4 sm:mb-6 
                        h-10 w-10 sm:h-12 sm:w-12 
                        rounded-xl 
                        bg-gradient-to-br from-indigo-500 to-rose-500
                        transform transition-transform duration-300 hover:scale-110
                    "
                />

                {/* Badge with responsive text */}
                <span 
                    className="
                        inline-block mb-4 sm:mb-6 
                        text-xs sm:text-sm 
                        font-medium tracking-wider uppercase 
                        bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 
                        bg-clip-text text-transparent
                        transition-all duration-300
                    "
                >
                    {badge}
                </span>

                {/* Heading with responsive typography */}
                <h1 className="
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                    font-bold tracking-tight 
                    mb-4 sm:mb-6
                    transition-all duration-300
                ">
                    <span className="block mb-2 transition-all duration-300">
                        {title1}
                    </span>
                    <span className="
                        block 
                        bg-gradient-to-r from-indigo-500 via-rose-400 to-indigo-500 
                        bg-clip-text text-transparent
                        transition-all duration-300
                    ">
                        {title2}
                    </span>
                </h1>

                {/* Description with responsive text */}
                <div className="
                    mx-auto max-w-[800px] 
                    mb-6 sm:mb-8 
                    px-4 sm:px-6
                ">
                    <p className="
                        text-base sm:text-lg md:text-xl 
                        text-white/70
                        transition-all duration-300
                    ">
                        Experience the next generation of AI-powered solutions. Our platform combines cutting-edge technology with intuitive design to deliver unprecedented results.
                    </p>
                </div>

                {/* Buttons with responsive layout */}
                <div className="
                    flex flex-col sm:flex-row 
                    items-center justify-center 
                    gap-3 sm:gap-4
                    transition-all duration-300
                ">
                    <GradientButton className="
                        w-full sm:w-auto 
                        min-w-[200px]
                        transition-all duration-300
                    ">
                        Get Started
                    </GradientButton>
                    <GradientButton 
                        variant="secondary" 
                        className="
                            w-full sm:w-auto 
                            min-w-[200px]
                            transition-all duration-300
                        "
                    >
                        Learn More
                    </GradientButton>
                </div>
            </div>
        </section>
    );
} 