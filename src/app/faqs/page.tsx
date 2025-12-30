"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomerPageLayout from "@/components/CustomerPageLayout";
import { ChevronDown, ChevronUp, Mail } from "lucide-react";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-7 business days depending on your location.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes! Returns are accepted within 30 days in original condition with tags.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Currently, we only ship within the UAE, but we plan to expand soon.",
  },
];

export default function FAQsPage() {
  return (
    <CustomerPageLayout title="FAQs">
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}

        {/* CTA Button */}
        <div className="mt-6">
          <a
            href="mailto:contact@faldenclothing.com"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-4 py-3 rounded-lg transition"
          >
            <Mail size={20} />
            Contact Support
          </a>
        </div>
      </div>
    </CustomerPageLayout>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
      <button
        className="w-full flex justify-between items-center px-4 py-3 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        onClick={() => setOpen(!open)}
      >
        <span className="font-medium">{question}</span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="px-4 py-3 text-gray-700 dark:text-gray-300"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
