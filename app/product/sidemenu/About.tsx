import RatingStars from "@/widgets/ratingStars/RatingStars";
import React from "react";
import { BiLogoTwitch } from "react-icons/bi";

const About = () => {
  return (
    <>
      <div className="w-full bg-white flex flex-col rounded-md">
        {/* card bottom */}
        <div className="p-4 flex flex-col gap-3 shadow-lg text-gray-800 font-sans">
          <span className="font-light text-xl text-gray-900">About Seller</span>
          {/* horizontal line */}
          <div className="w-full flex items-center">
            <div className="bg-green-400 p-[1px] w-2/12"></div>
            <div className="bg-gray-200 p-[1px] w-10/12"></div>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-sm font-sans text-gray-800 px-4 py-6">
            <BiLogoTwitch size={60} />
            <span className="cursor-pointer text-lg duration-300 ease-in-out hover:text-green-400">
              <a href="www.twitch.com">Twitch</a>
            </span>
            <div className="flex items-center justify-center gap-4">
              <RatingStars size={16} />
              (4 rates)
            </div>
            <span className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae quis, architecto perferendis nostrum quo commodi
              consectetur, blanditiis mollitia sequi nam necessitatibus,
              corporis exercitationem beatae libero.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
