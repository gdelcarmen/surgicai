import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { DotScreenShader } from "@/components/ui/dot-shader-background";
import { formatBlogDate, getBlogPostBySlug, publishedBlogPosts } from "@/data/blog";
import { siteConfig } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return publishedBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || !post.published) {
    return {
      title: "Blog - SurgicAI",
    };
  }

  return {
    title: `${post.title} - SurgicAI`,
    description: post.description,
    alternates: {
      canonical: `${siteConfig.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} - SurgicAI`,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} - SurgicAI`,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="relative min-h-screen w-full bg-[#0a0c10] text-[#e8eaf0]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          datePublished: post.publishedAt,
          mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
          author: {
            "@type": "Person",
            name: post.author.name,
          },
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

        <main className="px-6 pb-24 pt-32 md:pt-40">
          <article className="mx-auto max-w-4xl">
            <div className="rounded-[32px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(18,21,28,0.95),rgba(10,12,16,0.98))] p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--coral)]">{post.category}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--text-secondary)]">
                {post.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-[var(--text-dim)]">
                <span>{post.author.name}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--text-dim)]" />
                <span>{post.author.role}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--text-dim)]" />
                <span>{formatBlogDate(post.publishedAt)}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--text-dim)]" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            <div className="mt-8 space-y-8">
              {post.sections.map((section) => (
                <section
                  key={section.heading}
                  className="rounded-[28px] border border-[var(--border-color)] bg-[#10141b]/90 p-8"
                >
                  <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-[var(--text-secondary)]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
