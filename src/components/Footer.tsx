import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  solutions: [
    { name: 'Global Consulting', path: '/services#global-services' },
    { name: 'Performance Marketing', path: '/services#paid-media' },
    { name: 'Lead Generation', path: '/services#lead-generation' },
    { name: 'SEO & Organic', path: '/services#organic-media' },
    { name: 'Digital PR & Influencer', path: '/services#digital-pr' },
    { name: 'Data & Analytics', path: '/services#data-analytics' },
    { name: 'AI Creative', path: '/services#ai-creative' },
    { name: 'Pre-Sales Strategy', path: '/services#pre-sales' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Team', path: '/about#team' },
    { name: 'Contact', path: '/contact' },
  ],
  resources: [
    { name: 'FAQ', path: '/faq' },
    { name: 'Case Studies', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Events', path: '/events' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'YouTube', icon: Youtube, url: '#' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto container-padding py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-background">
                Scale Now Digital

              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Transforming digital presence into global growth. Your partner in
              data-driven digital marketing that delivers measurable ROI.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:service@scalenowdigital.com"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Mail className="w-4 h-4" />
                service@scalenowdigital.com
              </a>
              <a
                href="tel:9963141996"
                className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 99631 41996
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4" />
                Hyderabad, India
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-background mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-background mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Scale Now Digital. All rights reserved.
              <span className="mx-2">|</span>
              Developed by{' '}
              <a
                href="https://www.abhivorn.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors font-medium"
              >
                Abhivorn Technologies.pvt Ltd
              </a>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center text-background/70 hover:text-background transition-all duration-300"
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
