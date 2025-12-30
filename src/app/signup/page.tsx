"use client";

import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import { motion } from "framer-motion";

export default function SignUpPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [newsletter, setNewsletter] = useState(true);

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) return alert("Passwords do not match");
    console.log({ fullName, email, phone, password, newsletter });
  };

  return (
    <AuthLayout title="Create Your Account">
      {/* Banner / Promo Section */}
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

      {/* Signup Form */}
      <form onSubmit={handleSignUp} className="space-y-4">
        <InputField
          label="Full Name"
          placeholder="John Doe"
          value={fullName}
          onChange={setFullName}
        />
        <InputField
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChange={setEmail}
          type="email"
        />
        <InputField
          label="Phone Number"
          placeholder="+971 50 123 4567"
          value={phone}
          onChange={setPhone}
          type="tel"
        />
        <InputField
          label="Password"
          placeholder="********"
          value={password}
          onChange={setPassword}
          type="password"
        />
        <InputField
          label="Confirm Password"
          placeholder="********"
          value={confirm}
          onChange={setConfirm}
          type="password"
        />

        <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-sm">
          <input
            type="checkbox"
            checked={newsletter}
            onChange={(e) => setNewsletter(e.target.checked)}
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
