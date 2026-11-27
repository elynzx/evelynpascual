export type Locale = "en" | "es";

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  emailAddress: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  index: string;
}

export interface NavSection {
  brandName: string;
  brandSubtitle: string;
  editionLabel: string;
  languageToggleLabel: string;
  items: NavItem[];
  socialLinks: SocialLinks;
}

export interface HeroSection {
  issueNumber: string;
  locationLabel: string;
  availabilityLabel: string;
  name: string;
  roleTitle: string;
  headline: string;
  leadParagraph: string;
  portraitCaption: string;
  portraitSpecs: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  socialLinks: SocialLinks;
  quickFacts: {
    label: string;
    value: string;
  }[];
}

export interface ProjectItem {
  id: string;
  index: string;
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  category: string;
  imagePath: string;
  mobileImage?: string;
  gallery?: string[];
  wireframeBadge: string;
  summary: string;
  problemStatement: string;
  architectureNotes: string[];
  techStack: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  repositoryLabel?: string;
  featuredMetric: string;
}

export interface ProjectsSection {
  sectionIndex: string;
  kicker: string;
  title: string;
  intro: string;
  inspectCaseStudyLabel: string;
  closeDrawerLabel: string;
  liveActionLabel: string;
  sourceActionLabel: string;
  architectureHeading: string;
  problemHeading: string;
  items: ProjectItem[];
}

export interface AboutPillar {
  index: string;
  title: string;
  description: string;
}

export interface AboutSection {
  sectionIndex: string;
  kicker: string;
  title: string;
  lead: string;
  paragraphs: string[];
  academicHighlight: {
    badge: string;
    institution: string;
    program: string;
    detail: string;
  };
  pillars: AboutPillar[];
}

export interface TrajectoryEntry {
  id: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  badge?: string;
  summary: string;
  highlights: string[];
}

export interface StackCategory {
  id: string;
  index: string;
  category: string;
  description: string;
  technologies: string[];
}

export interface TrajectorySection {
  sectionIndex: string;
  kicker: string;
  title: string;
  intro: string;
  educationHeading: string;
  education: TrajectoryEntry[];
  leadershipHeading: string;
  commercialLeadership: TrajectoryEntry[];
  volunteeringHeading: string;
  communityVolunteering: TrajectoryEntry[];
  stackHeading: string;
  technicalStack: StackCategory[];
}

export interface ArticleSectionBlock {
  heading: string;
  paragraphs: string[];
  codeSnippet?: {
    caption: string;
    language: string;
    code: string;
  };
  keyTakeaways?: string[];
}

export interface FieldNoteArticle {
  id: string;
  issueNumber: string;
  slug: string;
  publishedDate: string;
  readingTime: string;
  category: string;
  title: string;
  subtitle: string;
  abstract: string;
  sections: ArticleSectionBlock[];
  conclusion: string;
}

export interface FieldNotesSection {
  sectionIndex: string;
  kicker: string;
  title: string;
  intro: string;
  readArticleLabel: string;
  collapseArticleLabel?: string;
  articles: FieldNoteArticle[];
}

export interface PortfolioCopy {
  locale: Locale;
  nav: NavSection;
  hero: HeroSection;
  projects: ProjectsSection;
  about: AboutSection;
  trajectory: TrajectorySection;
  fieldNotes: FieldNotesSection;
}

const SHARED_SOCIAL_LINKS: SocialLinks = {
  github: "https://github.com/elynzx",
  linkedin: "https://www.linkedin.com/in/evelynpascual/",
  email: "mailto:elynzx.dev@gmail.com",
  emailAddress: "elynzx.dev@gmail.com",
};

export const dictionary: Record<Locale, PortfolioCopy> = {
  en: {
    locale: "en",
    nav: {
      brandName: "Evelyn Pascual",
      brandSubtitle: "Full-Stack Software Engineer",
      editionLabel: "Lima, Peru / Portfolio Edition 2026",
      languageToggleLabel: "ES",
      socialLinks: SHARED_SOCIAL_LINKS,
      items: [
        {
          id: "projects",
          index: "01",
          label: "Selected Works",
          href: "#projects",
        },
        {
          id: "about",
          index: "02",
          label: "Editorial Profile",
          href: "#about",
        },
        {
          id: "trajectory",
          index: "03",
          label: "Trajectory & Stack",
          href: "#trajectory",
        },
        {
          id: "field-notes",
          index: "04",
          label: "Field Notes",
          href: "#field-notes",
        },
      ],
    },
    hero: {
      issueNumber: "No. 01 / Architectural Monograph & Software Engineering",
      locationLabel: "Lima, Peru (UTC-5)",
      availabilityLabel: "Available for Full-Stack & Backend Roles",
      name: "Evelyn Pascual",
      roleTitle: "Full-Stack Software Engineer (Java, Spring Boot & React)",
      headline:
        "Engineering structured backend systems and calm, enduring web interfaces.",
      leadParagraph:
        "I build reliable web applications with Java, Spring Boot, and React. Combining Top 10% Systems Engineering training with hands-on leadership in commercial projects, I turn complex business requirements into clean, maintainable software.",
      portraitCaption:
        "Fig. 01 / Evelyn Pascual, Systems & Full-Stack Software Engineer",
      portraitSpecs: "Lima, PE / Java & Spring Boot / React & TypeScript",
      primaryCta: {
        label: "Explore Selected Works",
        href: "#projects",
      },
      secondaryCta: {
        label: "Read Field Notes",
        href: "#field-notes",
      },
      socialLinks: SHARED_SOCIAL_LINKS,
      quickFacts: [
        {
          label: "Core Architecture",
          value: "Java, Spring Boot, Spring Security (JWT), MySQL",
        },
        {
          label: "Frontend Craft",
          value: "React, TypeScript, Zustand, Vanilla JS (ES6+), Tailwind CSS",
        },
        {
          label: "Academic Standing",
          value: "Top 10% Systems Engineering at UTP (2 Consecutive Years)",
        },
        {
          label: "Leadership & STEM",
          value:
            "Agile Scrum Master, IEEE WIE STEM Volunteer, Stakeholder Discovery",
        },
      ],
    },
    projects: {
      sectionIndex: "01",
      kicker: "Architectural Index / Selected Works",
      title:
        "Systems built for clarity, relational integrity, and human usability.",
      intro:
        "Five full-stack and frontend systems combining domain modeling, role-based REST security, and calm editorial interfaces.",
      inspectCaseStudyLabel: "Case Study →",
      closeDrawerLabel: "Close Case Study",
      liveActionLabel: "Live Demo ↗",
      sourceActionLabel: "GitHub ↗",
      architectureHeading: "Architectural Specifications",
      problemHeading: "Context & Engineering Objective",
      items: [
        {
          id: "lumina-eventos",
          index: "01",
          slug: "lumina-eventos",
          title: "Lumina Eventos",
          subtitle: "Full-Stack Event Venue & Furniture Rental Platform",
          role: "Full-Stack Software Engineer",
          year: "2026",
          category: "Java + Spring Boot + Spring Security (JWT) + React",
          imagePath: "/images/projects/lumina.webp",
          mobileImage: "/images/projects/lumina-mobile.png",
          wireframeBadge: "JWT RBAC ('CLIENTE' / 'ADMIN') + ATOMIC DESIGN",
          summary:
            "Full-stack reservation platform for event venues and furniture with role-based JWT security, multi-criteria filtering, PDF receipts, and an Atomic Design React frontend.",
          problemStatement:
            "Booking event spaces and coordinating supplemental furniture rentals typically involves fragmented quotes, manual availability checks, and unclear pricing. Lumina Eventos digitizes the entire reservation lifecycle for both clients and administrators with strict role separation, multi-criteria filtering, and automated receipt generation.",
          architectureNotes: [
            "Implemented role-based JWT authentication with Spring Security ('CLIENTE' and 'ADMIN' roles) securing MySQL persistence for venues, furniture add-ons, and reservation records.",
            "Built advanced venue filtering by district, event type, guest capacity, and price tier, complete with downloadable PDF booking receipts and Cloudinary media management.",
            "Engineered an Admin CRUD dashboard for managing venues, furniture inventory, and client reservations alongside a modular React and TypeScript frontend structured under Atomic Design ('atomic', 'molecules', 'organism') with Zustand global state and React Hook Form.",
          ],
          techStack: [
            "Java",
            "Spring Boot",
            "Spring Security (JWT)",
            "MySQL",
            "React",
            "TypeScript",
            "Zustand",
            "React Hook Form",
            "Tailwind CSS",
            "Cloudinary",
          ],
          liveUrl:"https://lumina-eventos.vercel.app/",
          repositoryUrl: "https://github.com/elynzx/lumina-backend",
          repositoryLabel: "GitHub ↗",
          featuredMetric:
            "Role-based JWT ('CLIENTE' / 'ADMIN'), Atomic Design React frontend, Zustand state, and PDF booking receipts",
        },
        {
          id: "pawguard",
          index: "02",
          slug: "pawguard",
          title: "PawGuard",
          subtitle: "Pet Insurance & Care Management Platform",
          role: "Full-Stack Software Engineer",
          year: "2026",
          category: "React + TypeScript + PostgreSQL + Spring Boot",
          imagePath: "/images/projects/pawguard.webp",
          mobileImage: "/images/projects/pawguard-mobile.png",
          wireframeBadge: "REACT + TYPESCRIPT + SPRING BOOT + POSTGRESQL",
          summary:
            "Web application simplifying pet insurance comparison, policy management, and veterinary care tracking, backed by a Java, Spring Boot, and PostgreSQL REST API.",
          problemStatement:
            "Pet guardians face confusing policy tiers, scattered veterinary history records, and opaque coverage terms when comparing pet insurance plans. PawGuard brings clarity to insurance comparison, active policy management, and preventive veterinary tracking in a unified, type-safe interface.",
          architectureNotes: [
            "Developed a responsive, strictly typed React, TypeScript, and Tailwind CSS interface connected to relational persistence in PostgreSQL.",
            "Designed structured workflows and REST APIs for side-by-side insurance plan comparison, policy lifecycle management, and preventive veterinary care tracking.",
            "Engineered core backend domain services and business rules with Java, Spring Boot, and PostgreSQL to enforce enterprise-grade validation and relational integrity.",
          ],
          techStack: [
            "React",
            "TypeScript",
            "PostgreSQL",
            "Java",
            "Spring Boot",
            "REST APIs",
            "Tailwind CSS",
          ],
          liveUrl:"https://pawguard-pet-insurance.vercel.app/",
          repositoryUrl: "https://github.com/elynzx/pawguard-backend",
          repositoryLabel: "GitHub ↗",
          featuredMetric:
            "Type-safe React & TypeScript platform backed by Java, Spring Boot & PostgreSQL",
        },
        {
          id: "siro-plan",
          index: "03",
          slug: "siro-plan",
          title: "Siro Plan",
          subtitle:
            "Kanban Task & Subtask Workspace for Students and Professionals",
          role: "Creator & Full-Stack Developer",
          year: "2026",
          category: "Vanilla JS (ES6+) + Spring Boot + MySQL",
          imagePath: "/images/projects/siroplan.webp",
          mobileImage: "/images/projects/siroplan-mobile.webp",
          gallery: [
            "/images/projects/siroplan.webp",
            "/images/projects/siroplan-2.webp",
            "/images/projects/siroplan-3.webp",
          ],
          wireframeBadge: "ES6+ MODULES + SPRING BOOT + MYSQL",
          summary:
            "Kanban task and subtask workspace engineered with modular ES6 state management (ProjectManager and TaskManager) and backed by a Java, Spring Boot, and MySQL persistence layer.",
          problemStatement:
            "Students and early-career professionals organizing multi-step academic capstones and personal projects often need a fast, structured Kanban board with nested subtasks without the friction of complex enterprise suites. Siro Plan provides an immediate, focused workspace.",
          architectureNotes: [
            "Engineered with modular object-oriented ES6+ JavaScript classes (ProjectManager and TaskManager) handling board state, task hierarchy, and subtask completion tracking.",
            "Built a clean, responsive custom CSS3 interface deployed live on Cloudflare Pages for zero-latency browser execution.",
            "Architected the Java, Spring Boot, and MySQL persistence backend to support relational board storage and multi-device synchronization.",
          ],
          techStack: [
            "Vanilla JavaScript (ES6+)",
            "ProjectManager & TaskManager",
            "CSS3",
            "Java",
            "Spring Boot",
            "MySQL",
          ],
          liveUrl: "https://siroplan.pages.dev/",
          repositoryUrl: "https://github.com/elynzx/siroplan",
          repositoryLabel: "GitHub ↗",
          featuredMetric:
            "Modular ES6+ Kanban workspace with Java, Spring Boot & MySQL persistence",
        },
        {
          id: "raices-del-valle",
          index: "04",
          slug: "raices-del-valle",
          title: "Raíces del Valle",
          subtitle: "Collaborative Regional E-Commerce Platform (Team of 4)",
          role: "Scrum Master & Full-Stack Developer",
          year: "2026",
          category: "Java + Spring Boot + MySQL + Vanilla JS + Scrum",
          imagePath: "/images/projects/raices.webp",
          mobileImage: "/images/projects/raices-mobile.webp",
          wireframeBadge: "SCRUM MASTER (TEAM OF 4) + SPRING BOOT REST",
          summary:
            "Regional e-commerce platform built by a 4-developer team where I led Scrum ceremonies and Git workflows while building product views, custom cart events, and Spring Boot/MySQL endpoints.",
          problemStatement:
            "Regional producers need an accessible digital storefront to showcase authentic local goods and process direct customer orders, while a 4-person engineering team requires disciplined Git branching, clear sprint backlog coordination, and cohesive frontend-to-backend integration.",
          architectureNotes: [
            "Served as Scrum Master for a 4-developer engineering team: facilitated sprint planning, daily standups, reviews, retrospectives, and structured Git/GitHub branch workflows.",
            "Built dynamic product detail views and custom event-driven cart synchronization (CustomEvent) in Vanilla JavaScript and CSS3.",
            "Developed and integrated Java, Spring Boot, and MySQL REST endpoints supporting product catalog queries and order persistence.",
          ],
          techStack: [
            "Java",
            "Spring Boot",
            "MySQL",
            "Vanilla JavaScript",
            "CSS3",
            "Git / GitHub",
            "Scrum Master",
          ],
          repositoryUrl: "https://github.com/DwDarwin/raices-del-valle-backend",
          repositoryLabel: "GitHub ↗",
          featuredMetric:
            "Dual leadership as Scrum Master and Full-Stack Developer guiding a 4-person Agile team",
        },
        {
          id: "lulu-and-co",
          index: "05",
          slug: "lulu-and-co",
          title: "Lulu & Co",
          subtitle:
            "Gluten-Free & Diabetic-Friendly Peruvian Desserts E-Commerce",
          role: "Full-Stack Software Engineer",
          year: "2026",
          category: "React + TypeScript + Tailwind CSS + Spring Boot + MySQL",
          imagePath: "/images/projects/lulu.webp",
          mobileImage: "/images/projects/lulu-mobile.png",
          wireframeBadge: "REACT + TYPESCRIPT + SPRING BOOT + MYSQL",
          summary:
            "E-commerce storefront inspired by a real Peruvian bakery crafting gluten-free, diabetic-friendly desserts with native Peruvian ingredients led by lucuma—adapted for the US market with blog storytelling and Spring Boot backend.",
          problemStatement:
            "Consumers in the United States seeking authentic Peruvian desserts that are both sugar-free (diabetic-friendly) and gluten-free rarely find transparent ingredient sourcing and dedicated online ordering. Lulu & Co bridges Peruvian superfoods like lucuma with modern e-commerce.",
          architectureNotes: [
            "Evolved from a modular ES6 JavaScript & Tailwind CSS storefront into a component-driven React, TypeScript, and Vite application with dietary category filtering and accent-insensitive search.",
            "Built a dedicated editorial blog showcasing Peruvian superfoods, lucuma benefits, and gluten-free artisanal recipes.",
            "Engineered a Java, Spring Boot, Spring Data JPA, and MySQL REST backend to manage product inventory, blog articles, and customer orders.",
          ],
          techStack: [
            "React",
            "TypeScript",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "Java",
            "Spring Boot",
            "MySQL",
          ],
          liveUrl: "https://lulu-and-co-ecommerce.vercel.app/",
          repositoryUrl: "https://github.com/elynzx",
          repositoryLabel: "GitHub ↗",
          featuredMetric:
            "Specialty US-market e-commerce & blog backed by React, Spring Boot & MySQL",
        },
      ],
    },
    about: {
      sectionIndex: "02",
      kicker: "Editorial Profile / Engineering Philosophy",
      title:
        "Where rigorous systems engineering meets real-world project execution.",
      lead: "Good software shares a fundamental rule with physical architecture: structural integrity happens long before the finishing surfaces are applied.",
      paragraphs: [
        "I am a Full-Stack Software Engineer focused on the Java, Spring Boot, MySQL, and React ecosystem. In my Systems Engineering studies at Universidad Tecnológica del Perú (UTP), I have maintained a Top 10% academic standing (Décimo Superior) for two consecutive years, complemented by intensive full-stack Java training at Generation Peru, React and Python specializations at Tecsup, and STEM outreach volunteering with IEEE WIE UTP.",
        "Before transitioning into software engineering, I led commercial implementation projects in interior architecture and retail infrastructure. Coordinating field teams and corporate clients taught me how to gather unambiguous stakeholder requirements and resolve critical blockers on site, a discipline I now bring directly to database modeling, REST API design, and Agile Scrum leadership.",
      ],
      academicHighlight: {
        badge: "Top 10% Academic Standing (2 Consecutive Years)",
        institution: "Universidad Tecnológica del Perú (UTP)",
        program: "Systems Engineering & Informatics",
        detail:
          "Recognized in the Décimo Superior for two consecutive years for sustained excellence in software architecture, relational databases, and systems engineering.",
      },
      pillars: [
        {
          index: "01",
          title: "Backend Discipline (Java & Spring Boot)",
          description:
            "Layered backend services with clean separation between REST controllers, stateless JWT role security, Jakarta Validation rules, and MySQL persistence.",
        },
        {
          index: "02",
          title: "Stakeholder Requirement Discovery",
          description:
            "Translating complex commercial conversations into explicit domain constraints, edge-case inventories, and documented API contracts before writing code.",
        },
        {
          index: "03",
          title: "On-Site & Production Problem Resolution",
          description:
            "Diagnosing bottlenecks methodically under tight schedules, keeping cross-functional Scrum teams aligned, and delivering stable increments.",
        },
      ],
    },
    trajectory: {
      sectionIndex: "03",
      kicker: "Curriculum & Specifications / Trajectory",
      title:
        "Academic foundation, engineering bootcamps, commercial leadership, and STEM outreach.",
      intro:
        "A concise tabular index of formal Systems Engineering education, full-stack Java training, commercial project coordination, and community mentorship.",
      educationHeading: "Education & Technical Specializations",
      education: [
        {
          id: "utp-systems-engineering",
          period: "Current / 2 Years Top 10%",
          title: "Systems Engineering & Informatics",
          organization: "Universidad Tecnológica del Perú (UTP)",
          location: "Lima, Peru",
          badge: "Top 10% (Décimo Superior)",
          summary:
            "University training in object-oriented software engineering, relational database design, systems architecture, and project management.",
          highlights: [
            "Awarded Top 10% academic standing (Décimo Superior) for two consecutive years.",
            "Core focus on Java enterprise patterns, database normalization, and software systems modeling.",
          ],
        },
        {
          id: "generation-java-bootcamp",
          period: "Intensive Full-Stack Track",
          title: "Junior Full-Stack Java Developer Bootcamp",
          organization: "Generation Peru",
          location: "Lima, Peru",
          badge: "Java & Spring Boot",
          summary:
            "Immersive software engineering program simulating production Agile Scrum environments to build end-to-end web applications.",
          highlights: [
            "Built and deployed full-stack applications using Java, Spring Boot, MySQL, and modern frontend technologies.",
            "Served as Scrum Master and Full-Stack Developer on the 4-developer regional e-commerce platform Raíces del Valle.",
          ],
        },
        {
          id: "tecsup-specialization",
          period: "Technical Specialization",
          title:
            "Web Development with React & Backend Fundamentals with Python",
          organization: "Tecsup",
          location: "Lima, Peru",
          badge: "React & Python",
          summary:
            "Focused specialization modules covering component-driven frontend architecture in React and algorithmic scripting in Python.",
          highlights: [
            "Developed modular user interfaces with React hooks, state management, and REST API integration.",
            "Strengthened polyglot backend fundamentals and structured data processing using Python.",
          ],
        },
      ],
      leadershipHeading: "Transferable Commercial & Project Leadership",
      commercialLeadership: [
        {
          id: "commercial-project-leadership",
          period: "Prior Career Foundation",
          title: "Commercial Project & Operations Coordinator",
          organization: "Interior Architecture & Retail Infrastructure Sector",
          location: "Lima, Peru",
          badge: "Stakeholder & Delivery Leadership",
          summary:
            "Directed end-to-end commercial implementation projects from client requirement discovery through on-site execution and handover.",
          highlights: [
            "Led requirement gathering sessions with corporate stakeholders to define scope, technical constraints, and delivery schedules.",
            "Coordinated multidisciplinary field and fabrication teams, resolving real-time operational blockers on site.",
          ],
        },
      ],
      volunteeringHeading: "Community Leadership & STEM Volunteering",
      communityVolunteering: [
        {
          id: "ieee-wie-utp-stem",
          period: "March 2026 to August 2026",
          title: "STEM Committee Volunteer",
          organization: "IEEE Women in Engineering (WIE) UTP",
          location: "Lima, Peru",
          badge: "STEM Outreach & Mentorship",
          summary:
            "Designed and delivered hands-on technology workshops for school children and teenagers to spark early interest in STEM and programming, stepping down in September 2026 to dedicate full-time focus to the Generation Java Full-Stack bootcamp.",
          highlights: [
            "Created accessible programming and technology workshops tailored for school children and teenagers.",
            "Stepped down in September 2026 after a six-month cycle to commit full-time to the Generation Java Full-Stack bootcamp.",
          ],
        },
      ],
      stackHeading: "Technical Stack & Architectural Matrix",
      technicalStack: [
        {
          id: "stack-backend",
          index: "01",
          category: "Backend & Data Architecture",
          description:
            "Layered MVC and RESTful API architecture, stateless JWT authentication, relational schema modeling, and foundational microservice design patterns.",
          technologies: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "Flask",
            "Django",
            "PostgreSQL",
            "MySQL",
          ],
        },
        {
          id: "stack-frontend",
          index: "02",
          category: "Frontend & Editorial UI",
          description:
            "Component-driven and Atomic Design architecture, predictable state management (Zustand), strict TypeScript typing, and responsive editorial grids.",
          technologies: [
            "React",
            "Angular",
            "TypeScript",
            "JavaScript (ES6+)",
            "Next.js",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
          ],
        },
        {
          id: "stack-methodology",
          index: "03",
          category: "Cloud, DevOps & Tooling",
          description:
            "Agile Scrum delivery, collaborative Git workflows, containerization fundamentals, edge static deployment, and REST endpoint testing.",
          technologies: [
            "Azure",
            "Docker",
            "Git",
            "GitHub",
            "Cloudflare",
            "Cloudinary",
            "Postman",
            "Vite",
          ],
        },
      ],
    },
    fieldNotes: {
      sectionIndex: "04",
      kicker: "Engineering Monograph / Field Notes",
      title:
        "Notes on backend architecture, requirement discovery, and maintainable systems.",
      intro:
        "Reflections on connecting stakeholder discovery with clean code in Java, Spring Boot, and relational databases.",
      readArticleLabel: "Read Essay →",
      collapseArticleLabel: "Close Essay ↑",
      articles: [
        {
          id: "requirement-gathering-prevents-spring-boot-debt",
          issueNumber: "Issue No. 01",
          slug: "how-clear-requirement-gathering-prevents-technical-debt-in-spring-boot-rest-apis",
          publishedDate: "2026",
          readingTime: "6 min read",
          category: "Backend Architecture & Domain Discovery",
          title:
            "How Clear Requirement Gathering Prevents Technical Debt in Spring Boot REST APIs",
          subtitle:
            "Why the most expensive bugs in Java backend services originate in unspoken business assumptions rather than syntax errors, and how upfront contract modeling keeps JPA entities clean.",
          abstract:
            "Most technical debt in Spring Boot applications starts during hurried stakeholder conversations when ambiguous domain rules get hardcoded directly into JPA entities. Drawing from commercial project coordination and full-stack Java engineering on Lumina Eventos, this note outlines a workflow for turning stakeholder interviews into resilient REST API contracts.",
          sections: [
            {
              heading:
                "1. The Illusion of Velocity: Coding Before the Domain is Understood",
              paragraphs: [
                "When a new software project begins, there is a natural temptation to open the IDE immediately, scaffold a Spring Boot project, and annotate the first JPA entity class. Within an hour, a CRUD controller is running and returning JSON payloads. On the surface, this looks like high engineering velocity.",
                "However, anyone who has coordinated physical commercial projects knows what happens when fabrication begins before site measurements and client constraints are signed off. Moving a structural wall on a blueprint costs an eraser stroke; moving it after installation costs weeks of rework. The exact same principle governs relational databases and REST APIs. When we skip rigorous requirement gathering with stakeholders, our database tables end up encoding assumptions instead of reality.",
              ],
            },
            {
              heading: "2. Three Questions That Protect Your JPA Entities",
              paragraphs: [
                "In Spring Boot architectures, technical debt frequently accumulates when a single JPA @Entity is forced to serve three conflicting roles: the database table representation, the domain business logic container, and the public JSON serialization contract. Before writing a single @RestController or @Table migration, asking targeted questions during stakeholder discovery prevents months of refactoring:",
                "First: Which attributes are truly invariant, and which depend on the actor viewing the resource? In Lumina Eventos (our full-stack event venue and furniture rental platform), a user authenticated with the 'CLIENTE' role needs to filter venues by district, capacity, and event type and generate PDF booking receipts, whereas an 'ADMIN' user requires full CRUD control over venue inventory, furniture pricing, and reservation approvals. Clarifying these role boundaries early allowed us to enforce clean JWT authorization rules and dedicated DTO projections.",
                "Second: What constraints must be validated before a reservation ever touches the database? Stakeholders often describe a booking casually as picking a date and a hall, but in production software we must validate future dates, guest capacity limits, and supported event categories ('WEDDING', 'BIRTHDAY', 'CONFERENCE', 'CORPORATE') at the API boundary.",
              ],
              keyTakeaways: [
                "Separate database persistence (@Entity) from public API payloads (Request and Response DTOs).",
                "Enforce role-based JWT boundaries ('CLIENTE' vs. 'ADMIN') so each actor only interacts with their authorized endpoints and projections.",
                "Validate business constraints at the API boundary with Jakarta Bean Validation before invoking service layer persistence.",
              ],
            },
            {
              heading:
                "3. Translating Venue Booking Rules into Explicit Spring Boot DTOs",
              paragraphs: [
                "Once stakeholder requirements are clarified, we can encode those exact boundaries in Java and Spring Boot using immutable Record DTOs and Jakarta Validation annotations. In Lumina Eventos, instead of exposing internal JPA reservation entities directly to the React frontend, the booking endpoint validates a dedicated VenueBookingRequest contract.",
              ],
              codeSnippet: {
                caption:
                  "Listing 1.1: Validating Lumina Eventos reservation rules at the Spring Boot API boundary using a Java Record DTO and Jakarta Validation.",
                language: "java",
                code: `package com.luminaeventos.booking.dto;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import java.time.LocalDate;

public record VenueBookingRequest(
    @NotNull(message = "Venue identifier is required to process a reservation")
    @Min(value = 1, message = "Venue ID must be a valid positive identifier")
    Long venueId,

    @NotNull(message = "Event date is required")
    @Future(message = "Reservations must be scheduled for a future calendar date")
    LocalDate eventDate,

    @NotNull(message = "Estimated guest count is required for capacity verification")
    @Min(value = 20, message = "Minimum venue booking capacity is 20 guests")
    @Max(value = 800, message = "Maximum venue capacity is 800 guests")
    Integer guestCount,

    @NotBlank(message = "Event category is required")
    @Pattern(
        regexp = "^(WEDDING|BIRTHDAY|CONFERENCE|CORPORATE)$",
        message = "Event type must be WEDDING, BIRTHDAY, CONFERENCE, or CORPORATE"
    )
    String eventType
) {}`,
              },
            },
            {
              heading: "4. Requirement Gathering as an Engineering Multiplier",
              paragraphs: [
                "Notice how every annotation in VenueBookingRequest maps directly to a concrete business rule uncovered during requirement analysis: ensuring eventDate is strictly in the future, enforcing realistic guest capacity limits (guestCount), and restricting eventType to supported production categories.",
                "When requirement gathering is treated as a core engineering discipline rather than a preliminary formality, backend code becomes self-documenting. Foreign keys in MySQL stay consistent, PDF receipt generation receives verified data, and our React Hook Form and Zustand state layers on the frontend consume predictable, strictly typed JSON contracts.",
              ],
            },
          ],
          conclusion:
            "Clean code in Spring Boot is downstream of clear thinking with people. By investing time at the whiteboard to listen, question edge cases, and align stakeholders before opening the code editor, we build software architectures that endure without accumulating silent technical debt.",
        },
      ],
    },
  },
  es: {
    locale: "es",
    nav: {
      brandName: "Evelyn Pascual",
      brandSubtitle: "Ingeniera de Software Full-Stack",
      editionLabel: "Lima, Perú / Edición de Portafolio 2026",
      languageToggleLabel: "EN",
      socialLinks: SHARED_SOCIAL_LINKS,
      items: [
        {
          id: "projects",
          index: "01",
          label: "Proyectos Selectos",
          href: "#projects",
        },
        { id: "about", index: "02", label: "Perfil Editorial", href: "#about" },
        {
          id: "trajectory",
          index: "03",
          label: "Trayectoria y Stack",
          href: "#trajectory",
        },
        {
          id: "field-notes",
          index: "04",
          label: "Notas de Ingeniería",
          href: "#field-notes",
        },
      ],
    },
    hero: {
      issueNumber:
        "N.º 01 / Monografía Arquitectónica e Ingeniería de Software",
      locationLabel: "Lima, Perú (UTC-5)",
      availabilityLabel: "Disponible para Roles Full-Stack y Backend",
      name: "Evelyn Pascual",
      roleTitle: "Ingeniera de Software Full-Stack (Java, Spring Boot & React)",
      headline:
        "Ingeniería de sistemas backend estructurados e interfaces web sobrias y duraderas.",
      leadParagraph:
        "Desarrollo aplicaciones web sólidas con Java, Spring Boot y React. Combinando mi formación en el Décimo Superior de Ingeniería de Sistemas con experiencia liderando proyectos comerciales reales, transformo requerimientos complejos en software limpio y mantenible.",
      portraitCaption:
        "Fig. 01 / Evelyn Pascual, Ingeniera de Sistemas y Software Full-Stack",
      portraitSpecs: "Lima, PE / Java & Spring Boot / React & TypeScript",
      primaryCta: {
        label: "Explorar Proyectos Selectos",
        href: "#projects",
      },
      secondaryCta: {
        label: "Leer Notas de Ingeniería",
        href: "#field-notes",
      },
      socialLinks: SHARED_SOCIAL_LINKS,
      quickFacts: [
        {
          label: "Arquitectura Base",
          value: "Java, Spring Boot, Spring Security (JWT), MySQL",
        },
        {
          label: "Ingeniería Frontend",
          value: "React, TypeScript, Zustand, Vanilla JS (ES6+), Tailwind CSS",
        },
        {
          label: "Mérito Académico",
          value:
            "Décimo Superior (Top 10%) en Ingeniería de Sistemas en UTP (2 Años Consecutivos)",
        },
        {
          label: "Liderazgo y STEM",
          value:
            "Agile Scrum Master, Voluntaria STEM IEEE WIE, Toma de Requerimientos",
        },
      ],
    },
    projects: {
      sectionIndex: "01",
      kicker: "Índice Arquitectónico / Proyectos Selectos",
      title:
        "Sistemas construidos con claridad, integridad relacional y enfoque humano.",
      intro:
        "Cinco sistemas full-stack y frontend que integran modelado de dominio, seguridad REST por roles e interfaces editoriales limpias.",
      inspectCaseStudyLabel: "Caso de Estudio →",
      closeDrawerLabel: "Cerrar Caso de Estudio",
      liveActionLabel: "Demo en Vivo ↗",
      sourceActionLabel: "GitHub ↗",
      architectureHeading: "Especificaciones Arquitectónicas",
      problemHeading: "Contexto y Objetivo de Ingeniería",
      items: [
        {
          id: "lumina-eventos",
          index: "01",
          slug: "lumina-eventos",
          title: "Lumina Eventos",
          subtitle:
            "Plataforma Full-Stack de Alquiler de Locales y Mobiliario para Eventos",
          role: "Ingeniera de Software Full-Stack",
          year: "2026",
          category: "Java + Spring Boot + Spring Security (JWT) + React",
          imagePath: "/images/projects/lumina.webp",
          mobileImage: "/images/projects/lumina-mobile.webp",
          wireframeBadge: "JWT RBAC ('CLIENTE' / 'ADMIN') + ATOMIC DESIGN",
          summary:
            "Plataforma full-stack para reserva de locales y mobiliario de eventos con seguridad JWT por roles, filtros multicriterio, comprobantes PDF y arquitectura React en Atomic Design.",
          problemStatement:
            "Reservar locales para eventos y coordinar mobiliario adicional suele implicar cotizaciones fragmentadas, validación manual de aforos y poca claridad en precios por distrito. Lumina Eventos digitaliza todo el flujo de reserva tanto para clientes como para administradores mediante seguridad por roles, filtros multicriterio y generación automática de constancias en PDF.",
          architectureNotes: [
            "Implementé autenticación JWT basada en roles ('CLIENTE' y 'ADMIN') con Spring Security y persistencia relacional en MySQL para locales, mobiliario adicional y reservas.",
            "Desarrollé filtrado avanzado de locales por distrito, tipo de evento, capacidad de invitados y rango de precio, además de generación de comprobantes de reserva en PDF e integración con Cloudinary.",
            "Construí un panel administrativo CRUD para gestionar locales, mobiliario y reservaciones junto con un frontend modular en React y TypeScript estructurado bajo Atomic Design ('atomic', 'molecules', 'organism'), estado global con Zustand y formularios con React Hook Form.",
          ],
          techStack: [
            "Java",
            "Spring Boot",
            "Spring Security (JWT)",
            "MySQL",
            "React",
            "TypeScript",
            "Zustand",
            "React Hook Form",
            "Tailwind CSS",
            "Cloudinary",
          ],
          repositoryUrl: "https://github.com/elynzx/alquiler-eventos-frontend",
          repositoryLabel: "GitHub ↗",
          featuredMetric:
            "Seguridad JWT por roles ('CLIENTE' / 'ADMIN'), frontend React en Atomic Design con Zustand y comprobantes PDF",
        },
        {
          id: "pawguard",
          index: "02",
          slug: "pawguard",
          title: "PawGuard",
          subtitle: "Plataforma de Seguros y Gestión de Cuidado para Mascotas",
          role: "Ingeniera de Software Full-Stack",
          year: "2026",
          category: "React + TypeScript + PostgreSQL + Spring Boot",
          imagePath: "/images/projects/pawguard.webp",
          mobileImage: "/images/projects/pawguard-mobile.webp",
          wireframeBadge: "REACT + TYPESCRIPT + SPRING BOOT + POSTGRESQL",
          summary:
            "Aplicación web que simplifica la comparación de seguros para mascotas, administración de pólizas y seguimiento veterinario con backend en Java, Spring Boot y PostgreSQL.",
          problemStatement:
            "Los tutores de mascotas enfrentan planes de cobertura difíciles de comparar, historiales veterinarios dispersos y trámites poco claros al gestionar sus pólizas. PawGuard centraliza la comparación de planes, administración de pólizas y seguimiento preventivo en una experiencia web tipada y clara.",
          architectureNotes: [
            "Construí una interfaz web responsiva y fuertemente tipada en React, TypeScript y Tailwind CSS conectada a persistencia relacional en PostgreSQL.",
            "Diseñé flujos estructurados y contratos de REST APIs para comparar coberturas de seguros, administrar pólizas activas y registrar controles de cuidado veterinario.",
            "Implementé los servicios de backend y reglas de negocio en Java, Spring Boot y PostgreSQL para asegurar validación estricta e integridad referencial.",
          ],
          techStack: [
            "React",
            "TypeScript",
            "PostgreSQL",
            "Java",
            "Spring Boot",
            "REST APIs",
            "Tailwind CSS",
          ],
          repositoryUrl: "https://github.com/elynzx",
          repositoryLabel: "GitHub ↗",
          featuredMetric:
            "Plataforma en React y TypeScript respaldada por API REST en Java, Spring Boot y PostgreSQL",
        },
        {
          id: "siro-plan",
          index: "03",
          slug: "siro-plan",
          title: "Siro Plan",
          subtitle: "Espacio de Trabajo Kanban de Tareas y Subtareas",
          role: "Creadora y Desarrolladora Full-Stack",
          year: "2026",
          category: "Vanilla JS (ES6+) + Spring Boot + MySQL",
          imagePath: "/images/projects/siroplan.webp",
          mobileImage: "/images/projects/siroplan-mobile.webp",
          gallery: [
            "/images/projects/siroplan.webp",
            "/images/projects/siroplan-2.webp",
            "/images/projects/siroplan-3.webp",
          ],
          wireframeBadge: "MÓDULOS ES6+ + SPRING BOOT + MYSQL",
          summary:
            "Espacio de trabajo Kanban de tareas y subtareas construido con gestión modular de estado en ES6 (ProjectManager y TaskManager) y persistencia en Java, Spring Boot y MySQL.",
          problemStatement:
            "Estudiantes y jóvenes profesionales que estructuran proyectos académicos o profesionales de varios pasos suelen necesitar un tablero Kanban ágil con soporte de subtareas sin la complejidad excesiva de herramientas corporativas pesadas. Siro Plan ofrece un espacio de organización inmediato y enfocado.",
          architectureNotes: [
            "Diseñado con arquitectura modular en JavaScript ES6+ (ProjectManager y TaskManager) para gestionar el estado de proyectos, columnas Kanban y progreso de subtareas.",
            "Interfaz responsiva en CSS3 desplegada en vivo sobre Cloudflare Pages con carga instantánea en el navegador.",
            "Desarrollé la arquitectura backend con Java, Spring Boot y MySQL para persistencia relacional de tableros, tareas y subtareas.",
          ],
          techStack: [
            "Vanilla JavaScript (ES6+)",
            "ProjectManager & TaskManager",
            "CSS3",
            "Java",
            "Spring Boot",
            "MySQL",
          ],
          liveUrl: "https://siroplan.pages.dev/",
          repositoryUrl: "https://github.com/elynzx",
          repositoryLabel: "GitHub ↗",
          featuredMetric:
            "Espacio Kanban modular en ES6+ con persistencia backend en Java, Spring Boot y MySQL",
        },
        {
          id: "raices-del-valle",
          index: "04",
          slug: "raices-del-valle",
          title: "Raíces del Valle",
          subtitle:
            "Plataforma Colaborativa de Comercio Electrónico Regional (Equipo de 4)",
          role: "Scrum Master y Desarrolladora Full-Stack",
          year: "2026",
          category: "Java + Spring Boot + MySQL + Vanilla JS + Scrum",
          imagePath: "/images/projects/raices.webp",
          mobileImage: "/images/projects/raices-mobile.webp",
          wireframeBadge: "SCRUM MASTER (EQUIPO DE 4) + SPRING BOOT REST",
          summary:
            "Plataforma regional de e-commerce desarrollada en equipo de 4 integrantes donde lideré ceremonias Scrum y flujos Git además de construir vistas dinámicas, carrito en JS y endpoints en Spring Boot.",
          problemStatement:
            "Los productores regionales requieren una vitrina digital accesible para comercializar sus productos directamente, mientras que un equipo de ingeniería de 4 desarrolladores necesita ramas de Git ordenadas, ceremonias Scrum enfocadas e integración limpia entre frontend y backend.",
          architectureNotes: [
            "Coordiné al equipo de 4 desarrolladores como Scrum Master: facilité ceremonias de sprint y estandaricé el flujo colaborativo de ramas y pull requests en Git y GitHub.",
            "Desarrollé vistas dinámicas de detalle de producto y eventos personalizados de carrito (CustomEvent) utilizando Vanilla JavaScript y CSS3.",
            "Construí e integré endpoints REST con Java, Spring Boot y MySQL para catálogo de productos y persistencia de pedidos.",
          ],
          techStack: [
            "Java",
            "Spring Boot",
            "MySQL",
            "Vanilla JavaScript",
            "CSS3",
            "Git / GitHub",
            "Scrum Master",
          ],
          repositoryUrl: "https://github.com/DwDarwin/raices-del-valle-backend",
          repositoryLabel: "GitHub ↗",
          featuredMetric:
            "Doble rol como Scrum Master y Desarrolladora Full-Stack coordinando un equipo ágil de 4 integrantes",
        },
        {
          id: "lulu-and-co",
          index: "05",
          slug: "lulu-and-co",
          title: "Lulu & Co",
          subtitle:
            "E-Commerce de Postres Peruanos Sin Gluten y Aptos para Diabéticos",
          role: "Ingeniera de Software Full-Stack",
          year: "2026",
          category: "React + TypeScript + Tailwind CSS + Spring Boot + MySQL",
          imagePath: "/images/projects/lulu.webp",
          mobileImage: "/images/projects/lulu-mobile.webp",
          wireframeBadge: "REACT + TYPESCRIPT + SPRING BOOT + MYSQL",
          summary:
            "Tienda online inspirada en una pastelería peruana real de postres sin azúcar (aptos para diabéticos) y libres de gluten hechos solo con insumos peruanos como la lúcuma, proyectada al mercado de EE. UU. con React, Spring Boot y MySQL.",
          problemStatement:
            "Los consumidores en Estados Unidos que buscan postres peruanos auténticos aptos para diabéticos y libres de gluten carecen de tiendas especializadas con trazabilidad de insumos. Lulu & Co acerca la lúcuma y superfoods peruanos mediante un e-commerce moderno y educativo.",
          architectureNotes: [
            "Evolucionado desde un storefront modular en JavaScript ES6 y Tailwind CSS hacia React, TypeScript y Vite con filtros por categoría nutricional y búsqueda insensible a tildes.",
            "Integré una sección editorial de blog dedicada a difundir los beneficios de la lúcuma, superfoods peruanos y repostería libre de gluten.",
            "Implementé una API REST en Java, Spring Boot, Spring Data JPA y MySQL para gestionar catálogo de postres, entradas de blog y órdenes de compra.",
          ],
          techStack: [
            "React",
            "TypeScript",
            "JavaScript (ES6+)",
            "Tailwind CSS",
            "Java",
            "Spring Boot",
            "MySQL",
          ],
          repositoryUrl: "https://github.com/elynzx",
          repositoryLabel: "GitHub ↗",
          featuredMetric:
            "E-commerce de nicho saludable para EE. UU. con React, Spring Boot y MySQL",
        },
      ],
    },
    about: {
      sectionIndex: "02",
      kicker: "Perfil Editorial / Filosofía de Ingeniería",
      title:
        "Donde el rigor de la ingeniería de sistemas converge con la ejecución real de proyectos.",
      lead: "El buen software comparte una regla esencial con la arquitectura física: la solidez estructural se define mucho antes de colocar los acabados visibles.",
      paragraphs: [
        "Soy Ingeniera de Software Full-Stack enfocada en el ecosistema Java, Spring Boot, MySQL y React. En mi formación en Ingeniería de Sistemas e Informática en la Universidad Tecnológica del Perú (UTP), me mantengo en el Décimo Superior (Top 10%) por dos años consecutivos, complementando mi preparación con el bootcamp intensivo Full-Stack Java en Generation Perú, módulos de React y Python en Tecsup, y voluntariado STEM en IEEE WIE UTP.",
        "Antes de dedicarme por completo al desarrollo de software, lideré proyectos comerciales en el sector de arquitectura interior e implementación de espacios. Coordinar equipos técnicos y clientes corporativos me enseñó a levantar requerimientos sin ambigüedades y a resolver bloqueos críticos en obra, disciplina que hoy aplico directamente al modelado relacional, diseño de APIs REST y liderazgo Scrum.",
      ],
      academicHighlight: {
        badge: "Décimo Superior / Top 10% (2 Años Consecutivos)",
        institution: "Universidad Tecnológica del Perú (UTP)",
        program: "Ingeniería de Sistemas e Informática",
        detail:
          "Reconocida en el Décimo Superior durante dos años consecutivos por excelencia sostenida en arquitectura de software, bases de datos relacionales e ingeniería de sistemas.",
      },
      pillars: [
        {
          index: "01",
          title: "Disciplina Backend (Java y Spring Boot)",
          description:
            "Servicios backend en capas con separación clara entre controladores REST, seguridad JWT por roles, reglas de Jakarta Validation y persistencia en MySQL.",
        },
        {
          index: "02",
          title: "Toma de Requerimientos con Stakeholders",
          description:
            "Traducción de necesidades comerciales complejas en restricciones de dominio explícitas, análisis de casos borde y contratos de API documentados antes de programar.",
        },
        {
          index: "03",
          title: "Resolución de Problemas en Campo y Producción",
          description:
            "Diagnóstico metódico de cuellos de botella bajo plazos exigentes, manteniendo la alineación del equipo Scrum y entregando incrementos estables.",
        },
      ],
    },
    trajectory: {
      sectionIndex: "03",
      kicker: "Currículum y Especificaciones / Trayectoria",
      title:
        "Base académica universitaria, bootcamps intensivos, liderazgo comercial y voluntariado STEM.",
      intro:
        "Índice cronológico de formación en Ingeniería de Sistemas, entrenamiento práctico en Java Full-Stack, coordinación de proyectos comerciales y mentoría STEM.",
      educationHeading: "Formación Académica y Especializaciones Técnicas",
      education: [
        {
          id: "utp-systems-engineering",
          period: "En Curso / 2 Años Top 10%",
          title: "Ingeniería de Sistemas e Informática",
          organization: "Universidad Tecnológica del Perú (UTP)",
          location: "Lima, Perú",
          badge: "Décimo Superior (Top 10%)",
          summary:
            "Formación universitaria en ingeniería de software orientada a objetos, diseño de bases de datos relacionales, arquitectura de sistemas y gestión de proyectos.",
          highlights: [
            "Reconocida en el Décimo Superior (Top 10% de rendimiento académico) por dos años consecutivos.",
            "Enfoque central en patrones empresariales con Java, normalización de datos y modelado de sistemas.",
          ],
        },
        {
          id: "generation-java-bootcamp",
          period: "Programa Intensivo Full-Stack",
          title: "Bootcamp Junior Full-Stack Java Developer",
          organization: "Generation Perú",
          location: "Lima, Perú",
          badge: "Java y Spring Boot",
          summary:
            "Programa inmersivo de ingeniería de software que simula entornos reales de producción bajo metodología Agile Scrum.",
          highlights: [
            "Construcción y despliegue de aplicaciones full-stack empleando Java, Spring Boot, MySQL y tecnologías frontend modernas.",
            "Liderazgo como Scrum Master y Desarrolladora Full-Stack en el equipo de 4 integrantes del proyecto Raíces del Valle.",
          ],
        },
        {
          id: "tecsup-specialization",
          period: "Especialización Técnica",
          title: "Desarrollo Web con React y Fundamentos de Backend con Python",
          organization: "Tecsup",
          location: "Lima, Perú",
          badge: "React y Python",
          summary:
            "Especialización técnica orientada a arquitectura frontend basada en componentes con React y programación estructurada en Python.",
          highlights: [
            "Desarrollo de interfaces modulares con hooks de React, manejo de estado y consumo de APIs REST.",
            "Fortalecimiento de lógica algorítmica y procesamiento estructurado de datos con Python.",
          ],
        },
      ],
      leadershipHeading:
        "Liderazgo Comercial y Gestión de Proyectos Transferible",
      commercialLeadership: [
        {
          id: "commercial-project-leadership",
          period: "Base Profesional Previa",
          title: "Coordinadora de Proyectos Comerciales y Operaciones",
          organization:
            "Sector de Arquitectura Interior e Implementación Comercial",
          location: "Lima, Perú",
          badge: "Liderazgo de Stakeholders",
          summary:
            "Dirección integral de proyectos de implementación comercial desde la toma inicial de requerimientos hasta la supervisión en obra y entrega final.",
          highlights: [
            "Conduje sesiones de levantamiento de requerimientos con directivos y clientes para definir alcances, restricciones técnicas y cronogramas.",
            "Coordiné equipos multidisciplinarios en sitio, resolviendo contingencias operativas en tiempo real.",
          ],
        },
      ],
      volunteeringHeading: "Liderazgo Comunitario y Voluntariado STEM",
      communityVolunteering: [
        {
          id: "ieee-wie-utp-stem",
          period: "Marzo 2026 a Agosto 2026",
          title: "Voluntaria del Comité STEM",
          organization: "IEEE Women in Engineering (WIE) UTP",
          location: "Lima, Perú",
          badge: "Mentoría y Educación STEM",
          summary:
            "Diseñé e impartí talleres prácticos de tecnología para niños y adolescentes escolares para despertar vocaciones tempranas en STEM y programación, cerrando mi etapa en septiembre de 2026 para dedicarme a tiempo completo al bootcamp Java Full-Stack de Generation.",
          highlights: [
            "Elaboré talleres prácticos de programación y pensamiento lógico adaptados para niños y adolescentes en etapa escolar.",
            "Culminé mi ciclo en septiembre de 2026 para dedicar enfoque a tiempo completo al bootcamp Java Full-Stack de Generation Perú.",
          ],
        },
      ],
      stackHeading: "Stack Técnico y Matriz Arquitectónica",
      technicalStack: [
        {
          id: "stack-backend",
          index: "01",
          category: "Arquitectura Backend y Datos",
          description:
            "Arquitectura en capas (MVC) y APIs RESTful, autenticación stateless con JWT, modelado relacional y fundamentos de arquitectura de microservicios.",
          technologies: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "Flask",
            "Django",
            "PostgreSQL",
            "MySQL",
          ],
        },
        {
          id: "stack-frontend",
          index: "02",
          category: "Frontend e Interfaz Web",
          description:
            "Arquitectura basada en componentes y Atomic Design, gestión de estado predecible (Zustand), tipado estricto y retículas editoriales responsivas.",
          technologies: [
            "React",
            "Angular",
            "TypeScript",
            "JavaScript (ES6+)",
            "Next.js",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
          ],
        },
        {
          id: "stack-methodology",
          index: "03",
          category: "Cloud, DevOps y Herramientas",
          description:
            "Entrega ágil bajo Scrum, flujos colaborativos con Git, fundamentos de contenerización, despliegue estático en edge y pruebas de APIs REST.",
          technologies: [
            "Azure",
            "Docker",
            "Git",
            "GitHub",
            "Cloudflare",
            "Cloudinary",
            "Postman",
            "Vite",
          ],
        },
      ],
    },
    fieldNotes: {
      sectionIndex: "04",
      kicker: "Monografía de Ingeniería / Notas de Campo",
      title:
        "Apuntes sobre arquitectura backend, levantamiento de requerimientos y sistemas mantenibles.",
      intro:
        "Reflexiones técnicas sobre cómo conectar la comprensión del negocio con código limpio en Java, Spring Boot y bases de datos relacionales.",
      readArticleLabel: "Leer Ensayo →",
      collapseArticleLabel: "Cerrar Ensayo ↑",
      articles: [
        {
          id: "requirement-gathering-prevents-spring-boot-debt",
          issueNumber: "Edición N.º 01",
          slug: "como-la-toma-clara-de-requerimientos-previene-la-deuda-tecnica-en-apis-rest-con-spring-boot",
          publishedDate: "2026",
          readingTime: "6 min de lectura",
          category: "Arquitectura Backend y Análisis de Dominio",
          title:
            "Cómo una Toma Clara de Requerimientos Previene la Deuda Técnica en APIs REST con Spring Boot",
          subtitle:
            "Por qué los errores más costosos en servicios backend con Java nacen de suposiciones de negocio no conversadas antes que de errores de sintaxis, y cómo el diseño previo de contratos mantiene limpias las entidades JPA.",
          abstract:
            "La mayor parte de la deuda técnica en aplicaciones Spring Boot comienza durante conversaciones apresuradas con los interesados del proyecto, cuando reglas ambiguas se codifican directamente dentro de entidades JPA. A partir de mi experiencia en proyectos comerciales y desarrollando Lumina Eventos, esta nota presenta un flujo práctico para transformar entrevistas con stakeholders en contratos REST resilientes.",
          sections: [
            {
              heading:
                "1. La Ilusión de Velocidad: Programar Antes de Comprender el Dominio",
              paragraphs: [
                "Cuando inicia un nuevo proyecto de software, existe la tentación natural de abrir el IDE de inmediato, inicializar un proyecto en Spring Boot y anotar la primera clase @Entity de JPA. En menos de una hora ya existe un controlador CRUD devolviendo respuestas JSON. En apariencia, esto luce como alta velocidad de ingeniería.",
                "Sin embargo, quien ha coordinado proyectos físicos de implementación comercial sabe exactamente qué ocurre cuando la fabricación inicia antes de validar las medidas en obra y las restricciones del cliente. Mover un tabique en un plano cuesta un trazo de lápiz; moverlo después de instalado en obra cuesta semanas de retrabajo. El mismo principio gobierna a las bases de datos relacionales y a las APIs REST. Cuando omitimos una toma de requerimientos rigurosa con los stakeholders, nuestras tablas en MySQL terminan codificando suposiciones en lugar de la realidad operativa.",
              ],
            },
            {
              heading: "2. Tres Preguntas que Protegen tus Entidades JPA",
              paragraphs: [
                "En arquitecturas con Spring Boot, la deuda técnica suele acumularse cuando una única clase @Entity de JPA es forzada a cumplir tres responsabilidades incompatibles: representar la tabla relacional en MySQL, contener las reglas cambiantes del negocio y servir como contrato público de serialización JSON. Antes de escribir un solo @RestController, plantear preguntas precisas durante el levantamiento de requerimientos evita meses de refactorización:",
                "Primero: ¿Qué atributos son verdaderamente invariantes y cuáles dependen del rol que consulta el recurso? En Lumina Eventos (nuestra plataforma full-stack para el alquiler de locales de eventos y mobiliario adicional), un usuario autenticado con el rol 'CLIENTE' necesita filtrar locales por distrito, capacidad y tipo de evento además de descargar su comprobante de reserva en PDF, mientras que un usuario con el rol 'ADMIN' requiere control CRUD completo sobre locales, inventario de mobiliario y gestión de reservaciones. Definir esta separación desde el inicio nos permitió configurar reglas claras con Spring Security y JWT.",
                "Segundo: ¿Qué restricciones del dominio deben validarse antes de que una solicitud toque la base de datos? Los usuarios suelen describir una reserva simplemente como elegir una fecha y un salón, pero en producción el software debe exigir fechas futuras válidas, rangos reales de aforo de invitados y categorías de evento permitidas ('WEDDING', 'BIRTHDAY', 'CONFERENCE', 'CORPORATE') en la frontera misma de la API.",
              ],
              keyTakeaways: [
                "Separar estrictamente la persistencia en base de datos (@Entity) de los contratos públicos de entrada y salida (Request y Response DTOs).",
                "Aplicar autenticación JWT basada en roles ('CLIENTE' vs. 'ADMIN') para que cada actor interactúe únicamente con sus operaciones autorizadas.",
                "Validar las restricciones del dominio en la frontera de la API con Jakarta Bean Validation antes de invocar la capa de servicio.",
              ],
            },
            {
              heading:
                "3. Traduciendo Reglas de Reserva a DTOs Explícitos en Spring Boot",
              paragraphs: [
                "Una vez que los requerimientos han sido clarificados con los responsables del negocio, podemos plasmar esos límites exactos en Java y Spring Boot utilizando records inmutables como DTOs junto con anotaciones de Jakarta Validation. En Lumina Eventos, en lugar de exponer las entidades internas de persistencia al frontend en React, el endpoint de reservaciones valida el contrato explícito VenueBookingRequest.",
              ],
              codeSnippet: {
                caption:
                  "Listado 1.1: Validación de reglas de reserva de Lumina Eventos en la frontera de la API Spring Boot mediante un Java Record DTO y Jakarta Validation.",
                language: "java",
                code: `package com.luminaeventos.booking.dto;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import java.time.LocalDate;

public record VenueBookingRequest(
    @NotNull(message = "Venue identifier is required to process a reservation")
    @Min(value = 1, message = "Venue ID must be a valid positive identifier")
    Long venueId,

    @NotNull(message = "Event date is required")
    @Future(message = "Reservations must be scheduled for a future calendar date")
    LocalDate eventDate,

    @NotNull(message = "Estimated guest count is required for capacity verification")
    @Min(value = 20, message = "Minimum venue booking capacity is 20 guests")
    @Max(value = 800, message = "Maximum venue capacity is 800 guests")
    Integer guestCount,

    @NotBlank(message = "Event category is required")
    @Pattern(
        regexp = "^(WEDDING|BIRTHDAY|CONFERENCE|CORPORATE)$",
        message = "Event type must be WEDDING, BIRTHDAY, CONFERENCE, or CORPORATE"
    )
    String eventType
) {}`,
              },
            },
            {
              heading:
                "4. La Toma de Requerimientos como Multiplicador de Ingeniería",
              paragraphs: [
                "Observemos cómo cada anotación en VenueBookingRequest responde directamente a una regla operativa real definida durante el análisis de requerimientos: garantizar que eventDate sea una fecha futura, validar que el número de invitados (guestCount) respete la capacidad operativa del local y asegurar que eventType corresponda a las categorías soportadas.",
                "Cuando el levantamiento de requerimientos se asume como una disciplina central de la ingeniería de software y no como un trámite previo, el código backend se vuelve autodocumentado. Las llaves foráneas en MySQL conservan su coherencia, la emisión de comprobantes en PDF recibe datos verificados y nuestros componentes en React con Zustand y React Hook Form consumen contratos JSON predecibles y fuertemente tipados.",
              ],
            },
          ],
          conclusion:
            "El código limpio en Spring Boot es consecuencia directa de pensar con claridad junto a las personas. Invertir tiempo al inicio para escuchar, cuestionar casos borde y alinear expectativas antes de abrir el editor de código nos permite construir arquitecturas de software que perduran sin acumular deuda técnica silenciosa.",
        },
      ],
    },
  },
};

export * from "./sectionContent";
