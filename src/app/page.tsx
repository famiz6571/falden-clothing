import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CategoriesSection/>
      <FeaturedProducts />
      <TestimonialsSection/>
      <AboutSection />
    </div>
  );
}
