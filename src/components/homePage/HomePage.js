import React from "react";
import NavPart from "../NavPart";
import "../../styles/_homePage.scss";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Footer from "../Footer";
import Skills from "./Skills";
import Certificate from "./Certificate";
import GitHub from "./Github";

const HomePage = () => {
  console.log("Starting...");

  return (
    <div>
      <NavPart />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitHub />
      <Certificate />
      <Footer />
    </div>
  );
};

export default HomePage;
