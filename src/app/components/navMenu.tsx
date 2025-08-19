"use client"

import CardNav from "./CardNav";

export default function NavMenu() {
  const items = [
    {
      label: "Sobre mim",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Quem sou", href: "/about/me", ariaLabel: "Sobre mim" },
        { label: "Carreira", href: "/about/career", ariaLabel: "Minha carreira" },
        { label: "Skills", href: "/about/skills", ariaLabel: "Minhas Skills" }
      ]
    },
    {
      label: "Projetos",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Meus Projetos", href: "/projects/all", ariaLabel: "meus projetos" },
      ]
    },
    {
      label: "Contato",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:marcienio@example.com", ariaLabel: "Me envie um email" },
        { label: "LinkedIn", href: "https://linkedin.com/in/marcienio", ariaLabel: "Meu LinkedIn" },
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
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
}
