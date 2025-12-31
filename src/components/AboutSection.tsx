"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-200/20 dark:bg-blue-700/20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-200/20 dark:bg-purple-700/20 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:space-x-10">
        {/* Image with glass effect */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-10 md:mb-0 relative"
        >
          <div className="rounded-xl overflow-hidden shadow-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg border border-white/20 dark:border-gray-600/20">
            <Image
              src="/about-fashion.webp"
              alt="About FALDEN"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Our Story
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            FALDEN Clothing started with the mission to bring high-quality,
            trendy clothing to everyone. We value style, comfort, and
            sustainability in every product we create. Our collections are
            curated to blend modern trends with timeless style.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
            Join our community of fashion enthusiasts and discover outfits that
            make you feel confident every day.
          </p>

          {/* Optional CTA */}
          <Link
            href="/products"
            className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 shadow-lg transition"
          >
            Explore Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
