"use client";

import { useState } from "react";
import { ArrowUp, ArrowUpRight, Check, Copy } from "lucide-react";
import type { Locale, NavSection, ProjectsSection } from "@/data/dictionary";

interface FooterProps {
  nav: NavSection;
  projects: ProjectsSection;
  locale: Locale;
  onToggleLocale: () => void;
}

export function Footer({ nav, projects, locale, onToggleLocale }: FooterProps) {
  const [copied, setCopied] = useState(false);

  const handleProtectedCopy = async () => {
    const user = ["elynzx", "dev"].join(".");
    const domain = ["gmail", "com"].join(".");
    const protectedAddress = `${user}@${domain}`;

    try {
      await navigator.clipboard.writeText(protectedAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      window.location.href = `mailto:${protectedAddress}`;
    }
  };

  return (
    <footer className="relative w-full bg-[#FFFFFF] text-[#0B0C0E] pt-24 pb-16 overflow-hidden">
      <div
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(11, 12, 14, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(11, 12, 14, 0.03) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        className="pointer-events-none absolute inset-0"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.65)_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-[1440px] 2xl:max-w-[1540px] px-11 sm:px-16 md:px-20 lg:pl-24 lg:pr-24 xl:pl-52 xl:pr-28 2xl:pl-48 2xl:pr-24">
        <div className="pb-16 sm:pb-20 border-b border-[#E4E4E7] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col items-start  ml-6 md:ml-0">
            <span className="font-mono text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-[var(--neon-lime)] mb-4">
              {locale === "en" ? "05 // NEXT STEP" : "05 // SIGUIENTE PASO"}
            </span>

            <h2 className="font-display text-2xl sm:text-[38px] font-bold tracking-tight text-[#0B0C0E] leading-[1.14] mb-4 max-w-sm">
              {locale === "en"
                ? "Let’s build reliable software together."
                : "Construyamos software confiable juntos."}
            </h2>

            <p className="text-sm text-[#52525B] leading-relaxed mb-8 max-w-xs">
              {locale === "en"
                ? "Available for full-stack and backend roles in Java, Spring Boot, React & TypeScript."
                : "Disponible para roles full-stack y backend en Java, Spring Boot, React y TypeScript."}
            </p>

            <button
              type="button"
              onClick={handleProtectedCopy}
              aria-label={
                locale === "en" ? "Copy direct email" : "Copiar correo directo"
              }
              className="group relative inline-flex items-center justify-between gap-8 py-2.5 pr-1 border-b border-[#0B0C0E] hover:border-[var(--neon-lime)] transition-colors cursor-pointer"
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#0B0C0E] group-hover:text-[var(--neon-lime)] transition-colors">
                {copied
                  ? locale === "en"
                    ? "Email copied to clipboard"
                    : "Correo copiado"
                  : locale === "en"
                    ? "Copy direct email"
                    : "Copiar correo directo"}
              </span>
              {copied ? (
                <Check className="h-3.5 w-3.5 text-[var(--neon-lime)]" />
              ) : (
                <Copy className="h-3.5 w-3.5 text-[#71717A] group-hover:text-[#0B0C0E] transition-colors" />
              )}
            </button>
          </div>

          <div className="lg:col-span-4 ml-6 md:ml-0">
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#71717A] mb-6">
              {locale === "en" ? "01 // PROJECTS" : "01 // PROYECTOS"}
            </p>

            <ul className="space-y-3.5">
              {projects.items.map((proj, idx) => {
                const targetUrl =
                  proj.liveUrl ?? proj.repositoryUrl ?? "#projects";
                const isExternal = Boolean(proj.liveUrl || proj.repositoryUrl);

                return (
                  <li key={proj.id}>
                    <a
                      href={targetUrl}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-3 text-[15px] font-medium text-[#0B0C0E] hover:text-[var(--neon-lime)] transition-colors"
                    >
                      <span className="hidden font-mono text-[11px] text-[#A1A1AA] group-hover:text-[var(--neon-lime)]">
                        0{idx + 1}
                      </span>
                      <span>{proj.title}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#A1A1AA] group-hover:text-[#0B0C0E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-9 ml-6 md:ml-0">
            <div>
              <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#71717A] mb-6">
                {locale === "en" ? "02 // DIRECTORY" : "02 // DIRECTORIO"}
              </p>

              <ul className="space-y-3.5">
                {nav.items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-3 text-[15px] font-medium text-[#0B0C0E] hover:text-[var(--neon-lime)] transition-colors"
                    >
                      <span className="hidden font-mono text-[11px] text-[#A1A1AA] group-hover:text-[var(--neon-lime)]">
                        {item.index}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#71717A]">
              <a
                href={nav.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0B0C0E] transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href={nav.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0B0C0E] transition-colors"
              >
                LinkedIn ↗
              </a>
              <button
                type="button"
                onClick={onToggleLocale}
                className="hover:text-[#0B0C0E] transition-colors cursor-pointer uppercase"
              >
                {locale === "en" ? "ES" : "EN"}
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-[#71717A] text-center lg:text-left">
          <span>© 2026 {nav.brandName} · Lima, Peru</span>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-[#52525B] hover:text-[#0B0C0E] transition-colors"
          >
            <span>{locale === "en" ? "Back to top" : "Subir"}</span>
            <ArrowUp
              className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform"
              strokeWidth={1.8}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
