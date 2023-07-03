"use client";

import { useState } from "react";
import SliderData from "./SliderData";
import {
  BiChevronLeft,
  BiChevronRight,
  BiSolidStar,
  BiSolidStarHalf,
} from "react-icons/bi";
import RatingStars from "@/widgets/ratingStars/RatingStars";

const RightHero = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="w-full flex items-center justify-center lg:w-3/4">
        <div>
          {SliderData.map((slide, index) => {
            // return <img src={slide.image} alt="/" key={index} />;
            return (
              <>
                <div
                  key={index}
                  className={
                    index === current
                      ? "opacity-[1] ease-in duration-1000 relative"
                      : "opacity-0 relative"
                  }
                >
                  <BiChevronLeft
                    size={40}
                    onClick={prevSlide}
                    className="absolute top-[50%] text-white/70 cursor-pointer select-none z-[2] p-1 bg-gray-800/70 hover:bg-gray-800 ease-in duration-300"
                  />
                  {index === current && slide.image}
                  <BiChevronRight
                    size={40}
                    onClick={nextSlide}
                    className="absolute top-[50%] right-0 text-white/70 cursor-pointer select-none z-[2] p-1 bg-gray-800/70 hover:bg-gray-800 ease-in duration-300"
                  />
                  <div className="absolute bottom-[5%] bg-black/60 rounded-md p-2 left-[1rem] max-w-[90%] flex flex-col gap-1 lg:top-[80%] lg:left-[2rem]">
                    {/* <div className="flex">
                      <BiSolidStar className="text-orange-500" size={20} />
                      <BiSolidStar className="text-orange-500" size={20} />
                      <BiSolidStar className="text-orange-500" size={20} />
                      <BiSolidStar className="text-orange-500" size={20} />
                      <BiSolidStarHalf className="text-orange-500" size={20} />
                    </div> */}
                    <RatingStars />
                    <span className="text-white font-sans font-light text-xs lg:text-base">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span>
                  </div>
                </div>
              </>
            );
            // return slide.image;
          })}
        </div>
      </div>
    </>
  );
};

export default RightHero;
