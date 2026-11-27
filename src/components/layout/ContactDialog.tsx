"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import {
  CONTACT_DIALOG_COPY,
  getContactEmail,
  type Locale,
} from "@/data/dictionary";

interface ContactDialogProps {
  locale: Locale;
  onClose: () => void;
}

const inputClass =
  "w-full border-0 border-b border-neutral-200 bg-transparent px-0 py-1.5 text-sm text-[#0B0C0E] placeholder:text-neutral-400 focus:outline-none focus:border-[#0B0C0E] transition-colors";
const labelClass =
  "block text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#0B0C0E] mb-1";

export function ContactDialog({ locale, onClose }: ContactDialogProps) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const t = CONTACT_DIALOG_COPY[locale];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email.trim() || !form.message.trim()) return;

    const body = `${form.message}\n\n${form.name ? `${form.name}\n` : ""}${form.email}`;
    window.location.href = `mailto:${getContactEmail()}?subject=${encodeURIComponent(
      t.subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const resetForm = () => {
    setSent(false);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-neutral-900/20 backdrop-blur-sm flex items-start justify-end p-4 sm:p-6 lg:pr-20 lg:pt-20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-labelledby="contact-popover-title"
        className="w-[340px] sm:w-[385px] max-w-full max-h-[calc(100vh-4rem)] overflow-y-auto bg-white shadow-[0_24px_60px_rgba(11,12,14,0.16)] border border-[#E4E4E7] border-t-2 border-t-[#0B0C0E] p-6 animate-slide-bloom"
      >
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span
              style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
              className="h-3.5 w-[2.5px] bg-[var(--neon-lime)]"
            />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#0B0C0E]">
              {t.kicker}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="flex h-7 w-7 items-center justify-center border border-neutral-200 text-neutral-500 hover:border-[#0B0C0E] hover:text-[#0B0C0E] transition-colors cursor-pointer"
          >
            <X className="h-3.5 w-3.5" strokeWidth={1.75} />
          </button>
        </div>

        <h3
          id="contact-popover-title"
          className="font-display text-2xl font-extrabold tracking-tight text-[#0B0C0E] mb-1.5"
        >
          {t.title}
        </h3>

        <p className="text-xs text-neutral-600 leading-relaxed mb-6">
          {t.subtitle}
        </p>

        {sent ? (
          <div className="border border-[#E4E4E7] border-l-2 border-l-[var(--neon-lime)] p-4 space-y-2">
            <p className="text-sm font-bold text-[#0B0C0E]">{t.sentTitle}</p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {t.sentBody}
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="text-xs font-bold text-[#0B0C0E] underline underline-offset-4 decoration-[var(--neon-lime)] decoration-2 cursor-pointer"
            >
              {t.again}
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="border border-[#E4E4E7] px-5 py-6 flex flex-col gap-5"
          >
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                {t.name}
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t.namePh}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                {t.email}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t.emailPh}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                {t.message}
              </label>
              <textarea
                id="contact-message"
                required
                rows={2}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.messagePh}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="group relative w-full flex items-center justify-between border-b-2 border-[#0B0C0E] bg-white px-2 py-3 text-left hover:bg-[#F8F9FA] transition-colors cursor-pointer overflow-hidden"
            >
              <span
                aria-hidden="true"
                style={{ boxShadow: "0 0 10px var(--neon-lime)" }}
                className="absolute left-0 top-1.5 bottom-1.5 w-[3px] bg-[var(--neon-lime)] origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
              />
              <div className="transition-transform duration-300 ease-out group-hover:translate-x-2">
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0B0C0E]">
                  {t.submit}
                </span>
                <span className="block text-[11px] text-neutral-500 mt-0.5">
                  {t.submitSub}
                </span>
              </div>
              <ArrowRight
                className="h-4 w-4 text-[#0B0C0E] transition-all duration-300 group-hover:translate-x-1 group-hover:text-neon-lime"
                strokeWidth={1.75}
              />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
