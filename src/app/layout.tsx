import type { Metadata } from "next";
import { Nunito, Baloo_2 } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const baloo2 = Baloo_2({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const SITE_URL = "https://evelynpascual.pages.dev";
const SITE_TITLE =
  "Evelyn Pascual | Full-Stack Software Engineer (Java, Spring Boot & React)";
const SITE_DESCRIPTION =
  "Portfolio of Evelyn Pascual, Full-Stack Software Engineer specializing in Java, Spring Boot, MySQL, React, and TypeScript. Top 10% Systems & Informatics Engineering at UTP.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Evelyn Pascual",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Evelyn Pascual",
    "Full-Stack Software Engineer",
    "Desarrolladora Full-Stack",
    "Java Developer",
    "Spring Boot",
    "React",
    "TypeScript",
    "MySQL",
    "REST APIs",
    "Scrum",
    "Universidad Tecnológica del Perú",
    "UTP",
    "Lima Peru Software Engineer",
  ],
  authors: [{ name: "Evelyn Pascual", url: SITE_URL }],
  creator: "Evelyn Pascual",
  publisher: "Evelyn Pascual",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_PE"],
    url: SITE_URL,
    siteName: "Evelyn Pascual | Full-Stack Software Engineer",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/profile/EvelynPascualProfilePhoto.png",
        width: 800,
        height: 800,
        alt: "Evelyn Pascual - Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/profile/EvelynPascualProfilePhoto.png"],
  },
  verification: {
    google: "U0_z6Z5Py8xjXyD3udwIPVOfkYzyas4BFJG46bbkrIg",
  },
};

function JsonLdSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Evelyn Pascual",
    jobTitle: "Full-Stack Software Engineer",
    url: SITE_URL,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Tecnológica del Perú (UTP)",
    },
    knowsAbout: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "MySQL",
      "REST APIs",
      "Python",
      "Scrum",
    ],
    sameAs: [
      SITE_URL,
      "https://github.com/elynzx",
      "https://www.linkedin.com/in/evelynpascual/",
      "https://siroplan.pages.dev",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${baloo2.variable} h-full antialiased`}
    >
      <head>
        <JsonLdSchema />
      </head>

      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--ink-black)] font-sans">
        {children}
      </body>
    </html>
  );
}
