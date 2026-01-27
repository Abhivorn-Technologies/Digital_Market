import { motion } from 'framer-motion';
import teamPhoto from '@/assets/team-photo.png';

const team = [
  { name: 'Nikhil Sharma', role: 'Founder & CEO', specialty: 'Growth Strategy' },
  { name: 'Priya Verma', role: 'Head of Strategy', specialty: 'Brand Development' },
  { name: 'Rahul Kumar', role: 'Technical Director', specialty: 'MarTech & Analytics' },
  { name: 'Ananya Singh', role: 'Creative Director', specialty: 'AI-Powered Creative' },
];

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
    <section className="section-padding bg-muted/30">
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
            <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-xs">👥</span>
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Meet the <span className="text-italic-bold text-gradient">Growth Architects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A team of passionate experts dedicated to transforming your digital presence
          </p>
        </motion.div>

        {/* Team Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-2xl -z-10" />
          <img
            src={teamPhoto}
            alt="Our expert team"
            className="w-full rounded-2xl shadow-2xl object-cover max-h-[500px]"
          />
          
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute -bottom-6 right-8 bg-background/95 backdrop-blur-sm shadow-xl rounded-xl p-4 border border-border"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <p className="font-bold text-foreground">50+ Years Combined</p>
                <p className="text-sm text-muted-foreground">Industry Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Team Members Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="card-elevated p-6 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground shadow-lg"
              >
                {member.name.split(' ').map(n => n[0]).join('')}
              </motion.div>
              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
              <p className="text-xs text-muted-foreground">{member.specialty}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
