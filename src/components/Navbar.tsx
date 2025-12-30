"use client";

import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingCart, Sun, Moon, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "@/context/FavoritesContext";
import { useCart } from "@/context/CartContext";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Login", href: "/login" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const { favorites } = useFavorites();
  const { cart } = useCart();

  // total quantity of all items in cart
  const totalCartQty = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Company Name */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/falden.svg"
                alt="FALDEN"
                width={36}
                height={36}
                className="hidden dark:block"
              />

              {/* Dark logo in light mode */}
              <Image
                src="/falden-dark.svg"
                alt="FALDEN"
                width={36}
                height={36}
                className="block dark:hidden"
              />
            </Link>
            <span className="font-bold text-xl text-gray-900 dark:text-gray-100">
              FALDEN CLOTHING
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className={`px-2 py-1 transition-colors ${
                      isActive
                        ? "font-semibold text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 bottom-0 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
                    />
                  )}
                </motion.div>
              );
            })}

            {/* Favorites */}
            <Link href="/favorites" className="relative">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:scale-105 transition relative"
              >
                <Heart size={20} />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </motion.button>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:scale-105 transition relative"
              >
                <ShoppingCart size={20} />
                {totalCartQty > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                    {totalCartQty}
                  </span>
                )}
              </motion.button>
            </Link>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileTap={{ scale: 0.9 }}
              className="ml-2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-md hover:scale-105 transition relative"
              title={
                theme === "light"
                  ? "Switch to Dark Mode"
                  : "Switch to Light Mode"
              }
            >
              <motion.div
                animate={{ rotate: theme === "light" ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Favorites Mobile */}
            <Link href="/favorites" className="relative">
              <Heart size={20} className="text-gray-700 dark:text-gray-200" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </Link>

            {/* Cart Mobile */}
            <Link href="/cart" className="relative">
              <ShoppingCart
                size={20}
                className="text-gray-700 dark:text-gray-200"
              />
              {totalCartQty > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  {totalCartQty}
                </span>
              )}
            </Link>

            {/* Menu Toggle */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900/95 backdrop-blur-md shadow-md overflow-hidden transition-all"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "font-semibold text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Theme Toggle Mobile */}
              <button
                onClick={toggleTheme}
                className="mt-2 px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 w-full flex items-center justify-center gap-2"
              >
                {theme === "light" ? <Moon /> : <Sun />}
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
