"use client";

import { useFavorites } from "@/context/FavoritesContext";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
      <div className="max-w-6xl mx-auto px-5">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-400">
          Your Favorites
        </h1>

        {favorites.length === 0 ? (
          <p className="text-center text-gray-700 dark:text-gray-300 text-lg mt-10">
            You haven’t added any products to your favorites yet.
          </p>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {favorites.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
