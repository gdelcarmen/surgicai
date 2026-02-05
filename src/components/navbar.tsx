"use client";

import React from "react";
import MegaMenu from "@/components/ui/mega-menu";
import { Search, Droplet, GraduationCap, Monitor, ScanLine, Heart, ShieldCheck, Building2 } from "lucide-react";
import Image from "next/image";

export function Navbar() {
    const menuItems = [
        {
            id: 1,
            label: "Products",
            subMenus: [
                {
                    title: "Platform",
                    items: [
                        {
                            label: "MARCUS",
                            description: "Citation-backed clinical knowledge retrieval",
                            icon: Search,
                            link: "#marcus"
                        },
                        {
                            label: "DrainBow",
                            description: "Standardized drain output tracking",
                            icon: Droplet,
                            link: "#products"
                        },
                        {
                            label: "Boards Practice",
                            description: "Oral board simulation with tone analysis",
                            icon: GraduationCap,
                            link: "#products"
                        },
                        {
                            label: "OP REPORT",
                            description: "Physics-based surgical simulation",
                            icon: Monitor,
                            link: "#products"
                        },
                        {
                            label: "Radiology Training",
                            description: "Synthetic imaging for unlimited practice",
                            icon: ScanLine,
                            link: "#products"
                        },
                        {
                            label: "Goals of Care",
                            description: "Communication skills with emotional scoring",
                            icon: Heart,
                            link: "#products"
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            label: "About",
            link: "/about"
        },
        {
            id: 3,
            label: "Security",
            link: "/security"
        },
        {
            id: 4,
            label: "For Institutions",
            link: "/institutions"
        }
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-[var(--border-color)] bg-[#0a0c10]/80 backdrop-blur-sm">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center">
                    {/* Inline SVG Logo Wordmark */}
                    <a href="/" className="block w-[140px] text-white hover:opacity-80 transition-opacity">
                        <img src="/logo-wordmark-dark.svg" alt="surgicAI" className="w-full h-auto" />
                    </a>
                </div>

                {/* Navigation */}
                <div className="hidden md:block">
                    <MegaMenu items={menuItems} />
                </div>

                {/* Mobile Menu Placeholder (Hidden on desktop) */}
                <div className="md:hidden">
                    {/* Add mobile menu trigger here if needed */}
                </div>
            </div>
        </nav>
    );
}
