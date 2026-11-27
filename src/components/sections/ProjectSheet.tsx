"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale, ProjectItem, ProjectsSection } from "@/data/dictionary";
import { DeviceStage } from "@/components/sections/DeviceStage";
import { ProjectTabsHeader } from "@/components/sections/ProjectTabsHeader";
import { ProjectCompanionPanel } from "@/components/sections/ProjectCompanionPanel";
import { CaseStudyDrawer } from "@/components/sections/CaseStudyDrawer";
import { CircuitBackdrop } from "@/components/ui/CircuitBackdrop";

interface ProjectSheetProps {
  projects: ProjectsSection;
  locale: Locale;
}

export function ProjectSheet({ projects, locale }: ProjectSheetProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const total = projects.items.length;
  const currentProject = projects.items[currentIndex] ?? projects.items[0];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeProject) {
        setActiveProject(null);
        return;
      }

      if (activeProject) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + total) % total);
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % total);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, total]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-[#FFFFFF] min-h-screen flex flex-col justify-between pt-10 pb-10 lg:pt-12 lg:pb-12 scroll-mt-0 overflow-hidden"
    >
      <CircuitBackdrop variant="projects" />

      <div
        className={` ml-6 md:ml-auto pr-17 pt-8 sm:pt-0 relative z-10 mx-auto w-full max-w-[1440px] 2xl:max-w-[1540px] flex-1 flex flex-col justify-between px-11 sm:px-16 md:px-20 lg:pl-24 lg:pr-24 xl:pl-52 xl:pr-28 2xl:pl-48 2xl:pr-24 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <ProjectTabsHeader
          items={projects.items}
          currentIndex={currentIndex}
          onSelect={setCurrentIndex}
          locale={locale}
        />

        <article
          key={currentProject.id}
          className="my-auto grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-11 gap-5 lg:gap-10 xl:gap-16 2xl:gap-20 items-end animate-slide-bloom"
        >
          <div className="lg:col-span-8 xl:col-span-8">
            <DeviceStage
              project={currentProject}
              locale={locale}
              mobileImage={currentProject.mobileImage}
              currentIndex={currentIndex}
              total={total}
              onPrev={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}
              onNext={() => setCurrentIndex((prev) => (prev + 1) % total)}
            />
          </div>

          <ProjectCompanionPanel
            project={currentProject}
            currentIndex={currentIndex}
            total={total}
            locale={locale}
            caseStudyLabel={projects.inspectCaseStudyLabel}
            onOpenCaseStudy={() => setActiveProject(currentProject)}
            onPrev={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}
            onNext={() => setCurrentIndex((prev) => (prev + 1) % total)}
          />
        </article>
      </div>

      {activeProject ? (
        <CaseStudyDrawer
          project={activeProject}
          locale={locale}
          onClose={() => setActiveProject(null)}
        />
      ) : null}
    </section>
  );
}
