import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";
import {HeroSection} from "@/components/Hero_section";
import {FeaturedCategories} from "@/components/Featured";

export default function Home() {
  return (
    <div>
      <div className="bg-[#1F4F35]">
      <HeroSection />
      <FeaturedCategories/>
      </div>
      <Container className="py-10">
        
        <HomeBanner />
        <ProductGrid />
      </Container>
    </div>
  );
}
