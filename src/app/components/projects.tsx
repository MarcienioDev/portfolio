import { ProjectCard } from "./cardProjects"

export default function Projects() {
  return (
    <section className="bg-primary flex flex-col justify-center items-center p-20">
      <div>
        <h1 className="text-4xl font-extrabold text-white">Meus projetos</h1>
      </div>

      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Blog */}
        <ProjectCard
          title="Blog"
          imageUrl="/assets/blog.png"
          description="Projeto criado em um desafio da comunidade da CodeLab para recriar a interface com html e css, recriando um blog."
          projectUrl="https://github.com/MarcienioDev/desafio01-blog"
          tags={["HTML", "CSS", "JavaScript"]}
        />
        {/* Jordan Shoes */}
        <ProjectCard
          title="Jordan Shoes"
          imageUrl="/assets/jordanshoes.png"
          description="Projeto também criado em um desafio da comunidade da CodeLab para recriar a interface com html e css, recriando uma loja."
          projectUrl="https://github.com/MarcienioDev/desafio02-jordanshoes"
          tags={["HTML", "CSS"]}
        />
        {/* FIPIA */}
        <ProjectCard
          title="FIPIA"
          imageUrl="/assets/fipia.png"
          description="Projeto criado para uma amostra de profissões em uma escola de ensino médio, a FIPIA é uma IA que faz uma entrevista com os alunos e dá uma resposta baseada nas perguntas, que vocação ela tem."
          projectUrl="https://github.com/MarcienioDev/chatbot-fip-facul"
          tags={["NEXTJS", "TYPESCRIPT", "TAILWIND"]}
        />
      </div>
    </section>
  )
}
