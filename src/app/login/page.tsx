"use client";

import { useState } from "react";
import Link from "next/link";
import AuthLayout from "@/components/AuthLayout";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleLogin}>
        <InputField
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChange={setEmail}
          type="email"
        />
        <InputField
          label="Password"
          placeholder="********"
          value={password}
          onChange={setPassword}
          type="password"
        />

        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-blue-600" /> Remember me
          </label>
          <Link
            href="/forgot-password"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <Button type="submit" fullWidth>
          Sign In
        </Button>
      </form>

      <p className="mt-6 text-center text-gray-500 dark:text-gray-400">
        Don’t have an account?{" "}
        <Link
          href="/signup"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}
