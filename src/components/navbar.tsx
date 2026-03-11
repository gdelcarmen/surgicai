"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import MegaMenu from "@/components/ui/mega-menu";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { Menu } from "lucide-react";

import { mainMenuItems } from "@/lib/site-navigation";

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-[var(--border-color)] bg-[#0a0c10]/80 backdrop-blur-sm">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
                {/* Logo */}
                <div className="flex items-center">
                    {/* Inline SVG Logo Wordmark */}
                    <Link href="/" className="block w-[140px] text-white hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo-wordmark-dark.svg"
                            alt="surgicAI"
                            width={140}
                            height={24}
                            className="w-full h-auto"
                            priority
                        />
                    </Link>
                </div>

                {/* Navigation */}
                <div className="hidden md:block">
                    <MegaMenu items={[...mainMenuItems]} />
                </div>

                {/* Mobile Menu Trigger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 text-[var(--text-secondary)] hover:text-white transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <MobileMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                    menuItems={[...mainMenuItems]}
                />
            </div>
        </nav>
    );
}
