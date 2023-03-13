import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";

export function App() {
  return (
    <div>
      <div id="home" className="bg-site bg-no-repeat bg-cover min-h-screen flex flex-col lg:gap-4">
        <Header/>
        <Hero/>
      </div>
      <About/>
      <Contact/>
      <div className="fixed bottom-0 sm:bottom-8 flex justify-center w-screen items-center z-50">
        <Navbar />
      </div>
    </div>
  );
}
