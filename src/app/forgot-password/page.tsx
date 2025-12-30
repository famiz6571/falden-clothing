"use client";

import { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Send password reset to:", email);
  };

  return (
    <AuthLayout title="Forgot Password">
      <p className="text-gray-500 dark:text-gray-400 mb-4">
        Enter your email address and we will send you instructions to reset your
        password.
      </p>
      <form onSubmit={handleReset}>
        <InputField
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChange={setEmail}
          type="email"
        />
        <Button type="submit" fullWidth>
          Send Reset Link
        </Button>
      </form>

      <p className="mt-6 text-center text-gray-500 dark:text-gray-400">
        Back to{" "}
        <Link
          href="/login"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}
