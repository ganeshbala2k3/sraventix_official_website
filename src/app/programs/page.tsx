import type { Metadata } from "next";
import Programs from "@/components/sections/Programs";
import Mascot from "@/components/ui/Mascot";
import { getAllCourses } from "@/lib/courses";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import programsData from "@/data/programs.json";

export const metadata: Metadata = {
  title: "Programs",
  description: `Explore Sraventix Technologies' technical and management programs — DevOps, Cloud Computing, MERN Stack, Python, HR, Digital Marketing, Taxation, and Accounting. Live batches at ${programsData.livePrice} or self-paced at ${programsData.selfPacedPrice}.`,
  alternates: { canonical: "/programs" },
};

const livePrice = programsData.livePrice.replace(/[^\d]/g, "");
const selfPacedPrice = programsData.selfPacedPrice.replace(/[^\d]/g, "");

const coursesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: getAllCourses()
    .filter((course) => course.launched !== false)
    .map((course, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Course",
      name: course.title,
      description: course.tagline,
      url: `${SITE_URL}/programs/${course.slug}`,
      provider: {
        "@type": "EducationalOrganization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      offers: [
        { "@type": "Offer", category: "Live", price: livePrice, priceCurrency: "INR" },
        { "@type": "Offer", category: "Self-Paced", price: selfPacedPrice, priceCurrency: "INR" },
      ],
      hasCourseInstance: [
        { "@type": "CourseInstance", courseMode: "Online", courseWorkload: course.duration },
      ],
    },
  })),
};

export default function ProgramsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesJsonLd) }}
      />
      <Programs mascot={<Mascot className="h-auto w-full" sizes="224px" />} />
    </>
  );
}
