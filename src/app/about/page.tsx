import type { Metadata } from "next";
import About from "@/components/sections/About";
import Framework from "@/components/sections/Framework";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sraventix Technologies LLP is an EdTech company built on outcomes, not just content — and the L.E.A.P. framework behind every program we run.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Framework />
    </>
  );
}
