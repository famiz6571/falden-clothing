"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity, totalPrice } =
    useCart();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleQuantityChange = (id: number, qty: number) => {
    if (qty < 1) return;
    updateQuantity(id, qty);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
      {/* Cart Items */}
      <div className="flex-1 space-y-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
        <h1 className="text-4xl font-bold dark:text-gray-100 mb-6">
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <img src="/empty-cart.svg" alt="Empty Cart" className="w-64 mb-4" />
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Your cart is empty.
            </p>
          </div>
        ) : (
          cart.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity Selector */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <p className="font-semibold dark:text-gray-100">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Summary / Checkout for Desktop */}
      <div className="hidden lg:flex w-full lg:w-96 flex-shrink-0 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col gap-6 sticky top-4 max-h-[80vh]">
        <h2 className="text-2xl font-bold dark:text-gray-100">Summary</h2>
        <div className="flex justify-between">
          <span className="text-gray-700 dark:text-gray-300">Subtotal</span>
          <span className="font-semibold dark:text-gray-100">
            ${totalPrice().toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-700 dark:text-gray-300">Tax (10%)</span>
          <span className="font-semibold dark:text-gray-100">
            ${(totalPrice() * 0.1).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between border-t pt-2 border-gray-300 dark:border-gray-700">
          <span className="text-lg font-bold dark:text-gray-100">Total</span>
          <span className="text-lg font-bold dark:text-gray-100">
            ${(totalPrice() * 1.1).toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold rounded-xl transition">
            Checkout
          </button>
          <button
            onClick={clearCart}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 font-semibold rounded-xl transition"
          >
            Clear Cart
          </button>
        </div>
      </div>

      {/* Mobile Bottom Drawer */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full lg:hidden bg-white dark:bg-gray-800 p-4 shadow-t flex justify-between items-center z-50">
          <div>
            <p className="text-gray-700 dark:text-gray-300 text-sm">Total:</p>
            <p className="font-bold text-lg dark:text-gray-100">
              ${(totalPrice() * 1.1).toFixed(2)}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
            >
              Clear
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
