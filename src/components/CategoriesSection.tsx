"use client";

import { motion } from "framer-motion";
import { BsBackpack } from "react-icons/bs";
import {
  FiLayers,
  FiAward,
  FiShoppingBag,
  FiScissors,
  FiGift,
} from "react-icons/fi";
import { MdWatch, MdLocalOffer } from "react-icons/md";

const categories = [
  { name: "Jackets", icon: <FiLayers size={32} /> },
  { name: "Dresses", icon: <FiAward size={32} /> },
  { name: "Shoes", icon: <FiShoppingBag size={32} /> },
  { name: "Hoodies", icon: <MdLocalOffer size={32} /> }, // tag icon
  { name: "Pants", icon: <FiScissors size={32} /> },
  { name: "Tops", icon: <FiGift size={32} /> }, // gift icon
  { name: "Accessories", icon: <MdWatch size={32} /> },
  { name: "Bags", icon: <BsBackpack size={32} /> },
];

export default function CategoriesSection() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
        Explore Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 120 }}
            className="flex flex-col items-center justify-center p-6 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700 shadow-lg hover:scale-105 hover:shadow-2xl transition-transform cursor-pointer"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 text-white shadow-md mb-4">
              {cat.icon}
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {cat.name}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="absolute -top-16 -left-16 w-36 h-36 rounded-full bg-pink-300/30 dark:bg-pink-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-blue-300/30 dark:bg-blue-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-24 w-32 h-32 rounded-full bg-purple-300/30 dark:bg-purple-500/20 blur-3xl animate-pulse"></div>
    </section>
  );
}
