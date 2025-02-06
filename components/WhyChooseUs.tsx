"use client";

import { memo } from "react";
import { 
  Award,
  Zap,
  Users,
  Clock,
  Shield,
  Sparkles,
  BarChart3,
  Globe
} from "lucide-react";

interface Advantage {
  title: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const advantages: Advantage[] = [
  {
    title: "Industry Leadership",
    description: "Recognized as a leader in AI innovation with multiple industry awards",
    icon: Award,
    gradient: "from-yellow-500 to-amber-500"
  },
  {
    title: "Rapid Deployment",
    description: "Get your AI solutions up and running in days, not months",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Expert Team",
    description: "Work with world-class AI researchers and engineers",
    icon: Users,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support and monitoring for your AI systems",
    icon: Clock,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "Enterprise Security",
    description: "Bank-grade security and data protection measures",
    icon: Shield,
    gradient: "from-red-500 to-rose-500"
  },
  {
    title: "Cutting-edge Tech",
    description: "Access to the latest AI models and technologies",
    icon: Sparkles,
    gradient: "from-indigo-500 to-violet-500"
  },
  {
    title: "Proven Results",
    description: "Measurable ROI and performance improvements",
    icon: BarChart3,
    gradient: "from-orange-500 to-amber-500"
  },
  {
    title: "Global Presence",
    description: "Supporting clients across 30+ countries worldwide",
    icon: Globe,
    gradient: "from-teal-500 to-emerald-500"
  }
];

const AdvantageCard = memo(function AdvantageCard({ advantage }: { advantage: Advantage }) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-br from-white/[0.05] to-white/[0.08] 
        transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative p-6 rounded-2xl border border-white/[0.08]">
        <div className="flex items-start gap-4">
          <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${advantage.gradient} 
            bg-opacity-10 transition-transform duration-300 group-hover:scale-110`}>
            <advantage.icon className="w-6 h-6 text-white/90" />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white/90">{advantage.title}</h3>
            <p className="text-white/60">{advantage.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default memo(function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-white/5 backdrop-blur-sm mb-8">
            <Award className="w-6 h-6 text-yellow-400 mr-2" />
            <span className="text-white/80">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            The Leading AI Agency
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Partner with us to leverage cutting-edge AI technology and transform your business with our proven expertise.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage) => (
            <AdvantageCard key={advantage.title} advantage={advantage} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center gap-8 p-4 rounded-2xl bg-white/5 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-sm text-white/40">Client Satisfaction</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-white/40">Projects Delivered</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                30+
              </div>
              <div className="text-sm text-white/40">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}); 