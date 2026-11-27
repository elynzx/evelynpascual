"use client";

import { ArrowLeft, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState, type UIEvent } from "react";
import { createPortal } from "react-dom";
import type { Locale, ProjectItem } from "@/data/dictionary";
import { MobileDeviceFrame } from "@/components/sections/MobileDeviceFrame";

interface DeviceStageProps {
  project: ProjectItem;
  locale: Locale;
  mobileImage?: string;
  currentIndex?: number;
  total?: number;
  slideDirection?: "next" | "prev";
  onPrev?: () => void;
  onNext?: () => void;
}

export function DeviceStage({
  project,
  locale,
  mobileImage,
  currentIndex = 0,
  total = 1,
  slideDirection = "next",
  onPrev,
  onNext,
}: DeviceStageProps) {
  const slideAnimClass =
    slideDirection === "prev" ? "animate-slide-prev" : "animate-slide-next";
  const stageRef = useRef<HTMLDivElement | null>(null);
  const laptopViewportRef = useRef<HTMLDivElement | null>(null);
  const mobileViewportRef = useRef<HTMLDivElement | null>(null);

  const slides =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.imagePath];

  const [slideIndex, setSlideIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [laptopImgError, setLaptopImgError] = useState(false);
  const [mobileImgError, setMobileImgError] = useState(false);
  const [hasMobileScrolled, setHasMobileScrolled] = useState(false);

  const [isInView, setIsInView] = useState(false);
  const [isLaptopInteracting, setIsLaptopInteracting] = useState(false);

  const userPauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const laptopScrollPosRef = useRef<number>(0);
  const laptopDirectionRef = useRef<1 | -1>(1);

  const currentSlide = slides[slideIndex] ?? project.imagePath;
  const hasMultipleSlides = slides.length > 1;
  const resolvedMobileImage =
    mobileImage ?? project.mobileImage ?? project.imagePath;

  useEffect(() => {
    const urls = [...slides, resolvedMobileImage].filter(Boolean);
    urls.forEach((src) => {
      const img = new window.Image();
      img.decoding = "async";
      img.src = src;
    });
  }, [slides, resolvedMobileImage]);

  useEffect(() => {
    setSlideIndex(0);
    setIsLightboxOpen(false);
    setLaptopImgError(false);
    setMobileImgError(false);
    setHasMobileScrolled(false);
    laptopScrollPosRef.current = 0;
    laptopDirectionRef.current = 1;
    if (laptopViewportRef.current) laptopViewportRef.current.scrollTop = 0;
    if (mobileViewportRef.current) mobileViewportRef.current.scrollTop = 0;
  }, [project.id]);

  useEffect(() => {
    setLaptopImgError(false);
    laptopScrollPosRef.current = 0;
    if (laptopViewportRef.current) laptopViewportRef.current.scrollTop = 0;
  }, [slideIndex]);

  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (hasMultipleSlides && e.key === "ArrowRight") {
        setSlideIndex((prev) => (prev + 1) % slides.length);
      }
      if (hasMultipleSlides && e.key === "ArrowLeft") {
        setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, hasMultipleSlides, slides.length]);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      !isInView ||
      isLaptopInteracting ||
      isLightboxOpen ||
      !hasMultipleSlides
    ) {
      return;
    }

    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 1200);

    return () => clearInterval(interval);
  }, [
    isInView,
    isLaptopInteracting,
    isLightboxOpen,
    hasMultipleSlides,
    slides.length,
  ]);

  useEffect(() => {
    if (
      !isInView ||
      isLaptopInteracting ||
      isLightboxOpen ||
      hasMultipleSlides
    ) {
      return;
    }

    if (laptopViewportRef.current) {
      laptopScrollPosRef.current = laptopViewportRef.current.scrollTop;
    }

    let animationFrameId: number;
    let lastTimestamp = performance.now();

    const step = (timestamp: number) => {
      const deltaMs = Math.min(timestamp - lastTimestamp, 50);
      lastTimestamp = timestamp;

      const laptopSpeed = 0.036 * deltaMs;
      const laptopEl = laptopViewportRef.current;

      if (laptopEl) {
        const maxScroll = laptopEl.scrollHeight - laptopEl.clientHeight;
        if (maxScroll > 2) {
          laptopScrollPosRef.current +=
            laptopSpeed * laptopDirectionRef.current;

          if (laptopScrollPosRef.current >= maxScroll) {
            laptopScrollPosRef.current = maxScroll;
            laptopDirectionRef.current = -1;
          } else if (laptopScrollPosRef.current <= 0) {
            laptopScrollPosRef.current = 0;
            laptopDirectionRef.current = 1;
          }

          laptopEl.scrollTop = laptopScrollPosRef.current;
        }
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, isLaptopInteracting, isLightboxOpen, hasMultipleSlides]);

  const handleLaptopManualScroll = () => {
    setIsLaptopInteracting(true);
    if (laptopViewportRef.current) {
      laptopScrollPosRef.current = laptopViewportRef.current.scrollTop;
    }

    if (userPauseTimeoutRef.current) {
      clearTimeout(userPauseTimeoutRef.current);
    }
    userPauseTimeoutRef.current = setTimeout(() => {
      setIsLaptopInteracting(false);
    }, 3500);
  };

  const handleMobileScroll = (e: UIEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollTop > 10 && !hasMobileScrolled) {
      setHasMobileScrolled(true);
    }
  };

  return (
    <div ref={stageRef} className="relative w-full">
      <div className="mt-2 sm:mt-0 flex items-center justify-center sm:justify-between mb-0 sm:mb-3.5 lg:mb-3.5 text-[10px] font-extrabold uppercase tracking-[0.2em]">
        <div className="hidden sm:inline-flex items-center gap-2 text-[#0B0C0E]">
          <span
            style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
            className="h-1.5 w-1.5 rounded-full bg-[var(--neon-lime)] animate-pulse"
          />
          <span>
            {locale === "en" ? "PLAYING DEMO" : "DEMO EN REPRODUCCIÓN"}
          </span>
        </div>

        <span className="hidden font-mono text-[10px] font-bold tracking-[0.18em] text-[#71717A]">
          <span className="text-[#0B0C0E]">0{currentIndex + 1}</span> / 0{total}
        </span>
      </div>

      <div className="relative w-full flex flex-col lg:block items-center">
        <div
          key={`laptop-${project.id}`}
          className={`hidden lg:block w-full lg:w-[82%] relative z-10 group ${slideAnimClass}`}
          onMouseEnter={() => setIsLaptopInteracting(true)}
          onMouseLeave={() => setIsLaptopInteracting(false)}
          onWheel={handleLaptopManualScroll}
          onTouchStart={handleLaptopManualScroll}
        >
          <div className="relative rounded-t-2xl p-[2px] bg-gradient-to-br from-[#D4D4D8] via-[#3F3F46] to-[#71717A] shadow-[0_28px_60px_-12px_rgba(11,12,14,0.2)]">
            <div className="relative rounded-t-[14px] bg-gradient-to-b from-[#1F1F23] via-[#0B0C0E] to-[#141417] p-2.5 md:p-3">
              <div
                className="flex justify-center items-center mb-2"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-[#18181B] ring-1 ring-white/15 flex items-center justify-center">
                  <span className="h-0.5 w-0.5 rounded-full bg-sky-400/70" />
                </span>
              </div>

              <div
                onClick={() => setIsLightboxOpen(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsLightboxOpen(true);
                  }
                }}
                aria-label={
                  locale === "en"
                    ? `Expand ${project.title} screenshot`
                    : `Ampliar captura de ${project.title}`
                }
                className="relative aspect-[16/10] w-full rounded-[6px] overflow-hidden bg-[#F8F9FA] ring-1 ring-white/10 cursor-zoom-in"
              >
                <div
                  ref={laptopViewportRef}
                  className="relative w-full h-full overflow-y-auto overflow-x-hidden overscroll-contain device-scroll"
                >
                  {!laptopImgError ? (
                    <img
                      src={currentSlide}
                      alt={`${project.title} desktop view ${slideIndex + 1}`}
                      loading="eager"
                      decoding="async"
                      onError={() => setLaptopImgError(true)}
                      className="w-full min-h-full h-auto object-cover object-top block select-none transition-opacity duration-300"
                    />
                  ) : null}
                </div>

                <div className="pointer-events-none absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#0B0C0E]/85 backdrop-blur-xs text-white font-mono text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 border border-white/15 flex items-center gap-1.5">
                  <Maximize2 className="h-3 w-3 text-[var(--neon-lime)]" />
                  <span>
                    {locale === "en" ? "CLICK TO EXPAND" : "CLIC PARA AMPLIAR"}
                  </span>
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.14]"
                />
              </div>
            </div>
          </div>

          <div className="relative mx-[-2%] sm:mx-[-2.5%]">
            <div className="h-[2px] w-full bg-gradient-to-r from-[#A1A1AA] via-[#FFFFFF] to-[#A1A1AA]" />
            <div className="relative h-3.5 bg-gradient-to-r from-[#B4B4BC] via-[#F4F4F5] to-[#A1A1AA] rounded-b-xl flex justify-center shadow-[0_12px_24px_rgba(11,12,14,0.16)] border-b border-[#71717A]/60">
              <div className="w-20 h-1.5 bg-gradient-to-b from-[#71717A] to-[#A1A1AA] rounded-b-md shadow-inner" />
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-2 sm:gap-5 lg:block">
          {onPrev ? (
            <button
              type="button"
              onClick={onPrev}
              aria-label={
                locale === "en" ? "Previous project" : "Proyecto anterior"
              }
              className="lg:hidden group flex h-11 w-9 shrink-0 items-center justify-center bg-transparent border-0 text-[#8E8E93] hover:text-[var(--neon-lime)] active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft
                className="h-7 w-7 animate-chevron-left group-hover:text-[var(--neon-lime)] transition-colors"
                strokeWidth={2.25}
              />
            </button>
          ) : null}

          <MobileDeviceFrame
            title={project.title}
            imageSrc={resolvedMobileImage}
            locale={locale}
            hasScrolled={hasMobileScrolled}
            imgError={mobileImgError}
            viewportRef={mobileViewportRef}
            onScroll={handleMobileScroll}
            onError={() => setMobileImgError(true)}
            animationClassName={slideAnimClass}
          />

          {onNext ? (
            <button
              type="button"
              onClick={onNext}
              aria-label={locale === "en" ? "Next project" : "Siguiente proyecto"}
              className="lg:hidden group flex h-11 w-9 shrink-0 items-center justify-center bg-transparent border-0 text-[#8E8E93] hover:text-[var(--neon-lime)] active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight
                className="h-7 w-7 animate-chevron-right group-hover:text-[var(--neon-lime)] transition-colors"
                strokeWidth={2.25}
              />
            </button>
          ) : null}
        </div>
      </div>

      {isLightboxOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={project.title}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 z-[100] bg-[#0B0C0E]/55 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative inline-flex items-center justify-center max-w-[96vw] max-h-[94vh] bg-[#FFFFFF] border border-[#E4E4E7] shadow-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(false)}
                  aria-label={locale === "en" ? "Close" : "Cerrar"}
                  className="absolute top-3 right-3 z-20 inline-flex items-center justify-center h-9 w-9 bg-[#FFFFFF]/90 hover:bg-[#0B0C0E] text-[#0B0C0E] hover:text-white border border-[#E4E4E7] shadow-sm transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>

                {hasMultipleSlides ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setSlideIndex(
                          (prev) => (prev - 1 + slides.length) % slides.length,
                        )
                      }
                      aria-label={
                        locale === "en" ? "Previous view" : "Vista anterior"
                      }
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center h-10 w-10 bg-[#FFFFFF]/90 hover:bg-[#0B0C0E] text-[#0B0C0E] hover:text-white border border-[#E4E4E7] shadow-sm transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setSlideIndex((prev) => (prev + 1) % slides.length)
                      }
                      aria-label={
                        locale === "en" ? "Next view" : "Siguiente vista"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 inline-flex items-center justify-center h-10 w-10 bg-[#FFFFFF]/90 hover:bg-[#0B0C0E] text-[#0B0C0E] hover:text-white border border-[#E4E4E7] shadow-sm transition-colors cursor-pointer"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    <div className="absolute bottom-3 left-3 z-20 px-2.5 py-1 bg-[#FFFFFF]/90 border border-[#E4E4E7] font-mono text-[10px] font-extrabold tracking-[0.16em] text-[#0B0C0E]">
                      0{slideIndex + 1} / 0{slides.length}
                    </div>
                  </>
                ) : null}

                <img
                  src={currentSlide}
                  alt={`${project.title} full resolution view ${slideIndex + 1}`}
                  className="block max-w-[96vw] max-h-[94vh] w-auto h-auto object-contain select-none"
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}