"use client";

import ProductCard from "./ProductCard";
import productsData from "@/data/products.json";
import { motion } from "framer-motion";

export default function FeaturedProducts() {
  return (
    <section className="py-20 relative">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
      >
        Featured Products
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productsData
          .filter((p) => p.isFeatured)
          .map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: product.id * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
      </div>
    </section>
  );
}
