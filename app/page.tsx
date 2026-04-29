import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { PainPoints } from "@/components/sections/PainPoints";
import { Solutions } from "@/components/sections/Solutions";
import { CoreValues } from "@/components/sections/CoreValues";
import { TeamSection } from "@/components/sections/TeamSection";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { TechCapabilities } from "@/components/sections/TechCapabilities";
import { Process } from "@/components/sections/Process";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col w-full bg-white">
        <Hero />
        <SocialProof />
        <PainPoints />
        <Solutions />
        <CoreValues />
        <TeamSection />
        <CaseStudies />
        <TechCapabilities />
        <Process />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
