"use client";

import CustomerPageLayout from "@/components/CustomerPageLayout";
import {
  ShieldCheck,
  Lock,
  CreditCard,
  Database,
  Mail,
  UserCheck,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <CustomerPageLayout title="Privacy Policy">
      <div className="space-y-12">
        {/* Intro */}
        <section className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="text-blue-500" />
            <h2 className="text-xl font-semibold">Your Privacy Matters</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            At <strong>FALDEN Clothing</strong>, your privacy is our priority.
            This policy explains how we collect, use, and protect your personal
            information when you interact with our website and services.
          </p>
        </section>

        {/* Data Collection */}
        <PolicyCard
          icon={<Database />}
          title="Information We Collect"
          content={[
            "Personal details such as name, email address, phone number, and shipping address.",
            "Order and transaction details related to your purchases.",
            "Basic technical data such as device type and browser for analytics and site improvement.",
          ]}
        />

        {/* Data Usage */}
        <PolicyCard
          icon={<UserCheck />}
          title="How We Use Your Information"
          content={[
            "To process and deliver your orders efficiently.",
            "To communicate order updates, promotions, and important service messages.",
            "To improve our website, services, and customer experience.",
          ]}
        />

        {/* Security */}
        <PolicyCard
          icon={<Lock />}
          title="Data Protection & Security"
          content={[
            "We implement industry-standard security measures to protect your data.",
            "Access to personal information is restricted to authorized personnel only.",
            "We continuously monitor and update our systems to prevent unauthorized access.",
          ]}
        />

        {/* Payments */}
        <PolicyCard
          icon={<CreditCard />}
          title="Secure Payments"
          content={[
            "All payments are processed through trusted and secure payment gateways.",
            "We do not store your card details on our servers.",
            "Your payment information is encrypted and protected at all times.",
          ]}
        />

        {/* Data Sharing */}
        <PolicyCard
          icon={<ShieldCheck />}
          title="Data Sharing Policy"
          content={[
            "We never sell or rent your personal information to third parties.",
            "Your data is shared only with trusted partners necessary to fulfill orders (shipping, payment processing).",
            "All partners adhere to strict confidentiality and data protection standards.",
          ]}
        />

        {/* User Rights */}
        <section className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Request access to the personal data we hold about you</li>
            <li>Request correction or updates to your information</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of promotional communications at any time</li>
          </ul>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-500/10 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-8 text-center shadow-xl">
          <Mail className="mx-auto mb-4 text-blue-500" size={32} />
          <h3 className="text-xl font-semibold mb-2">
            Questions about your privacy?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            You can request access, updates, or deletion of your data at any
            time.
          </p>
          <a
            href="mailto:contact@faldenclothing.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:shadow-xl transition"
          >
            <Mail size={18} />
            contact@faldenclothing.com
          </a>
        </section>
      </div>
    </CustomerPageLayout>
  );
}

/* ================= REUSABLE POLICY CARD ================= */

function PolicyCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string[];
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
        {content.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
