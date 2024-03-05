import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import AboutMe from "../utils/AboutMe";
import Projects from "../utils/Projects";
import Skills from "../utils/Skills";

export default function main() {
  return (
    <div className="space-y-28">
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
