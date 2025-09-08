"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { JSX } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags?: string[];
}

const techConfig: Record<
  string,
  { color: string; icon: JSX.Element }
> = {
  javascript: { color: "bg-yellow-400 text-white", icon: <FaJs /> },
  html: { color: "bg-orange-500 text-white", icon: <FaHtml5 /> },
  css: { color: "bg-blue-500 text-white", icon: <FaCss3Alt /> },
  nextjs: { color: "bg-black text-white", icon: <SiNextdotjs /> },
  typescript: { color: "bg-blue-700 text-white", icon: <SiTypescript /> },
  react: { color: "bg-cyan-500 text-white", icon: <FaReact /> },
  tailwind: { color: "bg-sky-400 text-white", icon: <SiTailwindcss /> },
};

export function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  tags = [],
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-2xl shadow-lg hover:shadow-primary/40 hover:scale-[1.02] transition-transform duration-300">
      {/* Conteúdo principal */}
      <CardContent className="flex flex-col items-center gap-4 p-4">
        {/* Imagem */}
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={250}
          className="rounded-lg object-cover shadow-md"
        />

        {/* Título */}
        <CardTitle className="text-primary font-bold text-xl text-center">
          {title}
        </CardTitle>

        {/* Descrição */}
        <CardDescription className="text-center text-muted-foreground">
          {description}
        </CardDescription>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-3">
          {tags.map((tag, index) => {
            const lowerTag = tag.toLowerCase();
            const tech = techConfig[lowerTag];
            return (
              <span
                key={index}
                className={`flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full shadow-sm ${
                  tech?.color || "bg-gray-300 text-black"
                }`}
              >
                {tech?.icon && <span className="text-lg">{tech.icon}</span>}
                {tag}
              </span>
            );
          })}
        </div>
      </CardContent>

      {/* Botão */}
      <CardFooter className="px-5 pb-4">
        <Button
          asChild
          className="w-full bg-primary text-white hover:scale-105 transition-transform"
        >
          <a href={projectUrl} target="_blank" rel="noopener noreferrer">
            Ver Projeto
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
