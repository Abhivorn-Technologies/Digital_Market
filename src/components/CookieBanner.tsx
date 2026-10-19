import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Shield, Check, X, Settings2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'cookie_consent_preferences';

export const getStoredCookiePreferences = (): CookiePreferences | null => {
  try {
    const item = localStorage.getItem(STORAGE_KEY);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const existing = getStoredCookiePreferences();
    if (!existing) {
      // Small timeout for smooth intro
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setPreferences({
        necessary: true,
        analytics: existing.analytics,
        marketing: existing.marketing,
      });
      applyConsentSettings(existing);
    }
  }, []);

  // Listen for custom event from footer or policy page
  useEffect(() => {
    const handleOpen = () => {
      const existing = getStoredCookiePreferences();
      if (existing) {
        setPreferences({
          necessary: true,
          analytics: existing.analytics,
          marketing: existing.marketing,
        });
      }
      setShowPreferencesModal(true);
      setIsVisible(true);
    };

    window.addEventListener('openCookiePreferences', handleOpen);
    return () => window.removeEventListener('openCookiePreferences', handleOpen);
  }, []);

  const applyConsentSettings = (prefs: CookiePreferences) => {
    // If user accepted analytics, we can signal GA4 or custom event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('cookieConsentUpdated', { detail: prefs })
      );
      if (prefs.analytics && (window as any).gtag) {
        (window as any).gtag('consent', 'update', {
          analytics_storage: 'granted',
        });
      }
    }
  };

  const savePreferences = (analytics: boolean, marketing: boolean) => {
    const newPrefs: CookiePreferences = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
    } catch {
      // Storage error ignored
    }
    applyConsentSettings(newPrefs);
    setIsVisible(false);
    setShowPreferencesModal(false);
  };

  const handleAcceptAll = () => {
    savePreferences(true, true);
  };

  const handleRejectNonEssential = () => {
    savePreferences(false, false);
  };

  const handleSaveCustom = () => {
    savePreferences(preferences.analytics, preferences.marketing);
  };

  return (
    <>
      {/* Floating Bottom Banner */}
      <AnimatePresence>
        {isVisible && !showPreferencesModal && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xl z-[60]"
          >
            <div className="relative bg-card/95 backdrop-blur-md border border-border shadow-2xl rounded-2xl p-5 md:p-6 text-foreground">
              {/* Close Button on Banner */}
              <button
                onClick={handleRejectNonEssential}
                className="absolute top-3.5 right-3.5 p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
                aria-label="Close and reject non-essential cookies"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-start gap-3.5 mb-3 pr-6">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    Your Privacy Choices
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    We use cookies and similar technologies to enhance navigation, analyze site performance, and support our marketing efforts in compliance with DPDPA 2023. You can review our{' '}
                    <Link to="/cookie-policy" className="text-primary underline hover:text-primary/80">
                      Cookie Policy
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy-policy" className="text-primary underline hover:text-primary/80">
                      Privacy Policy
                    </Link>.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <button
                  onClick={handleAcceptAll}
                  className="btn-primary py-2 px-4 text-xs font-medium"
                >
                  Accept All
                </button>
                <button
                  onClick={handleRejectNonEssential}
                  className="btn-secondary py-2 px-4 text-xs font-medium"
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={() => setShowPreferencesModal(true)}
                  className="p-2 text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors ml-auto"
                >
                  <Settings2 className="w-3.5 h-3.5" />
                  Customize
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Center Modal */}
      <AnimatePresence>
        {showPreferencesModal && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setShowPreferencesModal(false);
                setIsVisible(false);
              }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative bg-card border border-border rounded-2xl shadow-2xl max-w-lg w-full p-6 text-foreground z-10 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Cookie Preferences</h3>
                    <p className="text-xs text-muted-foreground">Manage your privacy and data sharing settings</p>
                  </div>
                </div>
                {/* Close Button on Modal Header */}
                <button
                  onClick={() => {
                    setShowPreferencesModal(false);
                    setIsVisible(false);
                  }}
                  className="text-muted-foreground hover:text-foreground p-1.5 rounded-lg hover:bg-muted/50 transition-colors"
                  aria-label="Close"
                  title="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 py-4 text-xs sm:text-sm">
                {/* Essential */}
                <div className="p-3.5 rounded-xl border border-border bg-muted/30 flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-foreground">
                      <Lock className="w-3.5 h-3.5 text-primary" />
                      Strictly Necessary
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Required for fundamental site features, session safety, and recording your consent preferences. Cannot be disabled.
                    </p>
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground uppercase tracking-wider flex-shrink-0">
                    Always Active
                  </span>
                </div>

                {/* Analytics */}
                <div className="p-3.5 rounded-xl border border-border bg-background flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">
                      Analytics & Performance
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Enables aggregated usage analytics (Google Analytics GA4) to help us assess page speed, traffic flow, and feature usability.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences((p) => ({ ...p, analytics: e.target.checked }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:width-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>

                {/* Marketing */}
                <div className="p-3.5 rounded-xl border border-border bg-background flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="font-semibold text-foreground">
                      Marketing & Retargeting
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Allows measurement of ad conversion efficiency and attribution across digital advertising platforms (Meta, LinkedIn, Google Ads).
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer flex-shrink-0 mt-1">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences((p) => ({ ...p, marketing: e.target.checked }))
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:width-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                  </label>
                </div>
              </div>

              <div className="pt-3 border-t border-border flex flex-col sm:flex-row gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowPreferencesModal(false);
                    setIsVisible(false);
                  }}
                  className="btn-secondary py-2 px-3 text-xs justify-center hover:bg-muted"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="btn-secondary py-2 px-3 text-xs justify-center"
                >
                  Reject All
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="btn-primary py-2 px-4 text-xs justify-center inline-flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
