"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col space-y-8">
      <h1 className="text-4xl font-bold dark:text-gray-100">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          Your cart is empty.
        </p>
      ) : (
        <>
          <div className="flex flex-col space-y-4">
            {cart.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900 dark:text-gray-100">
                      {item.name}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      ${item.price}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition"
                >
                  Remove
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-md">
            <span className="text-xl md:text-2xl font-bold dark:text-gray-100">
              Total: ${totalPrice.toFixed(2)}
            </span>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button
                onClick={clearCart}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md transition"
              >
                Clear Cart
              </button>
              <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-md transition">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
