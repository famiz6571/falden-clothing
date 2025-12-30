"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Product, useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";
import { Heart, Star, Plus, Minus, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import productsData from "@/data/products.json";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import GlassCard from "@/components/GlassCard";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const productId = Array.isArray(id) ? id[0] : id;
  const [product, setProduct] = useState<Product | null>(null);

  const { cart, addToCart, increaseQty, decreaseQty } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const cartItem = product ? cart.find((item) => item.id === product.id) : null;
  const favorited = product ? isFavorite(product.id) : false;

  useEffect(() => {
    if (productId) {
      const data = productsData.find((p) => p.id === Number(productId));
      if (data) setProduct(data);
    }
  }, [productId]);

  if (!product)
    return <div className="text-center py-20">Product not found.</div>;

  const relatedProducts = productsData
    .filter((p) => p.id !== product.id && p.isFeatured)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto py-10 px-5 md:px-10 flex flex-col gap-12">
      {/* Breadcrumb */}
      <div
        className="flex items-center text-gray-600 dark:text-gray-300 cursor-pointer mb-4 hover:underline"
        onClick={() => router.back()}
      >
        <ArrowLeft size={18} className="mr-2" />
        Back to Products
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Product Image */}
        <motion.div
          className="flex-1 relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>

        {/* Product Info */}
        <GlassCard className="flex-1 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
              {product.name}
            </h1>
            <button
              onClick={() => toggleFavorite(product)}
              className={`p-3 rounded-full shadow-md transition ${
                favorited
                  ? "bg-red-100 text-red-500"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
              }`}
            >
              <Heart size={24} />
            </button>
          </div>

          {/* Price & Rating */}
          <div className="flex items-center gap-5">
            <span className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
              ${product.price.toFixed(2)}
            </span>
            <div className="flex items-center gap-1 text-yellow-500 font-medium">
              <Star size={20} />
              {product.rating.toFixed(1)}
            </div>
          </div>

          {/* Description */}
          <div
            className="prose prose-gray dark:prose-invert text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: product.content }}
          />

          {/* Add to Cart / Quantity */}
          {cartItem ? (
            <div className="flex items-center gap-3 mt-5">
              <button
                onClick={() => decreaseQty(product.id)}
                className="flex items-center justify-center w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full shadow-md transition-transform transform hover:scale-110"
              >
                <Minus size={20} />
              </button>
              <span className="text-gray-900 dark:text-gray-100 font-semibold text-lg">
                {cartItem.quantity}
              </span>
              <button
                onClick={() => increaseQty(product.id)}
                className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md transition-transform transform hover:scale-110"
              >
                <Plus size={20} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="mt-5 w-full md:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-400 text-white font-semibold rounded-xl shadow-md hover:from-blue-700 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-500 transition-all duration-300"
            >
              Add to Cart
            </button>
          )}
        </GlassCard>
      </div>

      {/* Customer Reviews */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-12 flex flex-col gap-5">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Customer Reviews
          </h2>
          {product.reviews.map((review) => (
            <GlassCard key={review.id}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  {review.name}
                </h3>
                <div className="flex items-center gap-1 text-yellow-500 font-medium">
                  <Star size={16} />
                  {review.rating.toFixed(1)}
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                {review.comment}
              </p>
            </GlassCard>
          ))}
        </div>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Related Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
