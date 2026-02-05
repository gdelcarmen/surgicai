import { DotScreenShader } from "@/components/ui/dot-shader-background";
import { Navbar } from "@/components/navbar";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ProductAccordion } from "@/components/ui/interactive-image-accordion";
import { MarcusShowcase } from "@/components/ui/database-with-rest-api";
import { FragmentedVsUnified } from "@/components/fragmented-vs-unified";
import { TrainingJourneyTimeline } from "@/components/ui/training-journey-timeline";
import { CompanyRoadmap } from "@/components/ui/company-roadmap";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Layer 0: Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DotScreenShader />
      </div>

      {/* Layer 1: Content */}
      <div className="relative z-10 w-full">
        <Navbar />

        {/* Section 2: Hero */}
        <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0 opacity-50">
            <ShaderAnimation />
          </div>
          {/* Vignette Overlay */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0c10_90%)]" />

          <div className="relative z-10 flex flex-col items-center gap-8 text-center px-4 mt-16">
            {/* Suture Logo */}
            <div className="w-[300px] md:w-[400px]">
              <img src="/logo-primary-dark.svg" alt="surgicAI" className="w-full h-auto drop-shadow-2xl" />
            </div>

            <h1 className="text-xl md:text-2xl text-[var(--text-secondary)] font-medium max-w-2xl font-sans text-[#9ba1b8]">
              Tools that respect how surgeons actually think, learn, and operate.
            </h1>
          </div>

          {/* Scroll Indicator */}
          <ScrollIndicator />
        </section>

        {/* Section 3: Scroll Transition */}
        <section className="bg-[#0a0c10]">
          <ContainerScroll
            titleComponent={
              <>
                <h1 className="text-3xl md:text-5xl font-semibold text-[#e8eaf0]">
                  Modern surgeons aren't limited by intelligence or skill.<br />
                  They're limited by <span className="text-[var(--coral)]">fragmented systems.</span>
                </h1>
                <p className="mt-4 text-lg text-[#9ba1b8] max-w-[700px] mx-auto">
                  Knowledge scattered across textbooks, UpToDate, institutional protocols, and attending preferences.
                  No single system designed for how clinicians actually work.
                </p>
              </>
            }
          >
            <FragmentedVsUnified />
          </ContainerScroll>
        </section>

        {/* Section 4: Product Ecosystem */}
        <section className="bg-[#0a0c10]">
          <ProductAccordion />
        </section>

        {/* Section 5: Philosophy / Timeline */}
        <TrainingJourneyTimeline />

        {/* Section 6: MARCUS */}
        <section id="marcus" className="bg-[#0a0c10]">
          <MarcusShowcase />
        </section>

        {/* Section 7: Roadmap */}
        <CompanyRoadmap />

        {/* Section 8: CTA */}
        <section className="py-32 flex flex-col items-center justify-center text-center px-6 bg-[radial-gradient(circle_at_center,rgba(249,112,102,0.05),transparent_70%)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#e8eaf0]">
            Be the first at your program.
          </h2>
          <p className="text-[#9ba1b8] text-base mb-8">
            Get early access as new tools go live.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[#12151c] border border-[var(--border-color)] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--coral)] transition-colors"
            />
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--coral-bright)] to-[var(--coral-darkest)] text-white font-bold shadow-[0_0_20px_rgba(249,112,102,0.4)] animate-pulse hover:shadow-[0_0_30px_rgba(249,112,102,0.6)] transition-shadow">
              Get Early Access
            </button>
          </div>

          <p className="mt-4 text-sm text-[#6b7394]">
            No credit card. No spam. Just tools.
          </p>
        </section>

        {/* Section 9: Footer */}
        <footer className="w-full border-t border-[var(--border-color)] py-12 bg-[#0a0c10]/50 backdrop-blur-sm relative z-20">
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <img src="/logo-wordmark-dark.svg" alt="surgicAI" className="h-6 opacity-80" />
            </div>

            <div className="flex gap-8 text-sm text-[var(--text-secondary)]">
              <a href="#products" className="hover:text-white transition-colors">Products</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
              <a href="/security" className="hover:text-white transition-colors">Security</a>
              <a href="/institutions" className="hover:text-white transition-colors">For Institutions</a>
              <a href="mailto:contact@surgic.ai" className="hover:text-white transition-colors">Contact</a>
            </div>

            <div className="text-xs text-[var(--text-dim)]">
              © 2026 surgic.ai. All rights reserved.
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
