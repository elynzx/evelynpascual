export type CircuitVariant = "hero" | "projects" | "trajectory" | "stack";

interface CircuitPathsProps {
  variant: CircuitVariant;
  filterId: string;
}

export function CircuitPaths({ variant, filterId }: CircuitPathsProps) {
  if (variant === "hero") {
    return (
      <>
        <g stroke="#E4E4E7" strokeWidth="1">
          <path d="M 820 0 V 110 L 890 180 H 1230 L 1300 110 H 1440" />
          <path d="M 1440 460 H 1290 L 1220 530 V 790 L 1150 860 H 760" />
          <path d="M 0 190 H 210 L 270 130 H 540 L 600 70 V 0" />
        </g>

        <g fill="#FFFFFF" stroke="var(--neon-lime)" strokeWidth="1.5">
          <circle cx="890" cy="180" r="3.5" />
          <circle cx="1230" cy="180" r="3.5" />
          <circle cx="1220" cy="530" r="3.5" />
          <circle cx="1150" cy="860" r="3.5" />
          <circle cx="270" cy="130" r="3.5" />
        </g>

        <g
          stroke="var(--neon-lime)"
          strokeWidth="2"
          strokeLinecap="round"
          filter={`url(#${filterId})`}
        >
          <path
            d="M 820 0 V 110 L 890 180 H 1230 L 1300 110 H 1440"
            className="circuit-beam-1"
          />
          <path
            d="M 1440 460 H 1290 L 1220 530 V 790 L 1150 860 H 760"
            className="circuit-beam-2"
          />
          <path
            d="M 0 190 H 210 L 270 130 H 540 L 600 70 V 0"
            className="circuit-beam-3"
          />
        </g>
      </>
    );
  }

  if (variant === "trajectory") {
    return (
      <>
        <defs>
          <pattern
            id="archGridTrajectory"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#E4E4E7"
              strokeWidth="0.6"
              opacity="0.45"
            />
          </pattern>
        </defs>

        <rect
          x="540"
          y="90"
          width="860"
          height="740"
          fill="url(#archGridTrajectory)"
        />

        <g stroke="#E4E4E7" strokeWidth="1" opacity="0.95">
          <path d="M 1080 0 V 45 L 1135 100 H 1440" />
          <path d="M 1440 540 H 1340 L 1285 595 V 820 L 1230 875 H 880" />
          <path d="M 0 690 H 140 L 195 745 V 900" />
        </g>

        <g fill="#FFFFFF" stroke="var(--neon-lime)" strokeWidth="1.5">
          <circle cx="1135" cy="100" r="3.2" />
          <circle cx="1285" cy="595" r="3.2" />
          <circle cx="195" cy="745" r="3.2" />
        </g>

        <g
          stroke="var(--neon-lime)"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.85"
          filter={`url(#${filterId})`}
        >
          <path
            d="M 1080 0 V 45 L 1135 100 H 1440"
            className="circuit-beam-1"
          />
          <path
            d="M 1440 540 H 1340 L 1285 595 V 820 L 1230 875 H 880"
            className="circuit-beam-2"
          />
          <path
            d="M 0 690 H 140 L 195 745 V 900"
            className="circuit-beam-3"
          />
        </g>
      </>
    );
  }

  if (variant === "stack") {
    return (
      <>
        <g stroke="#E4E4E7" strokeWidth="1" opacity="0.9">
          <path d="M 0 115 H 125 L 175 165 V 295" />
          <path d="M 1440 735 H 1285 L 1235 785 V 900" />
        </g>

        <g fill="#FFFFFF" stroke="var(--neon-lime)" strokeWidth="1.5">
          <circle cx="175" cy="165" r="3.2" />
          <circle cx="1235" cy="785" r="3.2" />
        </g>

        <g
          stroke="var(--neon-lime)"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.8"
          filter={`url(#${filterId})`}
        >
          <path
            d="M 0 115 H 125 L 175 165 V 295"
            className="circuit-beam-subtle"
          />
          <path
            d="M 1440 735 H 1285 L 1235 785 V 900"
            className="circuit-beam-subtle"
            style={{ animationDelay: "3.1s" }}
          />
        </g>
      </>
    );
  }

  return (
    <>
      <g stroke="#E4E4E7" strokeWidth="1" opacity="0.85">
        <path d="M 0 120 H 110 L 155 165 V 320" />
        <path d="M 1440 760 H 1280 L 1230 810 V 900" />
      </g>

      <g fill="#FFFFFF" stroke="var(--neon-lime)" strokeWidth="1.5">
        <circle cx="155" cy="165" r="3" />
        <circle cx="1230" cy="810" r="3" />
      </g>

      <g
        stroke="var(--neon-lime)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.75"
        filter={`url(#${filterId})`}
      >
        <path
          d="M 0 120 H 110 L 155 165 V 320"
          className="circuit-beam-subtle"
        />
        <path
          d="M 1440 760 H 1280 L 1230 810 V 900"
          className="circuit-beam-subtle"
          style={{ animationDelay: "3.2s" }}
        />
      </g>
    </>
  );
}
