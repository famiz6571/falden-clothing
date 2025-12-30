"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Eye, Star, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  description: string;
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { cart, addToCart, increaseQty, decreaseQty } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const router = useRouter();

  const cartItem = cart.find((item) => item.id === product.id);
  const favorited = isFavorite(product.id);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      className="group relative flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-64 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition duration-500" />

        {/* Hover Buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-500">
          <button
            onClick={() => toggleFavorite(product)}
            className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition transform ${
              favorited ? "text-red-500" : "text-gray-800 dark:text-gray-200"
            }`}
          >
            <Heart size={20} />
          </button>

          <button
            onClick={() => router.push(`/product/${product.id}`)}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:scale-110 transition transform text-gray-800 dark:text-gray-200"
          >
            <Eye size={20} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col justify-between flex-1 gap-3">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 truncate">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-1">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-1 text-yellow-500 font-medium">
            <Star size={16} />
            {product.rating.toFixed(1)}
          </div>
        </div>

        {/* Add to Cart or Quantity */}
        {cartItem ? (
          <div className="mt-4 flex items-center justify-between gap-3">
            {/* Decrease Button */}
            <button
              onClick={() => decreaseQty(product.id)}
              className="flex items-center justify-center w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <Minus size={20} />
            </button>

            {/* Quantity Display */}
            <span className="text-gray-900 dark:text-gray-100 font-semibold text-lg">
              {cartItem.quantity}
            </span>

            {/* Increase Button */}
            <button
              onClick={() => increaseQty(product.id)}
              className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <Plus size={20} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => addToCart(product)}
            className="mt-4 w-full py-2 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-500 transition-all duration-300"
          >
            Add to Cart
          </button>
        )}
      </div>
    </motion.div>
  );
}
