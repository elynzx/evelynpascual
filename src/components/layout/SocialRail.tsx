"use client";

import { useEffect, useState } from "react";
import {
  FaCommentDots,
  FaFileArrowDown,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import {
  CONTACT_DIALOG_COPY,
  CV_DOWNLOAD_NAME,
  CV_FILE_PATH,
  type Locale,
  type SocialLinks,
} from "@/data/dictionary";
import { ContactDialog } from "@/components/layout/ContactDialog";

interface SocialRailProps {
  socialLinks: SocialLinks;
  locale?: Locale;
  variant?: "floating" | "mobileHeader";
}

export function SocialRail({
  socialLinks,
  locale = "en",
  variant = "floating",
}: SocialRailProps) {
  const [isOpen, setIsOpen] = useState(false);
  const t = CONTACT_DIALOG_COPY[locale];

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const externalLinks = [
    {
      href: socialLinks.github,
      label: "GitHub",
      Icon: FaGithub,
      download: false,
    },
    {
      href: socialLinks.linkedin,
      label: "LinkedIn",
      Icon: FaLinkedinIn,
      download: false,
    },
    {
      href: CV_FILE_PATH,
      label: t.cv,
      Icon: FaFileArrowDown,
      download: true,
    },
  ];

  return (
    <>
      {variant === "mobileHeader" ? (
        <div
          aria-label="Social Channels"
          className="flex items-center gap-2 select-none"
        >
          {externalLinks.map(({ href, label, Icon, download }) => (
            <a
              key={label}
              href={href}
              {...(download
                ? { download: CV_DOWNLOAD_NAME }
                : { target: "_blank", rel: "noopener noreferrer" })}
              aria-label={label}
              className="flex items-center justify-center p-1 text-[var(--ink-black)] hover:text-neon-lime transition-colors duration-200"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={t.trigger}
            aria-expanded={isOpen}
            className={`flex items-center justify-center p-1 transition-colors duration-200 cursor-pointer ${
              isOpen
                ? "text-neon-lime"
                : "text-[var(--ink-black)] hover:text-neon-lime"
            }`}
          >
            <FaCommentDots className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <aside
          aria-label="Suspended Social Channels"
          className="hidden sm:flex fixed sm:top-10 sm:right-4 lg:right-6 xl:right-6 z-40 flex-col items-center gap-4 select-none"
        >
          <div className="flex flex-col items-center">
            <span className="h-3.5 w-[2px] bg-[var(--neon-lime)]" />
            <span className="h-6 w-[1px] bg-[#E4E4E7]" />
          </div>

          {externalLinks.map(({ href, label, Icon, download }) => (
            <div key={label} className="flex flex-col items-center gap-4">
              <a
                href={href}
                {...(download
                  ? { download: CV_DOWNLOAD_NAME }
                  : { target: "_blank", rel: "noopener noreferrer" })}
                aria-label={label}
                className="group relative flex items-center justify-center p-1 text-[var(--ink-black)] hover:text-neon-lime transition-colors duration-200"
              >
                <Icon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-110" />
                <span className="pointer-events-none absolute right-8 whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--ink-black)] opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  {label}
                </span>
              </a>
            </div>
          ))}

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={t.trigger}
            aria-expanded={isOpen}
            className={`group relative flex items-center justify-center p-1 transition-colors duration-200 cursor-pointer ${
              isOpen
                ? "text-neon-lime"
                : "text-[var(--ink-black)] hover:text-neon-lime"
            }`}
          >
            <FaCommentDots className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-110" />
            {!isOpen && (
              <span className="pointer-events-none absolute right-8 whitespace-nowrap text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--ink-black)] opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                {t.trigger}
              </span>
            )}
          </button>

          <div className="flex flex-col items-center">
            <span className="h-6 w-[1px] bg-gradient-to-b from-[#E4E4E7] to-transparent" />
            <span className="mt-1 font-sans text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#A1A1AA] [writing-mode:vertical-rl]">
              LET&apos;S CONNECT
            </span>
          </div>
        </aside>
      )}

      {isOpen && (
        <ContactDialog locale={locale} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
export { SocialRail as FloatingSocials };
