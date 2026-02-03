import { motion } from 'framer-motion';
import { Search, TrendingUp, BarChart3, Presentation, Sparkles, Globe, LucideIcon, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { services } from '@/data/services';

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

const serviceImages: { [key: string]: string } = {
  'organic-media': serviceSeoGeo,
  'paid-media': servicePaid,
  'social-media-brand': serviceSocialMedia,
  'talent-management': serviceTalent,
  'data-analytics': serviceAnalytics,
  'pre-sales': servicePresales,
  'ai-creative': serviceAi,
  'global-services': serviceGlobal,
  'email-whatsapp': serviceEmail,
};

const iconMap: { [key: string]: LucideIcon } = {
  Search,
  TrendingUp,
  BarChart3,
  Presentation,
  Sparkles,
  Globe,
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-7xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="section-label justify-center mb-4">Our Services</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-snug mb-6">
                Transform Your Digital Presence{' '}
                <span className="text-italic-bold text-gradient">Into Revenue</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Scale Now Digital don't just offer services—we architect growth. Our integrated approach
                combines cutting-edge technology, data-driven insights, and creative excellence
                to deliver measurable results that matter to your bottom line.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="space-y-24 md:space-y-32">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Search;
                const isEven = index % 2 === 0;
                const image = serviceImages[service.id] || serviceSeo;

                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                  >
                    {/* Content */}
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-snug mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.slice(0, 5).map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-green-600" />
                            </div>
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="btn-primary"
                      >
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>

                    {/* Image */}
                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      <div className="card-elevated overflow-hidden">
                        <img
                          src={image}
                          alt={service.title}
                          className="w-full h-80 object-cover"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
