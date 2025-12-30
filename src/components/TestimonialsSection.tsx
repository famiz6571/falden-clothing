"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaUserAlt, FaUserAstronaut } from "react-icons/fa";

const testimonials = [
  {
    name: "Sophia Williams",
    role: "Fashion Blogger",
    icon: <FaUserAlt size={30} className="text-blue-500" />,
    quote:
      "FALDEN Clothing has transformed my wardrobe! The quality and style are unmatched. Highly recommend for anyone looking for trendy outfits.",
  },
  {
    name: "James Anderson",
    role: "Designer",
    icon: <FaUserTie size={30} className="text-green-500" />,
    quote:
      "Amazing products and seamless shopping experience. The customer service is also top-notch!",
  },
  {
    name: "Emily Clark",
    role: "Lifestyle Influencer",
    icon: <FaUserAstronaut size={30} className="text-purple-500" />,
    quote:
      "I love the designs and attention to detail. FALDEN always keeps me coming back for more!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
        What Our Customers Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, type: "spring", stiffness: 120 }}
            className="flex flex-col p-6 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/40 dark:bg-gray-700/40 border-2 border-white/50 dark:border-gray-600">
                {t.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {t.role}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic">
              &quot;{t.quote}&quot;
            </p>
          </motion.div>
        ))}
      </div>

      {/* Background blobs */}
      <div className="absolute -top-16 -left-16 w-36 h-36 rounded-full bg-pink-300/30 dark:bg-pink-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-blue-300/30 dark:bg-blue-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-24 w-32 h-32 rounded-full bg-purple-300/30 dark:bg-purple-500/20 blur-3xl animate-pulse"></div>
    </section>
  );
}
