"use client";

import { useContext, useState } from "react";
import { BiChevronLeft, BiChevronRight, BiSolidBasket } from "react-icons/bi";
import RatingStars from "@/widgets/ratingStars/RatingStars";
import AppContext from "@/context/AppContext";

const RightHero = () => {
  const { allProducts } = useContext(AppContext);
  console.log("🚀 ~ RightHero ~ allProducts:", allProducts);

  const [current, setCurrent] = useState(0);

  // Filter discounts with a valid rating > 0
  const filteredDiscounts = allProducts
    .filter((item: any) => parseInt(item?.rating.split(" out")[0]) > 0)
    .slice(-5); // Get the last 5

  const length = filteredDiscounts.length;

  const nextSlide = () => setCurrent((current + 1) % length);
  const prevSlide = () => setCurrent((current - 1 + length) % length);

  if (filteredDiscounts.length <= 0) {
    return <div className="w-[500px]">No discounts available</div>;
  }

  return (
    <div className="w-full flex items-center justify-end lg:w-3/4">
      <div className="relative w-full max-w-[800px] overflow-hidden">
        {filteredDiscounts.map((item: any, index: number) => (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-1000 relative"
                : "opacity-[0] absolute"
            }
          >
            <BiChevronLeft
              size={40}
              onClick={prevSlide}
              className="absolute top-[50%] text-white/70 cursor-pointer select-none z-[2] p-1 bg-gray-800/70 hover:bg-gray-800 ease-in duration-300"
            />

            <div className="overflow-hidden top-0 bg-black/60 rounded-md p-2 w-full md:w-[800px] flex flex-col gap-1">
              <div className="w-full bg-white flex flex-col rounded-md md:h-[340px] md:flex-row">
                {/* Card Left */}
                <div className="w-full md:w-[50%] h-full mb-2 relative p-2 flex items-center justify-center">
                  <img
                    loading="lazy"
                    src={item?.images[0]}
                    alt="#"
                    className="object-contain w-full h-full rounded-t m-auto"
                  />
                </div>

                {/* Card Right */}
                <div className="w-full md:w-[50%] relative p-4 flex flex-col gap-3 shadow-lg text-gray-800">
                  <div className="text-orange-500 py-1 px-2 rounded-md flex items-center justify-center absolute top-2 right-2 w-16">
                    <BiSolidBasket /> {item?.store}
                    {/* <img
                      loading="lazy"
                      src={item?.parentSiteLogo || item?.images[0]}
                      alt="#"
                      className="object-contain w-full h-full rounded-t"
                    /> */}
                  </div>

                  <span className="font-light text-2xl text-gray-800 w-[80%] h-[120px] lg:mb-4 overflow-y-hidden">
                    {item?.name}
                  </span>

                  <div className="flex flex-col items-start justify-center gap-1 h-[30px]">
                    <RatingStars
                      size={26}
                      number={parseInt(item?.rating.split(" out")[0]) || 0}
                    />
                  </div>

                  <div className="flex justify-between items-center w-full relative md:mt-2 h-[100px]">
                    <div className="flex flex-col justify-start items-start">
                      <div className="w-full flex py-1 text-green-300 text-[24px]">
                        ₦
                        {new Intl.NumberFormat("en-NG").format(
                          item?.discountPrice
                        )}
                      </div>
                      <div className="w-full flex py-1 text-gray-300 text-[18px] line-through">
                        ₦{new Intl.NumberFormat("en-NG").format(item?.price)}
                      </div>
                    </div>

                    <div className="bg-red-300/40 text-orange-500 py-4 px-2 rounded-md flex items-center justify-center absolute top-2 right-2 md:mr-4">
                      -{" "}
                      {Math.floor(
                        item?.discountPercentage ||
                          ((item?.price - item?.discountPrice) / item?.price) *
                            100
                      )}
                      %
                    </div>
                  </div>

                  <a
                    href={`/product/${item._id}`}
                    className="p-3 bg-green-400 rounded-md text-white w-full text-center text-sm duration-300 ease-in-out cursor-pointer hover:bg-green-500"
                  >
                    GO TO PRODUCT
                  </a>
                </div>
              </div>
            </div>

            <BiChevronRight
              size={40}
              onClick={nextSlide}
              className="absolute top-[50%] right-0 text-white/70 cursor-pointer select-none z-[2] p-1 bg-gray-800/70 hover:bg-gray-800 ease-in duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightHero;
