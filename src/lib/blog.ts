import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src/data/blog");

export type BlogSection = { heading: string; body: string };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedDate: string;
  readTime: string;
  coverImage: string;
  keywords: string[];
  content: BlogSection[];
};

/** Every `<slug>.json` file in src/data/blog becomes an article — drop a new file in to publish one. */
export function getBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".json"))
    .map((file) => file.replace(/\.json$/, ""));
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf-8")) as BlogPost;
}

/** All posts, sorted newest first. */
export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.publishedDate < b.publishedDate ? 1 : -1));
}
