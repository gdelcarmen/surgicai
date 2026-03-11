import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/lib/site-navigation";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[var(--border-color)] bg-[#0a0c10]/50 py-12 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div className="flex flex-col gap-2">
          <Image
            src="/logo-wordmark-dark.svg"
            alt="surgicAI"
            width={140}
            height={24}
            className="h-6 w-auto opacity-80"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--text-secondary)] md:gap-8">
          {footerLinks.map((link) =>
            link.href.startsWith("mailto:") ? (
              <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ),
          )}
        </div>

        <div className="text-xs text-[var(--text-dim)]">© 2026 surgic.ai. All rights reserved.</div>
      </div>
    </footer>
  );
}
