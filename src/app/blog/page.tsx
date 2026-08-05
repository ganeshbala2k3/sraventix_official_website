import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { getAllBlogPosts } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Career guidance and technology insights from Sraventix Technologies — why DevOps, cloud computing, full-stack development, and Python matter, and where tech is headed next.",
  alternates: { canonical: "/blog" },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE_NAME} Insights`,
  url: `${SITE_URL}/blog`,
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <span className="text-sm font-semibold tracking-wide text-blue uppercase">Insights</span>
            <h1 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold tracking-tight text-text-heading">
              Career guidance and technology insights.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-text-body">
              Straight talk on why these skills matter, where the industry is headed, and how to actually get started.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-card border border-border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
                >
                  <div className="relative aspect-[1200/630] w-full overflow-hidden bg-surface-alt">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold tracking-wide text-blue uppercase">{post.category}</span>
                    <h2 className="mt-2 text-lg font-bold text-text-heading">{post.title}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-text-body">{post.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-text-muted">
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
