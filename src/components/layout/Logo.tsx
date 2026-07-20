import Image from "next/image";

export default function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <span className={`relative block w-auto ${className}`} style={{ aspectRatio: "1241 / 414" }}>
      <Image
        src="/brand/sraventix-logo.png"
        alt="Sraventix Technologies"
        fill
        priority
        sizes="240px"
        className="object-contain object-left"
      />
    </span>
  );
}
