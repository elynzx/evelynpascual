import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { TechIconTile } from "@/components/ui/TechIconTile";
import type { Locale, ProjectItem } from "@/data/dictionary";
import { PROJECT_CASE_STUDIES } from "@/data/projectCaseStudies";

interface ProjectCompanionPanelProps {
  project: ProjectItem;
  currentIndex: number;
  total: number;
  locale: Locale;
  caseStudyLabel: string;
  onOpenCaseStudy: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function ProjectCompanionPanel({
  project,
  currentIndex,
  total,
  locale,
  caseStudyLabel,
  onOpenCaseStudy,
  onPrev,
  onNext,
}: ProjectCompanionPanelProps) {
  const study = PROJECT_CASE_STUDIES[locale]?.[project.id];
  const coreTriad = study?.coreTriad ?? project.techStack.slice(0, 3);
  const categoryLabel = study?.categoryLabel ?? project.role.toUpperCase();
  const cardSummary = study?.cardSummary ?? project.summary;

  const demoHref = project.liveUrl || "#projects";
  const repoHref = project.repositoryUrl || "#projects";
  const cleanCaseStudyLabel = caseStudyLabel.replace(/\s*→\s*$/, "").trim();

  return (
    <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-end lg:pl-2">
      <div>
        <div className="flex items-center gap-2.5 mb-2">
          <span
            aria-hidden="true"
            style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
            className="h-3.5 w-[2px] bg-[var(--neon-lime)] shrink-0"
          />
          <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--ink-muted)] truncate">
            {categoryLabel}
          </p>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--ink-black)] leading-tight mb-2.5">
          {project.title}
        </h2>

        <p className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed min-h-[7.5rem]">
          {cardSummary}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-[#E4E4E7]">
        <div className="grid grid-cols-3 gap-3">
          {coreTriad.map((tech) => (
            <TechIconTile key={tech} name={tech} compact />
          ))}
        </div>
      </div>

      <div className="mt-7">
        <button
          type="button"
          onClick={onOpenCaseStudy}
          className="group relative w-full flex items-center justify-between py-3.5 px-0 hover:bg-[#F8F9FA] text-left cursor-pointer transition-colors border-b-2 border-[var(--ink-black)] overflow-hidden"
        >
          <span
            aria-hidden="true"
            style={{ boxShadow: "0 0 10px var(--neon-lime)" }}
            className="absolute left-0 top-2 bottom-2 w-[3px] bg-[var(--neon-lime)] origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
          />
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[var(--ink-black)] group-hover:text-[var(--neon-lime)] transition-all duration-300 ease-out group-hover:translate-x-2.5">
            {cleanCaseStudyLabel}
          </span>
          <ArrowRight
            className="h-4 w-4 text-[var(--ink-black)] group-hover:text-[var(--neon-lime)] group-hover:translate-x-1 transition-all shrink-0 ml-3"
            strokeWidth={2}
          />
        </button>

        <div className="grid grid-cols-2 border-b border-[#E4E4E7] divide-x divide-[#E4E4E7]">
          <a
            href={demoHref}
            target={project.liveUrl ? "_blank" : undefined}
            rel={project.liveUrl ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-center gap-1.5 py-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0B0C0E] hover:bg-[#F8F9FA] hover:text-[var(--neon-lime)] transition-colors"
          >
            <span>{locale === "en" ? "Live Demo" : "Demo en Vivo"}</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 text-[#71717A] group-hover:text-[var(--neon-lime)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              strokeWidth={2}
            />
          </a>

          <a
            href={repoHref}
            target={project.repositoryUrl ? "_blank" : undefined}
            rel={project.repositoryUrl ? "noopener noreferrer" : undefined}
            className="group flex items-center justify-center gap-1.5 py-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#0B0C0E] hover:bg-[#F8F9FA] hover:text-[var(--neon-lime)] transition-colors"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span>GitHub</span>
            <ArrowUpRight
              className="h-3.5 w-3.5 text-[#71717A] group-hover:text-[var(--neon-lime)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              strokeWidth={2}
            />
          </a>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-[#71717A]">
          <span className="text-[#0B0C0E]">0{currentIndex + 1}</span> / 0{total}
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onPrev}
            aria-label={
              locale === "en" ? "Previous project" : "Proyecto anterior"
            }
            className="group flex h-9 w-9 items-center justify-center bg-white border border-[#E4E4E7] text-[#0B0C0E] hover:border-[#0B0C0E] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 group-hover:text-[var(--neon-lime)] group-hover:-translate-x-0.5 transition-all"
              strokeWidth={2}
            />
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label={locale === "en" ? "Next project" : "Siguiente proyecto"}
            className="group flex h-9 w-9 items-center justify-center bg-white border border-[#0B0C0E] text-[#0B0C0E] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
          >
            <ArrowRight
              className="h-3.5 w-3.5 group-hover:text-[var(--neon-lime)] group-hover:translate-x-0.5 transition-all"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
