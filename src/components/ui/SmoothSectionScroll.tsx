"use client";

import { useEffect, useRef } from "react";

const SECTION_SELECTORS = [
  "#top",
  "#projects",
  "#about",
  "#trajectory",
  "#field-notes",
  "footer",
];

const DELTA_THRESHOLD = 135;

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function SmoothSectionScroll() {
  const isAnimatingRef = useRef(false);
  const accumulatedDeltaRef = useRef(0);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const smoothScrollTo = (targetY: number, duration = 780) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      if (Math.abs(distance) < 4) return;

      isAnimatingRef.current = true;
      accumulatedDeltaRef.current = 0;
      let startTime: number | null = null;

      const step = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setTimeout(() => {
            isAnimatingRef.current = false;
            accumulatedDeltaRef.current = 0;
          }, 180);
        }
      };

      requestAnimationFrame(step);
    };

    const hasScrollableParent = (target: EventTarget | null): boolean => {
      let el = target as HTMLElement | null;
      while (el && el !== document.body) {
        const style = window.getComputedStyle(el);
        const canScrollY =
          (style.overflowY === "auto" || style.overflowY === "scroll") &&
          el.scrollHeight > el.clientHeight;
        if (canScrollY) return true;
        el = el.parentElement;
      }
      return false;
    };

    const isAnyModalOpen = (): boolean => {
      if (document.body.style.overflow === "hidden") return true;
      return Boolean(
        document.querySelector('[role="dialog"], [aria-modal="true"]'),
      );
    };

    const handleWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024) return;

      if (isAnyModalOpen()) return;

      if (hasScrollableParent(e.target)) return;

      e.preventDefault();
      if (isAnimatingRef.current) return;

      if (
        (e.deltaY > 0 && accumulatedDeltaRef.current < 0) ||
        (e.deltaY < 0 && accumulatedDeltaRef.current > 0)
      ) {
        accumulatedDeltaRef.current = 0;
      }

      accumulatedDeltaRef.current += e.deltaY;

      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = setTimeout(() => {
        accumulatedDeltaRef.current = 0;
      }, 320);

      if (Math.abs(accumulatedDeltaRef.current) < DELTA_THRESHOLD) return;

      const direction = accumulatedDeltaRef.current > 0 ? 1 : -1;
      accumulatedDeltaRef.current = 0;

      const sections = SECTION_SELECTORS.map((sel) =>
        document.querySelector<HTMLElement>(sel),
      ).filter((el): el is HTMLElement => el !== null);

      if (sections.length === 0) return;

      const currentScroll = window.scrollY;
      const viewportMid = currentScroll + window.innerHeight * 0.45;

      let currentIndex = 0;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= viewportMid) {
          currentIndex = i;
        }
      }

      const nextIndex = Math.max(
        0,
        Math.min(sections.length - 1, currentIndex + direction),
      );

      if (nextIndex !== currentIndex) {
        smoothScrollTo(sections[nextIndex].offsetTop, 780);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  return null;
}
