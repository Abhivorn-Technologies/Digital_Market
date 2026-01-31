import { motion } from 'framer-motion';
import { Target, Lightbulb, Globe, Users, Award, Rocket } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We measure success by your ROI, not vanity metrics. Every strategy, campaign, and tactic is designed to drive tangible business outcomes.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation-First',
    description: 'We embrace emerging technologies like generative AI and evolving platforms to keep our clients ahead of the curve.'
  },
  {
    icon: Users,
    title: 'Transparency & Partnership',
    description: 'We believe in open communication, honest reporting, and building long-term partnerships based on trust and mutual success.'
  },
  {
    icon: Globe,
    title: 'Global Mindset, Local Expertise',
    description: 'We think globally while understanding that every market has unique nuances that require localised strategies.'
  },
  {
    icon: Rocket,
    title: 'Continuous Improvement',
    description: 'The digital landscape never stands still, and neither do we. We test, learn, and optimise relentlessly.'
  },
  {
    icon: Award,
    title: 'Integrity & Ethics',
    description: 'We deliver honest recommendations, ethical practices, and sustainable strategies that build lasting value.'
  }
];

import founderPhoto from '@/assets/founder.png';

const team = [
  { name: 'G.V.A SAI NIKHIL', role: 'Founder & CEO', image: founderPhoto },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
          <div className="max-w-7xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <span className="section-label mb-4">About Us</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Architects of{' '}
                <span className="text-italic-bold text-gradient">Digital Growth</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We're not your typical digital marketing agency. We're strategic partners
                who understand that in today's interconnected world, success requires more
                than just running ads or posting on social media—it demands an integrated
                approach that turns every digital touchpoint into a growth opportunity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded on the principle that data, creativity, and technology should
                    work in harmony, we've built a team of specialists across SEO, paid media,
                    e-commerce, analytics, AI-powered creative, and global marketing.
                  </p>
                  <p>
                    Whether you're a local business looking to dominate your market or an
                    established brand expanding across borders, we have the expertise and
                    resources to accelerate your growth.
                  </p>
                  <p>
                    Our approach is simple: understand your business deeply, develop strategies
                    that align with your goals, execute with precision, and continuously optimise
                    based on real data. We don't believe in one-size-fits-all solutions.
                  </p>
                  <p>
                    From optimising your website for generative AI search engines to launching
                    D2C brands, from managing multi-country campaigns to building AI-powered
                    creative systems, we're at the forefront of digital marketing innovation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="card-elevated p-8 md:p-10"
              >
                <h3 className="text-xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground mb-8">
                  To empower businesses of every size to achieve exponential growth through
                  innovative, data-driven digital marketing strategies that connect brands
                  with customers across every channel and market.
                </p>
                <h3 className="text-xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the global standard for integrated digital marketing excellence
                  where technology, creativity, and strategy converge to create unprecedented
                  business growth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-muted/30">
          <div className="max-w-7xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="section-label justify-center mb-4">Our Values</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                What Drives Us
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-elevated p-6 card-hover"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section-padding">
          <div className="max-w-7xl mx-auto container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="section-label justify-center mb-4">Our Team</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Meet the Founder
              </h2>
            </motion.div>

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
                    <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-lg text-primary font-medium">{member.role}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
