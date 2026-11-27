interface PortraitFrameProps {
  imageSrc: string;
  imageAlt: string;
}

export function PortraitFrame({ imageSrc, imageAlt }: PortraitFrameProps) {
  return (
    <div className="relative w-[245px] sm:w-[265px] mb-5">
      <style>{`
        @keyframes portraitBusPulse {
          0% {
            stroke-dashoffset: 720;
            opacity: 0;
          }
          15% {
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
        .portrait-neon-beam {
          stroke-dasharray: 120 600;
          animation: portraitBusPulse 3.8s linear infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 420 295"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute -left-3 -top-2 w-[calc(100%+150px)] h-[calc(100%+22px)] z-20 hidden lg:block"
      >
        <path
          d="M 2 10 V 256 L 24 278 H 412"
          stroke="var(--neon-lime)"
          strokeWidth="1.5"
          opacity="0.45"
        />
        <path
          d="M 2 10 V 256 L 24 278 H 412"
          stroke="var(--neon-lime)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="portrait-neon-beam"
          style={{ filter: "drop-shadow(0 0 8px var(--neon-lime))" }}
        />
        <circle
          cx="2"
          cy="10"
          r="3"
          fill="#FFFFFF"
          stroke="var(--neon-lime)"
          strokeWidth="1.5"
        />
        <circle
          cx="275"
          cy="278"
          r="3"
          fill="#FFFFFF"
          stroke="var(--neon-lime)"
          strokeWidth="1.5"
        />
        <circle
          cx="412"
          cy="278"
          r="3.5"
          fill="var(--neon-lime)"
          style={{ filter: "drop-shadow(0 0 6px var(--neon-lime))" }}
        />
      </svg>

      <svg
        viewBox="0 0 280 295"
        fill="none"
        aria-hidden="true"
        className="pointer-events-none absolute -left-3 -top-2 w-[calc(100%+12px)] h-[calc(100%+22px)] z-20 lg:hidden"
      >
        <path
          d="M 2 10 V 256 L 24 278 H 140"
          stroke="var(--neon-lime)"
          strokeWidth="1.5"
          opacity="0.45"
        />
        <path
          d="M 2 10 V 256 L 24 278 H 140"
          stroke="var(--neon-lime)"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="portrait-neon-beam"
          style={{ filter: "drop-shadow(0 0 8px var(--neon-lime))" }}
        />
        <circle
          cx="2"
          cy="10"
          r="3"
          fill="#FFFFFF"
          stroke="var(--neon-lime)"
          strokeWidth="1.5"
        />
        <circle
          cx="140"
          cy="278"
          r="3"
          fill="#FFFFFF"
          stroke="var(--neon-lime)"
          strokeWidth="1.5"
        />
      </svg>

      <div
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 22px 100%, 0 calc(100% - 22px))",
        }}
        className="relative w-full aspect-[4/4] bg-[#F8F9FA] border-t border-r border-[#E4E4E7] overflow-hidden"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="block w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}
