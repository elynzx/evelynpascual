import type { Locale, ProjectItem } from "@/data/dictionary";

interface ProjectTabsHeaderProps {
  items: ProjectItem[];
  currentIndex: number;
  onSelect: (idx: number) => void;
  locale: Locale;
}

export function ProjectTabsHeader({
  items,
  currentIndex,
  onSelect,
  locale,
}: ProjectTabsHeaderProps) {
  return (
    <div className="mb-6 lg:mb-8">
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-4 border-b border-[#E4E4E7]">
        <div className="pb-3.5 flex items-center gap-2.5 shrink-0">
          <span
            aria-hidden="true"
            style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
            className="h-3.5 w-[2px] bg-[var(--neon-lime)] shrink-0"
          />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0B0C0E]">
            <span className="text-[var(--neon-lime)] mr-1.5">01 //</span>
            {locale === "en" ? "SELECTED WORKS" : "PROYECTOS SELECTOS"}
          </span>
        </div>

        <nav
          aria-label={
            locale === "en" ? "Project selector" : "Selector de proyectos"
          }
          className="flex flex-wrap items-center gap-x-5 sm:gap-x-7 gap-y-2"
        >
          {items.map((item, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelect(idx)}
                className={`group relative pb-3.5 flex items-center gap-1.5 whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "text-[#0B0C0E]"
                    : "text-[#52525B] hover:text-[#0B0C0E]"
                }`}
              >
                <span
                  className={`font-mono text-[10px] font-bold tracking-widest transition-colors ${
                    isActive
                      ? "text-[var(--neon-lime)]"
                      : "text-[#71717A] group-hover:text-[var(--neon-lime)]"
                  }`}
                >
                  {item.index} //
                </span>
                <span
                  className={`text-[11px] uppercase tracking-[0.13em] transition-all ${
                    isActive
                      ? "font-extrabold"
                      : "font-bold group-hover:translate-x-0.5"
                  }`}
                >
                  {item.title}
                </span>

                <span
                  aria-hidden="true"
                  style={
                    isActive
                      ? { boxShadow: "0 0 8px var(--neon-lime)" }
                      : undefined
                  }
                  className={`absolute inset-x-0 bottom-0 h-[2px] bg-[var(--neon-lime)] transition-transform duration-300 origin-left ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
