"use client";

import { motion } from "motion/react";

export function ScrollIndicator() {
    return (
        <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
            <div className="w-6 h-10 rounded-full border border-[var(--text-dim)] flex items-start justify-center p-1">
                <div className="w-1 h-3 bg-[var(--coral)] rounded-full" />
            </div>
        </motion.div>
    );
}
