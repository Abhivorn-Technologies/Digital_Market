import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-image.png';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6">
              <span className="text-foreground">Digital Growth for the </span>
              <span className="text-italic-bold text-gradient">AI Age</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
              Scale your business 10x faster with data-driven insights, cutting-edge AI technology, 
              and creative excellence.{' '}
              <span className="font-semibold text-foreground">
                Abhivorn combines world-class strategy, technology, and creative talent in one 
                powerful growth engine
              </span>{' '}
              to drive measurable results—from local markets to global expansion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                BOOK A DEMO
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-primary transition-colors group"
              >
                CASE STUDIES
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10">
              {/* Main Image with decorative background */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-orange-400/20 rounded-[2rem] blur-2xl -z-10" />
                <img
                  src={heroImage}
                  alt="Digital marketing professional"
                  className="relative rounded-2xl w-full max-w-lg mx-auto shadow-xl"
                />
              </div>

              {/* Floating Stats Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute top-4 right-0 stat-badge z-20"
              >
                <span className="text-secondary font-bold text-lg">10x</span>
                <span className="text-sm text-muted-foreground">Faster<br />Content Velocity</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute bottom-20 -right-4 stat-badge z-20"
              >
                <span className="text-primary font-bold text-lg">+220%</span>
                <span className="text-sm text-muted-foreground">Non-Branded<br />Pipeline Growth</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-4 left-0 stat-badge bg-primary text-primary-foreground font-bold z-20"
              >
                <span className="text-sm font-bold">#1 Get Cited In AI Search</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
