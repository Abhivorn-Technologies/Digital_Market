import { Search, TrendingUp, BarChart3, Presentation, Sparkles, Globe, Target, Mail } from 'lucide-react';

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
      'International Paid Media Campaigns - Platform-specific strategies for each market'
    ]
  },
  {
    id: 'paid-media',
    title: 'Paid Ads Search & Social Media',

    shortDesc: 'Generate immediate results with performance-driven campaigns across Google, Meta, and marketplaces',
    description: 'Drive immediate results and scalable growth through precision-targeted paid campaigns across multiple platforms.',
    icon: 'TrendingUp',
    features: [
      'Performance Marketing - Results-obsessed campaign management',
      'PPC (Pay-Per-Click) - Capture high-intent traffic with expertly managed campaigns',
      'Meta Ads - Reach ideal customers on Facebook and Instagram',
      'Google Ads - Dominate Search, Display, Shopping, YouTube, and Performance Max',
      'Marketplace Ads - Strategic advertising on Amazon, Myntra, Nykaa, Ajio',
      'Lead Generation - High-quality leads for your sales pipeline'
    ]
  },
  {
    id: 'social-media-brand',
    title: 'Social Media & Brand Management',
    shortDesc: 'Build engaged communities and elevate your brand presence across social platforms',
    description: 'Comprehensive social media and brand management strategies designed to build authentic connections, drive engagement, and strengthen your brand identity.',
    icon: 'Sparkles',
    features: [
      'Social Media Strategy - Platform-specific content and engagement strategies',
      'Community Management - Build and nurture engaged brand communities',
      'Brand Identity Development - Create consistent, compelling brand experiences',
      'Content Creation & Curation - High-quality content that resonates with your audience'
    ]
  },
  {
    id: 'organic-media',
    title: 'SEO+GEO',
    shortDesc: 'Drive sustainable traffic and authority through SEO, AEO, and GEO optimization',
    description: 'Build lasting visibility and authority across search platforms with strategies designed for the modern digital landscape.',
    icon: 'Search',
    features: [
      'SEO (Search Engine Optimisation) - Dominate search results with comprehensive optimisation strategies',
      'AEO (Answer Engine Optimisation) - Position your brand as the definitive answer to customer questions',
      'GEO (Generative Engine Optimisation) - Stay ahead with AI-driven search experience optimisation'
    ]
  },
  {
    id: 'email-whatsapp',
    title: 'Email & WhatsApp Marketing',
    shortDesc: 'Nurture relationships through personalised messaging and automated workflows',
    description: 'Build deeper connections with your audience through strategic email and WhatsApp campaigns that drive retention and customer lifetime value.',
    icon: 'Mail',
    features: [
      'Personalised Campaign Strategy - Tailored messaging for every segment',
      'Automated Workflows - Smart triggers that nurture leads 24/7',
      'WhatsApp Business API - Scalable communication on the world\'s favorite chat app',
      'Retention & ROI - Focus on customer lifetime value and repeat business'
    ]
  },
  {
    id: 'talent-management',
    title: 'Influencer Marketing',
    shortDesc: 'Connect with authentic voices your audience trusts to grow your brand and reach.',
    description: 'Elevate your brand through strategic influencer partnerships that drive engagement, trust, and measurable impact across social platforms.',
    icon: 'Sparkles',
    features: [
      'Influencer Marketing - Connect with authentic voices your audience trusts',
      'Campaign Management - End-to-end execution of high-impact influencer campaigns',
      'Performance Analytics - Track ROI and engagement metrics for every collaboration'
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
    description: 'Creatives that scale social presence, images, Reels, Short form videos & Ad creatives.',
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
      'Client Journey Mapping - Optimise every touchpoint in the decision-making process'
    ]
  }
];
