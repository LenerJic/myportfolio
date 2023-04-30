import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { APing } from "./components/APing";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

export function App() {
  return (
    <>
      <Header/>
      <APing/>
      <Hero/>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
}
