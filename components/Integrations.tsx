"use client";

import { memo } from "react";
import { Puzzle } from "lucide-react";
import { GradientButton } from "./ui/gradient-button";
import {
  AWSLogo,
  GCPLogo,
  AzureLogo,
  TensorFlowLogo,
  PyTorchLogo,
  DockerLogo,
  KubernetesLogo,
  MongoDBLogo
} from "./ui/integration-logos";

const integrations = [
  {
    name: "AWS",
    Logo: AWSLogo,
    description: "Cloud Infrastructure",
    gradient: "from-[#FF9900] to-[#FFC300]"
  },
  {
    name: "Google Cloud",
    Logo: GCPLogo,
    description: "ML & Analytics",
    gradient: "from-[#4285F4] to-[#34A853]"
  },
  {
    name: "Microsoft Azure",
    Logo: AzureLogo,
    description: "Enterprise Solutions",
    gradient: "from-[#008AD7] to-[#00A4EF]"
  },
  {
    name: "TensorFlow",
    Logo: TensorFlowLogo,
    description: "ML Framework",
    gradient: "from-[#FF6F00] to-[#FF9900]"
  },
  {
    name: "PyTorch",
    Logo: PyTorchLogo,
    description: "Deep Learning",
    gradient: "from-[#EE4C2C] to-[#FF6F00]"
  },
  {
    name: "Docker",
    Logo: DockerLogo,
    description: "Containerization",
    gradient: "from-[#2496ED] to-[#2496ED]"
  },
  {
    name: "Kubernetes",
    Logo: KubernetesLogo,
    description: "Orchestration",
    gradient: "from-[#326CE5] to-[#326CE5]"
  },
  {
    name: "MongoDB",
    Logo: MongoDBLogo,
    description: "Database",
    gradient: "from-[#13AA52] to-[#00ED64]"
  }
];

const IntegrationCard = memo(function IntegrationCard({ 
  integration 
}: { 
  integration: typeof integrations[0] 
}) {
  return (
    <div className="group relative">
      <div className={`absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-br ${integration.gradient} 
        transition-opacity duration-300 group-hover:opacity-10`} />
      
      <div className="relative flex items-center gap-4 rounded-2xl border border-white/[0.08] p-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-white/[0.03] p-2">
          <integration.Logo className="w-full h-full transition-transform duration-300 group-hover:scale-110" />
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