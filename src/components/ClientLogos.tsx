import { motion } from 'framer-motion';

const clients = [
  { name: 'Amazon', initial: 'A' },
  { name: 'Google', initial: 'G' },
  { name: 'Meta', initial: 'M' },
  { name: 'Shopify', initial: 'S' },
  { name: 'Hubspot', initial: 'H' },
  { name: 'Salesforce', initial: 'SF' },
  { name: 'Adobe', initial: 'Ad' },
  { name: 'Microsoft', initial: 'MS' },
  { name: 'Stripe', initial: 'St' },
  { name: 'Slack', initial: 'Sl' },
];

export const ClientLogos = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-label justify-center mb-4">Our Clients</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Driving content-led growth for{' '}
            <span className="text-italic-bold text-gradient">500+ industry leaders</span>
          </h2>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-16 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="flex items-center gap-2 text-xl font-bold text-muted-foreground">
                  <span className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-sm">
                    {client.initial}
                  </span>
                  <span className="hidden sm:inline">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
