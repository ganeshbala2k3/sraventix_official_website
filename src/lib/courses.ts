import fs from "fs";
import path from "path";

const COURSES_DIR = path.join(process.cwd(), "src/data/courses");

export type CourseFaq = { q: string; a: string };
export type CourseSyllabusModule = { module: string; topics: string[] };

export type CourseDetail = {
  slug: string;
  title: string;
  icon: string;
  track: string;
  tagline: string;
  /** false (or omitted) shows a "Coming Soon" page instead of syllabus/pricing. */
  launched?: boolean;
  description?: string;
  duration?: string;
  nextBatch?: string;
  seatsLeft?: number;
  certificate?: boolean;
  tools?: string[];
  outcomes?: string[];
  syllabus?: CourseSyllabusModule[];
  projects?: string[];
  faqs?: CourseFaq[];
};

/** Every `<slug>.json` file in src/data/courses becomes a course — drop a new file in to add one. */
export function getCourseSlugs(): string[] {
  return fs
    .readdirSync(COURSES_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(/\.json$/, ""));
}

export function getCourse(slug: string): CourseDetail | null {
  const filePath = path.join(COURSES_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as CourseDetail;
}

export function getAllCourses(): CourseDetail[] {
  return getCourseSlugs()
    .map((slug) => getCourse(slug))
    .filter((course): course is CourseDetail => course !== null);
}
