import { Search, TrendingUp, BarChart3, Presentation, Sparkles, Globe, Target } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'global-services',
    title: 'Global Consulting',

    shortDesc: 'Expand your brand internationally with localised strategies and multi-market campaign expertise',
    description: 'Scale your brand across borders and markets with comprehensive marketing solutions designed for global growth.',
    icon: 'Globe',
    features: [
      'Global SEO & International Search Strategy - Dominate search across multiple countries',
      'International Paid Media Campaigns - Platform-specific strategies for each market',
      'Multi-Language Campaign Management - Navigate cultural nuances effectively',
      'Cross-Border E-commerce Setup - Technical implementation for global selling'
    ]
  },
  {
    id: 'paid-media',
    title: 'Performance Marketing / Paid Ads',

    shortDesc: 'Generate immediate results with performance-driven campaigns across Google, Meta, and marketplaces',
    description: 'Drive immediate results and scalable growth through precision-targeted paid campaigns across multiple platforms.',
    icon: 'TrendingUp',
    features: [
      'Performance Marketing - Results-obsessed campaign management',
      'PPC (Pay-Per-Click) - Capture high-intent traffic with expertly managed campaigns',
      'Meta Ads - Reach ideal customers on Facebook and Instagram',
      'Google Ads - Dominate Search, Display, Shopping, YouTube, and Performance Max',
      'Marketplace Ads - Strategic advertising on Amazon, Myntra, Nykaa, Ajio'
    ]
  },
  {
    id: 'lead-generation',
    title: 'Lead Generation',
    shortDesc: 'Fill your pipeline with high-quality, qualified prospects through targeted acquisition strategies',
    description: 'Comprehensive lead generation strategies designed to identify, attract, and qualify high-value prospects for your business.',
    icon: 'Target',
    features: [
      'B2B & B2C Lead Gen - Tailored strategies for your target market',
      'Account-Based Marketing (ABM) - Target high-value accounts with precision',
      'Pipeline Acceleration - Move leads through your sales funnel faster',
      'Lead Qualification - Ensure your sales team focuses on ready-to-buy prospects'
    ]
  },
  {
    id: 'organic-media',
    title: 'Organic Media',
    shortDesc: 'Drive sustainable traffic and authority through SEO, AEO, GEO, social media, and influencer partnerships',
    description: 'Build lasting visibility and authority across search and social platforms with strategies designed for the modern digital landscape.',
    icon: 'Search',
    features: [
      'SEO (Search Engine Optimisation) - Dominate search results with comprehensive optimisation strategies',
      'AEO (Answer Engine Optimisation) - Position your brand as the definitive answer to customer questions',
      'GEO (Generative Engine Optimisation) - Stay ahead with AI-driven search experience optimisation',
      'Social Media Managing - Build engaged communities and drive conversions',
      'Digital PR - Amplify your brand\'s voice and credibility',
      'Influencer Marketing - Connect with authentic voices your audience trusts',
      'Email & WhatsApp Marketing - Nurture relationships through personalised messaging'
    ]
  },
  {
    id: 'digital-pr',
    title: 'Digital PR & Influencer',
    shortDesc: 'Amplify your brand\'s voice and credibility through strategic digital PR and authentic influencer partnerships.',
    description: 'Build brand authority and trust through strategic storytelling, media relations, and authentic influencer collaborations that connect with your audience.',
    icon: 'Sparkles',
    features: [
      'Digital PR Strategy - Build relationships with key media outlets',
      'Influencer Marketing - Connect with authentic voices your audience trusts',
      'Brand Reputation - Manage and enhance your online presence',
      'Crisis Management - Strategic communication during critical times'
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    shortDesc: 'Transform data into actionable insights with advanced analytics, GA4, and conversion optimisation',
    description: 'Transform raw data into actionable insights that drive smarter decisions and better business outcomes.',
    icon: 'BarChart3',
    features: [
      'Google Analytics (GA4) - Expert implementation and configuration',
      'ROI Tracking - Prove the value of every marketing dollar',
      'Data Analytics & Insights - Advanced forecasting and full-funnel exploration',
      'Conversion Rate Optimisation - Systematic testing to increase conversions',
      'Ad Operations - Seamless platform integrations and accurate tracking'
    ]
  },
  {
    id: 'ai-creative',
    title: 'AI Creative Media',
    shortDesc: 'Leverage generative AI to produce high-impact creative at scale while maintaining brand consistency',
    description: 'High-end AI-driven creative media services that blend impactful storytelling with performance-driven results.',
    icon: 'Sparkles',
    features: [
      'Brand-First Creative - Your brand identity built into every ad',
      'AI-Powered Storytelling - Compelling creative at unprecedented speed and scale',
      'Performance-Driven Content - Creative designed with performance in mind',
      'Auto Brand Styling - Consistent voice tone and visuals across every platform'
    ]
  },
  {
    id: 'pre-sales',
    title: 'Pre-Sales Strategy',
    shortDesc: 'Win more deals with compelling pitch decks, proposals, and strategic sales support',
    description: 'Win more business with presentations and proposals that close deals before the competition knows what hit them.',
    icon: 'Presentation',
    features: [
      'Pre-Sales Planning & Support - Strategic planning from first contact to contract',
      'Pitch Deck Design - Compelling visual storytelling that captivates',
      'Proposal Writing - Persuasive proposals that position you as the obvious choice',
      'Client Journey Mapping - Optimise every touchpoint in the decision-making process'
    ]
  }
];
