"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import InputField from "./InputField";

interface FormFields {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  paymentMethod: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function CheckoutForm({
  onSubmit,
}: {
  onSubmit: (payload: FormFields) => void;
}) {
  const { cart } = useCart();
  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    paymentMethod: "card",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (field: keyof FormFields, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email)
      newErrors.email = !/\S+@\S+\.\S+/.test(form.email) ? "Invalid email" : "";
    if (!form.address) newErrors.address = "Address is required";
    if (!form.city) newErrors.city = "City is required";
    if (!form.zip) newErrors.zip = "ZIP code is required";
    if (!form.country) newErrors.country = "Country is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!cart.length) {
      alert("Your cart is empty!");
      return;
    }
    if (validate()) onSubmit(form);
  };

  return (
    <div className="flex-1 flex flex-col gap-6">
      <h2 className="text-3xl font-bold dark:text-white">Billing & Shipping</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Full Name"
          value={form.name}
          onChange={(v) => handleChange("name", v)}
          error={errors.name}
        />
        <InputField
          label="Email"
          type="email"
          value={form.email}
          onChange={(v) => handleChange("email", v)}
          error={errors.email}
        />
        <InputField
          label="Address"
          value={form.address}
          onChange={(v) => handleChange("address", v)}
          error={errors.address}
        />
        <InputField
          label="City"
          value={form.city}
          onChange={(v) => handleChange("city", v)}
          error={errors.city}
        />
        <InputField
          label="ZIP / Postal Code"
          value={form.zip}
          onChange={(v) => handleChange("zip", v)}
          error={errors.zip}
        />
        <InputField
          label="Country"
          value={form.country}
          onChange={(v) => handleChange("country", v)}
          error={errors.country}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          Payment Method
        </label>
        <select
          value={form.paymentMethod}
          onChange={(e) => handleChange("paymentMethod", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/40 dark:bg-gray-800/40 text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 outline-none backdrop-blur-sm transition"
        >
          <option value="card">Credit / Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="cod">Cash on Delivery</option>
        </select>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold rounded-xl transition cursor-pointer"
      >
        Place Order
      </button>
    </div>
  );
}
