import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@abhivorn.com',
    link: 'mailto:hello@abhivorn.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 98765 43210',
    link: 'tel:+919876543210'
  },
  {
    icon: MapPin,
    title: 'Office',
    value: 'Mumbai, Maharashtra, India',
    link: null
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Fri: 9AM - 6PM IST',
    link: null
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern" />
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto container-padding relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column - Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
                  Contact Us
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Let's Start Your{' '}
                  <span className="text-gradient">Growth Journey</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-10">
                  Ready to transform your digital presence? Schedule a free strategy 
                  session and discover how our integrated approach can drive measurable 
                  growth for your business.
                </p>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground text-sm mb-1">
                              {info.title}
                            </h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-muted-foreground text-sm hover:text-primary transition-colors"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground text-sm">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="glass-card p-1 overflow-hidden"
                >
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm">Mumbai, India</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Column - Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
