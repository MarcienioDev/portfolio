"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import { FaNode, FaJs } from "react-icons/fa";
import LogoLoop from "./LogoLoop";

export default function MyTech() {
  const techLogos = [
    {
      node: <SiReact className="text-sky-500 w-20 h-20" />, // 80px
      title: "React",
      href: "https://react.dev",
    },
    {
      node: <SiNextdotjs className="text-black w-20 h-20" />,
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      node: <SiTypescript className="text-blue-600 w-20 h-20" />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss className="text-cyan-500 w-20 h-20" />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
    {
      node: <FaNode className="text-green-600 w-20 h-20" />,
      title: "Node.js",
      href: "https://nodejs.org",
    },
    {
      node: <SiPostgresql className="text-sky-700 w-20 h-20" />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org",
    },
    {
      node: <FaJs className="text-yellow-500 w-20 h-20" />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
  ];

  return (
    <section className="bg-white py-20 text-primary" id="tech">
      <h1 className="text-center text-4xl font-extrabold">
        Minhas Tecnologias
      </h1>

      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={120}
        gap={60}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technologies"
        className="pt-16"
      />
    </section>
  );
}
