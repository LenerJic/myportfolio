import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { APing } from "./components/APing";

export function App() {
  return (
    <>
      <Header/>
      <APing/>
      <Hero/>
      <Navbar/>
      <About/>
      <Contact/>
    </>
  );
}
