"use client";

import { useState } from "react";
import { dictionary, type Locale } from "@/data/dictionary";
import { Navbar } from "@/components/layout/Navbar";
import { SocialRail } from "@/components/layout/SocialRail";
import { Footer } from "@/components/layout/Footer";
import { HeroCover } from "@/components/sections/HeroCover";
import { ProjectSheet } from "@/components/sections/ProjectSheet";
import { AboutEditorial } from "@/components/sections/AboutEditorial";
import { TrajectoryGrid } from "@/components/sections/TrajectoryGrid";
import { FieldNotes } from "@/components/sections/FieldNotes";
import { SmoothSectionScroll } from "@/components/ui/SmoothSectionScroll";

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = dictionary[locale];

  const handleToggleLocale = () => {
    setLocale((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FFFFFF] text-[var(--ink-black)]">
      <SmoothSectionScroll />

      <Navbar
        nav={copy.nav}
        locale={locale}
        onToggleLocale={handleToggleLocale}
      />

      <SocialRail socialLinks={copy.nav.socialLinks} locale={locale} />

      <main className="w-full">
        <HeroCover hero={copy.hero} locale={locale} />
        <ProjectSheet projects={copy.projects} locale={locale} />
        <AboutEditorial about={copy.about} locale={locale} />
        <TrajectoryGrid trajectory={copy.trajectory} locale={locale} />
        <FieldNotes fieldNotes={copy.fieldNotes} locale={locale} />
      </main>

      <Footer
        nav={copy.nav}
        projects={copy.projects}
        locale={locale}
        onToggleLocale={handleToggleLocale}
      />
    </div>
  );
}