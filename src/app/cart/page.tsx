"use client";

import CartItemCard from "@/components/CartItemCard";
import CartSummary from "@/components/CartSummary";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
      {/* Cart Items */}
      <div className="flex-1 space-y-4 max-h-[80vh] overflow-y-auto custom-scrollbar">
        <h1 className="text-4xl font-bold dark:text-white mb-6">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <img src="/empty-cart.svg" alt="Empty Cart" className="w-64 mb-4" />
            <p className="text-gray-700 dark:text-gray-300 text-lg">
              Your cart is empty.
            </p>
          </div>
        ) : (
          cart.map((item, idx) => (
            <CartItemCard key={item.id} item={item} index={idx} />
          ))
        )}
      </div>

      {/* Summary */}
      {cart.length > 0 && <CartSummary />}
    </div>
  );
}
