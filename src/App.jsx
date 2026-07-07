import Bubbles  from "./components/Bubbles";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Projects from "./components/Projects";
import About    from "./components/About";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";
import AutomationSection from './components/AutomationSection'

export default function App() {
  return (
    <div style={{ position: "relative" }}>
      <Bubbles />
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <Projects />
        <About />
        <AutomationSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
