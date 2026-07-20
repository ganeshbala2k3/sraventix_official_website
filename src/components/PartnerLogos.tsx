import Image from "next/image";

type Partner = {
  name: string;
  src: string;
  width: number;
  height: number;
};

const ROW_1: Partner[] = [
  { name: "Netenrich", src: "/partnerlogo/optimized/netenrich.png", width: 111, height: 181 },
  { name: "Kuwait Finance House", src: "/partnerlogo/optimized/kuwait-finance-house.png", width: 382, height: 94 },
  { name: "TechProjectsHub", src: "/partnerlogo/optimized/techprojectshub.png", width: 804, height: 451 },
  { name: "CCTS Global", src: "/partnerlogo/optimized/ccts-global.png", width: 326, height: 134 },
  { name: "Manovista Consulting", src: "/partnerlogo/optimized/manovista.png", width: 204, height: 192 },
  { name: "Uptown Law Firm", src: "/partnerlogo/optimized/uptown-law.png", width: 356, height: 119 },
  { name: "Odigos", src: "/partnerlogo/optimized/odigos.png", width: 65, height: 78 },
  { name: "Donyati", src: "/partnerlogo/optimized/donyati.png", width: 291, height: 111 },
  { name: "True Greens", src: "/partnerlogo/optimized/truegreens.png", width: 756, height: 312 },
];

const ROW_2: Partner[] = [
  { name: "IGA Tech", src: "/partnerlogo/optimized/iga-tech.png", width: 439, height: 133 },
  { name: "Morni", src: "/partnerlogo/optimized/morni.png", width: 291, height: 127 },
  { name: "CoreCellent Technologies", src: "/partnerlogo/optimized/corecellent.png", width: 177, height: 86 },
  { name: "Delta Remediation", src: "/partnerlogo/optimized/delta-remediation.png", width: 358, height: 108 },
  { name: "Senrysa", src: "/partnerlogo/optimized/senrysa.png", width: 234, height: 110 },
  { name: "MR Filings", src: "/partnerlogo/optimized/mr-filings.png", width: 107, height: 97 },
  { name: "KSK International", src: "/partnerlogo/optimized/ksk-international.png", width: 278, height: 120 },
  { name: "Think Beyonds", src: "/partnerlogo/optimized/thinkbeyonds.png", width: 137, height: 98 },
  { name: "CConnects", src: "/partnerlogo/optimized/cconnects.png", width: 131, height: 98 },
];

function LogoCard({ partner }: { partner: Partner }) {
  return (
    <div className="group/card flex h-28 w-44 shrink-0 flex-col items-center justify-center gap-2 rounded-card border border-border bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:shadow-md sm:h-32 sm:w-52">
      <div className="relative flex h-12 w-full items-center justify-center sm:h-14">
        <Image
          src={partner.src}
          alt={partner.name}
          width={partner.width}
          height={partner.height}
          className="max-h-12 w-auto object-contain opacity-70 grayscale transition-all duration-300 group-hover/card:scale-105 group-hover/card:opacity-100 group-hover/card:grayscale-0 sm:max-h-14"
        />
      </div>
      <span className="truncate text-center text-xs font-medium text-text-muted transition-colors duration-300 group-hover/card:text-text-body">
        {partner.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  partners,
  reverse = false,
}: {
  partners: Partner[];
  reverse?: boolean;
}) {
  const track = [...partners, ...partners];
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div
        className={`flex w-max items-center gap-5 motion-reduce:animate-none ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]`}
      >
        {track.map((partner, i) => (
          <LogoCard key={`${partner.name}-${i}`} partner={partner} />
        ))}
      </div>
    </div>
  );
}

export default function PartnerLogos() {
  return (
    <section
      aria-label="Our partners and collaborators"
      className="border-t border-border bg-surface-alt py-16"
    >
      <div className="mx-auto max-w-[1320px] px-6 sm:px-8">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-sm font-semibold tracking-wide text-blue uppercase">
            Collaborations
          </span>
          <h2 className="mt-3 text-[clamp(1.5rem,2.5vw+1rem,2.25rem)] leading-[1.15] font-bold text-text-heading">
            Trusted by the partners we build alongside
          </h2>
        </div>

        <div className="mt-12 space-y-5">
          <MarqueeRow partners={ROW_1} />
          <MarqueeRow partners={ROW_2} reverse />
        </div>
      </div>
    </section>
  );
}
