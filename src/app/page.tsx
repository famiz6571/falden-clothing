import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProducts />
      <AboutSection />
    </div>
  );
}
