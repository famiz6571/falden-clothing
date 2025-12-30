"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10">
        <div className="w-64 h-64 bg-purple-200/20 dark:bg-blue-700/20 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 flex flex-col md:flex-row items-center md:justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100"
          >
            FALDEN Clothing
          </motion.h1>

          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl"
          >
            Discover the latest fashion trends. Shop our exclusive collection of
            clothing, shoes, and accessories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Link
              href="/products"
              className="inline-block bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 shadow-lg transition"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <div className="w-full sm:w-4/5 md:w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-fashion.png"
              alt="FALDEN Fashion"
              width={600} // Desktop width
              height={600} // Desktop height
              className="w-full h-auto object-cover rounded-xl"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
