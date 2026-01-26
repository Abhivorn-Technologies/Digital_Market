import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FAQAccordion } from '@/components/FAQAccordion';
import { faqs } from '@/data/faqs';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-4xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="section-label justify-center mb-4">FAQ</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Frequently Asked{' '}
                <span className="text-italic-bold text-gradient">Questions</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Everything you need to know about our services and how we can help 
                your business grow. Can't find what you're looking for? Contact us directly.
              </p>
            </motion.div>

            {/* FAQ Accordion */}
            <FAQAccordion faqs={faqs} />

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-elevated p-8 text-center mt-12"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us today for a personalised consultation. We're here to help 
                you navigate the digital landscape and achieve your business goals.
              </p>
              <Link to="/contact" className="btn-primary">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
