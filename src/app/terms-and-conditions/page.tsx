"use client";

import CustomerPageLayout from "@/components/CustomerPageLayout";
import {
  FileText,
  ShoppingCart,
  CreditCard,
  Truck,
  RefreshCw,
  ShieldAlert,
  Mail,
} from "lucide-react";

export default function TermsPage() {
  return (
    <CustomerPageLayout title="Terms & Conditions">
      <div className="space-y-12">
        {/* Intro */}
        <section className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <FileText className="text-blue-500" />
            <h2 className="text-xl font-semibold">Agreement to Terms</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            By accessing or using the <strong>FALDEN Clothing</strong> website,
            you agree to be bound by these Terms & Conditions. Please read them
            carefully before making a purchase.
          </p>
        </section>

        {/* Pricing */}
        <TermsCard
          icon={<CreditCard />}
          title="Pricing & Payments"
          points={[
            "All prices are listed in AED and include applicable taxes unless stated otherwise.",
            "Prices may change at any time without prior notice.",
            "Payments must be completed in full before an order is processed.",
          ]}
        />

        {/* Orders */}
        <TermsCard
          icon={<ShoppingCart />}
          title="Orders & Availability"
          points={[
            "Placing an order does not guarantee acceptance.",
            "All orders are subject to product availability.",
            "We reserve the right to cancel or limit quantities at our discretion.",
          ]}
        />

        {/* Shipping */}
        <TermsCard
          icon={<Truck />}
          title="Shipping & Delivery"
          points={[
            "Orders are shipped according to our Shipping Policy.",
            "Delivery times are estimates and may vary due to external factors.",
            "FALDEN Clothing is not responsible for delays beyond our control.",
          ]}
        />

        {/* Returns */}
        <TermsCard
          icon={<RefreshCw />}
          title="Returns & Refunds"
          points={[
            "Returns are accepted within 30 days of delivery.",
            "Products must be unused, in original condition, and with tags attached.",
            "Refunds are processed according to our Returns Policy.",
          ]}
        />

        {/* Liability */}
        <TermsCard
          icon={<ShieldAlert />}
          title="Limitation of Liability"
          points={[
            "FALDEN Clothing is not liable for indirect or consequential damages.",
            "Our liability is limited to the value of the purchased product.",
            "Use of our website is at your own risk.",
          ]}
        />

        {/* Contact */}
        <section className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 dark:from-blue-500/10 dark:to-purple-500/10 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-8 text-center shadow-xl">
          <Mail className="mx-auto mb-4 text-blue-500" size={32} />
          <h3 className="text-xl font-semibold mb-2">
            Questions about our terms?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            If you have any questions or concerns, our support team is here to
            help.
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

/* ================= REUSABLE TERMS CARD ================= */

function TermsCard({
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
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
