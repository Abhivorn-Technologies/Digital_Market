import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FileText, ShieldAlert, Award, Scale, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
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
                <FileText className="w-3.5 h-3.5" />
                Legal Agreement
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-3">
                Terms and <span className="text-gradient">Conditions</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                Governing the use of Scale Now Digital's website, marketing consulting, and growth solutions.
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

              {/* Preamble */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">1.</span> Agreement to Terms
                </h2>
                <p className="text-muted-foreground">
                  These Terms and Conditions constitute a legally binding agreement made between you (whether personally or on behalf of an entity, "you" or "Client") and <strong className="text-foreground">Scale Now Digital</strong> (developed and operated with <strong className="text-foreground">Abhivorn Technologies Pvt. Ltd.</strong>, "Company", "we", "us", or "our"), concerning your access to and use of our website and our professional services.
                </p>
                <p className="text-muted-foreground">
                  By accessing the website, booking a strategy session, or engaging our digital marketing services, you expressly agree that you have read, understood, and agreed to be bound by all of these Terms and Conditions. If you do not agree, you are prohibited from using this site and our services.
                </p>
              </section>

              {/* 2. Services Overview */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">2.</span> Scope of Agency Services
                </h2>
                <p className="text-muted-foreground">
                  Scale Now Digital provides full-service digital marketing, performance advertising, branding, and technical growth consulting, which includes but is not limited to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm">
                  <div className="p-3.5 rounded-lg border border-border bg-background">
                    <strong className="text-foreground block mb-1">Performance Marketing & Paid Media</strong>
                    PPC management on Google Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, and programmatic networks.
                  </div>
                  <div className="p-3.5 rounded-lg border border-border bg-background">
                    <strong className="text-foreground block mb-1">Organic Media (SEO & GEO)</strong>
                    Search Engine Optimization, Generative Engine Optimization, technical audits, and content strategies.
                  </div>
                  <div className="p-3.5 rounded-lg border border-border bg-background">
                    <strong className="text-foreground block mb-1">AI Creative & Social Media</strong>
                    Creative production, brand identity, social channel management, and influencer marketing campaigns.
                  </div>
                  <div className="p-3.5 rounded-lg border border-border bg-background">
                    <strong className="text-foreground block mb-1">Global Consulting & CRM Automations</strong>
                    International market expansion, WhatsApp/email automation, and sales funnel engineering.
                  </div>
                </div>
                <p className="text-xs text-muted-foreground pt-1">
                  Specific deliverables, project milestones, and commercials are formalized via separate Statements of Work (SOW) or Master Service Agreements (MSA) executed between the parties.
                </p>
              </section>

              {/* 3. User Obligations and Acceptable Use */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">3.</span> Acceptable Use & Client Representations
                </h2>
                <p className="text-muted-foreground">
                  By utilizing our website and inquiry interfaces, you represent and warrant that:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>All registration and contact details provided are accurate, current, and complete.</li>
                  <li>You possess the legal capacity and authority to represent your organization.</li>
                  <li>You will not access the site through automated or non-human means (bots, scrapers, automated scripts).</li>
                  <li>You will not transmit any code of a destructive nature, worms, viruses, or illegal materials.</li>
                  <li>You will not reverse engineer or attempt to derive the source code of any proprietary tools or algorithms used by Scale Now Digital.</li>
                </ul>
              </section>

              {/* 4. Intellectual Property Rights */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">4.</span> Intellectual Property Rights
                </h2>
                <p className="text-muted-foreground">
                  Unless otherwise indicated, the website, source code, design assets, trademarks, logos, copy, proprietary marketing frameworks, and growth algorithms are our intellectual property protected by copyright and trademark laws.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Client Deliverables:</strong> Deliverables created specifically for a Client (e.g., custom ad creatives, written copy, approved campaign assets) become the property of the Client upon receipt of full, final payment under the applicable SOW. We retain the right to showcase anonymized case studies and performance metrics for promotional purposes unless subject to an explicit Non-Disclosure Agreement (NDA).
                </p>
              </section>

              {/* 5. Fees, Invoicing & Payments */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">5.</span> Commercial Terms & Invoicing
                </h2>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Ad Spend vs. Management Fees:</strong> Media spend paid to third-party ad networks (Meta, Google, etc.) is the sole financial responsibility of the Client and is paid directly to the ad platforms unless otherwise agreed in writing.</li>
                  <li><strong className="text-foreground">Payment Schedules:</strong> Retainers and management fees are invoiced in advance of each billing cycle and are payable within the net terms stated on invoices.</li>
                  <li><strong className="text-foreground">Late Payments:</strong> Overdue invoices may result in the temporary pause of active campaign management and delivery until settled.</li>
                  <li><strong className="text-foreground">Refund Policy:</strong> Agency service fees, once hours/resources have been dedicated to research, audit, creative production, or campaign deployment, are strictly non-refundable.</li>
                </ul>
              </section>

              {/* 6. Disclaimers and Limitations of Liability */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">6.</span> Marketing Disclaimers & Limitation of Liability
                </h2>
                <div className="p-4 rounded-xl bg-muted/40 border border-border space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block">Algorithmic & Platform Dependencies:</strong>
                      Digital marketing is subject to algorithms, search engine updates, user behavior, and third-party policies (such as Google, Meta, and LinkedIn). While Scale Now Digital uses industry-leading practices, we cannot guarantee specific revenue, search engine rankings, or ad approval by third-party platforms.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 pt-2">
                    <Scale className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-foreground block">Cap on Liability:</strong>
                      To the maximum extent permitted by applicable Indian law, our total aggregate liability arising out of or related to our services or website shall not exceed the total fees paid by the client to Scale Now Digital in the three (3) months preceding the event giving rise to liability.
                    </div>
                  </div>
                </div>
              </section>

              {/* 7. Termination */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">7.</span> Term and Termination
                </h2>
                <p className="text-muted-foreground">
                  Either party may terminate service agreements in accordance with the notice provisions set forth in the individual SOW (typically a 30-day written notice). Upon termination, all outstanding invoices for work completed up to the termination date become immediately due and payable.
                </p>
              </section>

              {/* 8. Governing Law and Jurisdiction */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">8.</span> Governing Law & Dispute Resolution
                </h2>
                <p className="text-muted-foreground">
                  These Terms and Conditions and any dispute or claim arising out of them shall be governed by and construed in accordance with the laws of <strong className="text-foreground">India</strong>. Both parties submit to the exclusive jurisdiction of the competent civil courts located in <strong className="text-foreground">Hyderabad, Telangana, India</strong> for the resolution of any dispute.
                </p>
              </section>

              {/* 9. Contact Information */}
              <section className="space-y-3 pt-4 border-t border-border">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">9.</span> Contact Us
                </h2>
                <p className="text-muted-foreground">
                  If you have questions or inquiries regarding these Terms and Conditions, please contact our legal desk:
                </p>
                <div className="p-4 rounded-xl bg-muted/40 border border-border text-sm space-y-1">
                  <p><strong className="text-foreground">Scale Now Digital</strong> (Abhivorn Technologies Pvt. Ltd.)</p>
                  <p className="text-muted-foreground">Matrix IT Hub, Hyderabad, Telangana, India</p>
                  <p className="text-muted-foreground">Email: <a href="mailto:Info@Scalenowdigital.com" className="text-primary hover:underline">Info@Scalenowdigital.com</a></p>
                  <p className="text-muted-foreground">Phone: +91 87124 34896</p>
                </div>
              </section>

              {/* Related Links */}
              <div className="pt-6 border-t border-border flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span>Related documents:</span>
                <Link to="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>
                <span>•</span>
                <Link to="/cookie-policy" className="text-primary hover:underline font-medium">Cookie Policy</Link>
                <span>•</span>
                <Link to="/contact" className="text-primary hover:underline font-medium">Contact Us</Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
