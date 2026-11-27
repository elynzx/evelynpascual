<h1 align="center">Evelyn Pascual Portfolio 2026</h1>

<p align="center">
  Architectural monograph and bilingual software engineering portfolio showcasing full-stack projects, system specifications, and engineering field notes.
  <br/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/pnpm-Package_Manager-F69220?style=flat-square&logo=pnpm&logoColor=white"/>
  <img src="https://img.shields.io/badge/Cloudflare_Pages-Deploy-F38020?style=flat-square&logo=cloudflare&logoColor=white"/>
</p>

---

## What is this Portfolio?

This is a **bilingual (`EN / ES`) editorial portfolio** designed with architectural monograph precision to present my work as a Full-Stack Software Engineer focused on **Java, Spring Boot, MySQL/PostgreSQL, and React**.

Built with Next.js App Router, strict TypeScript, and Tailwind CSS, featuring interactive device mockups, slide-over architectural case studies, and engineering essays.

> **Bilingual support (`EN / ES`)** — switch seamlessly between English and Spanish across every section, project specification, and technical essay from a single centralized dictionary.

> **Deployment Status:** Production-ready and configured for continuous deployment on Cloudflare Pages.

---

## Key features

| Feature | Description |
|---|---|
| Bilingual Localization | Instant `EN / ES` switching powered by a strongly typed content dictionary |
| Interactive Device Stage | Dual desktop & mobile frames with vertical auto-scroll and multi-view gallery rotation |
| Editorial Lightbox | Portal-based full-screen image inspector with keyboard navigation (`Esc`, `←`, `→`) |
| Case Study Drawers | Slide-over technical sheets detailing problem statements, architecture notes, and stacks |
| Field Notes Reader | Long-form engineering essays with syntax-highlighted Java/Spring Boot code blocks |
| Smooth Section Navigation | Cubic-eased wheel navigation on desktop with automatic pause when drawers are open |

---

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router + Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 + custom editorial CSS tokens |
| Icons | Lucide React |
| Package Manager | pnpm |
| Deployment | Cloudflare Pages |

---

## Featured projects showcased

| Index | Project | Stack | Focus |
|---|---|---|---|
| `01` | **Lumina Eventos** | Java, Spring Boot, Spring Security (JWT), React, TypeScript, MySQL | Event venue & furniture rental platform with role-based JWT (`CLIENTE` / `ADMIN`) and PDF receipts |
| `02` | **PawGuard** | React, TypeScript, Java, Spring Boot, PostgreSQL | Pet insurance comparison, policy management, and veterinary care tracking |
| `03` | **Siro Plan** | Vanilla JS (ES6+), Java, Spring Boot, MySQL | Modular Kanban task & subtask workspace with integrated Pomodoro focus timer |
| `04` | **Raíces del Valle** | Java, Spring Boot, MySQL, Vanilla JS, Scrum | Regional agricultural e-commerce platform built in a 4-developer Agile team |
| `05` | **Lulu & Co** | React, TypeScript, Tailwind CSS, Java, Spring Boot, MySQL | Gluten-free & diabetic-friendly Peruvian desserts storefront and superfood blog |

---

## Getting started

### Prerequisites

- Node.js 22+
- pnpm 9+

### 1. Clone the repository

```bash
git clone [https://github.com/elynzx/portfolio-26.git](https://github.com/elynzx/portfolio-26.git)
cd portfolio-26
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run the development server

```bash
pnpm dev
```

| URL | Description |
|---|---|
| `http://localhost:3000` | Local portfolio preview |

### 4. Build for production

```bash
pnpm build
```

---

## Project structure

```text
portfolio-26/
├── public/
│   ├── cv/                       # Downloadable PDF resumes
│   └── images/projects/          # Desktop & mobile project screenshots
├── src/
│   ├── app/                      # Next.js App Router layout, styles & entry page
│   ├── components/
│   │   ├── layout/               # Navbar, SocialRail & Footer
│   │   ├── sections/             # Hero, Projects, DeviceStage, Trajectory & Blog
│   │   └── ui/                   # SmoothSectionScroll, TechIconTile & Backdrop
│   └── data/
│       ├── dictionary.ts         # Complete EN/ES copy, projects & articles
│       └── sectionContent.ts     # Rail items, milestones & contact dialog copy
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## How navigation & media work

### Section navigation (`SmoothSectionScroll`)
Desktop wheel events accumulate scroll intent (`DELTA_THRESHOLD = 135`) before smoothly interpolating (`easeInOutCubic`) to the next section, while automatically yielding control whenever a modal or slide-over drawer is open:

```text
[role="dialog"] open  →  Native drawer scroll (section snapping paused)
Scrollable child      →  Native container scroll (device preview / code block)
Accumulated wheel     →  Smooth cubic transition to next/previous section
```

### Project showcase (`DeviceStage`)
- **Long-form web pages:** Automatically scroll vertically inside the laptop viewport and pause on hover or manual wheel interaction.
- **Multi-view apps (e.g., Siro Plan):** Rotate through `project.gallery` views automatically and open in a full-viewport portal lightbox on click.

---

## License

Designed and engineered for personal portfolio showcase.

<p align="center">Built with ♡ by <a href="https://github.com/elynzx">@elynzx</a> · <a href="https://www.linkedin.com/in/evelynpascual/">LinkedIn</a></p>