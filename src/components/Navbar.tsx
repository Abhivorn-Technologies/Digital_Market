import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

import { useModal } from '@/context/ModalContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Scale Now Digital" className="h-16 md:h-20 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => {
                  if (location.pathname === link.path) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">

            <button onClick={openModal} className="btn-primary py-2.5 px-5">
              Book Free Consultation
            </button>
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b border-border shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => {
                    if (location.pathname === link.path) {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                    setIsOpen(false);
                  }}
                  className={`block py-3 px-4 rounded-lg transition-colors font-medium ${location.pathname === link.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">

                <button
                  onClick={() => {
                    setIsOpen(false);
                    openModal();
                  }}
                  className="btn-primary block text-center w-full"
                >
                  Book Free Consultation
                </button>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
