import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavMenu from "./components/navMenu";
import Footer from "./components/footer";


export const metadata: Metadata = {
  title: "Marciênio Bezerra Diniz",
  description: "Oi, me chamo Marciênio, atualmente sou estudante de Análise e Desenvolvimento de Sistemas. Sou desenvolvedor Web e estou sempre buscando melhorar minhas habilidades com as tecnologias que utilizo. Gosto muito do que faço e estou sempre em busca de novos desafios e aprendizados.",
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
}); 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} antialiased`}>
      <NavMenu />
        {children}
      <Footer />
      </body>
    </html>
  );
}
