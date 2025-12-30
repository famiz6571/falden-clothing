"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Link from "next/link";
import { motion } from "framer-motion";

import AuthLayout from "@/components/AuthLayout";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

// Yup schema
const signupSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\+?\d{7,15}$/, "Invalid phone number"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirm: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords do not match"),
  newsletter: yup.boolean().required().default(true),
});

type SignUpFormData = yup.InferType<typeof signupSchema>;

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormData>({
    resolver: yupResolver(signupSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirm: "",
      newsletter: true,
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log("Signup payload:", data);
    alert("Account created successfully!");
    reset();
  };

  return (
    <AuthLayout title="Create Your Account">
      {/* Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-center"
      >
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Join FALDEN Clothing
        </h2>
        <p className="text-gray-500 dark:text-gray-400">
          Get access to exclusive deals, updates, and the latest fashion trends.
        </p>
      </motion.div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Full Name"
          placeholder="John Doe"
          {...register("fullName")}
          error={errors.fullName?.message}
        />

        <InputField
          label="Email"
          placeholder="you@example.com"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <InputField
          label="Phone Number"
          placeholder="+971 50 123 4567"
          type="tel"
          {...register("phone")}
          error={errors.phone?.message}
        />

        <InputField
          label="Password"
          placeholder="********"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <InputField
          label="Confirm Password"
          placeholder="********"
          type="password"
          {...register("confirm")}
          error={errors.confirm?.message}
        />

        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm cursor-pointer">
          <input
            type="checkbox"
            {...register("newsletter")}
            className="accent-blue-600"
          />
          Subscribe to our newsletter
        </label>

        <Button type="submit" fullWidth>
          Create Account
        </Button>
      </form>

      <p className="mt-6 text-center text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
