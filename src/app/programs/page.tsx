import type { Metadata } from "next";
import Programs from "@/components/sections/Programs";
import Mascot from "@/components/ui/Mascot";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Sraventix Technologies' technical and management programs — DevOps, Cloud Computing, MERN Stack, Python, HR, Digital Marketing, Taxation, and Accounting. Live batches at ₹4,999 or self-paced at ₹1,999.",
  alternates: { canonical: "/programs" },
};

const COURSES = [
  { name: "DevOps", description: "Automate builds, deployments, and infrastructure with modern CI/CD and DevOps practices." },
  { name: "Cloud Computing", description: "Design, deploy, and manage scalable applications on AWS, Azure, and GCP." },
  { name: "MERN Stack", description: "Build full-stack web applications with MongoDB, Express, React, and Node.js." },
  { name: "Python", description: "Master Python for automation, data processing, and backend development." },
  { name: "HR", description: "Master HR strategies, recruitment, and employee management." },
  { name: "Digital Marketing", description: "Master online marketing, SEO, and social media growth." },
  { name: "Taxation", description: "Learn income tax laws, planning, and return filing." },
  { name: "Accounting", description: "Master financial accounting principles and practices." },
];

const coursesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: COURSES.map((course, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Course",
      name: course.name,
      description: course.description,
      url: `${SITE_URL}/programs`,
      provider: {
        "@type": "EducationalOrganization",
        name: SITE_NAME,
        url: SITE_URL,
      },
      offers: [
        {
          "@type": "Offer",
          category: "Live",
          price: "8999",
          priceCurrency: "INR",
        },
        {
          "@type": "Offer",
          category: "Self-Paced",
          price: "3999",
          priceCurrency: "INR",
        },
      ],
      hasCourseInstance: [
        { "@type": "CourseInstance", courseMode: "Online", courseWorkload: "PT10H" },
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
