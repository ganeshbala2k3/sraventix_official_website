import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const PUBLIC_PATH = "/hero_media/mascot.png";

type Props = {
  className?: string;
  sizes?: string;
};

/**
 * Brand mascot illustration. Renders nothing until the asset exists at
 * public/hero_media/mascot.png, so pages ship clean while the image is pending.
 * Decorative (empty alt) — it supports the copy, never replaces it.
 */
export default function Mascot({ className = "", sizes = "280px" }: Props) {
  const exists = fs.existsSync(
    path.join(process.cwd(), "public", "hero_media", "mascot.png"),
  );
  if (!exists) return null;

  return (
    <Image
      src={PUBLIC_PATH}
      alt=""
      aria-hidden
      width={1254}
      height={1252}
      sizes={sizes}
      className={className}
    />
  );
}
