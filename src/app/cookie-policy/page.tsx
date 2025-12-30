"use client";

import CustomerPageLayout from "@/components/CustomerPageLayout";
import { Cookie, ShieldCheck, Settings, Mail } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <CustomerPageLayout title="Cookie Policy">
      <div className="space-y-12">
        {/* Intro */}
        <section className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <Cookie className="text-blue-500" />
            <h2 className="text-xl font-semibold">What Are Cookies?</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Cookies are small text files stored on your device to enhance your
            browsing experience, remember preferences, and analyze website
            performance.
          </p>
        </section>

        {/* Types */}
        <PolicyBlock
          icon={<ShieldCheck />}
          title="Essential Cookies"
          points={[
            "Required for basic website functionality",
            "Enable secure login and checkout",
            "Cannot be disabled",
          ]}
        />

        <PolicyBlock
          icon={<Settings />}
          title="Analytics & Preference Cookies"
          points={[
            "Help us understand how users interact with our site",
            "Improve performance and user experience",
            "Only enabled with your consent",
          ]}
        />

        {/* Control */}
        <section className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-3">
            Managing Your Cookie Preferences
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You can accept, reject, or update your cookie preferences at any
            time through your browser settings or by revisiting our consent
            banner.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-500/10 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-8 text-center shadow-xl">
          <Mail className="mx-auto mb-4 text-blue-500" size={32} />
          <h3 className="text-xl font-semibold mb-2">
            Questions about cookies?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Contact us for more information about how we use cookies.
          </p>
          <a
            href="mailto:contact@faldenclothing.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
          >
            <Mail size={18} />
            contact@faldenclothing.com
          </a>
        </section>
      </div>
    </CustomerPageLayout>
  );
}

function PolicyBlock({
  icon,
  title,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  points: string[];
}) {
  return (
    <section className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-500">
          {icon}
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </section>
  );
}
