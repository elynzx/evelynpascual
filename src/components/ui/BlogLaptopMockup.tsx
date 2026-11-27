interface BlogLaptopMockupProps {
  imageSrc: string;
  imageAlt: string;
  badge?: string;
  compact?: boolean;
}

export function BlogLaptopMockup({
  imageSrc,
  imageAlt,
  badge,
  compact = false,
}: BlogLaptopMockupProps) {
  return (
    <div className="relative w-full select-none group">
      <div className="relative mx-auto w-[94%] rounded-t-[16px] bg-[#0B0C0E] p-[7px] sm:p-[9px] pb-[6px] ring-1 ring-[#27272A] shadow-[0_24px_48px_-14px_rgba(11,12,14,0.32)]">
        <div className="relative overflow-hidden rounded-t-[9px] rounded-b-[2px] bg-[#121316] ring-1 ring-white/10">
          <div
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-3.5 w-20 sm:w-24 rounded-b-md bg-[#0B0C0E] flex items-center justify-center border-x border-b border-white/5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#1E293B] ring-1 ring-[#38BDF8]/40" />
          </div>

          <div
            className={`relative w-full overflow-hidden bg-[#18181B] ${
              compact ? "aspect-[16/9]" : "aspect-[16/10]"
            }`}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]"
            />

            {badge ? (
              <span className="absolute bottom-3 left-3 bg-[#0B0C0E]/85 backdrop-blur-xs text-white font-mono text-[10px] font-extrabold uppercase tracking-[0.16em] px-2.5 py-1 border border-white/15">
                {badge}
              </span>
            ) : null}
          </div>
        </div>

        <div className="mx-auto mt-1 h-[3px] w-[96%] rounded-full bg-[#18181B]" />
      </div>

      <div className="relative mx-auto w-full h-[11px] sm:h-[13px] rounded-b-[14px] bg-gradient-to-b from-[#F4F4F5] via-[#E4E4E7] to-[#A1A1AA] shadow-[0_14px_26px_-8px_rgba(11,12,14,0.28)] border-t border-white">
        <div className="mx-auto h-[4px] w-16 sm:w-20 rounded-b-md bg-[#A1A1AA]/80 shadow-inner" />
      </div>
    </div>
  );
}