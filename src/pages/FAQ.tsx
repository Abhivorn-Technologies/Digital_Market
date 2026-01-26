import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTASection } from '@/components/CTASection';
import { faqs } from '@/data/faqs';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern" />
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-4xl mx-auto container-padding relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
                FAQ
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Frequently Asked{' '}
                <span className="text-gradient">Questions</span>
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
              className="glass-card p-8 text-center mt-12"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact us today for a personalised consultation. We're here to help 
                you navigate the digital landscape and achieve your business goals.
              </p>
              <a href="/contact" className="btn-primary inline-flex items-center gap-2">
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
