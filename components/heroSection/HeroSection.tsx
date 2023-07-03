import React from "react";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";
import HeroBottom from "./HeroBottom";

const HeroSection = () => {
  return (
    <>
      <div className="px-4 lg:flex lg:flex-col lg:gap-8 lg:w-full lg:items-center lg:justify-center">
        <div className="py-8 flex w-full flex-col md:flex-row md:justify-center md:items-start lg:flex-row lg:gap-4  lg:justify-center lg:items-start">
          <LeftHero />
          <RightHero />
        </div>
        <HeroBottom />
      </div>
    </>
  );
};

export default HeroSection;
