"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CustomerPageLayoutProps {
  title: string;
  children: ReactNode;
}

export default function CustomerPageLayout({
  title,
  children,
}: CustomerPageLayoutProps) {
  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8">
      {/* Breadcrumb */}
      <nav className="text-gray-500 dark:text-gray-400 text-sm mb-4 flex items-center gap-1">
        <Link href="/" className="hover:text-blue-500 transition">
          Home
        </Link>
        <ChevronRight size={16} />
        <span className="text-gray-400 dark:text-gray-500">{title}</span>
      </nav>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {title}
      </h1>

      {/* Content */}
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}
