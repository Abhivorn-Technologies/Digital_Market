import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ShieldCheck, Mail, Phone, MapPin, Lock, FileText, UserCheck, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const lastUpdated = "October 19, 2026";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="pt-6 pb-8 md:pt-10 md:pb-10 bg-gradient-to-b from-muted/50 to-background border-b border-border/40">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                Compliance & Legal
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-3">
                Privacy <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                Compliant with India's Digital Personal Data Protection Act (DPDPA), 2023 and international data privacy principles.
              </p>
              <p className="text-xs text-muted-foreground/75 mt-2">
                Last updated: <span className="text-foreground font-medium">{lastUpdated}</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-6 md:py-10">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm space-y-10 text-foreground/90 leading-relaxed text-sm sm:text-base">
              
              {/* Notice Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-primary/5 border border-primary/20 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-muted-foreground">
                  This Privacy Policy describes how <strong className="text-foreground">Scale Now Digital</strong> (operated in collaboration with <strong className="text-foreground">Abhivorn Technologies Pvt. Ltd.</strong>) collects, processes, stores, and protects personal data when you visit our website, submit inquiries, or engage our digital marketing and consulting services.
                </p>
              </div>

              {/* 1. Data Fiduciary */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">1.</span> Data Fiduciary Information
                </h2>
                <p className="text-muted-foreground">
                  Under the Digital Personal Data Protection Act, 2023, the designated Data Fiduciary responsible for determining the purpose and means of personal data processing is:
                </p>
                <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-1.5 text-sm">
                  <p><strong className="text-foreground">Entity:</strong> Scale Now Digital (Abhivorn Technologies Pvt. Ltd.)</p>
                  <p><strong className="text-foreground">Registered Office:</strong> Matrix IT Hub, Hyderabad, Telangana, India</p>
                  <p><strong className="text-foreground">Contact Email:</strong> Info@Scalenowdigital.com</p>
                  <p><strong className="text-foreground">Contact Telephone:</strong> +91 87124 34896</p>
                </div>
              </section>

              {/* 2. Personal Data We Collect */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">2.</span> Personal Data We Collect
                </h2>
                <p className="text-muted-foreground">
                  We collect personal data strictly on a need-to-know basis to provide our services and respond to your requests:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Direct Inquiries & Consultation Forms:</strong> Full Name, Business Email Address, Phone/WhatsApp Number, Company/Brand Name, Marketing Budget, and project requirements submitted through our Contact Form, Book Demo Modal, or CTA forms.
                  </li>
                  <li>
                    <strong className="text-foreground">Communications Data:</strong> Records of communications, correspondence, and feedback shared via email, phone, or instant messaging (WhatsApp).
                  </li>
                  <li>
                    <strong className="text-foreground">Device & Usage Information:</strong> IP address, browser type and version, operating system, referrer URL, and time spent on our pages collected via functional logs and approved cookies.
                  </li>
                </ul>
              </section>

              {/* 3. Purpose of Processing and Legal Basis */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">3.</span> Purpose and Lawful Grounds for Processing
                </h2>
                <p className="text-muted-foreground">
                  In compliance with Section 4 and Section 6 of the DPDPA 2023, personal data is processed exclusively for specified, explicit, and lawful purposes with your prior, informed consent:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-lg border border-border bg-background">
                    <h4 className="font-semibold text-foreground text-sm mb-1">Inquiry Fulfillment</h4>
                    <p className="text-xs text-muted-foreground">To answer inquiries, prepare proposals, and arrange strategy discovery sessions.</p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-border bg-background">
                    <h4 className="font-semibold text-foreground text-sm mb-1">Service Delivery</h4>
                    <p className="text-xs text-muted-foreground">To execute contractual agreements for digital marketing, paid ads, SEO, and creative campaigns.</p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-border bg-background">
                    <h4 className="font-semibold text-foreground text-sm mb-1">Consent-Based Updates</h4>
                    <p className="text-xs text-muted-foreground">To send business updates, market insights, and demo confirmations where opt-in consent is provided.</p>
                  </div>
                  <div className="p-3.5 rounded-lg border border-border bg-background">
                    <h4 className="font-semibold text-foreground text-sm mb-1">Security & Legal Compliance</h4>
                    <p className="text-xs text-muted-foreground">To prevent abuse, protect platform security, and adhere to applicable statutory regulations.</p>
                  </div>
                </div>
              </section>

              {/* 4. Third-Party Sharing and Data Processors */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">4.</span> Third-Party Data Processors
                </h2>
                <p className="text-muted-foreground">
                  Scale Now Digital does not sell, rent, or trade your personal data. We engage vetted Data Processors under strict confidentiality and security contracts:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                  <li><strong className="text-foreground">Hosting & CDN Infrastructure:</strong> Vercel and secure cloud hosting providers for reliable content delivery.</li>
                  <li><strong className="text-foreground">Communication Gateways:</strong> Meta WhatsApp Business API and secure transactional email relays for communications.</li>
                  <li><strong className="text-foreground">Analytics Providers:</strong> Google Analytics (GA4) with IP anonymization, activated only upon your explicit cookie consent.</li>
                  <li><strong className="text-foreground">Statutory Authorities:</strong> Disclosed only when legally mandated by a valid court order or regulatory authority.</li>
                </ul>
              </section>

              {/* 5. Data Retention and Erasure */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">5.</span> Data Retention & Erasure Policy
                </h2>
                <p className="text-muted-foreground">
                  Personal data is retained only for the duration necessary to satisfy the purpose for which it was collected, or as required by applicable tax, commercial, or compliance statutes. Upon expiry of the retention period or upon valid withdrawal of consent, your data is securely purged or permanently anonymized using industry-standard disposal procedures.
                </p>
              </section>

              {/* 6. Security and Technical Safeguards */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">6.</span> Security & Technical Safeguards
                </h2>
                <p className="text-muted-foreground">
                  We deploy robust technical and organizational security controls to protect your personal data from accidental loss, unauthorized access, alteration, or disclosure:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
                  <div className="p-3 rounded-lg bg-muted/40 border border-border">
                    <Lock className="w-4 h-4 text-primary mb-1.5" />
                    <strong className="text-foreground block mb-1">Transit Encryption</strong>
                    Strict TLS 1.3 / HTTPS encryption for all browser-to-server transmissions.
                  </div>
                  <div className="p-3 rounded-lg bg-muted/40 border border-border">
                    <UserCheck className="w-4 h-4 text-primary mb-1.5" />
                    <strong className="text-foreground block mb-1">Least Privilege</strong>
                    Role-based access control (RBAC) ensuring only authorized staff access lead data.
                  </div>
                  <div className="p-3 rounded-lg bg-muted/40 border border-border">
                    <FileText className="w-4 h-4 text-primary mb-1.5" />
                    <strong className="text-foreground block mb-1">Audit & Monitoring</strong>
                    Continuous system logging, input sanitization against XSS/injection, and vulnerability assessments.
                  </div>
                </div>
              </section>

              {/* 7. Your Rights Under DPDPA 2023 */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">7.</span> Your Rights as a Data Principal
                </h2>
                <p className="text-muted-foreground">
                  Under the provisions of the DPDPA 2023, you hold the following statutory rights regarding your personal data:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                  <li><strong className="text-foreground">Right to Access Information:</strong> Request a summary of personal data being processed and identities of Data Processors with whom it has been shared.</li>
                  <li><strong className="text-foreground">Right to Correction & Erasure:</strong> Request the correction of inaccurate data, completion of incomplete data, or deletion of data no longer required for its original purpose.</li>
                  <li><strong className="text-foreground">Right to Withdraw Consent:</strong> You may withdraw your consent at any time as easily as it was granted, without affecting lawful processing carried out prior to withdrawal.</li>
                  <li><strong className="text-foreground">Right of Grievance Redressal:</strong> The right to register a grievance with our designated Grievance Officer and receive an expeditious resolution.</li>
                  <li><strong className="text-foreground">Right to Nominate:</strong> You may nominate any individual who shall exercise your data rights in the event of death or incapacity.</li>
                </ul>
              </section>

              {/* 8. Protection of Children */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">8.</span> Children's Privacy
                </h2>
                <p className="text-muted-foreground">
                  Our services and website are tailored strictly for corporate clients, business owners, and professionals aged 18 and older. We do not knowingly collect personal data from individuals under 18. If you believe a minor has submitted personal information, please contact our Grievance Officer for immediate deletion.
                </p>
              </section>

              {/* 9. Grievance Redressal Mechanism */}
              <section className="space-y-4 pt-4 border-t border-border">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">9.</span> Grievance Redressal Officer
                </h2>
                <p className="text-muted-foreground">
                  In compliance with Rule 11 of the DPDPA 2023 and the Information Technology Rules, we have appointed a designated Grievance Officer to address any privacy inquiries, data requests, or complaints:
                </p>
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/20 space-y-2 text-sm">
                  <p className="font-semibold text-foreground text-base">Grievance Redressal Officer</p>
                  <p className="text-muted-foreground">Scale Now Digital / Abhivorn Technologies Pvt. Ltd.</p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-primary" /> Matrix IT Hub, Hyderabad, Telangana 500081, India
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="w-4 h-4 text-primary" /> 
                    <a href="mailto:grievance@scalenowdigital.com" className="text-primary hover:underline">grievance@scalenowdigital.com</a>
                    {' '}(cc: <a href="mailto:Info@Scalenowdigital.com" className="text-primary hover:underline">Info@Scalenowdigital.com</a>)
                  </p>
                  <p className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-4 h-4 text-primary" /> +91 87124 34896
                  </p>
                  <p className="text-xs text-muted-foreground pt-2">
                    Our team will acknowledge your grievance within 48 hours and aim to resolve it within 30 days. If your grievance is not resolved satisfactorily, you hold the statutory right to escalate the matter to the <strong>Data Protection Board of India (DPBI)</strong>.
                  </p>
                </div>
              </section>

              {/* Related Links */}
              <div className="pt-6 border-t border-border flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span>Related documents:</span>
                <Link to="/terms-and-conditions" className="text-primary hover:underline font-medium">Terms and Conditions</Link>
                <span>•</span>
                <Link to="/cookie-policy" className="text-primary hover:underline font-medium">Cookie Policy</Link>
                <span>•</span>
                <Link to="/contact" className="text-primary hover:underline font-medium">Contact Grievance Desk</Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
