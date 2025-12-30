import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`bg-white/20 dark:bg-gray-800/40 backdrop-blur-md rounded-2xl shadow-lg p-6 ${className}`}
    >
      {children}
    </div>
  );
}
