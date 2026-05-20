import { Hero } from "@/components/sections/Hero";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { FeaturedMediaServices } from "@/components/sections/FeaturedMediaServices";
import { SocialProof } from "@/components/sections/SocialProof";
import { Clients } from "@/components/sections/Clients";
import { CTABanner } from "@/components/sections/CTABanner";
import { EquipmentSection } from "@/components/sections/EquipmentSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <VideoShowcase />
      <FeaturedProducts />
      <FeaturedMediaServices />
      <EquipmentSection />
      <Clients />
      <CTABanner />

    </>
  );
}

