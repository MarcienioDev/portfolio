"use client"

import TextType from "./TextType";
import CardProfile from "./cardProfile";

export default function Main() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between h-screen text-white px-50">    
      <div className="flex-1 flex-col flex justify-center md:justify-start">
        <TextType 
          text={["Hello World, Me chamo Marciênio, Tudo bem?"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          cursorClassName="text-white"
          className="font-semibold text-lg md:text-2xl"
        />
      <p className="pt-3 text-blue-600 font-semibold">Obrigado por acessar meu portfólio! Venha conhecer mais sobre mim.</p>
      </div>

      <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
        <CardProfile />
      </div>
    </main>
  );
}
