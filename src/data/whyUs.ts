export interface ComparisonRow {
  feature: string;
  us: string | boolean;
  agencies: string | boolean;
  tools: string | boolean;
}

export const comparisonData: ComparisonRow[] = [
  {
    feature: "Integrated Multi-Channel Strategy",
    us: true,
    agencies: "Limited",
    tools: false
  },
  {
    feature: "AI-Powered Creative at Scale",
    us: true,
    agencies: false,
    tools: "Basic"
  },
  {
    feature: "Global Market Expertise",
    us: true,
    agencies: "Rare",
    tools: false
  },
  {
    feature: "Transparent ROI Reporting",
    us: true,
    agencies: "Varies",
    tools: true
  },
  {
    feature: "Custom Strategy Development",
    us: true,
    agencies: true,
    tools: false
  },
  {
    feature: "Dedicated Account Management",
    us: true,
    agencies: "Extra Cost",
    tools: false
  },
  {
    feature: "24/7 Campaign Optimization",
    us: true,
    agencies: "Limited",
    tools: true
  },
  {
    feature: "SEO + AEO + GEO Combined",
    us: true,
    agencies: "Rare",
    tools: false
  }
];

export interface WhyUsFeature {
  title: string;
  description: string;
  icon: string;
}

export const whyUsFeatures: WhyUsFeature[] = [
  {
    title: "Integrated Expertise",
    description: "We don't just specialise in one channel. Our comprehensive approach ensures all your marketing efforts work together synergistically for maximum impact.",
    icon: "Layers"
  },
  {
    title: "AI-Powered Innovation",
    description: "We're early adopters of generative AI and emerging technologies, giving you a competitive advantage in creative production and search optimisation.",
    icon: "Cpu"
  },
  {
    title: "Global Reach, Local Impact",
    description: "Whether you're targeting customers in your city or across continents, we have the expertise to execute campaigns that resonate.",
    icon: "Globe"
  },
  {
    title: "Transparent Reporting",
    description: "No black boxes. You'll always know what we're doing, why we're doing it, and exactly how it's performing.",
    icon: "LineChart"
  },
  {
    title: "Proven Track Record",
    description: "Our strategies drive real results: increased revenue, lower acquisition costs, improved conversion rates, and sustainable growth.",
    icon: "Trophy"
  },
  {
    title: "Scalable Solutions",
    description: "Our services grow with you, from startup to enterprise, from local to global.",
    icon: "Rocket"
  }
];
