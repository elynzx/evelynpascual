"use client";

import type { AboutSection, Locale } from "@/data/dictionary";
import { CircuitBackdrop } from "@/components/CircuitBackdrop";

interface AboutEditorialProps {
  about: AboutSection;
  locale: Locale;
}

interface MilestoneEntry {
  index: string;
  institution: string;
  title: string;
  summary: string;
  timeframe: string;
}

export function AboutEditorial({ about, locale }: AboutEditorialProps) {
  const milestones: MilestoneEntry[] =
    locale === "en"
      ? [
          {
            index: "01",
            institution: "UNIVERSIDAD TECNOLÓGICA DEL PERÚ (UTP)",
            title: "B.S. in Systems & Informatics Engineering",
            summary:
              "Top 10% academic standing (GPA 18.67/20) · Enterprise software architecture & relational databases.",
            timeframe: "AUG 2022 – PRESENT",
          },
          {
            index: "02",
            institution: "GENERATION COLOMBIA · COHORT 14",
            title: "Java Full-Stack Development",
            summary:
              "Intensive full-stack engineering with Java, Spring Boot, MySQL, Agile Scrum leadership & team coordination.",
            timeframe: "SEP – DEC 2026",
          },
          {
            index: "03",
            institution: "TECSUP",
            title: "Full-Stack Web Development with Python",
            summary:
              "312-hour intensive program (GPA 19/20) · React, JavaScript (ES6+), Django REST Framework & Flask.",
            timeframe: "JAN – AUG 2026",
          },
          {
            index: "04",
            institution: "IEEE WOMEN IN ENGINEERING (WIE) · UTP",
            title: "STEAM Committee Volunteer",
            summary:
              "Designed and facilitated hands-on tech workshops in schools to introduce young women to STEM.",
            timeframe: "MAR – AUG 2026",
          },
          {
            index: "05",
            institution: "INDEPENDENT & COMMERCIAL OPERATIONS",
            title: "Commercial Project Management & Operations",
            summary:
              "End-to-end project delivery, stakeholder requirement discovery, multidisciplinary coordination, and international business operations.",
            timeframe: "2015 – 2025",
          },
        ]
      : [
          {
            index: "01",
            institution: "UNIVERSIDAD TECNOLÓGICA DEL PERÚ (UTP)",
            title: "Ingeniería de Sistemas e Informática",
            summary:
              "Décimo Superior / Top 10% (Promedio 18.67/20) · Arquitectura de software empresarial y bases de datos.",
            timeframe: "AGO 2022 – PRESENTE",
          },
          {
            index: "02",
            institution: "GENERATION COLOMBIA · COHORTE 14",
            title: "Java Full-Stack Development",
            summary:
              "Formación intensiva en Java, Spring Boot, MySQL, liderazgo ágil y coordinación de equipos bajo Scrum.",
            timeframe: "SEP – DIC 2026",
          },
          {
            index: "03",
            institution: "TECSUP",
            title: "Desarrollo Web Full-Stack con Python",
            summary:
              "Programa intensivo de 312 horas (Promedio 19/20) · React, JavaScript (ES6+), Django REST Framework y Flask.",
            timeframe: "ENE – AGO 2026",
          },
          {
            index: "04",
            institution: "IEEE WOMEN IN ENGINEERING (WIE) · UTP",
            title: "Voluntaria Comité STEAM",
            summary:
              "Diseño y facilitación de talleres prácticos de tecnología en colegios para impulsar a jóvenes en STEM.",
            timeframe: "MAR – AGO 2026",
          },
          {
            index: "05",
            institution: "OPERACIONES INDEPENDIENTES Y GESTIÓN COMERCIAL",
            title: "Gestión de Proyectos Comerciales y Operaciones",
            summary:
              "Entrega integral de proyectos, levantamiento de requerimientos con clientes, coordinación multidisciplinaria y operaciones internacionales.",
            timeframe: "2015 – 2025",
          },
        ];

  const hookBio =
    locale === "en"
      ? "After years designing commercial retail spaces and 3D blueprints, I pivoted into software engineering to build user-first web applications with Java, Spring Boot, and React."
      : "Tras años diseñando espacios comerciales y planos 3D, di el salto a la ingeniería de software para crear aplicaciones centradas en el usuario con Java, Spring Boot y React.";

  return (
    <section
      id="about"
      className="relative w-full bg-[#FFFFFF] border-b border-[#E4E4E7] min-h-screen flex flex-col justify-between pt-10 pb-12 lg:pt-12 lg:pb-14 scroll-mt-0 overflow-hidden"
    >
      <style>{`
        @keyframes portraitBusPulse {
          0% {
            stroke-dashoffset: 720;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0;
          }
        }
        .portrait-neon-beam {
          stroke-dasharray: 120 600;
          animation: portraitBusPulse 3.8s linear infinite;
        }
      `}</style>

      <CircuitBackdrop variant="trajectory" />

      <div className="relative z-10 mx-auto w-full max-w-[1540px] flex-1 flex flex-col justify-between px-4 sm:px-10 lg:pl-44 lg:pr-20 xl:pl-48 xl:pr-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 pb-3.5 border-b border-[#E4E4E7]">
          <div className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
              className="h-3.5 w-[2px] bg-[var(--neon-lime)] shrink-0"
            />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#0B0C0E]">
              <span className="text-[var(--neon-lime)] mr-1.5">02 //</span>
              {locale === "en" ? "TRAJECTORY" : "TRAYECTORIA"}
            </span>
          </div>
          <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
            {about.academicHighlight.program}
          </span>
        </div>

        <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          <div className="lg:col-span-4 relative flex flex-col items-start">
            <div className="relative w-[245px] sm:w-[265px] mb-5">
              <svg
                viewBox="0 0 420 295"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-2 w-[calc(100%+150px)] h-[calc(100%+22px)] z-20 hidden lg:block"
              >
                <path
                  d="M 2 10 V 256 L 24 278 H 412"
                  stroke="var(--neon-lime)"
                  strokeWidth="1.5"
                  opacity="0.45"
                />
                <path
                  d="M 2 10 V 256 L 24 278 H 412"
                  stroke="var(--neon-lime)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="portrait-neon-beam"
                  style={{ filter: "drop-shadow(0 0 8px var(--neon-lime))" }}
                />
                <circle
                  cx="2"
                  cy="10"
                  r="3"
                  fill="#FFFFFF"
                  stroke="var(--neon-lime)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="275"
                  cy="278"
                  r="3"
                  fill="#FFFFFF"
                  stroke="var(--neon-lime)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="412"
                  cy="278"
                  r="3.5"
                  fill="var(--neon-lime)"
                  style={{ filter: "drop-shadow(0 0 6px var(--neon-lime))" }}
                />
              </svg>

              <svg
                viewBox="0 0 280 295"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-2 w-[calc(100%+12px)] h-[calc(100%+22px)] z-20 lg:hidden"
              >
                <path
                  d="M 2 10 V 256 L 24 278 H 140"
                  stroke="var(--neon-lime)"
                  strokeWidth="1.5"
                  opacity="0.45"
                />
                <path
                  d="M 2 10 V 256 L 24 278 H 140"
                  stroke="var(--neon-lime)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="portrait-neon-beam"
                  style={{ filter: "drop-shadow(0 0 8px var(--neon-lime))" }}
                />
                <circle
                  cx="2"
                  cy="10"
                  r="3"
                  fill="#FFFFFF"
                  stroke="var(--neon-lime)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="140"
                  cy="278"
                  r="3"
                  fill="#FFFFFF"
                  stroke="var(--neon-lime)"
                  strokeWidth="1.5"
                />
              </svg>

              <div
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 100%, 22px 100%, 0 calc(100% - 22px))",
                }}
                className="relative w-full aspect-[4/4] bg-[#F8F9FA] border-t border-r border-[#E4E4E7] overflow-hidden"
              >
                <img
                  src="/images/profile/EvelynPascualProfilePhoto.png"
                  alt="Evelyn Pascual"
                  className="block w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="max-w-[310px]">
              <div className="flex items-center gap-2 mb-1">
                <span
                  aria-hidden="true"
                  style={{ boxShadow: "0 0 8px var(--neon-lime)" }}
                  className="h-3 w-[2px] bg-[var(--neon-lime)] shrink-0"
                />
                <p className="font-mono text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#0B0C0E]">
                  {locale === "en"
                    ? "Full-Stack Software Developer"
                    : "Desarrolladora Full-Stack"}
                </p>
              </div>

              <h2 className="font-display text-2xl sm:text-[26px] font-extrabold tracking-tight text-[#0B0C0E] leading-tight mb-3">
                Evelyn Pascual
              </h2>

              <p className="text-[13.5px] text-[#52525B] leading-relaxed pt-3 border-t border-[#E4E4E7]">
                {hookBio}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 lg:pl-12 xl:pl-16">
            <div className="relative pl-6 sm:pl-8 border-l border-[#E4E4E7] space-y-6">
              {milestones.map((item) => (
                <div
                  key={item.index}
                  className="group relative flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-8 pb-5 border-b border-[#E4E4E7]/70 last:border-b-0 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[29px] sm:-left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-[#FFFFFF] border-2 border-[#D4D4D8] group-hover:border-[var(--neon-lime)] group-hover:bg-[var(--neon-lime)] transition-colors"
                  />

                  <div className="w-full max-w-[520px]">
                    <p className="font-mono text-[10.5px] font-extrabold uppercase tracking-[0.16em] text-[var(--neon-lime)] mb-1">
                      {item.index} // {item.institution}
                    </p>

                    <h3 className="font-display text-lg sm:text-[20px] font-extrabold tracking-tight text-[#0B0C0E] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-[13.5px] text-[#52525B] mt-1.5 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="sm:w-44 sm:text-right shrink-0 pt-1">
                    <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#52525B] group-hover:text-[#0B0C0E] transition-colors">
                      {item.timeframe}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
