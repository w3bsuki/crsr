"use client";

import { memo } from "react";
import { 
  Bot, 
  Brain, 
  Cpu, 
  Network, 
  Shield, 
  Sparkles,
  BarChart,
  Cloud,
  Code
} from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

interface Solution {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  features: string[];
}

const solutions: Solution[] = [
  {
    title: "Generative AI",
    description: "Create content, images, and code with state-of-the-art AI models",
    icon: Sparkles,
    gradient: "from-purple-500/10 to-pink-500/10",
    features: [
      "Text-to-Image Generation",
      "Code Completion",
      "Content Creation",
      "Custom Model Training"
    ]
  },
  {
    title: "Machine Learning",
    description: "Build and deploy custom ML models for your specific needs",
    icon: Brain,
    gradient: "from-blue-500/10 to-cyan-500/10",
    features: [
      "Predictive Analytics",
      "Pattern Recognition",
      "Automated Learning",
      "Model Optimization"
    ]
  },
  {
    title: "Neural Networks",
    description: "Deep learning solutions for complex problem-solving",
    icon: Network,
    gradient: "from-green-500/10 to-emerald-500/10",
    features: [
      "Deep Learning",
      "Image Recognition",
      "Natural Language Processing",
      "Speech Recognition"
    ]
  },
  {
    title: "Cloud AI",
    description: "Scalable AI solutions powered by cloud infrastructure",
    icon: Cloud,
    gradient: "from-orange-500/10 to-amber-500/10",
    features: [
      "Distributed Computing",
      "Auto-scaling",
      "High Availability",
      "Global Deployment"
    ]
  },
  {
    title: "AI Security",
    description: "Protect your AI systems with advanced security measures",
    icon: Shield,
    gradient: "from-red-500/10 to-rose-500/10",
    features: [
      "Model Protection",
      "Data Privacy",
      "Secure Training",
      "Access Control"
    ]
  },
  {
    title: "AI Development",
    description: "Custom AI development services for your business",
    icon: Code,
    gradient: "from-indigo-500/10 to-violet-500/10",
    features: [
      "Custom Solutions",
      "API Integration",
      "Technical Consulting",
      "Maintenance & Support"
    ]
  }
];

const SolutionCard = memo(function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <div className="group relative">
      <div className={`absolute inset-0 rounded-3xl opacity-50 bg-gradient-to-br ${solution.gradient} 
        transition-opacity duration-300 group-hover:opacity-70`} />
      
      <div className="relative h-full p-8 rounded-3xl border border-white/[0.08]">
        <div className="flex items-start justify-between mb-6">
          <solution.icon className="w-8 h-8 text-white/90" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium bg-white/10 rounded-full px-3 py-1">
              Enterprise
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
        <p className="text-white/60 mb-8">{solution.description}</p>

        <ul className="space-y-3 mb-8">
          {solution.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-white/70">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <GradientButton variant="secondary" className="w-full">
            Learn More
          </GradientButton>
        </div>
      </div>
    </div>
  );
});

export default memo(function Solutions() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-white/5 backdrop-blur-sm mb-8">
            <Cpu className="w-6 h-6 text-blue-400 mr-2" />
            <span className="text-white/80">AI Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Enterprise AI Solutions
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Leverage cutting-edge AI technology to transform your business with our comprehensive suite of solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <GradientButton>Get Started</GradientButton>
            <GradientButton variant="secondary">Contact Sales</GradientButton>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <SolutionCard key={solution.title} solution={solution} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/5 backdrop-blur-sm">
            <BarChart className="w-5 h-5 text-white/40 mr-2" />
            <span className="text-white/40 text-sm">Trusted by Fortune 500 companies</span>
          </div>
        </div>
      </div>
    </section>
  );
}); 