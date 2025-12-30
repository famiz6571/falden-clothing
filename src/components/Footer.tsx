"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Youtube, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4 flex flex-col items-start">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <Link href="/">
              <Image src="/falden.svg" alt="FALDEN" width={50} height={50} />
            </Link>
            <h3 className="text-2xl font-bold text-white">FALDEN CLOTHING</h3>
          </div>

          <p className="text-gray-400">
            Bringing high-quality, trendy clothing to everyone. Style, comfort,
            and sustainability in every product we create.
          </p>

          {/* Contact */}
          <div className="flex items-center gap-2 text-gray-400">
            <Mail size={18} /> contact@faldenclothing.com
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-sky-400 transition"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-red-600 transition"
            >
              <Youtube size={24} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white">Quick Links</h4>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <Link href="/" className="hover:text-blue-500 transition">
              Home
            </Link>
            <Link href="/products" className="hover:text-blue-500 transition">
              Products
            </Link>
            <Link href="/cart" className="hover:text-blue-500 transition">
              Cart
            </Link>
            <Link href="/login" className="hover:text-blue-500 transition">
              Login
            </Link>
          </motion.div>
        </div>

        {/* Customer Service */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white">Customer Service</h4>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <Link
              href="/shipping-returns"
              className="hover:text-blue-500 transition"
            >
              Shipping & Returns
            </Link>
            <Link href="/faqs" className="hover:text-blue-500 transition">
              FAQs
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-blue-500 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-blue-500 transition"
            >
              Terms & Conditions
            </Link>
          </motion.div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white">Subscribe</h4>
          <p className="text-gray-400">
            Get the latest updates and exclusive offers.
          </p>
          <div className="flex gap-0">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-xl border border-gray-400 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none text-gray-900 dark:text-gray-900 placeholder-gray-500 transition"
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 px-4 py-2 rounded-r-xl text-white font-semibold transition"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-gray-500 text-sm">
        © 2025 FALDEN Clothing. All rights reserved.
      </div>
    </footer>
  );
}
