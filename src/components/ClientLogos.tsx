import { motion } from 'framer-motion';
import abhivornLogo from '@/assets/Abhivorn.png';
import costitaLogo from '@/assets/Costita Logo PNG.png';
import nextgenLogo from '@/assets/nextgen.jpeg';
import elevateLogo from '@/assets/elevaterrotz.png';

const clients = [
  { name: 'Abhivorn Technologies', logo: abhivornLogo, initial: 'AT' },
  { name: 'Costita', logo: costitaLogo, initial: 'C' },
  { name: 'Next Gen Hiring', logo: nextgenLogo, initial: 'NGH' },
  { name: 'Elevate rrotz', logo: elevateLogo, initial: 'ER' },
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
            Scaling business with{' '}
            <span className="text-italic-bold text-gradient">paid ads & content-led strategies</span>
          </h2>
        </motion.div>

        {/* Logo Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex items-center gap-8 md:gap-12 animate-scroll min-w-max">
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-12 w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                {client.logo ? (
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-muted-foreground whitespace-nowrap">{client.name}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-xl font-bold text-muted-foreground">
                    <span className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-sm">
                      {client.initial}
                    </span>
                    <span className="whitespace-nowrap">{client.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
