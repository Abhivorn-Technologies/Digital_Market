import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import caseStudy1 from '@/assets/case-study-1.png';
import caseStudy2 from '@/assets/case-study-2.png';
import caseStudy3 from '@/assets/case-study-3.png';

const caseStudies = [
  {
    id: 1,
    title: 'E-Commerce Revenue Boost',
    category: 'Paid Media & SEO',
    description: 'Transformed a struggling D2C brand into a market leader with 340% revenue growth in 12 months.',
    image: caseStudy1,
    stats: [
      { icon: TrendingUp, value: '+340%', label: 'Revenue Growth' },
      { icon: Users, value: '2.5M', label: 'New Customers' },
    ],
    color: 'from-orange-500/20 to-amber-500/20',
  },
  {
    id: 2,
    title: 'Marketplace Domination',
    category: 'Amazon & Marketplace Ads',
    description: 'Achieved #1 bestseller status across 3 categories for a consumer electronics brand.',
    image: caseStudy2,
    stats: [
      { icon: DollarSign, value: '₹50Cr', label: 'Annual Sales' },
      { icon: TrendingUp, value: '#1', label: 'Bestseller Rank' },
    ],
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    id: 3,
    title: 'Social Media Viral Growth',
    category: 'Social & Influencer Marketing',
    description: 'Built a community of 1M+ engaged followers and generated viral content with 50M+ views.',
    image: caseStudy3,
    stats: [
      { icon: Users, value: '1M+', label: 'Followers' },
      { icon: TrendingUp, value: '50M+', label: 'Content Views' },
    ],
    color: 'from-pink-500/20 to-rose-500/20',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

export const CaseStudiesSection = () => {
  return (
    <section className="section-padding bg-background">
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
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">📊</span>
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Results, <span className="text-italic-bold text-gradient">Real Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped brands like yours achieve extraordinary growth
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="card-elevated overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className={`relative h-56 overflow-hidden bg-gradient-to-br ${study.color}`}>
                <motion.img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {study.description}
                </p>

                {/* Stats */}
                <div className="flex gap-6 mb-4">
                  {study.stats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <IconComponent className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-sm">{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-primary font-medium text-sm group/link">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/contact" className="btn-primary">
            START YOUR SUCCESS STORY
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
