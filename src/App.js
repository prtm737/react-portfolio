import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sociallink from "./components/Sociallinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <Sociallink />
    </div>
  );
}

export default App;
