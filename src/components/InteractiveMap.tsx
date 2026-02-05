import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';

export const InteractiveMap = () => {
  // Hyderabad coordinates for Google Maps embed
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31604084!2d78.26795905!3d17.4122998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1706000000000!5m2!1sen!2sin";

  const officeInfo = [
    { icon: MapPin, label: 'Address', value: 'Shanthi Nilayam, MIG 648, near Temple Bus Stop, KPHB Phase 2, Kukatpally, Hyderabad, Telangana 500072' },
    { icon: Phone, label: 'Phone', value: '+91 87124 34896', link: 'tel:8712434896' },
    { icon: Mail, label: 'Email', value: 'Info@Scalenowdigital.com', link: 'mailto:Info@Scalenowdigital.com' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="card-elevated overflow-hidden"
    >
      {/* Map Container */}
      <div className="relative">
        <div className="aspect-video w-full">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Scale Now Digital Office Location - Hyderabad, India"

            className="w-full h-full"
          />
        </div>

        {/* Map Overlay with Office Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute bottom-4 left-4 right-4 md:right-auto md:max-w-sm bg-background/95 backdrop-blur-md rounded-xl p-3.5 shadow-xl border border-border"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <div className="font-bold text-gray-900 mb-0.5">Scale Now Digital</div>

              <p className="text-xs text-muted-foreground">Hyderabad, India</p>
            </div>
          </div>

          <div className="space-y-1.5">
            {officeInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <IconComponent className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-muted-foreground">{info.label}: </span>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-xs text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-xs text-foreground leading-tight block">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Get Directions Link */}
          <motion.a
            href="https://maps.google.com/?q=Hyderabad,Telangana,India"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Directions
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

    </motion.div>
  );
};
