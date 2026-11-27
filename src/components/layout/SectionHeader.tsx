interface SectionHeaderProps {
  index: string;
  title: string;
  rightText?: string;
  marginClassName?: string;
}

export function SectionHeader({
  index,
  title,
  rightText,
  marginClassName = "mb-8",
}: SectionHeaderProps) {
  return (
    <div
      className={`${marginClassName} flex flex-wrap items-end justify-between gap-4 pb-3.5 border-b border-[#E4E4E7]`}
    >
      <div className="flex items-center gap-2.5">
        <span
          aria-hidden="true"
          style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
          className="h-3.5 w-[2px] bg-[var(--neon-lime)] shrink-0"
        />
        <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0B0C0E]">
          <span className="text-[var(--neon-lime)] mr-1.5">{index} //</span>
          {title}
        </span>
      </div>

      {rightText ? (
        <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
          {rightText}
        </span>
      ) : null}
    </div>
  );
}
