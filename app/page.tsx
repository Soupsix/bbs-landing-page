import { Hero } from "@/components/sections/Hero";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { SocialProof } from "@/components/sections/SocialProof";
import { PainPoints } from "@/components/sections/PainPoints";
import { Solutions } from "@/components/sections/Solutions";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { TeamSection } from "@/components/sections/TeamSection";
import { TechCapabilities } from "@/components/sections/TechCapabilities";
import { Clients } from "@/components/sections/Clients";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <VideoShowcase />
      <Solutions />
      <CaseStudies />
      <Process />
      <Clients />
      <Testimonials />
      <CTABanner />

    </>
  );
}

