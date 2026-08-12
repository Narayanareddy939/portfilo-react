import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import WaveDivider from './components/WaveDivider';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      {/* Hero → About */}
      <WaveDivider fill="#0f1714" path="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" />
      <About />
      {/* About → Experience */}
      <WaveDivider fill="#0e0b07" path="M0,32 C480,64 960,0 1440,32 L1440,64 L0,64 Z" />
      <Experience />
      {/* Experience → Projects */}
      <WaveDivider fill="#050d0c" path="M0,20 C360,60 1080,0 1440,40 L1440,64 L0,64 Z" />
      <Projects />
      {/* Projects → Skills */}
      <WaveDivider fill="#07100e" path="M0,40 C480,0 960,64 1440,20 L1440,64 L0,64 Z" />
      <Skills />
      {/* Skills → Publication */}
      <WaveDivider fill="#0f1714" path="M0,30 C400,64 1040,0 1440,35 L1440,64 L0,64 Z" />
      <Publications />
      {/* Publication → Certifications */}
      <WaveDivider fill="#0a2420" path="M0,30 C400,64 1040,0 1440,35 L1440,64 L0,64 Z" />
      <Certifications />
      {/* Certifications → Contact */}
      <WaveDivider fill="#030807" path="M0,35 C360,0 1080,64 1440,25 L1440,64 L0,64 Z" />
      <Contact />
    </>
  );
}
