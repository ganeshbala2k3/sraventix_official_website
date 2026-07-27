import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";
import Mascot from "@/components/ui/Mascot";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sraventix Technologies — for learners ready to LEAP, or organizations looking for a workforce transformation partner.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <Contact mascot={<Mascot className="h-auto w-full" sizes="320px" />} />;
}
