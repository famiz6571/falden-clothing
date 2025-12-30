"use client";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
}

export default function InputField({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-white placeholder-gray-400 focus:ring-1 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 outline-none backdrop-blur-sm transition"
      />
    </div>
  );
}
