import React from "react";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SlidingSection from "./Slidersection";
import Portfolio from "./PortfolioSection";

import ProjectEstimate from "./ProjectEstimate";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";

const Static = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SlidingSection />
      <Portfolio />
      <Gallery />
      <ProjectEstimate />
      <Contact />
      <Footer />
    </div>
  );
};

export default Static;
