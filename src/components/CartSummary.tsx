"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartSummary() {
  const { totalPrice, clearCart } = useCart();
  const router = useRouter();

  return (
    <div className="w-full lg:w-96 flex-shrink-0 bg-white/30 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700 rounded-xl p-6 shadow-lg sticky top-4 flex flex-col gap-6">
      <h2 className="text-2xl font-bold dark:text-white">Summary</h2>

      <div className="flex justify-between">
        <span className="text-gray-700 dark:text-gray-200">Subtotal</span>
        <span className="font-semibold dark:text-white">
          ${totalPrice().toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-700 dark:text-gray-200">Tax (10%)</span>
        <span className="font-semibold dark:text-white">
          ${(totalPrice() * 0.1).toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between border-t pt-2 border-white/20 dark:border-gray-700">
        <span className="text-lg font-bold dark:text-white">Total</span>
        <span className="text-lg font-bold dark:text-white">
          ${(totalPrice() * 1.1).toFixed(2)}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => router.push("/checkout")}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold rounded-xl transition cursor-pointer"
        >
          Checkout
        </button>
        <button
          onClick={clearCart}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 font-semibold rounded-xl transition cursor-pointer"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
