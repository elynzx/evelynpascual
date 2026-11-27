"use client";

import {
  ABOUT_HOOK_BIO,
  ABOUT_MILESTONES,
  ABOUT_ROLE_LABEL,
  type AboutSection,
  type Locale,
} from "@/data/dictionary";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { CircuitBackdrop } from "@/components/ui/CircuitBackdrop";
import { PortraitFrame } from "@/components/ui/PortraitFrame";

interface AboutEditorialProps {
  about: AboutSection;
  locale: Locale;
}

export function AboutEditorial({ about, locale }: AboutEditorialProps) {
  const milestones = ABOUT_MILESTONES[locale];
  const hookBio = ABOUT_HOOK_BIO[locale];

  return (
    <section
      id="about"
      className="relative w-full bg-[#FFFFFF] min-h-screen flex flex-col justify-between pt-10 pb-12 lg:pt-12 lg:pb-14 scroll-mt-0 overflow-hidden"
    >
      <CircuitBackdrop variant="trajectory" />

      <div className="relative pr-17 pt-8 sm:pt-0 ml-6 sm:ml-auto z-10 mx-auto w-full max-w-[1440px] 2xl:max-w-[1540px] flex-1 flex flex-col justify-between px-11 sm:px-16 md:px-20 lg:pl-24 lg:pr-24 xl:pl-52 xl:pr-28 2xl:pl-48 2xl:pr-24">
        <SectionHeader
          index="02"
          title={locale === "en" ? "TRAJECTORY" : "TRAYECTORIA"}
          rightText={about.academicHighlight.program}
          marginClassName="mb-8"
        />

        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">
          <div className="lg:col-span-4 relative flex flex-col gap-6 sm:gap-0 items-center text-center lg:items-start lg:text-left">
            <PortraitFrame
              imageSrc="/images/profile/EvelynPascualProfilePhoto.png"
              imageAlt="Evelyn Pascual"
            />

            <div className="max-w-[310px] flex flex-col items-center lg:items-start">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                <span
                  aria-hidden="true"
                  style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
                  className="h-3 w-[2px] bg-[var(--neon-lime)] shrink-0"
                />
                <p className="font-mono text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0B0C0E]">
                  {ABOUT_ROLE_LABEL[locale]}
                </p>
              </div>

              <h2 className="font-display text-xl sm:text-[26px] font-extrabold tracking-tight text-[#0B0C0E] leading-tight mb-2.5 sm:mb-3">
                Evelyn Pascual
              </h2>

              <p className="text-xs sm:text-[13.5px] text-[#52525B] leading-relaxed pt-3 border-t border-[#E4E4E7]">
                {hookBio}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-10 xl:pl-16 mt-6 sm:mt-0">
            <div className="relative pl-5 sm:pl-8 border-l-2 sm:border-l border-[#E4E4E7] space-y-5 sm:space-y-6">
              {milestones.map((item) => (
                <div
                  key={item.index}
                  className="group relative flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-8 pb-4 sm:pb-5 border-b border-[#E4E4E7]/70 last:border-b-0 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[25px] sm:-left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-[#FFFFFF] border-2 border-[#D4D4D8] group-hover:border-[var(--neon-lime)] group-hover:bg-[var(--neon-lime)] transition-colors"
                  />

                  <div className="w-full max-w-[520px]">
                    <p className="hidden sm:flex font-mono text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-[var(--neon-lime)] mb-1">
                      {item.index} // {item.institution}
                    </p>
                    <p className="flex sm:hidden font-mono text-[9.5px] font-extrabold uppercase tracking-[0.16em] text-[var(--neon-lime)] mb-1">
                      {item.institution}
                    </p>


                    <h3 className="font-display text-lg sm:text-[20px] font-extrabold tracking-tight text-[#0B0C0E] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-[13.5px] text-[#52525B] mt-1.5 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="sm:w-44 sm:text-right shrink-0 pt-1">
                    <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#52525B] group-hover:text-[#0B0C0E] transition-colors">
                      {item.timeframe}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
