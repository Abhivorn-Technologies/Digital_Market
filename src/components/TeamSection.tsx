import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const team = [1, 2, 3]; // 3 empty slots

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export const TeamSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
        >
          <span className="section-label justify-center mb-4">
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">👥</span>
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet the <span className="text-italic-bold text-gradient">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The visionary minds dedicated to transforming your digital presence with AI-driven strategy
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {team.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/10 shadow-2xl bg-white flex items-center justify-center"
              >
                <motion.div
                  variants={{
                    initial: { scale: 0.9, opacity: 0.5 },
                    animate: { scale: 1, opacity: 1 },
                    hover: { scale: 1.1 }
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300"
                >
                  <User className="w-24 h-24" />
                </motion.div>

                <motion.div
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"
                />
              </div>

              <motion.div
                variants={{
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  hover: { y: -5 }
                }}
                transition={{ duration: 0.3 }}
                className="text-center mt-6 w-full"
              >
                <div className="h-8 w-48 bg-gray-200 rounded-md mx-auto mb-2 animate-pulse" />
                <div className="h-5 w-32 bg-gray-100 rounded-md mx-auto animate-pulse" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
