import type { Locale } from "@/data/dictionary";

export interface RailNavItem {
  id: string;
  index: string;
  label: string;
  href: string;
}

export interface HeroCtaLink {
  href: string;
  index: string;
  title: string;
}

export interface MilestoneEntry {
  index: string;
  institution: string;
  title: string;
  summary: string;
  timeframe: string;
}

export interface ContactDialogCopy {
  kicker: string;
  title: string;
  subtitle: string;
  name: string;
  email: string;
  message: string;
  submit: string;
  submitSub: string;
  sentTitle: string;
  sentBody: string;
  again: string;
  trigger: string;
  cv: string;
  namePh: string;
  emailPh: string;
  messagePh: string;
  subject: string;
}

export const HERO_KEY_TECH = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "MySQL",
] as const;

export const CV_FILE_PATH = "cv/Evelyn_Pascual_CV_EN.pdf";
export const CV_DOWNLOAD_NAME = "Evelyn_Pascual_CV.pdf";

const EMAIL_SEGMENTS = ["elynzx.dev", "gmail", "com"] as const;
export const getContactEmail = (): string =>
  `${EMAIL_SEGMENTS[0]}@${EMAIL_SEGMENTS[1]}.${EMAIL_SEGMENTS[2]}`;

export const NAV_RAIL_ITEMS: Record<Locale, NavRailItem[]> = {
  en: [
    { id: "top", index: "00", label: "Home", href: "#top" },
    { id: "projects", index: "01", label: "Projects", href: "#projects" },
    { id: "about", index: "02", label: "Trajectory", href: "#about" },
    { id: "trajectory", index: "03", label: "Tech Stack", href: "#trajectory" },
    { id: "field-notes", index: "04", label: "Blog", href: "#field-notes" },
  ],
  es: [
    { id: "top", index: "00", label: "Inicio", href: "#top" },
    { id: "projects", index: "01", label: "Proyectos", href: "#projects" },
    { id: "about", index: "02", label: "Trayectoria", href: "#about" },
    { id: "trajectory", index: "03", label: "Stack", href: "#trajectory" },
    { id: "field-notes", index: "04", label: "Blog", href: "#field-notes" },
  ],
};

export const HERO_CTA_LINKS: Record<Locale, HeroCtaLink[]> = {
  en: [
    {
      href: "#projects",
      index: "01",
      title: "Explore Selected Works",
    },
    {
      href: "#about",
      index: "02",
      title: "Education & Trajectory",
    },
  ],
  es: [
    {
      href: "#projects",
      index: "01",
      title: "Explorar Proyectos",
    },
    {
      href: "#about",
      index: "02",
      title: "Educación y Trayectoria",
    },
  ],
};

export const HERO_ROLE_KICKER: Record<Locale, string> = {
  en: "FULL-STACK DEVELOPER • LIMA, PERU",
  es: "DESARROLLADORA FULL-STACK • LIMA, PERÚ",
};

export const ABOUT_HOOK_BIO: Record<Locale, string> = {
  en: "After years designing commercial retail spaces and 3D blueprints, I pivoted into software engineering to build user-first web applications with Java, Spring Boot, and React.",
  es: "Tras años diseñando espacios comerciales y planos 3D, di el salto a la ingeniería de software para crear aplicaciones centradas en el usuario con Java, Spring Boot y React.",
};

export const ABOUT_ROLE_LABEL: Record<Locale, string> = {
  en: "Full-Stack Software Developer",
  es: "Desarrolladora Full-Stack",
};

export const ABOUT_MILESTONES: Record<Locale, MilestoneEntry[]> = {
  en: [
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
  ],
  es: [
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
  ],
};

export const STACK_LAYER_TAGS: Record<Locale, [string, string, string]> = {
  en: [
    "SERVER & PERSISTENCE",
    "CLIENT & INTERFACE",
    "INFRASTRUCTURE & WORKFLOW",
  ],
  es: [
    "SERVIDOR Y PERSISTENCIA",
    "CLIENTE E INTERFAZ",
    "INFRAESTRUCTURA Y FLUJO",
  ],
};

export const CONTACT_DIALOG_COPY: Record<Locale, ContactDialogCopy> = {
  en: {
    kicker: "DIRECT MESSAGE",
    title: "Let's start a conversation.",
    subtitle:
      "Have a Full-Stack opportunity or project in mind? Drop a quick note below and your message will be ready to send.",
    name: "01 YOUR NAME (OPTIONAL)",
    email: "02 YOUR EMAIL ADDRESS *",
    message: "03 MESSAGE *",
    submit: "SEND MESSAGE",
    submitSub: "Opens your default mail client",
    sentTitle: "Your email app is opening",
    sentBody:
      "Your note is pre-filled. Just press send there and it will reach me.",
    again: "Write another",
    trigger: "Message",
    cv: "Download CV",
    namePh: "e.g. Alex Rivera / Tech Lead",
    emailPh: "name@company.com",
    messagePh: "Tell me about the role, project, or question...",
    subject: "Hello from your portfolio",
  },
  es: {
    kicker: "MENSAJE DIRECTO",
    title: "Iniciemos una conversación.",
    subtitle:
      "¿Tienes una oportunidad Full-Stack o proyecto en mente? Déjame un mensaje breve y quedará listo para enviar.",
    name: "01 TU NOMBRE (OPCIONAL)",
    email: "02 TU CORREO ELECTRÓNICO *",
    message: "03 MENSAJE *",
    submit: "ENVIAR MENSAJE",
    submitSub: "Abre tu aplicación de correo",
    sentTitle: "Se está abriendo tu correo",
    sentBody:
      "Tu mensaje ya está listo. Solo presiona enviar allí y me llegará.",
    again: "Escribir otro",
    trigger: "Mensaje",
    cv: "Descargar CV",
    namePh: "ej. Alex Rivera / Tech Lead",
    emailPh: "nombre@empresa.com",
    messagePh: "Cuéntame sobre el rol, proyecto o consulta...",
    subject: "Hola desde tu portafolio",
  },
};
