"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import CheckoutForm from "@/components/CheckoutForm";
import CheckoutSummary from "@/components/CheckoutSummary";

export default function CheckoutPage() {
  const { cart, clearCart, totalPrice } = useCart();
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const router = useRouter();

  const handleSubmit = (payload: any) => {
    console.log("Order payload:", payload, cart);

    // Generate fake order number
    const orderNum = "ORD-" + Math.floor(Math.random() * 1000000);
    setOrderNumber(orderNum);
    setOrderSuccess(true);

    // Clear cart after successful order
    clearCart();
  };

  if (orderSuccess)
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-md border border-white/20 dark:border-gray-700 rounded-2xl p-8 shadow-xl flex flex-col items-center gap-6 max-w-md mx-auto">
          <h2 className="text-3xl font-bold dark:text-white text-center">
            🎉 Order Placed Successfully!
          </h2>
          <p className="dark:text-gray-200 text-center">
            Thank you for your purchase. Your order number is:
          </p>
          <p className="text-xl font-semibold dark:text-white">{orderNumber}</p>
          <p className="dark:text-gray-300">
            Total Paid: ${(totalPrice() * 1.1).toFixed(2)}
          </p>

          <button
            onClick={() => router.push("/")} // Navigate to home/shop
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 font-semibold rounded-xl transition cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-8">
      <CheckoutForm onSubmit={handleSubmit} />
      <CheckoutSummary />
    </div>
  );
}
