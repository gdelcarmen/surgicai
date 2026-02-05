"use client";

import React, { useState } from 'react';

// --- Data for the products ---
const accordionItems = [
  {
    id: 1,
    title: 'DrainBow',
    description: "Is that output serosanguinous or sanguinous? It depends who's looking. DrainBow replaces subjective color descriptions with standardized, reproducible classification — turning what used to be a judgment call into trackable data.",
    gradient: "linear-gradient(135deg, #1e2330 0%, #1a1e28 100%)",
    status: "In Development",
    statusColor: "bg-yellow-500/20 text-yellow-500",
    category: "Clinical Documentation"
  },
  {
    id: 2,
    title: 'Surgical Boards Practice',
    description: "A virtual oral board examiner that presents cases, listens to your response, and tells you not just whether you got the answer right — but whether you delivered it like someone who should pass. Evaluates clinical accuracy, communication structure, and tone.",
    gradient: "linear-gradient(135deg, #1e2330 0%, #2a3050 100%)",
    status: "In Development",
    statusColor: "bg-yellow-500/20 text-yellow-500",
    category: "Board Preparation"
  },
  {
    id: 3,
    title: 'OP REPORT',
    description: "Physics-based laparoscopic simulation where surgical technique isn't programmed — it's discovered. Tissue responds realistically. Safety develops from consequence, not scripted guardrails.",
    gradient: "linear-gradient(135deg, #1e2330 0%, #3e1f1f 100%)",
    status: "In Development",
    statusColor: "bg-yellow-500/20 text-yellow-500",
    category: "Surgical Simulation",
    subtitle: "Operative Platform for Reinforcement-learning Environment for Procedural Optimization & Reiterative Training"
  },
  {
    id: 4,
    title: 'Generative Radiology Training',
    description: "How many chest X-rays with a missed pneumothorax can you practice on before the case bank runs out? With synthetic generation — as many as you need. Unlimited pathology identification practice with adaptive difficulty.",
    gradient: "linear-gradient(135deg, #1e2330 0%, #1f2937 100%)",
    status: "Planned",
    statusColor: "bg-blue-500/20 text-blue-500",
    category: "Diagnostic Education"
  },
  {
    id: 5,
    title: 'Goals of Care',
    description: "Surgical training teaches you how to operate. It doesn't teach you how to sit with a family at 2 AM and explain what 'comfort measures' means. This tool does. Practice difficult conversations with feedback on empathy, clarity, and emotional valence.",
    gradient: "linear-gradient(135deg, #1e2330 0%, #2d1f3f 100%)",
    status: "Planned",
    statusColor: "bg-blue-500/20 text-blue-500",
    category: "Soft Skills"
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: any) => {
  return (
    <div
      className={`
        relative h-[500px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
        border border-[var(--border-color)]
        ${isActive ? 'w-[600px] flex-grow' : 'w-[80px] hover:w-[100px]'}
      `}
      onMouseEnter={onMouseEnter}
      style={{ background: item.gradient }}
    >
      {/* Content Container - Only visible when active */}
      <div
        className={`absolute inset-0 p-8 flex flex-col justify-between transition-opacity duration-500 ${isActive ? 'opacity-100 delay-200' : 'opacity-0'}`}
      >
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.statusColor}`}>
              {item.status}
            </div>
            <span className="text-xs text-[var(--text-dim)] uppercase tracking-wider">{item.category}</span>
          </div>

          <h3 className="text-3xl font-bold text-white mb-2">{item.title}</h3>
          {item.subtitle && <p className="text-xs font-mono text-[var(--coral)] mb-4">{item.subtitle}</p>}
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed">{item.description}</p>
        </div>

        <div className="w-12 h-1 bg-[var(--coral)] rounded-full opacity-50" />
      </div>

      {/* Vertical Title - Visible when inactive */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100'}`}
      >
        <span className="transform -rotate-90 whitespace-nowrap text-lg font-medium text-[var(--text-secondary)] tracking-wider">
          {item.title}
        </span>
      </div>
    </div>
  );
};


// --- Main Export Component ---
export function ProductAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto py-24 px-6" id="products">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#e8eaf0] mb-4">
          The Platform
        </h2>
        <p className="text-lg text-[#9ba1b8] max-w-2xl mx-auto">
          Each tool addresses a specific gap in surgical training and practice — together, they cover the full arc.
        </p>
      </div>

      <div className="flex flex-row gap-4 h-[500px]">
        {accordionItems.map((item, index) => (
          <AccordionItem
            key={item.id}
            item={item}
            isActive={index === activeIndex}
            onMouseEnter={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
