import { motion } from 'framer-motion';
import { Check, AlertTriangle, X, Layers, Cpu, Globe, LineChart, Trophy, Rocket, Zap, BarChart3 } from 'lucide-react';
import { whyUsFeatures } from '@/data/whyUs';

const comparisonData = [
  {
    feature: 'Strategy & Intelligence',
    icon: Layers,
    pepper: { status: 'check', text: 'Unified strategy across SEO+GEO and creative' },
    agencies: { status: 'warning', text: 'Strategy siloed to creative or SEO' },
    tools: { status: 'cross', text: 'No strategic layer' },
  },
  {
    feature: 'AI & Automation',
    icon: Cpu,
    pepper: { status: 'check', text: 'Adaptive AI agents automating workflows' },
    agencies: { status: 'warning', text: 'Minimal automation' },
    tools: { status: 'warning', text: 'Basic automation' },
  },
  {
    feature: 'SEO + AEO + GEO',
    icon: Globe,
    pepper: { status: 'check', text: 'End-to-end SEO + GEO accountability' },
    agencies: { status: 'warning', text: 'Traditional SEO only' },
    tools: { status: 'cross', text: 'Only data output' },
  },
  {
    feature: 'Speed & Scale',
    icon: Zap,
    pepper: { status: 'check', text: '10× faster delivery with Paid Ads' },
    agencies: { status: 'warning', text: 'Slow to scale' },
    tools: { status: 'warning', text: 'Low accuracy and brand fit' },
  },
  {
    feature: 'Measurement & ROI',
    icon: BarChart3,
    pepper: { status: 'check', text: 'Personalized dashboards & reporting' },
    agencies: { status: 'warning', text: 'Basic reporting' },
    tools: { status: 'cross', text: 'No ROI linkage' },
  },
  {
    feature: 'Accountability',
    icon: Trophy,
    pepper: { status: 'check', text: 'Outcome-linked partnerships' },
    agencies: { status: 'warning', text: 'Paid per deliverable' },
    tools: { status: 'cross', text: 'No accountability' },
  },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === 'check') return <Check className="w-5 h-5 text-green-500" />;
  if (status === 'warning') return <AlertTriangle className="w-5 h-5 text-amber-500" />;
  return <X className="w-5 h-5 text-red-500" />;
};

export const WhyUsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center mb-4">Scale Now Digital vs Others</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-snug mb-4">
            Why Leading Brands{' '}
            <span className="text-italic-bold text-gradient">Choose Scale Now Digital</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Scale Now Digital don't just offer services—we architect growth. Our integrated approach combines
            cutting-edge technology, data-driven insights, and creative excellence to deliver
            measurable results that matter to your bottom line.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-elevated overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[35%_22%_22%_21%] md:grid-cols-4 gap-1 md:gap-4 p-3 md:p-6 bg-muted/50 border-b border-border font-semibold text-[10px] md:text-sm">
            <div className="text-foreground flex items-center">Key Differentiator</div>
            <div className="text-center flex items-center justify-center">
              <span className="text-gradient font-bold text-[10px] md:text-sm leading-tight">Scale Now Digital</span>
            </div>
            <div className="text-center text-muted-foreground flex items-center justify-center">Agencies</div>
            <div className="text-center text-muted-foreground flex items-center justify-center">Tools</div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, index) => {
            const IconComponent = row.icon;
            return (
              <div
                key={row.feature}
                className={`grid grid-cols-[35%_22%_22%_21%] md:grid-cols-4 gap-1 md:gap-4 p-3 md:p-6 items-center ${index !== comparisonData.length - 1 ? 'border-b border-border' : ''
                  }`}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-3.5 h-3.5 md:w-5 md:h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground text-[10px] md:text-base leading-tight">{row.feature}</span>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <StatusIcon status={row.pepper.status} />
                  <span className="text-xs mt-1 text-muted-foreground hidden md:block">{row.pepper.text}</span>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <StatusIcon status={row.agencies.status} />
                  <span className="text-xs mt-1 text-muted-foreground hidden md:block">{row.agencies.text}</span>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <StatusIcon status={row.tools.status} />
                  <span className="text-xs mt-1 text-muted-foreground hidden md:block">{row.tools.text}</span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
