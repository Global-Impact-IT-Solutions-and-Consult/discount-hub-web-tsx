import React from "react";
import LeftHero from "./LeftHero";
import RightHero from "./RightHero";
import HeroBottom from "./HeroBottom";

const HeroSection = () => {
  return (
    <>
      <div className="lg:flex lg:flex-col lg:gap-8 lg:w-full lg:items-center lg:justify-center">
        <div className="flex gap-8 w-full flex-col md:flex-row md:justify-center md:items-start lg:flex-row lg:gap-4  lg:justify-between lg:items-start">
          <LeftHero />
          <RightHero />
        </div>
        <HeroBottom />
      </div>
    </>
  );
};

export default HeroSection;
