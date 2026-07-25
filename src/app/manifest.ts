import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: "Sraventix",
    description:
      "Outcome-driven technical and management programs that transform potential into professional excellence.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/brand/sraventix-mark.png",
        sizes: "460x460",
        type: "image/png",
      },
    ],
  };
}
