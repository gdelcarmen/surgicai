"use client";

import React from "react";
import { motion } from "motion/react";
import { FileText, BookOpen, Building2, FileSearch, Sparkles, Search, ShieldCheck, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function MarcusShowcase() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-24 px-4 bg-[#0a0c10]">
      <div className="relative text-center mb-16 max-w-3xl px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-[#e8eaf0]">MARCUS</h2>
        <p className="font-mono text-[#6b7394] text-sm tracking-wider uppercase mb-8">
          The Intelligent Surgical Librarian
        </p>
        <p className="text-[#9ba1b8] text-lg leading-relaxed">
          Your hospital's protocols, guidelines, and preferred workflows—integrated with verified medical literature.
          MARCUS doesn't just "find data"; it contextualizes it for the specific environment you're operating in.
          <span className="block mt-2 text-[#6b7394]">Local truth meeting global evidence.</span>
        </p>

        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(52,211,153,0.08)] border border-[rgba(52,211,153,0.15)] text-[#34d399] text-xs font-semibold uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
            Live
          </div>
        </div>
      </div>

      <DatabaseWithRestApi
        title="Context-Aware Query Engine"
        circleText="M"
        badgeTexts={{
          first: "Guidelines",
          second: "Institute Docs",
          third: "Textbooks",
          fourth: "Literature"
        }}
        lightColor="#f97066"
      />

      <div className="mt-12 flex items-center justify-center">
        <a
          href="https://marcus.surgic.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-8 py-4 rounded-xl overflow-hidden bg-[var(--bg-elevated)] border border-[var(--border-color)] transition-all hover:border-[var(--coral)] hover:shadow-[0_0_30px_rgba(249,112,102,0.2)]"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[var(--coral)]/10 to-[var(--coral-darkest)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative flex items-center gap-2 font-medium text-white text-lg">
            Try MARCUS <Search className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 rounded-xl ring-1 ring-[var(--coral)] ring-opacity-0 group-hover:ring-opacity-50 animate-pulse transition-all" />
        </a>
      </div>
    </div>
  )
}

// --- Internal Component ---

interface DatabaseWithRestApiProps {
  className?: string;
  circleText?: string;
  badgeTexts?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  title?: string;
  lightColor?: string;
}

const DatabaseWithRestApi = ({
  className,
  circleText,
  badgeTexts = { first: "Guidelines", second: "Institute Docs", third: "Textbooks", fourth: "Literature" },
  title,
  lightColor = "#f97066",
}: DatabaseWithRestApiProps) => {
  return (
    <div
      className={cn(
        "relative flex h-[350px] w-full max-w-[600px] flex-col items-center",
        className
      )}
    >
      {/* SVG Paths - Scaled up slightly */}
      <svg
        className="h-full sm:w-full text-[#1e2330]"
        width="100%"
        height="100%"
        viewBox="0 0 200 100"
      >
        <g
          stroke="currentColor"
          fill="none"
          strokeWidth="0.4"
          strokeDasharray="100 100"
          pathLength="100"
        >
          <path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" />
          <path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" />
          <path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" />
          <path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" />
          <animate
            attributeName="stroke-dashoffset"
            from="100"
            to="0"
            dur="3s"
            repeatCount="indefinite"
            fill="freeze"
            calcMode="spline"
            keySplines="0.4, 0, 0.2, 1"
          />
        </g>

        {/* Lights */}
        <g mask="url(#db-mask-1)"><circle className="database db-light-1" cx="0" cy="0" r="12" fill="url(#db-coral-grad)" /></g>
        <g mask="url(#db-mask-2)"><circle className="database db-light-2" cx="0" cy="0" r="12" fill="url(#db-coral-grad)" /></g>
        <g mask="url(#db-mask-3)"><circle className="database db-light-3" cx="0" cy="0" r="12" fill="url(#db-coral-grad)" /></g>
        <g mask="url(#db-mask-4)"><circle className="database db-light-4" cx="0" cy="0" r="12" fill="url(#db-coral-grad)" /></g>

        {/* Buttons */}
        <g stroke="currentColor" fill="none" strokeWidth="0.4">
          <g>
            {/* Guidelines: aligned to x=31 */}
            <rect fill="#12151c" x="10" y="5" width="42" height="10" rx="5" stroke="#1e2330"></rect>
            <BookOpenIcon x="14" y="7.5" />
            <text x="33" y="12" fill="#9ba1b8" stroke="none" fontSize="4" fontWeight="500" textAnchor="middle">
              {badgeTexts?.first}
            </text>
          </g>
          <g>
            {/* Institute Docs: aligned to x=77 */}
            <rect fill="#12151c" x="52" y="5" width="50" height="10" rx="5" stroke="#1e2330"></rect>
            <FileTextIcon x="56" y="7.5" />
            <text x="79" y="12" fill="#9ba1b8" stroke="none" fontSize="4" fontWeight="500" textAnchor="middle">
              {badgeTexts?.second}
            </text>
          </g>
          <g>
            {/* Textbooks: aligned to x=124 */}
            <rect fill="#12151c" x="103" y="5" width="42" height="10" rx="5" stroke="#1e2330"></rect>
            <BuildingIcon x="107" y="7.5" />
            <text x="126" y="12" fill="#9ba1b8" stroke="none" fontSize="4" fontWeight="500" textAnchor="middle">
              {badgeTexts?.third}
            </text>
          </g>
          <g>
            {/* Literature: aligned to x=170 */}
            <rect fill="#12151c" x="149" y="5" width="42" height="10" rx="5" stroke="#1e2330"></rect>
            <SearchIcon x="153" y="7.5" />
            <text x="172" y="12" fill="#9ba1b8" stroke="none" fontSize="4" fontWeight="500" textAnchor="middle">
              {badgeTexts?.fourth}
            </text>
          </g>
        </g>

        <defs>
          <mask id="db-mask-1"><path d="M 31 10 v 15 q 0 5 5 5 h 59 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" /></mask>
          <mask id="db-mask-2"><path d="M 77 10 v 10 q 0 5 5 5 h 13 q 5 0 5 5 v 10" strokeWidth="0.5" stroke="white" /></mask>
          <mask id="db-mask-3"><path d="M 124 10 v 10 q 0 5 -5 5 h -14 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" /></mask>
          <mask id="db-mask-4"><path d="M 170 10 v 15 q 0 5 -5 5 h -60 q -5 0 -5 5 v 10" strokeWidth="0.5" stroke="white" /></mask>
          <radialGradient id="db-coral-grad" fx="1">
            <stop offset="0%" stopColor={lightColor} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
      </svg>

      {/* Main Box */}
      <div className="absolute bottom-10 flex w-full flex-col items-center">
        <div className="absolute -bottom-4 h-[100px] w-[62%] rounded-lg bg-[var(--coral)]/10 blur-xl" />

        {/* box title */}
        <div className="absolute -top-3 z-20 flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[#12151c] px-3 py-1 shadow-lg">
          <Sparkles className="size-3 text-[var(--coral)] mr-2" />
          <span className="text-[10px] text-[var(--text-secondary)] font-medium">
            {title}
          </span>
        </div>

        {/* box outter circle */}
        <div className="absolute -bottom-8 z-30 grid h-[60px] w-[60px] place-items-center rounded-full border border-[var(--border-color)] bg-[#12151c] font-black text-xl text-[var(--text-primary)] shadow-2xl">
          {circleText}
        </div>

        {/* box content */}
        <div className="relative z-10 flex h-[150px] w-full items-center justify-center overflow-hidden rounded-xl border border-[var(--border-color)] bg-[#0a0c10] shadow-2xl">
          {/* Internal Badges */}
          <div className="absolute bottom-6 left-12 z-10 h-7 rounded-full bg-[#12151c] px-3 text-xs border border-[var(--border-color)] flex items-center gap-2 text-[var(--text-secondary)]">
            <ShieldCheck className="size-3 text-[var(--coral)]" />
            <span>Evidence-Traced</span>
          </div>
          <div className="absolute top-6 right-12 z-10 h-7 rounded-full bg-[#12151c] px-3 text-xs flex border border-[var(--border-color)] items-center gap-2 text-[var(--text-secondary)]">
            <Link2 className="size-3 text-[var(--coral)]" />
            <span>Source Linked</span>
          </div>

          {/* Animated Circles */}
          <motion.div className="absolute -bottom-14 h-[100px] w-[100px] rounded-full border-t border-[var(--coral)]/20 bg-[var(--coral)]/5" animate={{ scale: [0.98, 1.02, 0.98] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.div className="absolute -bottom-20 h-[145px] w-[145px] rounded-full border-t border-[var(--coral)]/10 bg-[var(--coral)]/5" animate={{ scale: [1, 0.98, 1] }} transition={{ duration: 4, repeat: Infinity }} />
          <motion.div className="absolute -bottom-[100px] h-[190px] w-[190px] rounded-full border-t border-[var(--coral)]/5 bg-[var(--coral)]/5" animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 5, repeat: Infinity }} />
        </div>
      </div>
    </div>
  );
};

// ... Icons helpers (same as before) ...
const BookOpenIcon = ({ x, y }: { x: string; y: string }) => (
  <svg x={x} y={y} width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
);
const FileTextIcon = ({ x, y }: { x: string; y: string }) => (
  <svg x={x} y={y} width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
);
const BuildingIcon = ({ x, y }: { x: string; y: string }) => (
  <svg x={x} y={y} width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" /></svg>
);
const SearchIcon = ({ x, y }: { x: string; y: string }) => (
  <svg x={x} y={y} width="5" height="5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);

export default DatabaseWithRestApi;
