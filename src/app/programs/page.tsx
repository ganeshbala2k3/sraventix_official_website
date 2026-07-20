import type { Metadata } from "next";
import Programs from "@/components/sections/Programs";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Sraventix Technologies' regular and specialized programs — IT & Technology, Management, and finance-focused courses built for real career outcomes.",
};

export default function ProgramsPage() {
  return <Programs />;
}
