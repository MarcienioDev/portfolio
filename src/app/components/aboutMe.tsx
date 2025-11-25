import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="px-8 py-20 bg-primary flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">
  <div className="flex justify-center">
    <Image
      src="/assets/ProfilePic.png"
      alt="Profile Picture"
      width={280}
      height={280}
      className="rounded-full shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300"
    />
  </div>
  <div className="max-w-xl">
    <h2 className="text-4xl font-extrabold mb-6 text-white drop-shadow-md">
      Sobre Mim
    </h2>
    <p className="text-lg font-medium text-gray-100 leading-relaxed">
      Oi, me chamo <span className="text-accent font-semibold">Marciênio</span>, 
      atualmente sou estudante de <span className="text-accent font-semibold">Análise e Desenvolvimento de Sistemas</span>.
      Sou <span className="text-accent font-semibold">desenvolvedor Web</span> e estou sempre buscando melhorar minhas 
      habilidades com as tecnologias que utilizo.
      Gosto muito do que faço e estou sempre em busca de 
      <span className="text-accent font-semibold"> novos desafios e aprendizados</span>.
    </p>
  </div>
</section>

  );
}
