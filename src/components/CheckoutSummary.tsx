"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function CheckoutSummary() {
  const { cart, totalPrice, removeFromCart } = useCart();

  return (
    <div className="w-full lg:w-96 flex-shrink-0 bg-white/30 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700 rounded-2xl p-6 shadow-xl sticky top-4 flex flex-col gap-6">
      {/* Title */}
      <h2 className="text-2xl font-bold dark:text-white border-b border-white/20 dark:border-gray-700 pb-2">
        Order Summary
      </h2>

      {/* Products List */}
      <div className="flex flex-col gap-3 max-h-64 overflow-y-auto custom-scrollbar pr-2">
        {cart.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300 text-center py-8">
            Your cart is empty
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white/50 dark:bg-gray-900/50 rounded-xl p-3 backdrop-blur-sm shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-3">
                {/* Thumbnail */}
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name + Quantity */}
                <div className="flex flex-col gap-1">
                  <span className="font-medium dark:text-white">
                    {item.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    x{item.quantity}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    ${item.price.toFixed(2)} each
                  </span>
                </div>
              </div>

              {/* Price + Remove */}
              <div className="flex items-center gap-3">
                <span className="font-semibold dark:text-white">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-1 rounded-full bg-red-500/70 hover:bg-red-500 text-white transition"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Totals */}
      <div className="flex flex-col gap-2 border-t border-white/20 dark:border-gray-700 pt-3">
        <div className="flex justify-between text-gray-700 dark:text-gray-300 font-medium">
          <span>Subtotal</span>
          <span>${totalPrice().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-700 dark:text-gray-300 font-medium">
          <span>Tax (10%)</span>
          <span>${(totalPrice() * 0.1).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xl font-bold text-gray-900 dark:text-white pt-2">
          <span>Total</span>
          <span>${(totalPrice() * 1.1).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
