import React from "react";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SlidingSection from "./Slidersection";
import Portfolio from "./PortfolioSection";

import ProjectEstimate from "./ProjectEstimate";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import TawkTo from "./TawkTo";

const Static = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <SlidingSection />
      <Portfolio />
      <Gallery />
      <ProjectEstimate />
      <TawkTo/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Static;
