import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";
import CookieConsent from "@/components/CookieConsent"; // ✅ ADD THIS

export const metadata = {
  title: "FALDEN Clothing",
  description: "FALDEN Clothing e-commerce store",
  icons: {
    icon: "/falden.svg",
    apple: "/falden.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 transition-colors">
        <CartProvider>
          <FavoritesProvider>
            {/* Fixed Navbar */}
            <Navbar />

            {/* Main content */}
            <main className="pt-16 min-h-[calc(100vh-4rem-4rem)]">
              {children}
            </main>

            {/* Footer */}
            <Footer />

            {/* 🍪 Cookie Consent (GLOBAL) */}
            <CookieConsent />
          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
