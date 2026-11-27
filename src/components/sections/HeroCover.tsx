"use client";

import { ArrowRight } from "lucide-react";
import {
  HERO_CTA_LINKS,
  HERO_KEY_TECH,
  HERO_ROLE_KICKER,
  type HeroSection,
  type Locale,
} from "@/data/dictionary";
import { TechIconTile } from "@/components/ui/TechIconTile";
import { CircuitBackdrop } from "@/components/ui/CircuitBackdrop";

interface HeroCoverProps {
  hero: HeroSection;
  locale: Locale;
}

export function HeroCover({ hero, locale }: HeroCoverProps) {
  const ctaLinks = HERO_CTA_LINKS[locale];

  return (
    <section
      id="top"
      className="relative w-full bg-[#FFFFFF] min-h-screen flex items-center pt-16 pb-12 lg:py-0 overflow-hidden"
    >
      <style>{`
        @keyframes evelynLedBeam {
          0% { top: -18%; height: 90px; opacity: 0; }
          15% { opacity: 1; }
          50% { height: 220px; opacity: 1; }
          85% { opacity: 1; }
          100% { top: 112%; height: 90px; opacity: 0; }
        }
        .evelyn-led-pulse {
          animation: evelynLedBeam 4.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      <CircuitBackdrop variant="hero" enableParallax />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-y-0 right-10 sm:right-12 lg:right-14 xl:right-16 z-30 hidden sm:block w-[1.5px] bg-black/10 overflow-hidden"
      >
        <span
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--neon-lime), #f472b6, transparent)",
            boxShadow: "0 0 14px var(--neon-lime)",
          }}
          className="evelyn-led-pulse absolute left-[-0.5px] w-[2px] rounded-full"
        />
      </div>

      <div className="ml-6 sm:ml-auto relative mx-auto w-full max-w-[1440px] 2xl:max-w-[1540px] px-11 sm:px-16 md:px-20 lg:pl-24 lg:pr-24 xl:pl-52 xl:pr-28 2xl:pl-48 2xl:pr-24">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 xl:gap-12 items-center">
          <div className="relative z-20 order-1 lg:col-span-5 lg:self-end">
            <div
              style={{ animationDelay: "60ms" }}
              className="animate-fade-in-up space-y-3.5 sm:space-y-4 max-w-md"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span
                  aria-hidden="true"
                  style={{ boxShadow: "0 0 10px var(--neon-lime)" }}
                  className="h-4 w-[2.5px] bg-[var(--neon-lime)] shrink-0"
                />
                <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[var(--ink-black)]">
                  <span className="text-[var(--neon-lime)] mr-1.5">//</span>
                  <span>{HERO_ROLE_KICKER[locale]}</span>
                </p>
              </div>

              <h1 className="text-3xl sm:text-5xl xl:text-[3.25rem] font-bold tracking-tight text-[var(--ink-black)] leading-[1.04]">
                {hero.name}
              </h1>

              <p className="text-[13px] sm:text-[15.5px] text-[#4d4d4d] sm:text-[#52525B] leading-relaxed pt-1">
                {hero.leadParagraph}
              </p>
            </div>
          </div>

          <div
            style={{ animationDelay: "150ms" }}
            className="animate-fade-in-up order-2 lg:order-2 lg:col-span-7 lg:row-span-2 relative flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[330px] lg:max-w-[390px] xl:max-w-[450px] flex flex-col items-center justify-end">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center z-0"
              >
                <div className="h-[200px] w-[200px] sm:h-[310px] sm:w-[310px] -translate-x-3 -translate-y-3 rounded-full bg-gradient-to-tr from-[#FCE7F3]/80 via-[#FBCFE8]/50 to-transparent blur-3xl" />
                <div className="absolute h-[160px] w-[160px] sm:h-[250px] sm:w-[250px] translate-x-6 translate-y-3 rounded-full bg-gradient-to-bl from-[#e981d7]/20 via-[#FCE7F3]/45 to-transparent blur-3xl" />
              </div>

              <img
                src="/images/profile/EvelynPascualProfilePhoto_nobackground.png"
                alt="Evelyn Pascual, Full-Stack Developer"
                className="relative z-10 block w-full h-auto max-h-[250px] sm:max-h-[360px] lg:max-h-[400px] xl:max-h-[440px] object-contain object-bottom drop-shadow-[0_18px_36px_rgba(11,12,14,0.12)] select-none"
              />

              <div
                aria-hidden="true"
                className="relative z-20 w-44 sm:w-72 h-[1px] bg-gradient-to-r from-transparent via-[#0B0C0E]/25 to-transparent flex items-center justify-center"
              >
                <span
                  style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
                  className="h-1.5 w-1.5 rounded-full bg-[var(--neon-lime)]"
                />
              </div>
            </div>
          </div>

          <div className="relative z-20 order-3 lg:order-3 lg:col-span-5 lg:self-start">
            <div
              style={{ animationDelay: "180ms" }}
              className="animate-fade-in-up sm:pt-6 pb-6 sm:pb-0 lg:mt-3 lg:pt-7 sm:border-t border-[#E4E4E7] max-w-md"
            >
              <div className="grid grid-cols-5 gap-1.5 sm:gap-3">
                {HERO_KEY_TECH.map((tech) => (
                  <TechIconTile key={tech} name={tech} mobileTiny />
                ))}
              </div>
            </div>

            <div
              style={{ animationDelay: "280ms" }}
              className="animate-fade-in-up mt-2 sm:mt-8 lg:mt-10 max-w-md space-y-2"
            >
              {ctaLinks.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className="group relative w-full flex items-center justify-between py-3 sm:py-3.5 pr-2 sm:pr-3 pl-0 hover:pl-3 hover:bg-[#F8F9FA] text-left transition-all duration-300 cursor-pointer border-b-2 border-[var(--ink-black)] overflow-hidden"
                >
                  <span
                    aria-hidden="true"
                    style={{ boxShadow: "0 0 12px var(--neon-lime)" }}
                    className="absolute left-0 top-2 bottom-2 w-[3px] bg-[var(--neon-lime)] origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
                  />
                  <div className="flex items-center gap-2.5 sm:gap-3 transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                    <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-[var(--neon-lime)] shrink-0">
                      {cta.index} //
                    </span>
                    <span className="text-[11px] sm:text-sm font-extrabold uppercase tracking-[0.13em] sm:tracking-[0.16em] text-[var(--ink-black)] group-hover:text-[var(--neon-lime)] transition-colors">
                      {cta.title}
                    </span>
                  </div>
                  <ArrowRight
                    className="h-4 w-4 text-[var(--ink-black)] group-hover:text-[var(--neon-lime)] group-hover:translate-x-1 transition-all duration-300 shrink-0 ml-2"
                    strokeWidth={2}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}