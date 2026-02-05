"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Wrench, Telescope } from "lucide-react"

export function CompanyRoadmap() {
    return (
        <section className="py-24 bg-[#0a0c10] relative overflow-hidden" id="about">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,112,102,0.03),transparent_50%)]" />

            <div className="mx-auto max-w-6xl px-6 relative z-10">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#e8eaf0] mb-4">
                        Where We Are — and Where We're Going
                    </h2>

                    {/* Compact Founder Block */}
                    <div className="mt-8 flex items-center justify-center gap-6 py-4 border-y border-[rgba(255,255,255,0.05)] max-w-2xl mx-auto">
                        <span className="text-base text-[#9ba1b8]">
                            surgic.ai is the work of Gabriel del Carmen, MD.
                        </span>
                        <Link href="/about" className="text-[var(--coral)] text-base font-medium hover:text-white transition-colors flex items-center gap-1">
                            About Us <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>

                {/* Roadmap Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Live Now */}
                    <div className="bg-[#12151c] rounded-xl p-8 border border-[var(--border-color)] border-l-2 border-l-[#34d399] relative hover:bg-[#151923] transition-colors">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="w-5 h-5 text-[#34d399]" />
                            <h3 className="text-lg font-bold text-white">Live Now</h3>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-white font-bold mb-1">MARCUS</h4>
                                <p className="text-sm text-[#6b7394]">Citation-backed clinical knowledge retrieval</p>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-[#9ba1b8] leading-relaxed">
                            Institutional and published knowledge, queryable in seconds. Every answer traceable to its source. Used by surgical residents today.
                        </p>
                        <div className="mt-6">
                            <a href="https://marcus.surgic.ai" className="text-sm text-[#34d399] font-medium hover:underline flex items-center gap-1">
                                Try MARCUS <ArrowRight className="w-3 h-3" />
                            </a>
                        </div>
                    </div>

                    {/* In Development */}
                    <div className="bg-[#12151c] rounded-xl p-8 border border-[var(--border-color)] border-l-2 border-l-[#f97066] relative hover:bg-[#151923] transition-colors">
                        <div className="flex items-center gap-3 mb-6">
                            <Wrench className="w-5 h-5 text-[#f97066]" />
                            <h3 className="text-lg font-bold text-white">In Development</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-white font-bold mb-1">DrainBow</h4>
                                <p className="text-xs text-[#6b7394]">Standardized output tracking</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Boards Practice</h4>
                                <p className="text-xs text-[#6b7394]">Oral board simulation</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">OP REPORT</h4>
                                <p className="text-xs text-[#6b7394]">Physics-based simulation</p>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-[#9ba1b8] leading-relaxed">
                            Actively being built. Releasing to early testers in 2026.
                        </p>
                    </div>

                    {/* On The Horizon */}
                    <div className="bg-[#12151c] rounded-xl p-8 border border-[var(--border-color)] border-l-2 border-l-[#6b7394] relative hover:bg-[#151923] transition-colors">
                        <div className="flex items-center gap-3 mb-6">
                            <Telescope className="w-5 h-5 text-[#6b7394]" />
                            <h3 className="text-lg font-bold text-white">On the Horizon</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <h4 className="text-white font-bold mb-1">Radiology Training</h4>
                                <p className="text-xs text-[#6b7394]">Synthetic diagnostic practice</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Goals of Care</h4>
                                <p className="text-xs text-[#6b7394]">Communication skills</p>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-[#9ba1b8] leading-relaxed">
                            In design. Shaped by what residents and attendings tell us they need most.
                        </p>
                    </div>

                </div>

                {/* Bottom Statement */}
                <div className="mt-16 text-center">
                    <p className="text-[#6b7394] italic text-base">
                        This isn't a product launch. It's a platform being built in public — <br className="hidden md:block" />
                        by someone still in training, for everyone still in training.
                    </p>
                </div>

            </div>
        </section>
    )
}
