import type { Locale } from "@/data/dictionary";

export interface CaseStudyFeature {
  title: string;
  detail: string;
}

export interface CaseStudyData {
  milestone: string;
  roleTitle: string;
  categoryLabel: string;
  cardSummary: string;
  mobileSummary: string;
  productOverview: string;
  featuresAndUseCases: CaseStudyFeature[];
  techStackParagraph: string;
  coreTriad: [string, string, string];
}

export const PROJECT_CASE_STUDIES: Record<
  Locale,
  Record<string, CaseStudyData>
> = {
  en: {
    "lumina-eventos": {
      milestone: "FULL-STACK CAPSTONE PROJECT",
      roleTitle: "Full-Stack Software Engineer",
      categoryLabel: "EVENT BOOKING PLATFORM",
      cardSummary:
        "Lets event venue owners manage multiple locations, furniture, and add-on services like catering or photography from an admin dashboard while clients book with instant quotes. Built with Java, Spring Boot, MySQL, and React.",
      mobileSummary:
        "Lets event venue owners manage multiple locations, furniture, and add-on services like catering or photography from an admin dashboard while clients book with instant quotes.",
      productOverview:
        "A full-stack event venue and furniture booking platform. It centralizes location, inventory, and reservation management for business owners while giving clients instant quotes and online booking in one flow.",
      featuresAndUseCases: [
        {
          title: "Search, Date Locking & Instant Booking",
          detail:
            "Filter venues by district, capacity, and event type, select exact dates and hours, add furniture, and get an instant downloadable receipt.",
        },
        {
          title: "Multi-Venue Management for Business Owners",
          detail:
            "Create and update venues, control furniture availability, review incoming bookings, and monitor key metrics from an admin panel.",
        },
        {
          title: "Personal Profile & Reservation Tracking",
          detail:
            "Update contact details and review upcoming or past event bookings in one place.",
        },
      ],
      techStackParagraph:
        "Architected as a full-stack web platform pairing a React, TypeScript, and Vite frontend (organized under Atomic Design with Zustand and Tailwind CSS) to handle multi-step booking state, with a layered Java 17 and Spring Boot 3.x REST API backed by MySQL 8.0, BCrypt encryption, stateless JWT role guards ('CLIENT' / 'ADMIN'), and Cloudinary media storage.",
      coreTriad: ["React", "Spring Boot", "MySQL"],
    },
    pawguard: {
      milestone: "TECSUP FINAL CAPSTONE PROJECT",
      roleTitle: "Full-Stack Software Engineer",
      categoryLabel: "VETERINARY INSURTECH PLATFORM",
      cardSummary:
        "Enables veterinary businesses to launch and manage pet insurance plans while letting pet owners compare coverage, purchase policies, and track care. Built with React, TypeScript, Spring Boot, and PostgreSQL.",
      mobileSummary:
        "Enables veterinary businesses to launch and manage pet insurance plans while letting pet owners compare coverage, purchase policies, and track care.",
      productOverview:
        "A veterinary insurtech platform for the Peruvian market. It allows veterinary businesses to launch and manage insurance plans while pet owners compare coverage, enroll dogs or cats, and locate partner clinics.",
      featuresAndUseCases: [
        {
          title: "Plan Comparison & Fast Online Enrollment",
          detail:
            "Compare coverage plans for dogs or cats, review medical benefits, and purchase an annual policy with monthly payments in a few steps.",
        },
        {
          title: "Pet Profiles & Active Policy Dashboard",
          detail:
            "Register pets with photos, check active coverage, and activate accounts simply using email and DNI.",
        },
        {
          title: "Affiliated Vet Clinic Map & Plan Administration",
          detail:
            "Locate partner veterinary clinics by district in Lima on an interactive map and manage plans and issued policies.",
        },
      ],
      techStackParagraph:
        "Built with React 18, TypeScript, and Vite structured by business domains, integrating Zustand for onboarding persistence and React Leaflet (OpenStreetMap) for clinic geolocation. Delivered initially with Django 5, DRF, and PostgreSQL 16 as a Tecsup capstone project, the backend domain layer is actively migrating to Java 17 and Spring Boot 3.x.",
      coreTriad: ["React", "Spring Boot", "PostgreSQL"],
    },
    "siro-plan": {
      milestone: "GENERATION INDIVIDUAL GRADUATION PROJECT",
      roleTitle: "Creator & Full-Stack Developer",
      categoryLabel: "KANBAN & FOCUS WORKSPACE",
      cardSummary:
        "Breaks demanding study goals and dev projects into drag-and-drop Kanban tasks powered by Pomodoro sessions and Siro, a virtual study companion. Crafted with ES6+ JavaScript, Spring Boot, and MySQL.",
      mobileSummary:
        "Breaks demanding study goals and dev projects into drag-and-drop Kanban tasks powered by Pomodoro sessions and Siro, a virtual study companion.",
      productOverview:
        "A visual Kanban workspace with an integrated Pomodoro timer for students and creators. It pairs multi-project task boards with Siro, a cute virtual study companion designed to make daily planning inviting.",
      featuresAndUseCases: [
        {
          title: "Separate Kanban Boards per Project",
          detail:
            "Organize exams, courses, or coding projects into independent boards and move tasks across To Do, In Progress, and Done.",
        },
        {
          title: "Quick Task Editing & Real-Time Validation",
          detail:
            "Create, edit, filter, and delete tasks cleanly with instant form checks that prevent incomplete entries.",
        },
        {
          title: "Built-In Pomodoro Timer with Siro",
          detail:
            "Pair timed focus and break intervals directly with active tasks while Siro accompanies your daily study rhythm.",
        },
      ],
      techStackParagraph:
        "Created for Generation's individual graduation milestone under guidelines requiring dependency-free Vanilla JavaScript. Solved by structuring modular ES6+ object-oriented classes for models, managers, and UI components in HTML5 and CSS3 (deployed on Cloudflare), integrated with a Java 17, Spring Boot 3.x, and MySQL 8.0 REST API for persistent boards.",
      coreTriad: ["JavaScript (ES6+)", "Spring Boot", "MySQL"],
    },
    "raices-del-valle": {
      milestone: "GENERATION TEAM GRADUATION PROJECT",
      roleTitle: "Scrum Master & Full-Stack Developer",
      categoryLabel: "AGRICULTURAL B2B/B2C MARKETPLACE",
      cardSummary:
        "Connects associated Colombian farms directly with local shops, restaurants, and families without middlemen. Led Agile delivery as Scrum Master and built core modules with JavaScript, Spring Boot, and MySQL.",
      mobileSummary:
        "Connects associated Colombian farms directly with local shops, restaurants, and families without middlemen.",
      productOverview:
        "A B2B and B2C agricultural marketplace that connects associated Colombian farms directly with local shops, restaurants, and households, eliminating middlemen and highlighting harvest origin.",
      featuresAndUseCases: [
        {
          title: "Direct Farm Storefront & Featured Harvests",
          detail:
            "Browse seasonal agricultural products directly from associated farms with transparent pricing for both businesses and families.",
        },
        {
          title: "Product & Farm Origin Traceability",
          detail:
            "Inspect harvest specifications alongside the story and background of the rural farm cultivating each product.",
        },
        {
          title: "User Registration & Direct Order Flow",
          detail:
            "Create buyer or producer accounts, manage shopping cart quantities, and submit direct harvest orders online.",
        },
      ],
      techStackParagraph:
        "Built with Vanilla JavaScript (ES6+), HTML5, and CSS3 per project requirements, applying a standardized reusable component architecture integrated with a layered REST backend in Java 17, Spring Boot 3.x, Spring Data JPA, and MySQL 8.0.",
      coreTriad: ["JavaScript", "Spring Boot", "MySQL"],
    },
    "lulu-and-co": {
      milestone: "FULL-STACK SPECIALTY E-COMMERCE",
      roleTitle: "Full-Stack Software Engineer",
      categoryLabel: "GLUTEN-FREE & SUGAR-FREE PERUVIAN DESSERTS",
      cardSummary:
        "E-commerce platform market specializing in healthy, sugar-free, diabetic-friendly, and gluten-free Peruvian desserts crafted with native ingredients, featuring an educational blog and order management. Built with React, Spring Boot, and MySQL.",
      mobileSummary:
        "E-commerce platform market for sugar-free, gluten-free Peruvian desserts with nutrition blog and order management.",
      productOverview:
        "A specialty e-commerce platform for the US market focused on healthy, sugar-free, diabetic-friendly, and gluten-free Peruvian desserts made with native ingredients like lucuma, combining online ordering with an educational blog.",
      featuresAndUseCases: [
        {
          title: "Dietary & Accent-Insensitive Product Discovery",
          detail:
            "Customers filter sugar-free and gluten-free Peruvian desserts by category, flagship ingredient (lucuma, cacao, quinoa), or accent-insensitive search across mobile and desktop.",
        },
        {
          title: "Superfood & Nutritional Storytelling Blog",
          detail:
            "Editorial blog educating international shoppers on the glycemic benefits of Peruvian superfoods like lucuma and the craft behind gluten-free recipes.",
        },
        {
          title: "Persistent Cart & Full-Stack Order Management",
          detail:
            "Shoppers customize quantities, review itemized summaries, and complete orders backed by persistent catalog, blog, and inventory endpoints.",
        },
      ],
      techStackParagraph:
        "Originally built for a Tecsup frontend module using modular ES6 JavaScript, semantic HTML5, and Tailwind CSS, the platform is migrating to React, TypeScript, and Vite paired with a Java 17, Spring Boot 3.x, Spring Data JPA, and MySQL 8.0 REST API to manage products, dietary tags, blog posts, and customer orders.",
      coreTriad: ["React", "Spring Boot", "MySQL"],
    },
  },
  es: {
    "lumina-eventos": {
      milestone: "PROYECTO INTEGRAL FULL-STACK",
      roleTitle: "Ingeniera de Software Full-Stack",
      categoryLabel: "PLATAFORMA DE RESERVAS Y EVENTOS",
      cardSummary:
        "Permite a empresarios administrar múltiples locales, mobiliario y servicios adicionales como catering o fotografía desde un panel admin, mientras clientes cotizan y reservan al instante. Desarrollada con Java, Spring Boot, MySQL y React.",
      mobileSummary:
        "Plataforma full-stack de reserva de locales y mobiliario con panel admin multi-sede y cotización al instante.",
      productOverview:
        "Plataforma full-stack de gestión y reserva de locales y mobiliario para eventos. Centraliza el inventario y la disponibilidad para dueños de negocios mientras ofrece a los clientes cotización y reserva online en un solo flujo.",
      featuresAndUseCases: [
        {
          title: "Búsqueda, Reserva de Fecha y Cotización al Instante",
          detail:
            "Filtra locales por distrito, aforo y tipo de evento, bloquea día y horario, añade mobiliario extra y descarga tu comprobante en PDF.",
        },
        {
          title: "Gestión Centralizada para Dueños de Locales",
          detail:
            "Crea y edita locales, controla disponibilidad de mobiliario, revisa reservas entrantes y consulta métricas clave desde un panel privado.",
        },
        {
          title: "Perfil Personal e Historial de Reservas",
          detail:
            "Actualiza datos de contacto y consulta el estado de tus eventos próximos o pasados en un mismo lugar.",
        },
      ],
      techStackParagraph:
        "Diseñado como una plataforma web integral que combina un frontend en React, TypeScript y Vite (estructurado bajo Atomic Design con Zustand y Tailwind CSS) para sostener cotizaciones multipaso, conectado a una API REST en capas con Java 17, Spring Boot 3.x, MySQL 8.0, encriptación BCrypt, seguridad JWT por roles ('CLIENTE' / 'ADMIN') y Cloudinary.",
      coreTriad: ["React", "Spring Boot", "MySQL"],
    },
    pawguard: {
      milestone: "PROYECTO FINAL EN TECSUP",
      roleTitle: "Ingeniera de Software Full-Stack",
      categoryLabel: "PLATAFORMA INSURTECH VETERINARIA",
      cardSummary:
        "Permite a empresas veterinarias crear, gestionar y comercializar sus propios planes de seguro mientras los dueños comparan coberturas y adquieren pólizas. Construida con React, TypeScript, Spring Boot y PostgreSQL.",
      mobileSummary:
        "Plataforma insurtech veterinaria para gestionar planes de seguro, comparar coberturas y afiliar mascotas online.",
      productOverview:
        "Plataforma insurtech veterinaria diseñada para el mercado peruano. Permite a clínicas crear y gestionar planes de cobertura mientras los dueños comparan beneficios, afilian a sus mascotas y ubican veterinarias cercanas.",
      featuresAndUseCases: [
        {
          title: "Comparador de Planes y Compra Online Rápida",
          detail:
            "Compara coberturas para perros o gatos, revisa beneficios médicos y contrata una póliza anual con pago mensual en pocos pasos.",
        },
        {
          title: "Perfil de Mascotas y Activación con DNI",
          detail:
            "Registra mascotas con foto, consulta pólizas activas y activa tu cuenta de forma sencilla validando correo y DNI.",
        },
        {
          title: "Mapa de Clínicas Afiliadas y Gestión de Planes",
          detail:
            "Ubica veterinarias afiliadas por distrito en Lima sobre un mapa interactivo y administra planes y pólizas emitidas.",
        },
      ],
      techStackParagraph:
        "Desarrollado con React 18, TypeScript y Vite organizado por dominios de negocio, integrando Zustand para conservar el flujo de contratación y React Leaflet (OpenStreetMap) para geolocalizar clínicas. Entregado inicialmente con Django 5, DRF y PostgreSQL 16 como proyecto final en Tecsup, hoy su capa de servicios migra hacia Java 17 y Spring Boot 3.x.",
      coreTriad: ["React", "Spring Boot", "PostgreSQL"],
    },
    "siro-plan": {
      milestone: "PROYECTO PERSONAL DE GRADUACIÓN EN GENERATION",
      roleTitle: "Creadora y Desarrolladora Full-Stack",
      categoryLabel: "WORKSPACE KANBAN Y ENFOQUE",
      cardSummary:
        "Convierte exámenes y proyectos exigentes en tareas Kanban con drag-and-drop, sesiones Pomodoro y la compañía de Siro, una mascota virtual de estudio. Creada con JavaScript ES6+, Spring Boot y MySQL.",
      mobileSummary:
        "Workspace Kanban con tableros drag-and-drop, temporizador Pomodoro y mascota virtual de estudio Siro.",
      productOverview:
        "Espacio de trabajo Kanban con temporizador Pomodoro integrado para estudiantes y creadores. Combina tableros por proyecto con Siro, una mascota virtual cute diseñada para hacer agradable la organización diaria.",
      featuresAndUseCases: [
        {
          title: "Tableros Kanban Independientes por Proyecto",
          detail:
            "Organiza materias, exámenes o proyectos técnicos en tableros propios y mueve tareas entre Por hacer, En proceso y Realizado.",
        },
        {
          title: "Edición Rápida y Validación en Tiempo Real",
          detail:
            "Crea, edita, filtra y elimina tareas de forma limpia con alertas inmediatas que evitan registros incompletos.",
        },
        {
          title: "Temporizador Pomodoro Integrado con Siro",
          detail:
            "Vincula bloques de concentración y descanso directamente con tus tareas activas junto a Siro para sostener el ritmo de estudio.",
        },
      ],
      techStackParagraph:
        "Creado como proyecto individual de graduación en Generation bajo lineamientos que exigían JavaScript Vanilla sin frameworks. Se resolvió estructurando clases modulares ES6+ orientadas a objetos para modelos, servicios y componentes en HTML5 y CSS3 (desplegado en Cloudflare), integrado con una API REST en Java 17, Spring Boot 3.x y MySQL 8.0.",
      coreTriad: ["JavaScript (ES6+)", "Spring Boot", "MySQL"],
    },
    "raices-del-valle": {
      milestone: "PROYECTO GRUPAL DE GRADUACIÓN EN GENERATION",
      roleTitle: "Scrum Master y Desarrolladora Full-Stack",
      categoryLabel: "MARKETPLACE AGRÍCOLA B2B / B2C",
      cardSummary:
        "Conecta fincas campesinas asociadas en Colombia directamente con tiendas, restaurantes y hogares sin intermediarios. Lideré como Scrum Master y desarrollé módulos clave con JavaScript, Spring Boot y MySQL.",
      mobileSummary:
        "Marketplace agrícola B2B/B2C que conecta fincas colombianas directamente con tiendas, restaurantes y familias.",
      productOverview:
        "Marketplace agrícola B2B y B2C que conecta fincas campesinas asociadas en Colombia directamente con tiendas, restaurantes y hogares, eliminando intermediarios y destacando el origen de cada cosecha.",
      featuresAndUseCases: [
        {
          title: "Tienda Directa del Campo y Cosechas Destacadas",
          detail:
            "Explora productos agrícolas frescos directamente de fincas asociadas con precios transparentes para negocios y familias.",
        },
        {
          title: "Trazabilidad de Producto y Finca Productora",
          detail:
            "Consulta las características de cada cosecha junto con la historia y origen de la finca campesina que la cultiva.",
        },
        {
          title: "Registro de Usuarios y Flujo de Pedidos Directos",
          detail:
            "Permite crear cuentas de comprador o productor, gestionar cantidades en el carrito y realizar pedidos de cosechas en línea.",
        },
      ],
      techStackParagraph:
        "Desarrollado con JavaScript Vanilla (ES6+), HTML5 y CSS3 por requerimiento del proyecto, aplicando una arquitectura basada en componentes reutilizables estandarizados, integrado con un backend REST en capas en Java 17, Spring Boot 3.x, Spring Data JPA y MySQL 8.0.",
      coreTriad: ["JavaScript", "Spring Boot", "MySQL"],
    },
    "lulu-and-co": {
      milestone: "E-COMMERCE FULL-STACK DE NICHO SALUDABLE",
      roleTitle: "Ingeniera de Software Full-Stack",
      categoryLabel: "POSTRES PERUANOS SIN GLUTEN Y APTOS PARA DIABÉTICOS",
      cardSummary:
        "E-commerce orientado al mercado de EE. UU. especializado en postres peruanos saludables, sin azúcar, aptos para diabéticos y libres de gluten elaborados con insumos nativos, con blog educativo y gestión de pedidos. Desarrollado con React, Spring Boot y MySQL.",
      mobileSummary:
        "E-commerce para EE. UU. de postres peruanos saludables sin azúcar ni gluten, con blog nutricional y pedidos.",
      productOverview:
        "E-commerce especializado para el mercado de EE. UU. enfocado en postres peruanos saludables, sin azúcar, aptos para diabéticos y libres de gluten elaborados con insumos nativos como la lúcuma, integrando compra online y blog educativo.",
      featuresAndUseCases: [
        {
          title: "Búsqueda Inteligente y Filtro por Insumos Peruanos",
          detail:
            "Permite explorar postres sin gluten y aptos para diabéticos por categoría, ingrediente bandera (lúcuma, cacao, quinua) o búsqueda insensible a tildes.",
        },
        {
          title: "Blog Editorial sobre Lúcuma y Nutrición",
          detail:
            "Sección de artículos dedicada a difundir en el extranjero los beneficios glucémicos de los superfoods peruanos y el proceso artesanal de cada receta.",
        },
        {
          title: "Carrito Persistente y Gestión Full-Stack de Pedidos",
          detail:
            "Los clientes ajustan cantidades, revisan el resumen de compra y procesan órdenes conectadas a un catálogo e inventario persistente.",
        },
      ],
      techStackParagraph:
        "Desarrollado inicialmente en JavaScript ES6 modular, HTML5 y Tailwind CSS para un módulo frontend en Tecsup, se encuentra en migración hacia React, TypeScript y Vite conectado a una API REST en Java 17, Spring Boot 3.x, Spring Data JPA y MySQL 8.0 para gestionar catálogo, etiquetas nutricionales, blog y órdenes.",
      coreTriad: ["React", "Spring Boot", "MySQL"],
    },
  },
};
