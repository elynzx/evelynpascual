import type { Locale } from "./dictionary";

export interface BlogPost {
  id: string;
  postNumber: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  hook: string;
  coverImage: string;
  coverAlt: string;
  paragraphs: string[];
  highlightQuote: string;
  teamCredits?: string;
  tags: string[];
}

export const BLOG_POSTS: Record<Locale, BlogPost[]> = {
  en: [
    {
      id: "our-first-fork-generation",
      postNumber: "POST 01",
      slug: "blog/our-first-fork-sprint",
      category: "TEAMWORK & GIT WORKFLOWS",
      date: "OCT 2026",
      readTime: "2 MIN READ",
      title: "They Say Requirements Change. For Us, the Entire Rubric Did.",
      hook: "During week four at Generation Colombia, we tackled an emergency sprint with Bootstrap, Git, and JavaScript—only to discover we had been building against an older rubric.",
      coverImage: "/images/blog/primer-fork-team.jpg",
      coverAlt: "Generation Colombia Cohort 14 Team - Our First Fork",
      paragraphs: [
        "They say in software development that requirements change. For us, the entire rubric changed.",
        "In our fourth week at Generation Colombia, we were randomly grouped with teammates from different backgrounds, experiences, and skill levels. The challenge: solve an 'emergency sprint' using Bootstrap, Git, and JavaScript in very little time.",
        "And we did it. We completed our planned tasks, coordinated efforts, built the layout, solved blockers, and for a few glorious minutes thought everything was going great—until we saw the other teams' demos. 'Wait, what about those five extra features? Were we supposed to build those too?'",
        "Turns out, while we were laser-focused on shipping the sprint, we had been working off an unofficial rubric. Ironically, that became the best part of the experience: the team stayed calm, focused on solid fundamentals, and shipped what we committed to together.",
        "Since we wanted to finish the full challenge anyway, we made the most logical engineering decision: our first Fork. We forked the repository to keep building it as a personal team challenge, meeting weekly to review proposals and improvements.",
      ],
      highlightQuote:
        "When documentation throws an ambush, a calm team and a clean Git fork turn a mistake into real engineering growth.",
      teamCredits:
        "Team: Angela María Lara Picón, Brandon Moreno & Juan David Corrales Aguilar.",
      tags: ["#MyFirstFork", "#Git", "#Scrum", "#Teamwork", "#Generation"],
    },
  ],
  es: [
    {
      id: "nuestro-primer-fork-generation",
      postNumber: "POST 01",
      slug: "blog/nuestro-primer-fork-sprint",
      category: "TRABAJO EN EQUIPO Y GIT",
      date: "OCT 2026",
      readTime: "2 MIN LECTURA",
      title:
        "Dicen que los requerimientos cambian. A nosotros nos cambió la rúbrica.",
      hook: "En nuestra cuarta semana en Generation Colombia resolvimos un sprint de emergencia con Bootstrap, Git y JavaScript, hasta que descubrimos que trabajábamos con otra rúbrica.",
      coverImage: "/images/blog/primer-fork-team.jpg",
      coverAlt: "Equipo Generation Colombia Cohorte 14 - Nuestro Primer Fork",
      paragraphs: [
        "Dicen en el desarrollo de software que los requerimientos cambian. A nosotros no: a nosotros nos cambió la rúbrica completa.",
        "En nuestra cuarta semana en Generation Colombia, nos asignaron aleatoriamente en grupos con compañeros de distintos trasfondos, experiencias y niveles de conocimiento. El reto: resolver un 'Sprint de emergencia' utilizando Bootstrap, Git y JavaScript en muy poco tiempo.",
        "Y lo hicimos. Completamos las tareas que nos propusimos, coordinamos esfuerzos, maquetamos, resolvimos problemas y, por unos gloriosos minutos, pensamos que todo iba de maravilla. Hasta que vimos los proyectos de los demás: '¿Y esas cinco funcionalidades adicionales? ¿Nosotros no teníamos que hacer eso también?'",
        "Resulta que, mientras estábamos muy concentrados en sacar adelante el sprint, habíamos estado trabajando con una rúbrica que no era la oficial. Curiosamente, ahí estuvo lo mejor de la experiencia: el equipo respondió, nos enfocamos en las bases y trabajamos juntos.",
        "Como nos quedamos con ganas de terminarlo, hicimos algo bastante lógico: nuestro primer Fork. Bifurcamos el repositorio para continuar el proyecto como un reto personal, reuniéndonos cada semana para compartir mejoras.",
      ],
      highlightQuote:
        "Cuando los documentos juegan una emboscada, un equipo unido y un buen Fork convierten el imprevisto en aprendizaje real.",
      teamCredits:
        "Equipo: Angela María Lara Picón, Brandon Moreno y Juan David Corrales Aguilar.",
      tags: [
        "#MiPrimerFork",
        "#Generation",
        "#Scrum",
        "#Teamwork",
        "#WebDevelopment",
      ],
    },
  ],
};