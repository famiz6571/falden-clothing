import React from "react";

interface FiltersProps {
  categories: string[];
  genders: string[];
  search: string;
  setSearch: (v: string) => void;
  selectedCategory: string;
  setSelectedCategory: (v: string) => void;
  selectedGender: string;
  setSelectedGender: (v: string) => void;
  featuredOnly: boolean;
  setFeaturedOnly: (v: boolean) => void;
  inStockOnly: boolean;
  setInStockOnly: (v: boolean) => void;
  minRating: number;
  setMinRating: (v: number) => void;
  priceRange: [number, number];
  setPriceRange: (v: [number, number]) => void;
  minPrice: number;
  maxPrice: number;
  sort: string;
  setSort: (v: string) => void;
  resetFilters: () => void;
}

export default function Filters({
  categories,
  genders,
  search,
  setSearch,
  selectedCategory,
  setSelectedCategory,
  selectedGender,
  setSelectedGender,
  featuredOnly,
  setFeaturedOnly,
  inStockOnly,
  setInStockOnly,
  minRating,
  setMinRating,
  priceRange,
  setPriceRange,
  minPrice,
  maxPrice,
  sort,
  setSort,
  resetFilters,
}: FiltersProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md space-y-6">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
      />

      {/* Category */}
      <div>
        <h3 className="font-semibold mb-2 dark:text-gray-200">Category</h3>
        {categories.map((cat: string) => (
          <button
            key={cat}
            className={`block mb-1 text-left w-full px-2 py-1 rounded transition ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gender */}
      <div>
        <h3 className="font-semibold mb-2 dark:text-gray-200">Gender</h3>
        {genders.map((g: string) => (
          <button
            key={g}
            className={`block mb-1 text-left w-full px-2 py-1 rounded transition ${
              selectedGender === g
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200"
            }`}
            onClick={() => setSelectedGender(g)}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Featured */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={featuredOnly}
          onChange={(e) => setFeaturedOnly(e.target.checked)}
        />
        <span className="dark:text-gray-200">Featured Only</span>
      </div>

      {/* In Stock */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => setInStockOnly(e.target.checked)}
        />
        <span className="dark:text-gray-200">In Stock Only</span>
      </div>

      {/* Rating */}
      <div>
        <h3 className="font-semibold mb-2 dark:text-gray-200">Min Rating</h3>
        <input
          type="number"
          min={0}
          max={5}
          step={0.1}
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
          className="w-full border p-2 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        />
      </div>

      {/* Price */}
      <div>
        <h3 className="font-semibold mb-2 dark:text-gray-200">Price Range</h3>
        <div className="flex gap-2">
          <input
            type="number"
            min={minPrice}
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([Number(e.target.value), priceRange[1]])
            }
            className="w-1/2 border p-2 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
          <input
            type="number"
            min={priceRange[0]}
            max={maxPrice}
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], Number(e.target.value)])
            }
            className="w-1/2 border p-2 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
          />
        </div>
      </div>

      {/* Sort */}
      <div>
        <h3 className="font-semibold mb-2 dark:text-gray-200">Sort By</h3>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full border p-2 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
        >
          <option value="default">Default</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
          <option value="rating">Rating</option>
          <option value="name">Name</option>
        </select>
      </div>

      {/* Reset Filters */}
      <button
        onClick={resetFilters}
        className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
      >
        Reset Filters
      </button>
    </div>
  );
}
