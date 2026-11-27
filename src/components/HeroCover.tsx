"use client";

import { ArrowRight } from "lucide-react";
import type { HeroSection, Locale } from "@/data/dictionary";
import { TechIconTile } from "@/components/TechIconTile";
import { CircuitBackdrop } from "@/components/CircuitBackdrop";

interface HeroCoverProps {
  hero: HeroSection;
  locale: Locale;
}

const HERO_KEY_TECH = ["Java", "Spring Boot", "React", "TypeScript", "MySQL"];

export function HeroCover({ hero, locale }: HeroCoverProps) {
  const ctaLinks =
    locale === "en"
      ? [
          {
            href: "#projects",
            index: "01",
            title: "Explore Selected Works",
          },
          {
            href: "#about",
            index: "02",
            title: "Education & Trajectory",
          },
        ]
      : [
          {
            href: "#projects",
            index: "01",
            title: "Explorar Proyectos",
          },
          {
            href: "#about",
            index: "02",
            title: "Educación y Trayectoria",
          },
        ];

  return (
    <section
      id="top"
      className="relative w-full bg-[#FFFFFF] min-h-screen flex items-stretch pt-16 pb-0 lg:pt-20 overflow-hidden"
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
        className="pointer-events-none fixed inset-y-0 right-12 sm:right-16 lg:right-20 z-30 hidden sm:block w-[1.5px] bg-black/10 overflow-hidden"
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

      <div className="relative mx-auto w-full max-w-[1540px] px-4 sm:px-10 lg:pl-44 lg:pr-20 xl:pl-48 xl:pr-24 flex items-stretch">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="relative z-20 lg:col-span-5 py-12 lg:py-16">
            <div
              style={{ animationDelay: "60ms" }}
              className="animate-fade-in-up space-y-4 max-w-md"
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  style={{ boxShadow: "0 0 10px var(--neon-lime)" }}
                  className="h-4 w-[2.5px] bg-[var(--neon-lime)] shrink-0"
                />
                <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[var(--ink-black)]">
                  <span className="text-[var(--neon-lime)] mr-1.5">//</span>
                  <span>
                    {locale === "en"
                      ? "FULL-STACK DEVELOPER • LIMA, PERU"
                      : "DESARROLLADORA FULL-STACK • LIMA, PERÚ"}
                  </span>
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl xl:text-[3.25rem] font-bold tracking-tight text-[var(--ink-black)] leading-[1.04]">
                {hero.name}
              </h1>

              <p className="text-sm sm:text-[15.5px] text-[#52525B] leading-relaxed pt-1">
                {hero.leadParagraph}
              </p>
            </div>

            <div
              style={{ animationDelay: "180ms" }}
              className="animate-fade-in-up mt-9 pt-7 border-t border-[#E4E4E7] max-w-md"
            >
              <div className="grid grid-cols-5 gap-3">
                {HERO_KEY_TECH.map((tech) => (
                  <TechIconTile key={tech} name={tech} />
                ))}
              </div>
            </div>

            <div
              style={{ animationDelay: "280ms" }}
              className="animate-fade-in-up mt-10 max-w-md space-y-2"
            >
              {ctaLinks.map((cta) => (
                <a
                  key={cta.href}
                  href={cta.href}
                  className="group relative w-full flex items-center justify-between py-3.5 px-4 -mx-4 hover:bg-[#F8F9FA] text-left transition-colors cursor-pointer border-b-2 border-[var(--ink-black)] overflow-hidden"
                >
                  <span
                    aria-hidden="true"
                    style={{ boxShadow: "0 0 12px var(--neon-lime)" }}
                    className="absolute left-0 top-2 bottom-2 w-[3px] bg-[var(--neon-lime)] origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
                  />
                  <div className="flex items-center gap-3 transition-transform duration-300 ease-out group-hover:translate-x-2">
                    <span className="text-xs font-extrabold tracking-widest text-[var(--neon-lime)]">
                      {cta.index} //
                    </span>
                    <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.16em] text-[var(--ink-black)] group-hover:text-[var(--neon-lime)] transition-colors">
                      {cta.title}
                    </span>
                  </div>
                  <ArrowRight
                    className="h-4 w-4 text-[var(--ink-black)] group-hover:text-[var(--neon-lime)] group-hover:translate-x-1.5 transition-all duration-300 shrink-0 ml-3"
                    strokeWidth={2}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Retrato proporcionado, centrado y con línea base fina */}
          <div
            style={{ animationDelay: "150ms" }}
            className="animate-fade-in-up lg:col-span-7 relative flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[500px] xl:max-w-[550px] flex flex-col items-center justify-end">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center justify-center z-0"
              >
                <div className="h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] -translate-x-4 -translate-y-4 rounded-full bg-gradient-to-tr from-[#FCE7F3]/75 via-[#FBCFE8]/45 to-transparent blur-3xl" />
                <div className="absolute h-[230px] w-[230px] sm:h-[280px] sm:w-[280px] translate-x-8 translate-y-4 rounded-full bg-gradient-to-bl from-[#e981d7]/20 via-[#FCE7F3]/45 to-transparent blur-3xl" />
              </div>

              <img
                src="/images/profile/EvelynPascualProfilePhoto_nobackground.png"
                alt="Evelyn Pascual, Full-Stack Developer"
                className="relative z-10 block w-full h-auto max-h-[450px] sm:max-h-[500px] xl:max-h-[530px] object-contain object-bottom drop-shadow-[0_18px_36px_rgba(11,12,14,0.12)] select-none"
              />

              <div
                aria-hidden="true"
                className="relative z-20 w-64 sm:w-80 h-[1px] bg-gradient-to-r from-transparent via-[#0B0C0E]/25 to-transparent flex items-center justify-center"
              >
                <span
                  style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
                  className="h-1.5 w-1.5 rounded-full bg-[var(--neon-lime)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
