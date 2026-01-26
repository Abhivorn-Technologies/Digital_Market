import { motion } from 'framer-motion';
import { Check, X, Minus, Layers, Cpu, Globe, LineChart, Trophy, Rocket, LucideIcon } from 'lucide-react';
import { comparisonData, whyUsFeatures } from '@/data/whyUs';

const iconMap: { [key: string]: LucideIcon } = {
  Layers,
  Cpu,
  Globe,
  LineChart,
  Trophy,
  Rocket,
};

const renderValue = (value: string | boolean) => {
  if (value === true) {
    return <Check className="w-5 h-5 text-green-400" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-red-400" />;
  }
  return <span className="text-muted-foreground text-sm">{value}</span>;
};

export const WhyUsSection = () => {
  return (
    <section className="section-padding bg-card/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto container-padding relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The <span className="text-gradient">Abhivorn</span> Advantage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not your typical digital marketing agency. We're strategic partners 
            who understand that success requires an integrated approach.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {whyUsFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Layers;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card overflow-hidden"
        >
          <div className="p-6 border-b border-border">
            <h3 className="text-xl md:text-2xl font-bold text-foreground text-center">
              How We Compare
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold text-foreground">Feature</th>
                  <th className="p-4 font-semibold text-center">
                    <span className="text-gradient">Abhivorn</span>
                  </th>
                  <th className="p-4 font-semibold text-center text-muted-foreground">Other Agencies</th>
                  <th className="p-4 font-semibold text-center text-muted-foreground">DIY Tools</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border/50 ${
                      index % 2 === 0 ? 'bg-muted/20' : ''
                    }`}
                  >
                    <td className="p-4 text-foreground font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">{renderValue(row.us)}</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">{renderValue(row.agencies)}</div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex justify-center">{renderValue(row.tools)}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
