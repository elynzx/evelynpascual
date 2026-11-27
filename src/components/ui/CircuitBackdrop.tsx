"use client";

import { useEffect, useId, useRef } from "react";
import {
  CircuitPaths,
  type CircuitVariant,
} from "@/components/ui/CircuitPaths";

interface CircuitBackdropProps {
  variant?: CircuitVariant;
  enableParallax?: boolean;
}

export function CircuitBackdrop({
  variant = "hero",
  enableParallax = false,
}: CircuitBackdropProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const filterId = useId();

  useEffect(() => {
    if (!enableParallax) return;

    const handleWindowMouseMove = (e: MouseEvent) => {
      if (rafRef.current !== null || !svgRef.current) return;

      const clientX = e.clientX;
      const clientY = e.clientY;

      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (!svgRef.current) return;

        const normX = (clientX / window.innerWidth - 0.5) * 2;
        const normY = (clientY / window.innerHeight - 0.5) * 2;

        svgRef.current.style.transform = `perspective(1100px) rotateY(${
          normX * 4
        }deg) rotateX(${-normY * 4}deg) translate3d(${normX * 18}px, ${
          normY * 14
        }px, 0)`;
      });
    };

    const handleWindowMouseLeave = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      if (svgRef.current) {
        svgRef.current.style.transform =
          "perspective(1100px) rotateY(0deg) rotateX(0deg) translate3d(0px, 0px, 0)";
      }
    };

    window.addEventListener("mousemove", handleWindowMouseMove, {
      passive: true,
    });
    document.addEventListener("mouseleave", handleWindowMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      document.removeEventListener("mouseleave", handleWindowMouseLeave);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [enableParallax]);

  return (
    <>
      <style>{`
        @keyframes circuitPulseTravel {
          0% {
            stroke-dashoffset: 1100;
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
        .circuit-beam-1 {
          stroke-dasharray: 160 940;
          animation: circuitPulseTravel 4.8s linear infinite;
        }
        .circuit-beam-2 {
          stroke-dasharray: 130 970;
          animation: circuitPulseTravel 5.6s linear infinite;
          animation-delay: 1.6s;
        }
        .circuit-beam-3 {
          stroke-dasharray: 190 910;
          animation: circuitPulseTravel 6.2s linear infinite;
          animation-delay: 2.9s;
        }
        .circuit-beam-subtle {
          stroke-dasharray: 110 990;
          animation: circuitPulseTravel 7.2s linear infinite;
        }
      `}</style>

      <svg
        ref={svgRef}
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full z-0 transition-transform duration-300 ease-out will-change-transform"
      >
        <defs>
          <filter
            id={filterId}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <CircuitPaths variant={variant} filterId={filterId} />
      </svg>
    </>
  );
}
