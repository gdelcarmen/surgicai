"use client";

import { Navbar } from "@/components/navbar";
import { DotScreenShader } from "@/components/ui/dot-shader-background";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ComingSoonProps {
    title: string;
    description: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
    return (
        <div className="relative w-full min-h-screen bg-[#0a0c10] text-[#e8eaf0] font-sans selection:bg-[var(--coral)] selection:text-white">
            {/* Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
                <DotScreenShader />
            </div>

            {/* Navbar */}
            <div className="relative z-20">
                <Navbar />
            </div>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">

                <div className="mb-8 p-4 rounded-full bg-[#12151c] border border-[var(--border-color)] animate-pulse">
                    <div className="w-3 h-3 bg-[var(--coral)] rounded-full shadow-[0_0_10px_var(--coral)]" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    {title}
                </h1>

                <p className="text-lg md:text-xl text-[#9ba1b8] max-w-2xl leading-relaxed mb-12">
                    {description}
                </p>

                <div className="flex flex-col gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-[var(--coral)] hover:text-white transition-colors uppercase tracking-wider font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" /> Return Home
                    </Link>
                </div>

            </main>

            {/* Footer minimal */}
            <footer className="fixed bottom-0 w-full py-6 text-center text-xs text-[#6b7394] z-10">
                © 2026 surgic.ai
            </footer>
        </div>
    );
}
