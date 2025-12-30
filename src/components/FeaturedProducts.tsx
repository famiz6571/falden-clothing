"use client";

import ProductCard from "./ProductCard";
import productsData from "@/data/products.json";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const featuredProducts = productsData.filter((p) => p.isFeatured);

  return (
    <section className="py-24 relative bg-gray-50 dark:bg-gray-900 transition-colors">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
      >
        Featured Products
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto px-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.05, // smooth stagger
            },
          },
        }}
      >
        {featuredProducts.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            className="transition-transform"
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
