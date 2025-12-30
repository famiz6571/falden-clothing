"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthLayout from "@/components/AuthLayout";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Link from "next/link";

// Yup schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

type FormData = yup.InferType<typeof schema>;

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Send password reset to:", data.email);
    alert(`Password reset instructions sent to ${data.email}`);
    reset();
  };

  return (
    <AuthLayout title="Forgot Password">
      <p className="text-gray-500 dark:text-gray-400 mb-6 text-center">
        Enter your email address and we will send you instructions to reset your
        password.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto space-y-4"
      >
        <InputField
          label="Email"
          placeholder="you@example.com"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Button type="submit" fullWidth disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Reset Link"}
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
