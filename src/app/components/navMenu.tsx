"use client"

import CardNav from "./CardNav";

export default function NavMenu() {
  const items = [
    {
      label: "Sobre mim",
      bgColor: "",
      textColor: "#fff",
      links: [
        { label: "Quem sou", href: "#about", ariaLabel: "Sobre mim" },
        { label: "Tecnologias", href: "#tech", ariaLabel: "Minhas Tecnologias" }
      ]
    },
    {
      label: "Projetos",
      bgColor: "",
      textColor: "#fff",
      links: [
        { label: "Meus Projetos", href: "#projects", ariaLabel: "meus projetos" },
      ]
    },
    {
      label: "Contato",
      bgColor: "",
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:dinizmarcienio@gmail.com", ariaLabel: "Me envie um email" },
        { label: "LinkedIn", href: "https://linkedin.com/in/marcieniodiniz", ariaLabel: "Meu LinkedIn" },
        { label: "GitHub", href: "https://github.com/MarcienioDev", ariaLabel: "Meu GitHub" }
      ]
    }
  ];

  return (
    <CardNav
      logo="/assets/logo.png"
      logoAlt="Logo do portfólio"
      items={items}
      baseColor="#1649ff"
      menuColor="#fff"
      buttonBgColor="#fff"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
}
