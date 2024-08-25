import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { CleanM } from "./components/CleanM";
import { Faq } from "./components/Faq";
import { Contact } from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <About />
        <Services />
        <CleanM />
        <Faq />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
