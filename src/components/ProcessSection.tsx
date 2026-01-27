import { motion } from 'framer-motion';
import { Lightbulb, Target, Rocket, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import processDiagram from '@/assets/process-diagram.png';

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Strategy',
    description: 'Deep dive into your business, market, and competitors to craft a data-driven growth roadmap.',
    details: ['Market Research', 'Competitor Analysis', 'Goal Setting', 'KPI Framework'],
  },
  {
    number: '02',
    icon: Target,
    title: 'Execution',
    description: 'Launch precision-targeted campaigns across channels with our expert team managing every detail.',
    details: ['Campaign Setup', 'Content Creation', 'Channel Activation', 'A/B Testing'],
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Optimization',
    description: 'Continuously analyze performance and optimize for maximum ROI using AI-powered insights.',
    details: ['Performance Tracking', 'Data Analysis', 'Real-time Optimization', 'Budget Allocation'],
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Results',
    description: 'Deliver measurable growth with transparent reporting and strategic recommendations.',
    details: ['ROI Reporting', 'Growth Metrics', 'Strategic Insights', 'Scale Planning'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center mb-4">
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">⚡</span>
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From Vision to <span className="text-italic-bold text-gradient">Victory</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven 4-step methodology ensures consistent, measurable results for every client
          </p>
        </motion.div>

        {/* Process Diagram Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <img
            src={processDiagram}
            alt="Our proven process"
            className="w-full rounded-2xl shadow-lg max-h-[400px] object-contain mx-auto bg-white"
          />
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative card-elevated p-6 group"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}

                {/* Step Number */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-lg"
                >
                  <IconComponent className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, dIndex) => (
                    <motion.li
                      key={dIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + dIndex * 0.05 }}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
