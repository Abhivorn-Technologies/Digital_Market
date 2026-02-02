import { motion } from 'framer-motion';
import { Mail, Phone, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { InteractiveMap } from '@/components/InteractiveMap';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'service@scalenowdigital.com',
    link: 'mailto:service@scalenowdigital.com',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 99631 41996',
    link: 'tel:9963141996',
    description: 'Mon-Fri from 9am to 6pm IST'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    value: '+91 99631 41996',
    link: 'https://wa.me/919963141996',
    description: 'Quick response within 1 hour'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Fri: 9AM - 6PM IST',
    link: null,
    description: 'Weekend support available'
  }
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Column - Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="section-label mb-4">Contact Us</span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-snug mb-6">
                  Let's Start Your{' '}
                  <span className="text-italic-bold text-gradient">Growth Journey</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-10">
                  Ready to transform your digital presence? Schedule a free strategy
                  session and discover how our integrated approach can drive measurable
                  growth for your business.
                </p>

                {/* Contact Info Cards */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
                >
                  {contactInfo.map((info) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div
                        key={info.title}
                        variants={itemVariants}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="card-elevated p-4 group cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                          >
                            <IconComponent className="w-5 h-5 text-primary" />
                          </motion.div>
                          <div>
                            <h3 className="font-medium text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                              {info.title}
                            </h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-muted-foreground text-sm hover:text-primary transition-colors block"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted-foreground text-sm">{info.value}</p>
                            )}
                            <p className="text-xs text-muted-foreground mt-1">{info.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Interactive Map */}
                <InteractiveMap />
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
