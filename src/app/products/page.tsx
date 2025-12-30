"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products.json";

export default function ProductsPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [category, setCategory] = useState<"All" | "Men" | "Women">("All");

  const categories = ["All", "Men", "Women"];

  const filteredProducts = productsData
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) =>
      category === "All" ? true : product.gender === category
    )
    .sort((a, b) => (sort === "asc" ? a.price - b.price : b.price - a.price));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col space-y-12">
      <h1 className="text-4xl font-bold dark:text-gray-100">Our Products</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 w-full sm:w-1/3 transition"
        />

        <div className="flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat as "All" | "Men" | "Women")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                category === cat
                  ? "bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-100"
                  : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "asc" | "desc")}
          className="border p-3 rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 transition"
        >
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {filteredProducts.map((product) => (
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
    </div>
  );
}
