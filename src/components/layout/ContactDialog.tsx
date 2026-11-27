"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight, X } from "lucide-react";
import {
  CONTACT_DIALOG_COPY,
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
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const t = CONTACT_DIALOG_COPY[locale];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.email.trim() || !form.message.trim() || isSending) return;

    setIsSending(true);
    setError(false);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name.trim() || "Anonymous",
          reply_to: form.email.trim(),
          message: form.message.trim(),
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError(true);
    } finally {
      setIsSending(false);
    }
  };

  const resetForm = () => {
    setSent(false);
    setError(false);
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
                disabled={isSending}
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
                disabled={isSending}
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
                disabled={isSending}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder={t.messagePh}
                className={`${inputClass} resize-none`}
              />
            </div>

            {error && (
              <p className="text-[11px] font-medium text-red-600">
                {locale === "es"
                  ? "Error al enviar el mensaje. Inténtalo de nuevo."
                  : "Failed to send message. Please try again."}
              </p>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="group relative w-full flex items-center justify-between border-b-2 border-[#0B0C0E] bg-white px-2 py-3 text-left hover:bg-[#F8F9FA] transition-colors cursor-pointer overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span
                aria-hidden="true"
                style={{ boxShadow: "0 0 10px var(--neon-lime)" }}
                className="absolute left-0 top-1.5 bottom-1.5 w-[3px] bg-[var(--neon-lime)] origin-bottom scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100"
              />
              <div className="transition-transform duration-300 ease-out group-hover:translate-x-2">
                <span className="block text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0B0C0E]">
                  {isSending
                    ? locale === "es"
                      ? "ENVIANDO..."
                      : "SENDING..."
                    : t.submit}
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
