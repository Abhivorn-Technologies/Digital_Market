import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Organic Media', path: '/services#organic-media' },
    { name: 'Paid Ads', path: '/services#paid-media' },
    { name: 'Data & Analytics', path: '/services#data-analytics' },
    { name: 'AI Creative', path: '/services#ai-creative' },
    { name: 'Global Services', path: '/services#global-services' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about#team' },
    { name: 'Careers', path: '/about#careers' },
    { name: 'Blog', path: '/blog' },
  ],
  resources: [
    { name: 'FAQ', path: '/faq' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Free Audit', path: '/contact' },
    { name: 'Contact', path: '/contact' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'Facebook', icon: Facebook, url: '#' },
];

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto container-padding py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Abhivorn Digital Growth
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transforming digital presence into global growth. Your partner in 
              data-driven digital marketing that delivers measurable ROI.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@abhivorn.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@abhivorn.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 98765 43210
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Mumbai, India
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Abhivorn Digital Growth. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
