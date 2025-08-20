"use client"

import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import { FaNode } from "react-icons/fa";
import LogoLoop from './LogoLoop';

export default function MyTech (){
    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <FaNode />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiPostgresql />, title: "Postgresql", href: "https://www.postgresql.org" },
    ];
    
    return (
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}} className='bg-white pt-20 text-primary'>
        <h1 className='flex justify-center text-4xl font-extrabold'>Minhas tecnologias</h1>
        <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technologys"
            className='pt-20'
        />
    </div>
    )
}