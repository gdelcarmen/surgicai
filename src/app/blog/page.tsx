import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, PenSquare } from "lucide-react";

import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { DotScreenShader } from "@/components/ui/dot-shader-background";
import { formatBlogDate, publishedBlogPosts, upcomingBlogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog - SurgicAI",
  description:
    "Product essays, release notes, and surgical education writing from the SurgicAI ecosystem.",
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
  openGraph: {
    title: "Blog - SurgicAI",
    description:
      "Product essays, release notes, and surgical education writing from the SurgicAI ecosystem.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - SurgicAI",
    description:
      "Product essays, release notes, and surgical education writing from the SurgicAI ecosystem.",
  },
};

export default function BlogPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0c10] text-[#e8eaf0]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: `${siteConfig.name} Blog`,
          description:
            "Product essays, release notes, and surgical education writing from the SurgicAI ecosystem.",
          url: `${siteConfig.url}/blog`,
          publisher: {
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
          },
        }}
      />

      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <DotScreenShader />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          <section className="px-6 pb-16 pt-32 md:pb-20 md:pt-40">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[#12151c]/80 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--text-secondary)] backdrop-blur-sm">
                <PenSquare className="h-3.5 w-3.5 text-[var(--coral-light)]" />
                Surgeon-First Writing
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
                The SurgicAI Blog
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-secondary)] md:text-xl">
                Product notes, release context, and essays on surgical education, clinical documentation, and research tooling.
              </p>
            </div>
          </section>

          <section className="px-6 pb-16 md:pb-24">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.4fr_0.9fr]">
              {publishedBlogPosts.length > 0 ? (
                <article className="rounded-[32px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(18,21,28,0.95),rgba(10,12,16,0.98))] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--coral)]">Featured Post</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                    {publishedBlogPosts[0].title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                    {publishedBlogPosts[0].excerpt}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--text-dim)]">
                    <span>{publishedBlogPosts[0].category}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--text-dim)]" />
                    <span>{formatBlogDate(publishedBlogPosts[0].publishedAt)}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--text-dim)]" />
                    <span>{publishedBlogPosts[0].readingTime}</span>
                  </div>

                  <div className="mt-8">
                    <Button asChild size="lg" className="rounded-xl px-5">
                      <Link href={`/blog/${publishedBlogPosts[0].slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </article>
              ) : (
                <div className="rounded-[32px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(18,21,28,0.95),rgba(10,12,16,0.98))] p-8">
                  <h2 className="text-3xl font-semibold text-white">First articles are in progress</h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                    The route structure and SEO plumbing are in place, and editorial posts can now be added through the shared blog data model.
                  </p>
                </div>
              )}

              <aside className="rounded-[32px] border border-[var(--border-color)] bg-[#10141b]/90 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--coral)]">Planned Topics</p>
                <div className="mt-5 space-y-4">
                  {upcomingBlogPosts.map((post) => (
                    <div key={post.slug} className="rounded-2xl border border-[var(--border-color)] bg-black/20 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-dim)]">
                        {post.category}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold text-white">{post.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">{post.excerpt}</p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </section>

          <section className="px-6 pb-24">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 flex items-end justify-between gap-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--coral)]">Archive</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Published Articles</h2>
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {publishedBlogPosts.slice(1).map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-[28px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(18,21,28,0.92),rgba(10,12,16,0.95))] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)]"
                  >
                    <div className="flex items-center gap-2 text-sm text-[var(--text-dim)]">
                      <CalendarDays className="h-4 w-4" />
                      <span>{formatBlogDate(post.publishedAt)}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{post.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[var(--text-secondary)]">{post.description}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[var(--border-color)] bg-white/5 px-3 py-1 text-xs text-[var(--text-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
