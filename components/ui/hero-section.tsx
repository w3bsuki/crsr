"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-background px-6 py-24 sm:py-32 lg:px-8">
      {/* New tag */}
      <div className="absolute left-8 top-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-zinc-800/40 px-4 py-2 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-purple-400" />
          <span className="text-sm text-purple-400">New</span>
          <Button variant="link" className="h-auto p-0 text-sm text-purple-400">
            Introducing AI Agent SDK
            <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <h1 className="text-6xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                AI Agent
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                SDK
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Create powerful AI agent workflows with just a few lines of code, enabling complex task automation and decision-making processes.
            </p>
            <div className="mt-8">
              <Button size="lg" className="rounded-full bg-purple-500 hover:bg-purple-600">
                Get Started
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Available for all major programming languages
            </p>
            
            {/* Logos */}
            <div className="mt-12 flex flex-wrap items-center gap-8 opacity-70">
              <Image 
                src="/google.svg" 
                alt="Google" 
                width={100} 
                height={32} 
                className="h-8 w-auto grayscale"
              />
              <Image 
                src="/microsoft.svg" 
                alt="Microsoft" 
                width={100} 
                height={32} 
                className="h-8 w-auto grayscale"
              />
              <Image 
                src="/amazon.svg" 
                alt="Amazon" 
                width={100} 
                height={32} 
                className="h-8 w-auto grayscale"
              />
              <Image 
                src="/netflix.svg" 
                alt="Netflix" 
                width={100} 
                height={32} 
                className="h-8 w-auto grayscale"
              />
              <Image 
                src="/youtube.svg" 
                alt="YouTube" 
                width={100} 
                height={32} 
                className="h-8 w-auto grayscale"
              />
              <Image 
                src="/instagram.svg" 
                alt="Instagram" 
                width={100} 
                height={32} 
                className="h-8 w-auto grayscale"
              />
            </div>
          </div>

          {/* Right column - 3D Cube */}
          <div className="relative">
            <div className="aspect-square">
              <Image
                src="/cube.png"
                alt="3D Cube Illustration"
                width={500}
                height={500}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 