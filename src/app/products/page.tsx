"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products.json";
import Filters from "@/components/Filters";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedGender, setSelectedGender] = useState("All");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState("default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const categories = [
    "All",
    ...Array.from(new Set(productsData.map((p) => p.category))),
  ];
  const genders = ["All", "Men", "Women", "Unisex"];

  const minPrice = Math.min(...productsData.map((p) => p.price));
  const maxPrice = Math.max(...productsData.map((p) => p.price));

  useEffect(() => setPriceRange([minPrice, maxPrice]), [minPrice, maxPrice]);

  const filteredProducts = useMemo(() => {
    let temp = [...productsData];

    if (search)
      temp = temp.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.brand.toLowerCase().includes(search.toLowerCase())
      );
    if (selectedCategory !== "All")
      temp = temp.filter((p) => p.category === selectedCategory);
    if (selectedGender !== "All")
      temp = temp.filter((p) => p.gender === selectedGender);
    if (featuredOnly) temp = temp.filter((p) => p.isFeatured);
    if (inStockOnly) temp = temp.filter((p) => p.stock > 0);
    if (minRating > 0) temp = temp.filter((p) => p.rating >= minRating);
    temp = temp.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (sort === "asc") temp.sort((a, b) => a.price - b.price);
    if (sort === "desc") temp.sort((a, b) => b.price - a.price);
    if (sort === "rating") temp.sort((a, b) => b.rating - a.rating);
    if (sort === "name") temp.sort((a, b) => a.name.localeCompare(b.name));

    return temp;
  }, [
    search,
    selectedCategory,
    selectedGender,
    featuredOnly,
    inStockOnly,
    minRating,
    priceRange,
    sort,
  ]);

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSelectedGender("All");
    setFeaturedOnly(false);
    setInStockOnly(false);
    setMinRating(0);
    setPriceRange([minPrice, maxPrice]);
    setSort("default");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          onClick={() => setIsDrawerOpen(true)}
        >
          Filters
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-4rem)]">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0 overflow-y-auto custom-scrollbar">
          <Filters
            categories={categories}
            genders={genders}
            search={search}
            setSearch={setSearch}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
            featuredOnly={featuredOnly}
            setFeaturedOnly={setFeaturedOnly}
            inStockOnly={inStockOnly}
            setInStockOnly={setInStockOnly}
            minRating={minRating}
            setMinRating={setMinRating}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            minPrice={minPrice}
            maxPrice={maxPrice}
            sort={sort}
            setSort={setSort}
            resetFilters={resetFilters}
          />
        </aside>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-50"
              onClick={() => setIsDrawerOpen(false)}
            />
            <aside className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-gray-800 p-4 z-50 overflow-y-auto custom-scrollbar">
              <button
                className="mb-4 text-red-500 font-bold"
                onClick={() => setIsDrawerOpen(false)}
              >
                Close
              </button>
              <Filters
                categories={categories}
                genders={genders}
                search={search}
                setSearch={setSearch}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedGender={selectedGender}
                setSelectedGender={setSelectedGender}
                featuredOnly={featuredOnly}
                setFeaturedOnly={setFeaturedOnly}
                inStockOnly={inStockOnly}
                setInStockOnly={setInStockOnly}
                minRating={minRating}
                setMinRating={setMinRating}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                sort={sort}
                setSort={setSort}
                resetFilters={resetFilters}
              />
            </aside>
          </>
        )}

        {/* Products Grid */}
        <main className="flex-1 overflow-y-auto custom-scrollbar">
          {filteredProducts.length === 0 ? (
            <p className="text-center dark:text-gray-300 mt-10">
              No products found.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
