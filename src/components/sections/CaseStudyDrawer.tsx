import { ArrowUpRight, X } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import type { Locale, ProjectItem } from "@/data/dictionary";
import { PROJECT_CASE_STUDIES } from "@/data/projectCaseStudies";

interface CaseStudyDrawerProps {
  project: ProjectItem;
  locale: Locale;
  onClose: () => void;
}

export function CaseStudyDrawer({
  project,
  locale,
  onClose,
}: CaseStudyDrawerProps) {
  const study = PROJECT_CASE_STUDIES[locale]?.[project.id];
  const roleLabel = study?.roleTitle ?? project.role;
  const productOverview = study?.productOverview ?? project.problemStatement;
  const features =
    study?.featuresAndUseCases ??
    project.architectureNotes.map((note, idx) => ({
      title: `${locale === "en" ? "Feature" : "Funcionalidad"} 0${idx + 1}`,
      detail: note,
    }));
  const techStackParagraph =
    study?.techStackParagraph ?? project.techStack.join(", ");

  const demoHref = project.liveUrl || "#projects";
  const repoHref = project.repositoryUrl || "#projects";

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/35 backdrop-blur-xs p-0 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-project-title"
    >
      <div
        className="relative h-full w-full max-w-[530px] bg-[#FFFFFF] border border-[#E4E4E7] border-t-2 border-t-[#0B0C0E] overflow-y-auto px-7 py-6 sm:px-9 sm:py-7 flex flex-col justify-between shadow-2xl animate-slide-bloom"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#E4E4E7]">
            <div className="flex items-center gap-2.5">
              <span
                style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
                className="h-3.5 w-[2.5px] bg-[var(--neon-lime)] shrink-0"
              />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0B0C0E]">
                {roleLabel}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close drawer"
              className="flex h-8 w-8 items-center justify-center border border-[#E4E4E7] text-[#0B0C0E] hover:border-[#0B0C0E] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>

          <section className="mb-6 pb-6 border-b border-[#E4E4E7]">
            <h3
              id="drawer-project-title"
              className="font-display text-3xl font-extrabold tracking-tight text-[#0B0C0E] leading-tight mb-3"
            >
              {project.title}
            </h3>
            <p className="text-sm text-[#3F3F46] leading-relaxed">
              {productOverview}
            </p>
          </section>

          <section className="mb-6 pb-6 border-b border-[#E4E4E7]">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0B0C0E] mb-3.5">
              <span className="text-[var(--neon-lime)] mr-1.5">01 //</span>
              {locale === "en" ? "Features" : "Funcionalidades"}
            </h4>

            <div className="space-y-3.5">
              {features.map((item, idx) => (
                <div
                  key={idx}
                  className="pl-3.5 border-l-2 border-[#E4E4E7] hover:border-l-[var(--neon-lime)] transition-colors"
                >
                  <h5 className="text-sm font-extrabold text-[#0B0C0E] mb-0.5">
                    {item.title}
                  </h5>
                  <p className="text-sm text-[#52525B] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-5">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#0B0C0E] mb-2">
              <span className="text-[var(--neon-lime)] mr-1.5">02 //</span>
              {locale === "en"
                ? "Tech Stack & Architecture"
                : "Stack y Arquitectura"}
            </h4>
            <p className="text-sm text-[#3F3F46] leading-relaxed">
              {techStackParagraph}
            </p>
          </section>
        </div>

        <div className="pt-3">
          <div className="grid grid-cols-2 border-t-2 border-t-[#0B0C0E] border-b border-b-[#E4E4E7] divide-x divide-[#E4E4E7]">
            <a
              href={demoHref}
              target={project.liveUrl ? "_blank" : undefined}
              rel={project.liveUrl ? "noopener noreferrer" : undefined}
              className="group flex items-center justify-center gap-1.5 py-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0B0C0E] hover:bg-[#F8F9FA] hover:text-[var(--neon-lime)] transition-colors"
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
              className="group flex items-center justify-center gap-1.5 py-3 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0B0C0E] hover:bg-[#F8F9FA] hover:text-[var(--neon-lime)] transition-colors"
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
      </div>
    </div>
  );
}
