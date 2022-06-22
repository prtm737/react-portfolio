import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sociallink from "./components/Sociallinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <Sociallink />
    </div>
  );
}

export default App;
