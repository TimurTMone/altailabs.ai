import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { Services } from "@/components/sections/services";
import { FeaturedCases } from "@/components/sections/featured-cases";
import { About } from "@/components/sections/about";
import { AIShowcase } from "@/components/sections/ai-showcase";
import { CaseGrid } from "@/components/sections/case-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <FeaturedCases />
        <About />
        <AIShowcase />
        <CaseGrid />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
