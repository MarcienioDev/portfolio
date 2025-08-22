import AboutMe from "./components/aboutMe";
import BgMario from "./components/bgMario";
import Main from "./components/main";
import MyTech from "./components/mytech";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <BgMario />
      <Main />
      <AboutMe />
      <MyTech />
      <Projects />
      <Contact />
    </>
  );
}
