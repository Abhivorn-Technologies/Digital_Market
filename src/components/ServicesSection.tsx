import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

// Import service images
import serviceSeo from '@/assets/service-seo.png';
import servicePaid from '@/assets/service-paid.png';
import serviceAnalytics from '@/assets/service-analytics.png';
import servicePresales from '@/assets/service-presales.png';
import serviceAi from '@/assets/service-ai.png';
import serviceGlobal from '@/assets/service-global.png';
import serviceSocialMedia from '@/assets/service-social-media.png';
import serviceSeoGeo from '@/assets/service-seo-geo.png';
import serviceTalent from '@/assets/service-talent.png';
import serviceEmail from '@/assets/service-email.png';

const services = [
  {
    id: 'global-services',
    title: 'Global Consulting',

    description: 'Scale your brand across borders with international SEO, multi-market campaigns, and localization strategies. Navigate cultural nuances and regulatory requirements.',
    cta: 'GO GLOBAL',
    image: serviceGlobal,
    color: 'from-emerald-500/20 to-teal-500/20',
    features: ['International SEO', 'Multi-Market Campaigns', 'Cross-Border E-commerce'],
  },
  {
    id: 'paid-media',
    title: 'Paid Ads',

    description: 'Drive immediate results with precision-targeted campaigns across Google Ads, Meta, marketplaces, and programmatic. Performance marketing that maximizes every dollar spent.',
    cta: 'DRIVE RESULTS',
    image: servicePaid,
    color: 'from-pink-500/20 to-rose-500/20',
    features: ['Google & Meta Ads', 'Marketplace Advertising'],
  },
  {
    id: 'social-media-brand',
    title: 'Social Media & Brand Management',
    description: 'Build engaged communities and elevate your brand presence across social platforms. Strategic content, community management, and brand identity development.',
    cta: 'BUILD COMMUNITY',
    image: serviceSocialMedia,
    color: 'from-orange-500/20 to-red-500/20',
    features: ['Social Media Strategy', 'Community Management', 'Brand Identity'],
  },
  {
    id: 'organic-media',
    title: 'SEO+GEO',
    description: 'Our full-stack SEO, AEO & GEO engine unites human-led SME content, technical depth, and authority building—powering visibility across Google, AI search, and social platforms.',
    cta: 'SCALE TRAFFIC',
    image: serviceSeoGeo,
    color: 'from-blue-500/20 to-indigo-500/20',
    features: ['SEO & AEO Optimization', 'GEO Engine Optimization'],
  },
  {
    id: 'email-whatsapp',
    title: 'Email & WhatsApp Marketing',
    description: 'Nurture relationships through personalised messaging and automated workflows. Build deeper connections through strategic campaigns that drive retention.',
    cta: 'START NURTURING',
    image: serviceEmail,
    color: 'from-orange-400/20 to-orange-600/20',
    features: ['Personalised Strategy', 'Automated Workflows', 'WhatsApp Business API'],
  },
  {
    id: 'talent-management',
    title: 'Influencer Marketing',
    description: 'Connect with authentic voices your audience trusts. Strategic influencer partnerships that drive engagement, trust, and measurable brand growth.',
    cta: 'PARTNER NOW',
    image: serviceTalent,
    color: 'from-fuchsia-500/20 to-pink-600/20',
    features: ['Influencer Marketing', 'Talent Acquisition', 'Employee Development', 'Performance Management'],
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable insights with GA4, ROI tracking, and conversion optimization. Make smarter decisions backed by comprehensive analytics.',
    cta: 'GET INSIGHTS',
    image: serviceAnalytics,
    color: 'from-purple-500/20 to-violet-500/20',
    features: ['GA4 Implementation', 'ROI Tracking', 'Conversion Optimization'],
  },
  {
    id: 'ai-creative',
    title: 'AI Creative',
    description: 'Creatives that scale social presence, images, Reels, Short form videos & Ad creatives. We don\'t just make ads—we build creative systems.',
    cta: 'ELEVATE CREATIVE',
    image: serviceAi,
    color: 'from-cyan-500/20 to-blue-500/20',
    features: ['AI-Powered Design', 'Brand-First Creative', 'Performance Content'],
  },
  {
    id: 'pre-sales',
    title: 'Pre-Sales Strategy',
    description: 'Win more business with compelling pitch decks, proposals, and strategic sales support. Close deals before the competition knows what hit them.',
    cta: 'WIN DEALS',
    image: servicePresales,
    color: 'from-amber-500/20 to-orange-500/20',
    features: ['Pitch Deck Design', 'Client Journey Mapping'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

import { useModal } from '@/context/ModalContext';

export const ServicesSection = () => {
  const { openModal } = useModal();
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center mb-4">
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">🚀</span>
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-snug mb-4">
            Scale Your Business With <span className="text-italic-bold text-gradient">Content Led & Paid Ads Growth Engine</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Scale Now Digital replaces fragmented agency workflows with one unified engine for
            Creative, SEO, and Paid Media that drives predictable, compounding growth.
          </p>
        </motion.div>

        {/* Services Grid - Larger Cards with More Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-elevated overflow-hidden group cursor-pointer"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image - Larger */}
                <div className={`relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br ${service.color}`}>
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>

                {/* Content - More Details */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <motion.li
                        key={fIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <button onClick={openModal} className="btn-primary">
            BOOK FREE CONSULTATION
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
