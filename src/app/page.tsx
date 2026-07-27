import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";
import CourseCarousel from "@/components/sections/CourseCarousel";
import ImpactStats from "@/components/sections/ImpactStats";
import MomentsGallery from "@/components/sections/MomentsGallery";
import PartnerLogos from "@/components/sections/PartnerLogos";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <CourseCarousel />
      <ImpactStats />
      <MomentsGallery />
      <PartnerLogos />
    </>
  );
}
