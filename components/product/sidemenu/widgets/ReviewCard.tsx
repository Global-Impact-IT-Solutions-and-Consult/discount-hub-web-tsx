import RatingStars from "@/widgets/ratingStars/RatingStars";
import Image from "next/image";
import React from "react";

const ReviewCard = () => {
  return (
    <>
      <div className="w-full flex gap-4 items-start py-2">
        {/* left */}
        <div className="w-1/3 md:w-3/12 pt-1">
          <a href="/product">
            <Image
              width={600}
              height={600}
              src={"/heroSlider/1.jpg"}
              alt="/"
              className=""
            />
          </a>
        </div>
        {/* right */}
        <div className="flex flex-col items-start gap-1 w-2/3 md:w-9/12">
          <span className="text-sm text-gray-800 text-left   font-normal duration-300 ease-in-out hover:text-green-400">
            <a href="/product">Buying a TV Is Easy When You Know These Terms</a>
          </span>

          <RatingStars size={14} />
          <span className="text-sm text-gray-800 text-left   font-normal">
            by John Doe
          </span>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
