"use client";

import type { UIEvent, RefObject } from "react";
import type { Locale } from "@/data/dictionary";

interface MobileDeviceFrameProps {
  title: string;
  imageSrc: string;
  locale: Locale;
  hasScrolled: boolean;
  imgError: boolean;
  viewportRef: RefObject<HTMLDivElement | null>;
  onScroll: (e: UIEvent<HTMLDivElement>) => void;
  onError: () => void;
}

export function MobileDeviceFrame({
  title,
  imageSrc,
  locale,
  hasScrolled,
  imgError,
  viewportRef,
  onScroll,
  onError,
}: MobileDeviceFrameProps) {
  return (
    <div className="w-[62%] max-w-[210px] sm:w-[46%] sm:max-w-[250px] lg:max-w-none lg:w-[23.5%] mt-1 lg:mt-0 lg:absolute lg:right-3 lg:bottom-0 z-20">
      <span
        aria-hidden="true"
        className="hidden sm:block absolute -left-[2px] top-16 h-6 w-[2px] rounded-l bg-[#A1A1AA]"
      />
      <span
        aria-hidden="true"
        className="hidden sm:block absolute -left-[2px] top-24 h-6 w-[2px] rounded-l bg-[#A1A1AA]"
      />
      <span
        aria-hidden="true"
        className="hidden sm:block absolute -right-[2px] top-20 h-9 w-[2px] rounded-r bg-[#A1A1AA]"
      />

      <div
        aria-hidden="true"
        className={`xl:flex flex-col items-center gap-2 absolute right-12 top-1/4 sm:-right-7 sm:top-1/2 -translate-y-1/2 transition-opacity duration-500 pointer-events-none ${
          hasScrolled ? "opacity-25" : "opacity-100"
        }`}
      >
        <span className="h-6 w-[1px] bg-[#E4E4E7]" />
        <span className="[writing-mode:vertical-rl] text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#71717A]">
          {locale === "en" ? "SCROLL DOWN →" : "DESLIZAR →"}
        </span>
      </div>

      <div className="relative rounded-[2.05rem] p-[2.5px] bg-gradient-to-tr from-[#71717A] via-[#F4F4F5] to-[#52525B] shadow-[0_28px_60px_rgba(11,12,14,0.26)]">
        <div className="relative bg-[#0B0C0E] rounded-[1.9rem] p-1.5 sm:p-2">
          <div
            className="mx-auto mt-0.5 mb-1.5 h-2 w-11 rounded-full bg-black ring-1 ring-white/10 flex items-center justify-end pr-1.5"
            aria-hidden="true"
          >
            <span className="h-1 w-1 rounded-full bg-sky-400/60" />
          </div>

          <div className="relative aspect-[9/19] w-full rounded-[1.35rem] overflow-hidden bg-white ring-1 ring-white/10">
            <div
              ref={viewportRef}
              onScroll={onScroll}
              className="relative w-full h-full overflow-y-auto overflow-x-hidden overscroll-contain device-scroll"
            >
              {!imgError ? (
                <img
                  src={imageSrc}
                  alt={`${title} mobile view`}
                  onError={onError}
                  className="w-full h-auto block select-none"
                />
              ) : null}
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-bl from-white/[0.12] via-transparent to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
