"use client";

import { useState, memo } from "react";
import { motion } from "framer-motion";
import CustomerPageLayout from "@/components/CustomerPageLayout";
import {
  ChevronDown,
  HelpCircle,
  Truck,
  RefreshCw,
  CreditCard,
  Mail,
} from "lucide-react";

/* ================= FAQ DATA ================= */

const faqSections = [
  {
    title: "Shipping",
    icon: Truck,
    items: [
      {
        q: "How long does shipping take?",
        a: "Orders are delivered within 3–7 business days depending on your location.",
      },
      {
        q: "Do you offer express shipping?",
        a: "Yes, express shipping is available at checkout for faster delivery.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently we ship within the UAE. International shipping will be available soon.",
      },
    ],
  },
  {
    title: "Returns & Refunds",
    icon: RefreshCw,
    items: [
      {
        q: "Can I return a product?",
        a: "Yes, returns are accepted within 30 days if the product is unused and in original condition.",
      },
      {
        q: "How long does a refund take?",
        a: "Refunds are processed within 5–7 business days after inspection.",
      },
      {
        q: "Are sale items refundable?",
        a: "Sale items are eligible for store credit only unless damaged.",
      },
    ],
  },
  {
    title: "Payments",
    icon: CreditCard,
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept credit/debit cards, Apple Pay, Google Pay, and secure online payments.",
      },
      {
        q: "Is my payment information secure?",
        a: "Yes, all transactions are encrypted using industry-standard security protocols.",
      },
    ],
  },
];

/* ================= PAGE ================= */

export default function FAQsPage() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  return (
    <CustomerPageLayout title="Frequently Asked Questions">
      <div className="space-y-12">
        {faqSections.map((section, sectionIndex) => (
          <section key={section.title}>
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6">
              <section.icon className="text-blue-500" />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>

            {/* FAQ Cards */}
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => {
                const id = `${sectionIndex}-${itemIndex}`;
                return (
                  <FAQItem
                    key={id}
                    question={item.q}
                    answer={item.a}
                    open={activeIndex === id}
                    onToggle={() =>
                      setActiveIndex(activeIndex === id ? null : id)
                    }
                  />
                );
              })}
            </div>
          </section>
        ))}

        {/* CTA */}
        <div className="mt-12 bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-2xl p-8 text-center shadow-xl">
          <HelpCircle className="mx-auto mb-4 text-blue-500" size={32} />
          <h3 className="text-xl font-semibold mb-2">Still need help?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our support team is always ready to assist you.
          </p>
          <a
            href="mailto:contact@faldenclothing.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:shadow-xl transition"
          >
            <Mail />
            Contact Support
          </a>
        </div>
      </div>
    </CustomerPageLayout>
  );
}

/* ================= OPTIMIZED FAQ ITEM ================= */

const FAQItem = memo(function FAQItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white/10 dark:bg-gray-800/40 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-xl overflow-hidden transition">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
      >
        <span className="font-medium">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown />
        </motion.span>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-6 pb-5 text-gray-600 dark:text-gray-300 text-sm"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
});
