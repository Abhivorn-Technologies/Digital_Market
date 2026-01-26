import { motion } from 'framer-motion';
import { Search, TrendingUp, BarChart3, Presentation, Sparkles, Globe, LucideIcon } from 'lucide-react';
import { Service } from '@/data/services';

const iconMap: { [key: string]: LucideIcon } = {
  Search,
  TrendingUp,
  BarChart3,
  Presentation,
  Sparkles,
  Globe,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const IconComponent = iconMap[service.icon] || Search;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card p-6 md:p-8 group cursor-pointer"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
        <IconComponent className="w-7 h-7 text-primary" />
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {service.shortDesc}
      </p>

      {/* Hover Indicator */}
      <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-sm font-medium">Learn more</span>
        <svg
          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.div>
  );
};
