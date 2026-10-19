import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    console.log('Form submitted:', formData);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-elevated p-8 md:p-12 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Thank You!
        </h3>
        <p className="text-muted-foreground mb-6">
          We've received your message and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
          }}
          className="btn-secondary"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="card-elevated p-8 md:p-10"
    >
      <h3 className="text-2xl font-bold text-foreground mb-2">
        Get Your Free Audit
      </h3>
      <p className="text-muted-foreground mb-8">
        Fill out the form below and we'll get back to you within 24 hours.
      </p>

      <div className="space-y-5">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Your Name
          </label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Nik"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Work Email
          </label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="Name@company.com"
            />
          </div>
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Mobile Number
          </label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              placeholder="+91 99999 99999"
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Your Message
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your project and goals..."
            />
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/60">
          <input
            type="checkbox"
            id="contact-consent"
            checked={agreedToPolicy}
            onChange={(e) => setAgreedToPolicy(e.target.checked)}
            required
            className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-primary cursor-pointer accent-primary"
          />
          <label htmlFor="contact-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer select-none">
            I consent to the collection and processing of my contact information in accordance with the{' '}
            <Link to="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>
            {' '}and accept the{' '}
            <Link to="/terms-and-conditions" className="text-primary hover:underline font-medium">Terms and Conditions</Link>.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading || !agreedToPolicy}
          className="w-full btn-primary justify-center py-4 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
        >
          {isLoading ? (
            <>
              <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Submit Inquiry
              <Send className="w-5 h-5" />
            </>
          )}
        </button>

        <p className="text-[11px] text-muted-foreground text-center">
          Protected by enterprise-grade TLS encryption and strict DPDPA compliance.
        </p>
      </div>
    </motion.form>
  );
};
