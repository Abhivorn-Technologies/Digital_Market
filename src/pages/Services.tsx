import { motion } from 'framer-motion';
import { Search, TrendingUp, BarChart3, Presentation, Sparkles, Globe, LucideIcon, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { services } from '@/data/services';

// Import service images
// Import service images
import serviceSeo from '@/assets/seo.jpg';
import servicePaid from '@/assets/paidads1.jpg';
import serviceAnalytics from '@/assets/dataanalytics.jpg';
import servicePresales from '@/assets/presales.jpg';
import serviceAi from '@/assets/AiCreatives.png';
import serviceGlobal from '@/assets/globalconsulting.jpg';
import serviceSocialMedia from '@/assets/socialmedia.jpg';
import serviceTalent from '@/assets/influncermarketing.jpg';
import serviceEmail from '@/assets/email-whatsapp1.jpg';

const serviceImages: { [key: string]: string } = {
  'organic-media': serviceSeo,
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
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center border lg:border-none rounded-3xl lg:rounded-none p-6 lg:p-0 shadow-lg lg:shadow-none bg-card lg:bg-transparent"
                  >
                    {/* Content */}
                    <div className={`order-2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug mb-4">
                        {service.title}
                      </h2>
                      <p className="text-base md:text-lg text-muted-foreground mb-8">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, fIndex) => (
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
                        className="btn-primary w-full md:w-auto justify-center"
                      >
                        Get Started
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>

                    {/* Image */}
                    <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="card-elevated overflow-hidden rounded-2xl h-64 md:h-80 lg:h-80">
                        <img
                          src={image}
                          alt={service.title}
                          className="w-full h-full object-cover"
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
