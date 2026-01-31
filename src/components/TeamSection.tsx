import { motion } from 'framer-motion';
import founderPhoto from '@/assets/founder.png';

const team = [
  { name: 'G.V.A SAI NIKHIL', role: 'Founder & CEO', specialty: 'Growth Strategy', image: founderPhoto },
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
            Meet the <span className="text-italic-bold text-gradient">Founder</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The visionary lead dedicated to transforming your digital presence with AI-driven strategy
          </p>
        </motion.div>



        {/* Team Members Grid */}
        <div className="flex justify-center">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial="initial"
              whileHover="hover"
              className="flex flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/10 shadow-2xl cursor-pointer group"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              <motion.div
                variants={{
                  initial: { opacity: 0, y: 10, height: 0 },
                  hover: { opacity: 1, y: 0, height: 'auto' }
                }}
                transition={{ duration: 0.3 }}
                className="text-center mt-6 overflow-hidden"
              >
                <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-lg text-primary font-medium mb-1">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.specialty}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
