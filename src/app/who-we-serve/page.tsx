import type { Metadata } from "next";
import WhoWeServe from "@/components/sections/WhoWeServe";

export const metadata: Metadata = {
  title: "Who We Serve",
  description:
    "Sraventix Technologies LLP is built for every stage of the workforce journey — students, professionals, and organizations.",
};

export default function WhoWeServePage() {
  return <WhoWeServe />;
}
