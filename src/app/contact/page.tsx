import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sraventix Technologies LLP — for learners ready to LEAP, or organizations looking for a workforce transformation partner.",
};

export default function ContactPage() {
  return <Contact />;
}
