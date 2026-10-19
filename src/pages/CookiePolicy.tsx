import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Cookie, Settings, CheckCircle2, Shield, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  const lastUpdated = "October 19, 2026";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleOpenCookieSettings = () => {
    window.dispatchEvent(new CustomEvent('openCookiePreferences'));
  };

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
                <Cookie className="w-3.5 h-3.5" />
                Transparency & Control
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-3">
                Cookie <span className="text-gradient">Policy</span>
              </h1>
              <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                Learn how Scale Now Digital utilizes cookies and web technologies, and manage your tracking preferences.
              </p>
              <div className="mt-5 flex justify-center gap-4">
                <button
                  onClick={handleOpenCookieSettings}
                  className="btn-primary py-2 px-4 text-xs sm:text-sm inline-flex items-center gap-2"
                >
                  <Settings className="w-3.5 h-3.5" />
                  Manage Cookie Preferences
                </button>
              </div>
              <p className="text-xs text-muted-foreground/75 mt-3">
                Last updated: <span className="text-foreground font-medium">{lastUpdated}</span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-6 md:py-10">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 md:p-12 shadow-sm space-y-10 text-foreground/90 leading-relaxed text-sm sm:text-base">

              {/* 1. What are Cookies */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">1.</span> What Are Cookies and Web Technologies?
                </h2>
                <p className="text-muted-foreground">
                  Cookies are small text files placed on your computer, smartphone, or tablet when you visit websites. They are widely used by digital platforms to make sites function smoothly, remember your preferences, and provide aggregated analytics to site operators.
                </p>
                <p className="text-muted-foreground">
                  In addition to cookies, we may use local web storage (such as <code className="text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">localStorage</code>) to record whether you have accepted our cookie policy or seen introductory banners.
                </p>
              </section>

              {/* 2. Categories of Cookies We Use */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">2.</span> Categories of Cookies We Use
                </h2>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Strictly Necessary / Functional Cookies
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground font-medium">Always Active</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      These cookies and local storage tokens are essential for the website to function properly. They facilitate secure navigation, enable modal workflows (like demo booking), and remember your consent choices. They cannot be disabled in our preference center.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground flex items-center gap-2">
                        <Info className="w-4 h-4 text-primary" />
                        Performance & Analytics Cookies
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">Requires Consent</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      These cookies help us understand how visitors interact with our website by collecting anonymous metrics such as page views, bounce rates, and traffic sources. We use Google Analytics (GA4) with IP anonymization for this purpose.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-border bg-background space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        Targeting & Marketing Cookies
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">Requires Consent</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      These cookies track marketing campaign performance and ad conversions across external platforms (such as Meta Ads, LinkedIn, or Google Ads). They are deployed only if you grant explicit marketing consent.
                    </p>
                  </div>
                </div>
              </section>

              {/* 3. Detailed Cookie Inventory */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">3.</span> Inventory of Cookies & Web Storage
                </h2>
                <div className="overflow-x-auto border border-border rounded-xl">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-muted text-foreground border-b border-border">
                      <tr>
                        <th className="p-3">Item Name</th>
                        <th className="p-3">Provider</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Duration</th>
                        <th className="p-3">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-muted-foreground">
                      <tr>
                        <td className="p-3 font-mono text-xs text-foreground">cookie_consent_preferences</td>
                        <td className="p-3">Scale Now Digital</td>
                        <td className="p-3">Necessary</td>
                        <td className="p-3">1 Year</td>
                        <td className="p-3">Stores your cookie consent selections.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-xs text-foreground">hasVisitedScaleNow</td>
                        <td className="p-3">Scale Now Digital</td>
                        <td className="p-3">Functional</td>
                        <td className="p-3">Persistent</td>
                        <td className="p-3">Displays welcome notifications for returning visitors.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-xs text-foreground">_ga, _ga_*</td>
                        <td className="p-3">Google Analytics</td>
                        <td className="p-3">Analytics</td>
                        <td className="p-3">2 Years</td>
                        <td className="p-3">Distinguishes unique users and measures engagement.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-mono text-xs text-foreground">_fbp</td>
                        <td className="p-3">Meta (Facebook)</td>
                        <td className="p-3">Marketing</td>
                        <td className="p-3">3 Months</td>
                        <td className="p-3">Measures ad conversion performance when opted in.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 4. Managing Preferences */}
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">4.</span> How to Manage or Withdraw Consent
                </h2>
                <p className="text-muted-foreground">
                  You are in complete control of your tracking preferences. You can adjust your choices at any time through our interactive tool:
                </p>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Interactive Preference Center</h4>
                    <p className="text-xs text-muted-foreground">Update your consent settings for Analytics and Marketing cookies immediately.</p>
                  </div>
                  <button
                    onClick={handleOpenCookieSettings}
                    className="btn-primary py-2 px-4 text-xs whitespace-nowrap"
                  >
                    Adjust Settings
                  </button>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm pt-2">
                  Alternatively, you can configure your web browser to block or delete cookies entirely via your browser's settings menu (e.g., Chrome Settings &gt; Privacy and Security &gt; Cookies, or Firefox Settings &gt; Privacy & Security).
                </p>
              </section>

              {/* 5. Contact */}
              <section className="space-y-3 pt-4 border-t border-border">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                  <span className="text-primary text-lg">5.</span> Questions About This Policy
                </h2>
                <p className="text-muted-foreground text-sm">
                  If you have questions regarding our use of cookies or our data protection protocols, please contact our team at <a href="mailto:Info@Scalenowdigital.com" className="text-primary hover:underline">Info@Scalenowdigital.com</a>.
                </p>
              </section>

              {/* Related Links */}
              <div className="pt-6 border-t border-border flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span>Related documents:</span>
                <Link to="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>
                <span>•</span>
                <Link to="/terms-and-conditions" className="text-primary hover:underline font-medium">Terms and Conditions</Link>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
