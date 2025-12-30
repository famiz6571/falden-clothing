"use client";

import { useCart } from "@/context/CartContext";
import InputField from "./InputField";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormFields {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  paymentMethod: string;
}

interface CheckoutFormProps {
  onSubmit: (payload: FormFields) => void;
}

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  zip: yup.string().required("ZIP / Postal code is required"),
  country: yup.string().required("Country is required"),
  paymentMethod: yup.string().required("Payment method is required"),
});

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const { cart } = useCart();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: yupResolver(schema),
    mode: "onChange", // this enables realtime validation
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      zip: "",
      country: "",
      paymentMethod: "card",
    },
  });

  const submitHandler: SubmitHandler<FormFields> = (data) => {
    if (!cart.length) {
      alert("Your cart is empty!");
      return;
    }
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex-1 flex flex-col gap-6"
    >
      <h2 className="text-3xl font-bold dark:text-white">Billing & Shipping</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "name", label: "Full Name" },
          { name: "email", label: "Email", type: "email" },
          { name: "address", label: "Address" },
          { name: "city", label: "City" },
          { name: "zip", label: "ZIP / Postal Code" },
          { name: "country", label: "Country" },
        ].map((field) => (
          <Controller
            key={field.name}
            name={field.name as keyof FormFields}
            control={control}
            render={({ field: { value, onChange } }) => (
              <InputField
                label={field.label}
                type={field.type}
                value={value}
                onChange={onChange}
                error={errors[field.name as keyof FormFields]?.message}
              />
            )}
          />
        ))}
      </div>

      {/* Payment Method */}
      <Controller
        name="paymentMethod"
        control={control}
        render={({ field }) => (
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1">
              Payment Method
            </label>
            <select
              {...field}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/40 dark:bg-gray-800/40 text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 outline-none backdrop-blur-sm transition"
            >
              <option value="card">Credit / Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cod">Cash on Delivery</option>
            </select>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm mt-1">
                {errors.paymentMethod.message}
              </p>
            )}
          </div>
        )}
      />

      <button
        type="submit"
        className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold rounded-xl transition cursor-pointer"
      >
        Place Order
      </button>
    </form>
  );
}
