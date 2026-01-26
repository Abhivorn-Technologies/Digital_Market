import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import service images
import serviceSeo from '@/assets/service-seo.png';
import servicePaid from '@/assets/service-paid.png';
import serviceAnalytics from '@/assets/service-analytics.png';
import servicePresales from '@/assets/service-presales.png';
import serviceAi from '@/assets/service-ai.png';
import serviceGlobal from '@/assets/service-global.png';

const services = [
  {
    id: 'organic-media',
    title: 'SEO & Organic',
    description: 'Our full-stack SEO, AEO & GEO engine unites human-led SME content, technical depth, and authority building—powering visibility across Google, AI search, and social platforms.',
    cta: 'SCALE TRAFFIC',
    image: serviceSeo,
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    id: 'paid-media',
    title: 'Paid Media',
    description: 'Drive immediate results with precision-targeted campaigns across Google Ads, Meta, marketplaces, and programmatic. Performance marketing that maximizes every dollar spent.',
    cta: 'DRIVE RESULTS',
    image: servicePaid,
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    description: 'Transform raw data into actionable insights with GA4, ROI tracking, and conversion optimization. Make smarter decisions backed by comprehensive analytics.',
    cta: 'GET INSIGHTS',
    image: serviceAnalytics,
    color: 'from-purple-500/20 to-violet-500/20',
  },
  {
    id: 'pre-sales',
    title: 'Pre-Sales Strategy',
    description: 'Win more business with compelling pitch decks, proposals, and strategic sales support. Close deals before the competition knows what hit them.',
    cta: 'WIN DEALS',
    image: servicePresales,
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    id: 'ai-creative',
    title: 'AI Creative',
    description: 'High-end AI-driven creative that blends impactful storytelling with performance. We don\'t just make ads—we build creative systems that drive business results.',
    cta: 'ELEVATE CREATIVE',
    image: serviceAi,
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 'global-services',
    title: 'Global Services',
    description: 'Scale your brand across borders with international SEO, multi-market campaigns, and localization strategies. Navigate cultural nuances and regulatory requirements.',
    cta: 'GO GLOBAL',
    image: serviceGlobal,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
];

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center mb-4">
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">🚀</span>
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-italic-bold text-gradient">Meet Your</span> Digital Growth Engine
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Abhivorn replaces fragmented agency workflows with one unified engine for Content, 
            Creative, SEO, and Paid Media that drives predictable, compounding growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated card-hover overflow-hidden group"
            >
              {/* Image */}
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${service.color}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  to={`/services#${service.id}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/contact" className="btn-primary">
            BOOK A DEMO
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
