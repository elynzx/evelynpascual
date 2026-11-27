import type { ComponentType } from "react";
import { FaCss3Alt, FaJava } from "react-icons/fa6";
import {
  SiAngular,
  SiApachemaven,
  SiCloudflare,
  SiCloudinary,
  SiDjango,
  SiDocker,
  SiFlask,
  SiGit,
  SiGithub,
  SiGradle,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiReacthookform,
  SiSpring,
  SiSpringboot,
  SiSpringsecurity,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

interface TechIconTileProps {
  name: string;
  compact?: boolean;
}

export function getOfficialIcon(
  techName: string,
): ComponentType<{ className?: string }> | null {
  const normalized = techName.toLowerCase();

  if (normalized.includes("java") && !normalized.includes("javascript")) {
    return FaJava;
  }
  if (normalized.includes("spring security")) {
    return SiSpringsecurity;
  }
  if (normalized.includes("jwt")) {
    return SiJsonwebtokens;
  }
  if (normalized.includes("spring data") || normalized === "spring") {
    return SiSpring;
  }
  if (normalized.includes("spring")) {
    return SiSpringboot;
  }
  if (normalized.includes("postgres")) {
    return SiPostgresql;
  }
  if (normalized.includes("mysql")) {
    return SiMysql;
  }
  if (normalized === "sql") {
    return TbSql;
  }
  if (normalized.includes("supabase")) {
    return SiSupabase;
  }
  if (normalized.includes("flask")) {
    return SiFlask;
  }
  if (normalized.includes("django")) {
    return SiDjango;
  }
  if (normalized.includes("python")) {
    return SiPython;
  }
  if (normalized.includes("maven")) {
    return SiApachemaven;
  }
  if (normalized.includes("gradle")) {
    return SiGradle;
  }
  if (normalized.includes("docker")) {
    return SiDocker;
  }
  if (normalized.includes("azure")) {
    return VscAzure;
  }
  if (normalized.includes("angular")) {
    return SiAngular;
  }
  if (normalized.includes("react hook form")) {
    return SiReacthookform;
  }
  if (normalized.includes("react")) {
    return SiReact;
  }
  if (normalized.includes("typescript")) {
    return SiTypescript;
  }
  if (normalized.includes("javascript")) {
    return SiJavascript;
  }
  if (normalized.includes("next")) {
    return SiNextdotjs;
  }
  if (normalized.includes("tailwind")) {
    return SiTailwindcss;
  }
  if (normalized === "css3" || normalized === "css") {
    return FaCss3Alt;
  }
  if (normalized.includes("html")) {
    return SiHtml5;
  }
  if (normalized.includes("github")) {
    return SiGithub;
  }
  if (normalized.includes("git")) {
    return SiGit;
  }
  if (normalized.includes("cloudinary")) {
    return SiCloudinary;
  }
  if (normalized.includes("cloudflare")) {
    return SiCloudflare;
  }
  if (normalized.includes("postman")) {
    return SiPostman;
  }
  if (normalized.includes("vite")) {
    return SiVite;
  }

  return null;
}

export function TechIconTile({ name, compact = false }: TechIconTileProps) {
  const Icon = getOfficialIcon(name);

  if (!Icon) return null;

  return (
    <div
      className={`group flex flex-col items-center justify-center text-center transition-all duration-200 ${
        compact ? "py-1.5 px-1 gap-1.5" : "py-2.5 px-2 gap-2.5"
      }`}
    >
      <Icon
        className={`${
          compact ? "h-7 w-7" : "h-8 w-8"
        } text-[#71717A] group-hover:text-neon-lime group-hover:scale-110 transition-all duration-200`}
      />
      <span
        className={`${
          compact ? "text-[10px]" : "text-xs"
        } font-semibold text-[var(--ink-muted)] group-hover:text-[var(--ink-black)] leading-tight transition-colors duration-200`}
      >
        {name}
      </span>
    </div>
  );
}
