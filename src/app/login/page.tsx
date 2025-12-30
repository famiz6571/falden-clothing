"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthLayout from "@/components/AuthLayout";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

// Yup validation schema
const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

type LoginFormData = yup.InferType<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Login payload:", data);
    alert("Login successful!");
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <InputField
          label="Email"
          placeholder="you@example.com"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <InputField
          label="Password"
          placeholder="********"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
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
