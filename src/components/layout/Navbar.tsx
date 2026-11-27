"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { NAV_RAIL_ITEMS, type Locale, type NavSection } from "@/data/dictionary";
import { SocialRail } from "@/components/layout/SocialRail";

interface NavbarProps {
  nav: NavSection;
  locale: Locale;
  onToggleLocale: () => void;
}

export function Navbar({ nav, locale, onToggleLocale }: NavbarProps) {
  const [activeId, setActiveId] = useState<string>("top");
  const [isDarkPreview, setIsDarkPreview] = useState(false);
  const railItems = NAV_RAIL_ITEMS[locale];

  useEffect(() => {
    const elements = NAV_RAIL_ITEMS[locale]
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0 && visible[0].target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [locale]);

  const ThemeIcon = isDarkPreview ? Sun : Moon;

  return (
    <>
      <header className="sm:hidden sticky top-0 z-50 w-full bg-[#FFFFFF] border-b border-[#E4E4E7] px-4 h-12 flex items-center justify-between select-none">
        <SocialRail
          socialLinks={nav.socialLinks}
          locale={locale}
          variant="mobileHeader"
        />

        <div
          className="flex items-center gap-1 text-[13px] tracking-[0.16em] uppercase"
          role="group"
          aria-label="Language selector"
        >
          {(["en", "es"] as const).map((lang, i) => (
            <span key={lang} className="inline-flex items-center gap-1">
              {i > 0 && <span className="text-[#E4E4E7]">/</span>}
              <button
                type="button"
                onClick={() => {
                  if (locale !== lang) onToggleLocale();
                }}
                className={`pb-0.5 transition-colors cursor-pointer uppercase ${
                  locale === lang
                    ? "font-extrabold text-[var(--ink-black)] border-b-2 border-[var(--neon-lime)]"
                    : "font-semibold text-[#A1A1AA] hover:text-[var(--ink-black)]"
                }`}
              >
                {lang}
              </button>
            </span>
          ))}
        </div>
      </header>

      <div
        aria-label="Language and Theme Controls"
        className="hidden sm:flex fixed sm:top-5 sm:left-4 lg:top-6 lg:left-6 xl:left-8 z-50 items-center gap-3.5 pointer-events-auto select-none animate-fade-in-up"
      >
        <div
          className="flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase"
          role="group"
          aria-label="Language selector"
        >
          {(["en", "es"] as const).map((lang, i) => (
            <span key={lang} className="inline-flex items-center gap-1.5">
              {i > 0 && <span className="text-[#E4E4E7]">/</span>}
              <button
                type="button"
                onClick={() => {
                  if (locale !== lang) onToggleLocale();
                }}
                className={`pb-0.5 transition-colors cursor-pointer uppercase ${
                  locale === lang
                    ? "font-extrabold text-[var(--ink-black)] border-b-2 border-[var(--neon-lime)]"
                    : "font-semibold text-[#A1A1AA] hover:text-[var(--ink-black)]"
                }`}
              >
                {lang}
              </button>
            </span>
          ))}
        </div>

        <span className="h-3.5 w-[1px] bg-[#E4E4E7]" aria-hidden="true" />

        <button
          type="button"
          onClick={() => setIsDarkPreview((prev) => !prev)}
          aria-label="Toggle theme"
          className="flex text-[#71717A] hover:text-[var(--ink-black)] transition-colors cursor-pointer"
        >
          <ThemeIcon className="h-3.5 w-3.5" strokeWidth={1.75} />
        </button>
      </div>

      <aside
        aria-label="Section Navigation"
        className="flex fixed top-1/2 -translate-y-1/2 left-2.5 sm:left-4 lg:left-6 xl:left-8 z-50 flex-col items-start pointer-events-auto select-none"
      >
        <nav
          aria-label="Portfolio Sections"
          className="relative pl-2.5 sm:pl-3.5 flex flex-col gap-3 sm:gap-3.5"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 inset-y-0 w-[1px] bg-[#E4E4E7] origin-bottom animate-fade-in-up"
          />

          {railItems.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveId(item.id)}
                aria-label={item.label}
                style={{ animationDelay: `${120 + idx * 85}ms` }}
                className="animate-fade-in-up group relative flex items-baseline gap-2.5 py-0.5 text-left transition-all"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-[11px] sm:-left-[15px] top-0.5 bottom-0.5 w-[2px] transition-all duration-300 ${
                    isActive
                      ? "bg-[var(--neon-lime)] opacity-100 scale-y-100"
                      : "bg-[var(--neon-lime)] opacity-0 scale-y-50 group-hover:opacity-60 group-hover:scale-y-100"
                  }`}
                />
                <span
                  className={`text-[10px] font-extrabold tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--neon-lime)]"
                      : "text-[#A1A1AA] group-hover:text-[var(--ink-black)]"
                  }`}
                >
                  {item.index}
                </span>
                <span
                  className={`hidden xl:inline text-[11px] uppercase tracking-[0.16em] transition-all duration-200 ${
                    isActive
                      ? "font-extrabold text-[var(--ink-black)] translate-x-0.5"
                      : "font-semibold text-[#71717A] group-hover:text-[var(--ink-black)] group-hover:translate-x-0.5"
                  }`}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
