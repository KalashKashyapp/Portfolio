import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
// import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './BlurBlob';

const App = () => {
  return (
    <div className="bg-[#020c1b] overflow-x-hidden">
      <BlurBlob position={{ top: '15%', left: '10%' }} size={{ width: '35%', height: '35%' }} />
      <BlurBlob position={{ top: '55%', left: '85%' }} size={{ width: '25%', height: '25%' }} />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2a1e33_1px,transparent_1px),linear-gradient(to_bottom,#0f2a1e33_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)] pointer-events-none"></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;