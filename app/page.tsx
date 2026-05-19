import { Hero } from "@/components/sections/Hero";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { FeaturedMediaServices } from "@/components/sections/FeaturedMediaServices";
import { SocialProof } from "@/components/sections/SocialProof";
import { PainPoints } from "@/components/sections/PainPoints";
import { Solutions } from "@/components/sections/Solutions";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { TeamSection } from "@/components/sections/TeamSection";
import { TechCapabilities } from "@/components/sections/TechCapabilities";
import { Clients } from "@/components/sections/Clients";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <VideoShowcase />
      <FeaturedProducts />
      <FeaturedMediaServices />
      <CaseStudies />
      <Solutions />
      <Clients />
      <CTABanner />

    </>
  );
}

