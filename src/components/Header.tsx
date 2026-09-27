"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import Logo from "./Logo";

export default function Header({ lang, t }: { lang: Locale; t: Dictionary["nav"] }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const other: Locale = lang === "en" ? "zh" : "en";
  const switchLang = () => {
    document.cookie = `lang=${other}; path=/; max-age=31536000; samesite=lax`;
    router.push(`/${other}${window.location.hash}`, { scroll: false });
  };

  const links = [
    { href: "#mission", label: t.mission },
    { href: "#modules", label: t.modules },
    { href: "#applications", label: t.applications },
    { href: "#invest", label: t.invest },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "border-b border-line bg-ink/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="GraphVerse">
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight">
            Graph<span className="text-mute">Verse</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-mute transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={switchLang}
            aria-label={t.switchLabel}
            className="flex h-9 items-center gap-1.5 rounded-full border border-line px-3 text-sm text-mute transition-colors hover:border-white/30 hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
            </svg>
            {t.switchTo}
          </button>
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-full bg-white px-4 text-sm font-medium text-ink transition-transform hover:scale-[1.03] sm:flex"
          >
            {t.cta}
          </a>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={t.menu}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-line px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 text-base text-mute hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
