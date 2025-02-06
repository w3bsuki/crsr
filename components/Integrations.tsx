"use client";

import { memo } from "react";
import Image from "next/image";
import { Puzzle } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";

const integrations = [
  {
    name: "AWS",
    logo: "/logos/aws.svg",
    description: "Cloud Infrastructure",
  },
  {
    name: "Google Cloud",
    logo: "/logos/google-cloud.svg",
    description: "ML & Analytics",
  },
  {
    name: "Microsoft Azure",
    logo: "/logos/azure.svg",
    description: "Enterprise Solutions",
  },
  {
    name: "TensorFlow",
    logo: "/logos/tensorflow.svg",
    description: "ML Framework",
  },
  {
    name: "PyTorch",
    logo: "/logos/pytorch.svg",
    description: "Deep Learning",
  },
  {
    name: "Docker",
    logo: "/logos/docker.svg",
    description: "Containerization",
  },
  {
    name: "Kubernetes",
    logo: "/logos/kubernetes.svg",
    description: "Orchestration",
  },
  {
    name: "MongoDB",
    logo: "/logos/mongodb.svg",
    description: "Database",
  }
];

const IntegrationCard = memo(function IntegrationCard({ 
  integration 
}: { 
  integration: typeof integrations[0] 
}) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative flex items-center gap-4 rounded-2xl border border-white/[0.08] p-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white/[0.03]">
          <Image
            src={integration.logo}
            alt={integration.name}
            fill
            className="object-contain p-2 transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <div>
          <h3 className="font-semibold text-white/90">{integration.name}</h3>
          <p className="text-sm text-white/60">{integration.description}</p>
        </div>
      </div>
    </div>
  );
});

export default memo(function Integrations() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-slate-950" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-white/5 backdrop-blur-sm mb-8">
            <Puzzle className="w-6 h-6 text-purple-400 mr-2" />
            <span className="text-white/80">Integrations</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
            Seamless Integration with Your Stack
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Connect with your existing tools and infrastructure. Our platform integrates with leading technologies to provide a unified experience.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <GradientButton>View All Integrations</GradientButton>
            <GradientButton variant="secondary">Request Integration</GradientButton>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {integrations.map((integration) => (
            <IntegrationCard key={integration.name} integration={integration} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/40 mb-8">
            And many more integrations available through our extensive API and SDK support.
          </p>
          <div className="inline-flex items-center justify-center p-2 rounded-2xl bg-white/5 backdrop-blur-sm">
            <span className="text-white/60 text-sm">Trusted by Fortune 500 companies</span>
          </div>
        </div>
      </div>
    </section>
  );
}); 