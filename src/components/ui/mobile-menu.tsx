"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems: any[];
}

export function MobileMenu({ isOpen, onClose, menuItems }: MobileMenuProps) {
    // Prevent body scroll when menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm md:hidden"
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 z-[70] w-full max-w-sm bg-[#0a0c10] border-l border-[var(--border-color)] shadow-2xl md:hidden overflow-y-auto"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-[var(--border-color)]">
                            <span className="text-lg font-bold text-white">Menu</span>
                            <button
                                onClick={onClose}
                                className="p-2 text-[var(--text-secondary)] hover:text-white transition-colors rounded-full hover:bg-[var(--bg-elevated)]"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-6 flex flex-col gap-6">
                            {menuItems.map((item) => (
                                <div key={item.id} className="flex flex-col gap-3">
                                    {item.subMenus ? (
                                        <>
                                            <div className="text-sm font-semibold text-[var(--coral)] uppercase tracking-wider mb-2">
                                                {item.label}
                                            </div>
                                            <div className="flex flex-col gap-4 pl-2">
                                                {item.subMenus.map((subMenu: any, idx: number) => (
                                                    <div key={idx} className="flex flex-col gap-4">
                                                        {subMenu.items.map((subItem: any, subIdx: number) => {
                                                            const Icon = subItem.icon;
                                                            return (
                                                                <a
                                                                    key={subIdx}
                                                                    href={subItem.link || "#"}
                                                                    onClick={onClose}
                                                                    className="flex items-center gap-4 group"
                                                                >
                                                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] group-hover:text-[var(--coral)] group-hover:border-[var(--coral)]/30 transition-colors">
                                                                        <Icon className="w-5 h-5" />
                                                                    </div>
                                                                    <div className="flex flex-col">
                                                                        <span className="text-base font-medium text-[var(--text-primary)] group-hover:text-white transition-colors">
                                                                            {subItem.label}
                                                                        </span>
                                                                        <span className="text-xs text-[var(--text-dim)] line-clamp-1">
                                                                            {subItem.description}
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            );
                                                        })}
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <a
                                            href={item.link || "#"}
                                            onClick={onClose}
                                            className="flex items-center justify-between py-2 text-lg font-medium text-[var(--text-primary)] hover:text-[var(--coral)] transition-colors border-b border-[var(--border-color)]/30 pb-4"
                                        >
                                            {item.label}
                                            <ChevronRight className="w-5 h-5 text-[var(--text-dim)]" />
                                        </a>
                                    )}
                                </div>
                            ))}

                            <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[var(--coral-bright)] to-[var(--coral-darkest)] text-white font-bold shadow-lg shadow-[var(--coral)]/20"
                                >
                                    Get Early Access
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
