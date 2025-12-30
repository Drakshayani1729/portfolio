import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DownloadSection from "./components/DownloadSection";

function App() {
  return (
    <div className="min-h-screen bg-white">

      {/* CONTENT TO EXPORT */}
      <div id="content">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Publications />
        <Contact />
      </div>

      {/* DOWNLOAD BUTTONS */}
      <div className="flex justify-center my-10">
        <DownloadSection />
      </div>

      <Footer />
    </div>
  );
}

export default App;
