"use client";

import {
  STACK_LAYER_TAGS,
  type Locale,
  type TrajectorySection,
} from "@/data/dictionary";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { TechIconTile } from "@/components/ui/TechIconTile";
import { CircuitBackdrop } from "@/components/ui/CircuitBackdrop";

interface TrajectoryGridProps {
  trajectory: TrajectorySection;
  locale: Locale;
}

export function TrajectoryGrid({ trajectory, locale }: TrajectoryGridProps) {
  const layerTags = STACK_LAYER_TAGS[locale];

  return (
    <section
      id="trajectory"
      className="relative w-full bg-[#FFFFFF] min-h-screen flex flex-col justify-between pt-10 pb-12 lg:pt-12 lg:pb-14 scroll-mt-0 overflow-hidden"
    >
      <CircuitBackdrop variant="stack" />

      <div className="ml-6 md:ml-auto pr-17 pt-8 sm:pt-0  relative z-10 mx-auto w-full max-w-[1440px] 2xl:max-w-[1540px] flex-1 flex flex-col justify-between px-11 sm:px-16 md:px-20 lg:pl-24 lg:pr-24 xl:pl-52 xl:pr-28 2xl:pl-48 2xl:pr-24">
        <SectionHeader
          index="03"
          title={locale === "en" ? "TECH STACK" : "STACK TÉCNICO"}
          rightText={trajectory.stackHeading}
          marginClassName="mb-6"
        />

        <div className="my-auto divide-y divide-[#E4E4E7]">
          {trajectory.technicalStack.map((group, idx) => {
            const indexLabel = String(idx + 1).padStart(2, "0");
            const layerRole =
              layerTags[idx] ??
              (locale === "en" ? "ARCHITECTURE LAYER" : "CAPA DE ARQUITECTURA");

            return (
              <div
                key={group.id}
                className="py-6 lg:py-8 first:pt-2 last:pb-2 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 xl:gap-14 items-center text-left"
              >
                <div className="lg:col-span-4 flex flex-col items-start">
                  <p className="hidden md:flex font-mono text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-[var(--neon-lime)] mb-1.5">
                    {indexLabel} // {layerRole}
                  </p>

                  <h2 className="mb-4 font-display text-xl text-[18px] sm:text-[26px] font-bold md:font-extrabold tracking-tight text-[var(--neon-lime)] md:text-[#0B0C0E] leading-tight md:mb-2">
                    {group.category}
                  </h2>

                  <p className="text-xs sm:text-[13.5px] text-[#52525B] leading-relaxed max-w-md lg:max-w-none">
                    {group.description}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <div className="mt-2 md:mt-0 w-full mb-3 md:mb-0 flex flex-wrap justify-center sm:grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-3 gap-x-3 sm:gap-y-5 sm:gap-x-4 sm:items-center">
                    {group.technologies.map((tech) => (
                      <div key={tech} className="w-[50px] sm:w-auto">
                        <TechIconTile name={tech} mobileTiny />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
