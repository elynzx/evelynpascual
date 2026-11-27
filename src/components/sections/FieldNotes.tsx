"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Calendar, Clock, X } from "lucide-react";
import type { Locale } from "@/data/dictionary";
import { BLOG_POSTS } from "@/data/blogPosts";
import { CircuitBackdrop } from "@/components/ui/CircuitBackdrop";
import { BlogLaptopMockup } from "@/components/ui/BlogLaptopMockup";

interface FieldNotesProps {
  fieldNotes?: unknown;
  locale: Locale;
}

export function FieldNotes({ locale }: FieldNotesProps) {
  const posts = BLOG_POSTS[locale];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isReaderOpen, setIsReaderOpen] = useState(false);

  const post = posts[selectedIndex] ?? posts[0];

  useEffect(() => {
    if (!isReaderOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsReaderOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isReaderOpen]);

  if (!post) return null;

  return (
    <section
      id="field-notes"
      className="relative w-full bg-[#FFFFFF] min-h-screen flex flex-col justify-between pt-10 pb-12 lg:pt-12 lg:pb-14 scroll-mt-0 overflow-hidden"
    >
      <CircuitBackdrop variant="stack" />

      <div className="relative pr-17 pt-8 sm:pt-0 ml-6 sm:ml-auto z-10 mx-auto w-full max-w-[1440px] 2xl:max-w-[1540px] flex-1 flex flex-col justify-between px-11 sm:px-16 md:px-20 lg:pl-24 lg:pr-24 xl:pl-52 xl:pr-28 2xl:pl-48 2xl:pr-24">
        <div className="sm:mb-8 flex flex-col xl:flex-row xl:items-end justify-between gap-4 border-b-2 sm:border-b border-[#E4E4E7]">
          <div className="sm:pb-3.5 flex items-center gap-2.5 shrink-0">
            <span
              aria-hidden="true"
              style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
              className="h-3.5 w-[2px] bg-[var(--neon-lime)] shrink-0"
            />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0B0C0E]">
              <span className="text-[var(--neon-lime)] mr-1.5">04 //</span>
              {locale === "en" ? "DEV BLOG & STORIES" : "BLOG & EXPERIENCIAS"}
            </span>
          </div>

          {posts.length > 1 ? (
            <nav
              aria-label={locale === "en" ? "Blog posts" : "Entradas del blog"}
              className="flex flex-nowrap xl:flex-wrap items-center gap-x-6 gap-y-2 overflow-x-auto no-scrollbar"
            >
              {posts.map((item, idx) => {
                const isActive = idx === selectedIndex;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    className={`group relative pb-3.5 flex items-center gap-1.5 whitespace-nowrap transition-colors cursor-pointer ${
                      isActive
                        ? "text-[#0B0C0E]"
                        : "text-[#52525B] hover:text-[#0B0C0E]"
                    }`}
                  >
                    <span className="font-mono text-[10px] font-bold tracking-widest text-[var(--neon-lime)]">
                      0{idx + 1} //
                    </span>
                    <span
                      className={`text-[11px] uppercase tracking-[0.13em] ${
                        isActive ? "font-extrabold" : "font-bold"
                      }`}
                    >
                      {item.postNumber}
                    </span>
                    <span
                      aria-hidden="true"
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
          ) : (
            <span className="sm:pb-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#52525B]">
              {post.postNumber} • {post.readTime}
            </span>
          )}
        </div>

        <div className="my-auto pt-12 sm:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 xl:gap-14 items-start">
          <div className="order-1 lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="font-mono text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--neon-lime)] mb-2.5">
              {post.category}
            </p>

            <h2 className="font-display text-xl sm:text-3xl lg:text-[32px] xl:text-[34px] font-extrabold tracking-tight text-[#0B0C0E] leading-[1.15] mb-3.5 sm:mb-4">
              {post.title}
            </h2>

            <p className="text-xs sm:text-[15px] font-medium text-[#52525B] leading-relaxed lg:mb-0">
              {post.hook}
            </p>
          </div>

          <div className="order-2 lg:order-2 lg:col-span-7 lg:row-span-2 lg:pl-4 xl:pl-8 flex flex-col gap-5">
            <BlogLaptopMockup
              imageSrc={post.coverImage}
              imageAlt={post.coverAlt}
              badge={post.postNumber}
            />

            <div className="pt-2 px-2 space-y-3.5">
              <blockquote className="text-left border-l-2 border-[var(--neon-lime)] pl-4 py-0.5 text-sm sm:text-[15px] font-bold text-[#0B0C0E] leading-relaxed">
                “{post.highlightQuote}”
              </blockquote>

              <div className="pl-0 lg:pl-4 flex flex-wrap items-center justify-center lg:justify-end gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="hidden sm:flex font-mono text-[10px] font-bold tracking-wider px-2 py-0.5 border border-[#E4E4E7] bg-[#FFFFFF] text-[#52525B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-3 lg:order-3 lg:col-span-5 flex flex-col items-center lg:items-start w-full">
            <div className="w-full flex items-center sm:justify-start gap-7 sm:gap-5 pt-3 sm:pt-5 pb-5 sm:pb-6 border-t-2 sm:border-t border-[#E4E4E7] text-left">
              <img
                src="/images/profile/EvelynPascual_professionalphoto.jpg"
                alt="Evelyn Pascual"
                className="h-19 w-19 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-full object-cover object-top border border-[#E4E4E7] shadow-xs shrink-0"
              />
              <div className="min-w-0">
                <p className="font-mono text-xs font-extrabold uppercase tracking-[0.14em] text-[#0B0C0E]">
                  Evelyn Pascual
                </p>
                <p className="text-xs text-[#52525B] mt-0.5">
                  {locale === "en"
                    ? "Full-Stack Software Engineer"
                    : "Ingeniera de Software Full-Stack"}
                </p>
                <div className="mt-2.5 sm:mt-3.5 flex flex-wrap items-center gap-x-3.5 gap-y-1 font-mono text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#52525B]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-[var(--neon-lime)]" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[var(--neon-lime)]" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsReaderOpen(true)}
              className="group relative w-full sm:w-auto sm:min-w-[280px] flex items-center justify-between gap-4 sm:gap-6 py-3 sm:py-3.5 px-2.5 sm:px-3 border-b-2 border-[#0B0C0E] hover:bg-[#F8F9FA] transition-colors cursor-pointer"
            >
              <span
                aria-hidden="true"
                style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
                className="absolute left-0 top-2 bottom-2 w-[2.5px] bg-[var(--neon-lime)] opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <span className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold tracking-widest text-[var(--neon-lime)]">
                  01 //
                </span>
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#0B0C0E] group-hover:text-[var(--neon-lime)] transition-colors">
                  {locale === "en"
                    ? "READ FULL STORY"
                    : "LEER HISTORIA COMPLETA"}
                </span>
              </span>
              <ArrowRight className="h-4 w-4 text-[#0B0C0E] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {isReaderOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={post.title}
          className="fixed inset-0 z-50 flex justify-end bg-[#0B0C0E]/45 backdrop-blur-xs"
          onClick={() => setIsReaderOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl h-full bg-[#FFFFFF] border-l border-[#E4E4E7] shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="px-6 sm:px-10 py-4 border-b border-[#E4E4E7] flex items-center justify-between gap-4 bg-[#FFFFFF] shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-[2px] bg-[var(--neon-lime)]" />
                <span className="font-mono text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#0B0C0E]">
                  {post.postNumber} • {post.category}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setIsReaderOpen(false)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[#E4E4E7] hover:border-[#0B0C0E] font-mono text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0B0C0E] transition-colors cursor-pointer"
              >
                <span>{locale === "en" ? "CLOSE" : "CERRAR"}</span>
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            <article className="flex-1 overflow-y-auto px-6 sm:px-10 py-8 space-y-6">
              <div className="flex items-center gap-4 pb-4 border-b border-[#E4E4E7]">
                <img
                  src="/images/profile/EvelynPascual_professionalphoto.jpg"
                  alt="Evelyn Pascual"
                  className="h-14 w-14 rounded-full object-cover object-top border border-[#E4E4E7]"
                />
                <div>
                  <p className="font-mono text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#0B0C0E]">
                    Evelyn Pascual
                  </p>
                  <div className="flex items-center gap-3 font-mono text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#71717A] mt-1">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3 text-[var(--neon-lime)]" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3 text-[var(--neon-lime)]" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0B0C0E] leading-tight">
                {post.title}
              </h2>

              <div className="space-y-4">
                {post.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-sm sm:text-[15.5px] text-[#3F3F46] leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="pt-3 max-w-md mx-auto">
                <BlogLaptopMockup
                  imageSrc={post.coverImage}
                  imageAlt={post.coverAlt}
                  compact
                />
              </div>

              {post.teamCredits ? (
                <div className="p-4 bg-[#F8F9FA] border-l-2 border-[var(--neon-lime)] text-xs sm:text-[13px] font-semibold text-[#0B0C0E]">
                  {post.teamCredits}
                </div>
              ) : null}

              <div className="flex flex-wrap gap-2 pt-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] font-bold px-2.5 py-1 border border-[#E4E4E7] text-[#52525B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      ) : null}
    </section>
  );
}
