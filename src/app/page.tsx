import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaFinal } from "@/components/home/CtaFinal";

export default function Home() {
  return (
    <div className="w-full flex-1">
      <Hero />
      <Pillars />
      <FeaturedServices />
      <AboutSnippet />
      <Testimonials />
      <CtaFinal />
    </div>
  );
}
