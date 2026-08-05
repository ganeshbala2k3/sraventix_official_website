import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { getAllBlogPosts } from "@/lib/blog";

export default function InsightsPreview() {
  const posts = getAllBlogPosts();

  return (
    <section className="border-t border-border bg-surface-alt py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold tracking-wide text-blue uppercase">Insights</span>
              <h2 className="mt-3 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold text-text-heading">
                Explore what&apos;s next in tech.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-body">
                Why these skills matter, where the industry is headed, and how to actually get started.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-colors duration-200 hover:text-blue-hover"
            >
              View all Insights
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
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
                  <h3 className="mt-2 text-lg font-bold text-text-heading">{post.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-body">{post.excerpt}</p>
                  <span className="mt-4 text-xs text-text-muted">{post.readTime}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
