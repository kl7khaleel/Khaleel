import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
        background: "#080810",
        color: "#e2e8f0",
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}