import { motion } from 'framer-motion';
import { Search, TrendingUp, BarChart3, Presentation, Sparkles, Globe, LucideIcon, Check } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { services } from '@/data/services';

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
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto container-padding relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Transform Your Digital Presence{' '}
                <span className="text-gradient">Into Revenue</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We don't just offer services—we architect growth. Our integrated approach 
                combines cutting-edge technology, data-driven insights, and creative excellence 
                to deliver measurable results that matter to your bottom line.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="space-y-20 md:space-y-32">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Search;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-8">
                        {service.description}
                      </p>
                      <ul className="space-y-4">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Visual */}
                    <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                      <div className="glass-card p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl" />
                        <div className="relative">
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                            <IconComponent className="w-10 h-10 text-primary-foreground" />
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                          <p className="text-muted-foreground">{service.shortDesc}</p>
                        </div>
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
