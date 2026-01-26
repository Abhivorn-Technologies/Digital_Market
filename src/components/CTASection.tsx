import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto container-padding relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-2xl" />

          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-8"
            >
              <Zap className="w-8 h-8 text-primary-foreground" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform{' '}
              <span className="text-gradient">Your Business?</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Let's build a strategy that delivers real results. Get your free digital 
              marketing audit and discover how our integrated approach can drive 
              measurable growth for your business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                Schedule Free Strategy Session
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
