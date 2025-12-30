"use client";

import { CartItem } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  item: CartItem;
  index: number;
}

export default function CartItemCard({ item, index }: Props) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQtyChange = (qty: number) => {
    if (qty < 1) return;
    updateQuantity(item.id, qty);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-white/30 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700 rounded-xl p-4 shadow-lg gap-4 hover:shadow-xl transition-shadow"
    >
      {/* Product Info */}
      <div className="flex items-center gap-4 w-full sm:w-auto">
        <div className="relative w-28 h-28 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-gray-900 dark:text-white">
            {item.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-200">
            ${item.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Quantity & Total */}
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        {/* Quantity Controls */}
        <div className="flex items-center gap-2 bg-white/20 dark:bg-gray-700/40 rounded-lg p-1">
          <button
            onClick={() => handleQtyChange(item.quantity - 1)}
            className="text-gray-900 dark:text-white p-2 hover:bg-white/50 dark:hover:bg-gray-600/50 rounded transition cursor-pointer"
          >
            <FaMinus />
          </button>
          <span className="w-8 text-center font-semibold text-gray-900 dark:text-white">
            {item.quantity}
          </span>
          <button
            onClick={() => handleQtyChange(item.quantity + 1)}
            className="text-gray-900 dark:text-white p-2 hover:bg-white/50 dark:hover:bg-gray-600/50 rounded transition cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>

        {/* Total Price */}
        <p className="font-semibold text-gray-900 dark:text-white">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        {/* Remove Button */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg shadow-md transition cursor-pointer"
        >
          <FaTrash />
        </button>
      </div>
    </motion.div>
  );
}
