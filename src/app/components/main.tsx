"use client";

import TextType from "./TextType";
import CardProfile from "./cardProfile";

export default function Main() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between h-screen text-white px-12 gap-6">    
      {/* Texto de apresentação */}
      <div className="flex-1 flex flex-col justify-center md:justify-start">
        <TextType 
          text={["Hello World, me chamo Marciênio, tudo bem?"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          cursorClassName="text-white"
          className="font-semibold text-xl md:text-3xl"
        />
        <p className="pt-4 text-blue-500 font-medium max-w-md">
          Obrigado por acessar meu portfólio! Venha conhecer mais sobre mim.
        </p>
      </div>

      {/* Card de perfil */}
      <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
        <CardProfile />
      </div>
    </main>
  );
}
