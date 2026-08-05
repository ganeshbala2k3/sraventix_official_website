import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { getAllBlogPosts, getBlogPost, getBlogSlugs } from "@/lib/blog";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: SITE_NAME,
      title: post.title,
      description: post.excerpt,
      locale: "en_IN",
      publishedTime: post.publishedDate,
      images: [{ url: `${SITE_URL}${post.coverImage}`, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = getAllBlogPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.coverImage}`,
    datePublished: post.publishedDate,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <article className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary transition-colors duration-200 hover:text-blue"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              All Insights
            </Link>

            <span className="mt-6 block text-sm font-semibold tracking-wide text-blue uppercase">
              {post.category}
            </span>
            <h1 className="mt-2 text-[clamp(1.75rem,3vw+1rem,3rem)] leading-[1.15] font-bold tracking-tight text-text-heading">
              {post.title}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-text-muted">
              <time dateTime={post.publishedDate}>
                {new Date(post.publishedDate).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
              </time>
              <span aria-hidden>·</span>
              <span>{post.readTime}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="relative mt-8 aspect-[1200/630] w-full overflow-hidden rounded-image border border-border">
              <Image src={post.coverImage} alt={post.title} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
            </div>
          </Reveal>

          <div className="mt-10 space-y-8">
            {post.content.map((section, i) => (
              <Reveal key={section.heading} delay={100 + i * 40}>
                <h2 className="text-xl font-bold text-text-heading">{section.heading}</h2>
                <p className="mt-3 text-base leading-[1.8] text-text-body">{section.body}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-14 flex flex-col items-center gap-4 rounded-card bg-surface-alt p-8 text-center sm:flex-row sm:justify-between sm:text-left">
              <div>
                <p className="text-lg font-bold text-text-heading">Ready to build these skills for real?</p>
                <p className="mt-1 text-sm text-text-secondary">Explore our programs and find the track that fits you.</p>
              </div>
              <Button as="a" href="/programs" variant="primary" className="flex-none">
                Explore Programs
              </Button>
            </div>
          </Reveal>

          {related.length > 0 && (
            <Reveal delay={240}>
              <div className="mt-16 border-t border-border pt-10">
                <h2 className="text-sm font-semibold tracking-wide text-text-secondary uppercase">More Insights</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group rounded-card border border-border bg-white p-5 text-sm font-semibold text-text-heading transition-colors duration-200 hover:border-blue/40 hover:text-blue"
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </article>
    </>
  );
}
