import React from "react";
import {herobackground} from "../../../assets/constant";

const HeroSection = () => {
  return (
    <section
      className="  relative bg-cover  h-[768px] text-white"
      style={{
        backgroundImage: `url(${herobackground})`,
        backgroundSize: "cover",
        
      }}
    >
      <div className=" absolute top-64 flex flex-col  bg-black bg-opacity-40 w-full  p-6 ">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-Playfair ml-16 py-3 max-w-xl max-sm:ml-0 max-sm:text-left">
            We help to bring your dream home to reality
          </h1>
        </div>
      </div>
      <button
        className=" absolute  left-32   top-[490px]  max-sm:left-4 max-sm:right-4 max-sm:w-[calc(250px)]
    max-sm:text-base
    max-sm:py-4
    max-sm:top-[490px]
    mt-10 
    rounded-lg 
    bg-[#996830] 
    px-8 
    py-4 
    text-xl 
    text-white 
    transition 
    duration-300 
    hover:bg-[#6a4c29]
   
  "
      >
        GET LIVE ESTIMATION
      </button>
    </section>
  );
};

export default HeroSection;
