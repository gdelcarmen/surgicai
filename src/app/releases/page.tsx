import type { Metadata } from "next";
import Link from "next/link";
import type { ComponentProps } from "react";
import {
  ArrowUpRight,
  AudioWaveform,
  ChevronDown,
  Droplet,
  Globe,
  GraduationCap,
  Laptop,
  Sparkles,
  Smartphone,
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { DotScreenShader } from "@/components/ui/dot-shader-background";
import { changelogEntries, releaseProducts, systemRequirements, type ProductPlatform, type ProductStatus } from "@/data/releases";

export const metadata: Metadata = {
  title: "Releases - SurgicAI",
  description: "Download SurgicAI tools for surgical education, clinical documentation, and research from one central release hub.",
  alternates: {
    canonical: "https://surgic.ai/releases",
  },
  openGraph: {
    title: "Releases - SurgicAI",
    description: "Download SurgicAI tools for surgical education, clinical documentation, and research from one central release hub.",
    url: "https://surgic.ai/releases",
    siteName: "SurgicAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Releases - SurgicAI",
    description: "Download SurgicAI tools for surgical education, clinical documentation, and research from one central release hub.",
  },
};

const statusClasses: Record<ProductStatus, string> = {
  Stable: "border-[#34d399]/30 bg-[#34d399]/10 text-[#7ee2b8]",
  Beta: "border-[var(--coral)]/30 bg-[var(--coral)]/10 text-[var(--coral-light)]",
  Alpha: "border-[#60a5fa]/30 bg-[#60a5fa]/10 text-[#93c5fd]",
  "Coming Soon": "border-[#fbbf24]/30 bg-[#fbbf24]/10 text-[#fcd46b]",
};

const platformClasses: Record<ProductPlatform, string> = {
  Web: "text-[#7dd3fc] border-[#38bdf8]/20 bg-[#38bdf8]/10",
  macOS: "text-[#c4b5fd] border-[#8b5cf6]/20 bg-[#8b5cf6]/10",
  iOS: "text-[#86efac] border-[#22c55e]/20 bg-[#22c55e]/10",
};

const productIcons = {
  marcus: SearchIcon,
  latent: AudioWaveform,
  drainbow: Droplet,
  "boards-practice": GraduationCap,
} as const;

const platformIcons: Record<ProductPlatform, typeof Globe> = {
  Web: Globe,
  macOS: Laptop,
  iOS: Smartphone,
};

function SearchIcon(props: ComponentProps<typeof Sparkles>) {
  return <Sparkles {...props} />;
}

export default function ReleasesPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0c10] text-[#e8eaf0]">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <DotScreenShader />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main>
          <section className="relative overflow-hidden px-6 pb-20 pt-32 md:pb-28 md:pt-40">
            <div className="absolute inset-x-0 top-12 mx-auto h-72 max-w-4xl rounded-full bg-[radial-gradient(circle,rgba(249,112,102,0.18),transparent_62%)] blur-3xl" />
            <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[#12151c]/80 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--text-secondary)] backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[var(--coral)] shadow-[0_0_16px_rgba(249,112,102,0.65)]" />
                Download Center
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                SurgicAI Releases
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                Download our tools for surgical education, clinical documentation, and research.
              </p>
            </div>
          </section>

          <section className="px-6 pb-16 md:pb-24">
            <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
              {releaseProducts.map((product) => {
                const ProductIcon = productIcons[product.slug as keyof typeof productIcons];

                return (
                  <article
                    key={product.slug}
                    className="group relative overflow-hidden rounded-[28px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(18,21,28,0.96),rgba(10,12,16,0.98))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-hover)] hover:shadow-[0_30px_90px_rgba(0,0,0,0.45)] md:p-8"
                  >
                    <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div className="flex items-start gap-4">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(249,112,102,0.18),rgba(255,255,255,0.05))] text-[var(--coral-light)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                            <ProductIcon className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-3">
                              <h2 className="text-2xl font-semibold text-white">{product.name}</h2>
                              <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[product.status]}`}>
                                {product.status}
                              </span>
                            </div>
                            <p className="mt-2 max-w-xl text-[15px] leading-7 text-[var(--text-secondary)]">
                              {product.description}
                            </p>
                            {product.note ? (
                              <p className="mt-3 inline-flex rounded-full border border-[var(--coral)]/20 bg-[var(--coral)]/8 px-3 py-1 text-xs font-medium tracking-[0.04em] text-[var(--coral-light)]">
                                {product.note}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-[var(--border-color)] bg-black/20 px-4 py-3 text-sm text-[var(--text-secondary)]">
                          <div className="text-xs uppercase tracking-[0.22em] text-[var(--text-dim)]">Current release</div>
                          <div className="mt-2 text-base font-semibold text-white">{product.version}</div>
                          <div className="mt-1">{product.releaseDateLabel}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        {product.platforms.map((platform) => {
                          const PlatformIcon = platformIcons[platform];

                          return (
                            <span
                              key={platform}
                              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm ${platformClasses[platform]}`}
                            >
                              <PlatformIcon className="h-4 w-4" />
                              {platform}
                            </span>
                          );
                        })}
                      </div>

                      <div className="flex flex-col gap-4 border-y border-[var(--border-color)]/80 py-5 sm:flex-row sm:items-center sm:justify-between">
                        <Button asChild size="lg" className="h-11 rounded-xl px-5 shadow-[0_12px_36px_rgba(249,112,102,0.25)]">
                          <a
                            href={product.primaryAction.href}
                            target={product.primaryAction.external ? "_blank" : undefined}
                            rel={product.primaryAction.external ? "noreferrer" : undefined}
                          >
                            {product.primaryAction.label}
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>

                        <p className="max-w-sm text-sm leading-6 text-[var(--text-dim)]">
                          Structured release metadata lives in one source file, making future GitHub Releases or CMS syncing straightforward.
                        </p>
                      </div>

                      <details className="group rounded-2xl border border-[var(--border-color)] bg-[#0f131a]/80">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-medium text-white">
                          View Changelog
                          <ChevronDown className="h-4 w-4 text-[var(--text-secondary)] transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="space-y-3 border-t border-[var(--border-color)] px-5 py-4 text-sm leading-6 text-[var(--text-secondary)]">
                          {product.changelogPreview.map((entry) => (
                            <p key={entry}>{entry}</p>
                          ))}
                        </div>
                      </details>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="px-6 pb-16 md:pb-24">
            <div className="mx-auto max-w-7xl rounded-[32px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(18,21,28,0.92),rgba(10,12,16,0.94))] p-6 md:p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--coral)]">Release History</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Changelog</h2>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                  Reverse-chronological releases across the SurgicAI ecosystem. The data is already structured so this list can later be replaced by a GitHub Releases API feed or CMS.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {changelogEntries.map((entry) => (
                  <div
                    key={`${entry.productSlug}-${entry.version}-${entry.date}`}
                    className="rounded-2xl border border-[var(--border-color)] bg-[#0d1117]/80 p-5 transition-colors hover:border-[var(--border-hover)]"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-dim)]">{entry.date}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-semibold text-white">{entry.productName}</h3>
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">
                            {entry.version}
                          </span>
                        </div>
                      </div>
                      <p className="max-w-3xl text-sm leading-7 text-[var(--text-secondary)]">{entry.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 pb-24">
            <div className="mx-auto max-w-7xl rounded-[32px] border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(10,12,16,0.9),rgba(18,21,28,0.92))] p-6 md:p-8">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--coral)]">Compatibility</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">System Requirements</h2>
                <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
                  Expand each product for minimum requirements and launch expectations.
                </p>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {systemRequirements.map((requirement) => (
                  <details
                    key={requirement.productSlug}
                    className="group rounded-2xl border border-[var(--border-color)] bg-[#0d1117]/80 transition-colors hover:border-[var(--border-hover)]"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
                      <div>
                        <h3 className="text-base font-semibold text-white">{requirement.productName}</h3>
                        <p className="mt-1 text-sm text-[var(--text-dim)]">Minimum requirements</p>
                      </div>
                      <ChevronDown className="h-4 w-4 text-[var(--text-secondary)] transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="border-t border-[var(--border-color)] px-5 py-4">
                      <ul className="space-y-3 text-sm leading-6 text-[var(--text-secondary)]">
                        {requirement.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--coral)]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </details>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[var(--border-color)] bg-[linear-gradient(135deg,rgba(249,112,102,0.1),rgba(10,12,16,0.2))] p-5 text-sm leading-6 text-[var(--text-secondary)]">
                Need institutional rollout details or early access? Reach out at{" "}
                <Link href="mailto:contact@surgic.ai" className="font-medium text-white transition-colors hover:text-[var(--coral-light)]">
                  contact@surgic.ai
                </Link>
                .
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
