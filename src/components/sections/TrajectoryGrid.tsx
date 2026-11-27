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

      <div className="relative z-10 mx-auto w-full max-w-[1540px] flex-1 flex flex-col justify-between px-4 sm:px-10 lg:pl-44 lg:pr-20 xl:pl-48 xl:pr-24">
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
                className="py-7 lg:py-8 first:pt-2 last:pb-2 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center"
              >
                <div className="lg:col-span-4">
                  <p className="font-mono text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-[var(--neon-lime)] mb-1.5">
                    {indexLabel} // {layerRole}
                  </p>

                  <h2 className="font-display text-2xl sm:text-[26px] font-extrabold tracking-tight text-[#0B0C0E] leading-tight mb-2">
                    {group.category}
                  </h2>

                  <p className="text-xs sm:text-[13.5px] text-[#52525B] leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-y-6 gap-x-4 items-center">
                    {group.technologies.map((tech) => (
                      <TechIconTile key={tech} name={tech} />
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
