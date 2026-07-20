"use client";

import { useState } from "react";
import {
  BarChart3,
  Code2,
  Brain,
  ShieldCheck,
  Users,
  LineChart,
  Megaphone,
  Rocket,
  Calculator,
  Receipt,
  NotebookPen,
  Landmark,
  X,
  type LucideIcon,
} from "lucide-react";
import Button from "@/components/ui/Button";

type Course = {
  title: string;
  icon: LucideIcon;
  body: string;
};

type Category = {
  id: string;
  label: string;
  group: string;
  courses: Course[];
};

const CATEGORIES: Category[] = [
  {
    id: "it-technology",
    label: "IT & Technology",
    group: "Regular Programs",
    courses: [
      {
        title: "Data Science",
        icon: BarChart3,
        body: "Master data analysis, visualization, and predictive modeling.",
      },
      {
        title: "Web Development",
        icon: Code2,
        body: "Build modern, responsive websites and web applications.",
      },
      {
        title: "Machine Learning",
        icon: Brain,
        body: "Learn to build and deploy intelligent machine learning models.",
      },
      {
        title: "Cyber Security",
        icon: ShieldCheck,
        body: "Secure networks and systems from cyber threats and attacks.",
      },
    ],
  },
  {
    id: "management",
    label: "Management",
    group: "Regular Programs",
    courses: [
      {
        title: "Human Resource",
        icon: Users,
        body: "Master HR strategies, recruitment, and employee management.",
      },
      {
        title: "Finance",
        icon: LineChart,
        body: "Learn financial planning, analysis, and investment strategies.",
      },
      {
        title: "Digital Marketing",
        icon: Megaphone,
        body: "Master online marketing, SEO, and social media growth.",
      },
      {
        title: "Entrepreneurship",
        icon: Rocket,
        body: "Learn to build, launch, and scale successful business ventures.",
      },
    ],
  },
  {
    id: "specialized",
    label: "Specialized Programs",
    group: "Specialized Programs",
    courses: [
      {
        title: "Accounting",
        icon: Calculator,
        body: "Master financial accounting principles and practices.",
      },
      {
        title: "GST Filing",
        icon: Receipt,
        body: "Learn complete GST compliance and filing procedures.",
      },
      {
        title: "Book Keeping",
        icon: NotebookPen,
        body: "Master systematic recording of financial transactions.",
      },
      {
        title: "Taxation",
        icon: Landmark,
        body: "Learn income tax laws, planning, and return filing.",
      },
    ],
  },
];

export default function Programs() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const active = CATEGORIES.find((c) => c.id === activeId) ?? CATEGORIES[0];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1320px] px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-wide text-blue uppercase">
            Our Programs
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold text-text-heading">
            Programs built for real career outcomes.
          </h2>
          <p className="mt-4 text-lg leading-[1.7] text-text-body">
            From in-demand technology and management tracks to specialized
            finance programs — choose the path that matches where you want to
            go.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {CATEGORIES.map((category) => {
            const isActive = category.id === activeId;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveId(category.id)}
                aria-pressed={isActive}
                className={`rounded-button border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "border-blue bg-blue text-white"
                    : "border-border bg-white text-text-body hover:border-blue/40 hover:text-blue"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-sm font-medium tracking-wide text-text-muted uppercase">
          {active.group}
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {active.courses.map((course) => {
            const Icon = course.icon;
            return (
              <div
                key={course.title}
                className="flex flex-col rounded-card border border-border bg-white p-8 shadow-sm transition-transform duration-[250ms] hover:-translate-y-1"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-blue/10 text-blue">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </span>
                <h3 className="mt-5 text-xl font-bold text-text-heading">
                  {course.title}
                </h3>
                <p className="mt-3 flex-1 text-base leading-[1.7] text-text-body">
                  {course.body}
                </p>
                <Button
                  as="button"
                  variant="primary"
                  className="mt-6 w-full"
                  onClick={() => setSelectedCourse(course.title)}
                >
                  Register Now
                </Button>
              </div>
            );
          })}
        </div>
      </div>

      {selectedCourse && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/50 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="relative w-full max-w-md rounded-modal border border-border bg-white p-8 shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCourse(null)}
              aria-label="Close"
              className="absolute top-5 right-5 text-text-muted transition-colors duration-200 hover:text-navy"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
            <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-blue/10 text-blue">
              <Rocket className="h-6 w-6" strokeWidth={2} />
            </span>
            <h3 className="mt-5 text-xl font-bold text-text-heading">
              {selectedCourse}
            </h3>
            <p className="mt-3 text-base leading-[1.7] text-text-body">
              Registrations for this program are opening soon. Reach out to
              our team and we&apos;ll notify you the moment enrollment opens.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                as="a"
                href="/contact"
                variant="primary"
                className="flex-1 justify-center"
                onClick={() => setSelectedCourse(null)}
              >
                Contact Us
              </Button>
              <Button
                as="button"
                variant="secondary"
                className="flex-1 justify-center"
                onClick={() => setSelectedCourse(null)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
