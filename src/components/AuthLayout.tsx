"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AuthLayout({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-yellow-300 via-orange-400 to-red-400 opacity-30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

      {/* Left Banner / Hero */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-center space-y-6"
        >
          <h2 className="text-4xl text-gray-800 dark:text-gray-100 font-bold drop-shadow-lg">
            Welcome to FALDEN Clothing
          </h2>
          <p className="text-lg max-w-sm mx-auto drop-shadow-md text-gray-800 dark:text-gray-100">
            Stylish, comfortable, and sustainable clothing. Sign in or create an
            account to continue your shopping journey.
          </p>

          {/* Illustration from Illustrator exported as SVG/PNG */}
          <Image
            src="/illustration-fashion.webp"
            alt="Fashion Illustration"
            width={400}
            height={400}
            className="mx-auto"
          />
        </motion.div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-white/80 dark:bg-gray-900/80 backdrop-blur-3xl rounded-3xl shadow-2xl p-10 border border-gray-200 dark:border-gray-700"
        >
          {/* Top Logo */}
          <div className="flex justify-center mb-6">
            <Image src="/falden.svg" alt="FALDEN Logo" width={80} height={80} />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
            {title}
          </h1>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
