"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Cookie, Settings } from "lucide-react";

/* ================= CONFIG ================= */
const COOKIE_KEY = "falden-cookie-consent";
const COOKIE_VERSION = "v2";

interface Consent {
  version: string;
  essential: boolean; // changed from true -> boolean
  analytics: boolean;
  marketing: boolean;
}

const defaultConsent: Consent = {
  version: COOKIE_VERSION,
  essential: true,
  analytics: false,
  marketing: false,
};

/* ================= WINDOW TYPES ================= */
declare global {
  interface Window {
    __analyticsLoaded?: boolean;
    __marketingLoaded?: boolean;
  }
}

/* ================= COMPONENT ================= */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<Consent>(defaultConsent);

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);

    if (!saved) {
      setVisible(true);
      return;
    }

    try {
      const parsed = JSON.parse(saved);

      // Check version
      if (!parsed.version || parsed.version !== COOKIE_VERSION) {
        localStorage.removeItem(COOKIE_KEY);
        setVisible(true);
      } else {
        setConsent(parsed);
        setVisible(false);
        if (parsed.analytics) loadAnalytics();
        if (parsed.marketing) loadMarketingScripts();
      }
    } catch {
      // Old format string "accepted"/"rejected"
      if (saved === "accepted") {
        const migrated = {
          ...defaultConsent,
          analytics: true,
          marketing: true,
        };
        localStorage.setItem(COOKIE_KEY, JSON.stringify(migrated));
        setConsent(migrated);
        loadAnalytics();
        loadMarketingScripts();
      } else {
        localStorage.setItem(COOKIE_KEY, JSON.stringify(defaultConsent));
        setConsent(defaultConsent);
      }
      setVisible(false);
    }
  }, []);

  const saveConsent = (data: Consent) => {
    const final = { ...data, version: COOKIE_VERSION };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(final));
    setConsent(final);
    setVisible(false);
    setShowSettings(false);

    if (final.analytics) loadAnalytics();
    if (final.marketing) loadMarketingScripts();
  };

  const acceptAll = () =>
    saveConsent({ ...defaultConsent, analytics: true, marketing: true });
  const rejectAll = () =>
    saveConsent({ ...defaultConsent, analytics: false, marketing: false });

  if (!visible) return null;

  return (
    <>
      {/* Banner */}
      <div className="fixed bottom-4 left-4 right-4 z-50">
        <div className="max-w-5xl mx-auto bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">
              <Cookie />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                We use cookies to enhance your browsing experience, analyze
                traffic, and personalize content. Read our{" "}
                <Link
                  href="/cookie-policy"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={rejectAll}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Reject All
            </button>

            <button
              onClick={() => setShowSettings(true)}
              className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition flex items-center gap-2"
            >
              <Settings size={16} />
              Customize
            </button>

            <button
              onClick={acceptAll}
              className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-lg w-full shadow-2xl p-6 relative">
            <button
              onClick={() => setShowSettings(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X />
            </button>

            <h3 className="text-xl text-gray-800 dark:text-gray-100 font-semibold mb-4">
              Cookie Preferences
            </h3>

            <CookieToggle
              title="Essential Cookies"
              description="Required for website functionality and security."
              checked
              disabled
            />

            <CookieToggle
              title="Analytics Cookies"
              description="Help us understand user behavior and improve our website."
              checked={consent.analytics}
              onChange={(v) => setConsent({ ...consent, analytics: v })}
            />

            <CookieToggle
              title="Marketing Cookies"
              description="Used for personalized ads and marketing campaigns."
              checked={consent.marketing}
              onChange={(v) => setConsent({ ...consent, marketing: v })}
            />

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={rejectAll}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Reject All
              </button>
              <button
                onClick={() => saveConsent(consent)}
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* Toggle component */
function CookieToggle({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 mb-4">
      <div>
        <h4 className="font-medium text-gray-800 dark:text-gray-100">
          {title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 w-5 h-5 accent-blue-600"
      />
    </div>
  );
}

/* Analytics hooks */
function loadAnalytics() {
  if (typeof window !== "undefined" && !window.__analyticsLoaded) {
    console.log("✅ Analytics loaded");
    window.__analyticsLoaded = true;
  }
}

function loadMarketingScripts() {
  if (typeof window !== "undefined" && !window.__marketingLoaded) {
    console.log("✅ Marketing scripts loaded");
    window.__marketingLoaded = true;
  }
}
