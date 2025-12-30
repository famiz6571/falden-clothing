// app/product/[id]/page.tsx
import ProductDetailPage from "@/components/ProductDetailPage";
import productsData from "@/data/products.json";

// Required for static export
export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id.toString(),
  }));
}

// You can keep your default export
export default function Page({ params }: { params: { id: string } }) {
  return <ProductDetailPage />;
}
