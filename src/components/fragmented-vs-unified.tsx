import React from "react";
import { Search, Droplet, GraduationCap, Monitor, ScanLine, Heart, ArrowRight } from "lucide-react";

export function FragmentedVsUnified() {
    return (
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-between p-4 md:p-8 gap-8 md:gap-0 relative overflow-hidden">

            {/* Left: The Fragmented Reality */}
            <div className="flex-1 w-full h-full relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center">

                    {/* Scattered Cards representing different friction points */}
                    <div className="relative w-64 h-64">
                        <div className="absolute top-0 left-4 w-52 p-4 bg-[#1a1e28] border border-[#1e2330] rounded-lg rotate-[-6deg] shadow-lg text-[#6b7394] text-xs font-mono z-10">
                            <span className="text-white/60 mb-1 block text-[10px] uppercase">Knowledge</span>
                            "Is this protocol from 2019 still valid?"
                        </div>
                        <div className="absolute top-16 right-[-20px] w-48 p-4 bg-[#1a1e28] border border-[#1e2330] rounded-lg rotate-[4deg] shadow-lg text-[#6b7394] text-xs font-mono z-20">
                            <span className="text-white/60 mb-1 block text-[10px] uppercase">Logbook</span>
                            "Forgot to log that appy... again."
                        </div>
                        <div className="absolute bottom-10 left-[-10px] w-52 p-4 bg-[#1a1e28] border border-[#1e2330] rounded-lg rotate-[-3deg] shadow-lg text-[#6b7394] text-xs font-mono z-30">
                            <span className="text-white/60 mb-1 block text-[10px] uppercase">Simulation</span>
                            "Sim center is fully booked until May."
                        </div>
                        <div className="absolute bottom-[-10px] right-2 w-48 p-4 bg-[#1a1e28] border border-[#1e2330] rounded-lg rotate-[2deg] shadow-lg text-[#6b7394] text-xs font-mono z-40">
                            <span className="text-white/60 mb-1 block text-[10px] uppercase">Feedback</span>
                            "Nice job." (actual feedback: 0)
                        </div>
                    </div>

                    <p className="mt-8 text-[#6b7394] font-medium tracking-wide uppercase text-xs">The Reality</p>
                </div>
            </div>

            {/* Center: Bridge */}
            <div className="relative z-10 flex flex-col items-center justify-center opacity-50">
                <ArrowRight className="w-8 h-8 text-[#6b7394] hidden md:block" />
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#6b7394] to-transparent md:hidden my-4" />
            </div>

            {/* Right: The Unified Platform */}
            <div className="flex-1 w-full h-full flex flex-col items-center justify-center">
                <div className="w-full max-w-sm bg-[#12151c] border border-[var(--border-color)] rounded-xl p-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--coral)] to-[var(--coral-darkest)]" />

                    <div className="mb-6 flex justify-center">
                        <img src="/logo-wordmark-dark.svg" alt="surgicAI" className="h-6 opacity-90" />
                    </div>

                    <div className="space-y-0">
                        <ProductItem name="MARCUS" category="Clinical Knowledge" />
                        <ProductItem name="DrainBow" category="Documentation" />
                        <ProductItem name="Boards Practice" category="Preparation" />
                        <ProductItem name="OP REPORT" category="Simulation" />
                        <ProductItem name="Radiology" category="Diagnostics" />
                        <ProductItem name="Goals of Care" category="Communication" />
                    </div>
                </div>

                <p className="mt-8 text-[#e8eaf0] font-medium tracking-wide uppercase text-xs">The Solution</p>
            </div>

            {/* Bottom Tagline */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-sm text-[#6b7394] font-sans">
                    One platform. Every stage. Every source. Every answer traced.
                </p>
            </div>
        </div>
    );
}

function ProductItem({ name, category }: { name: string, category: string }) {
    return (
        <div className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.03)] last:border-0 hover:bg-[rgba(255,255,255,0.02)] px-2 rounded transition-colors cursor-default">
            <span className="text-sm font-medium text-[#e8eaf0]">{name}</span>
            <span className="text-xs text-[#6b7394]">{category}</span>
        </div>
    )
}
