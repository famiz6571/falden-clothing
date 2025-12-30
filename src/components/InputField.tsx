"use client";

import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function InputField({
  label,
  error,
  className = "",
  ...props
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        {...props}
        className={`w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/40 dark:bg-gray-800/40 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 outline-none backdrop-blur-sm transition ${
          error ? "border-red-500 focus:ring-red-500" : ""
        } ${className}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
