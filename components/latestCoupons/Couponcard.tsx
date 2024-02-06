"use client";

import Image from "next/image";
import { useState } from "react";
import {
  BiAlarm,
  BiSolidBasket,
  BiSolidConversation,
  BiSolidMap,
  BiSolidRightArrowAlt,
  BiSolidUser,
} from "react-icons/bi";

const CouponCard = ({
  image,
  location,
  store,
  offer,
  description,
  expires,
  code,
}: any) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <>
      {/* <div className="bg-white p-6 pb-2 flex flex-col items-center my-4 mb-10 hover:shadow-lg cursor-pointer rounded-md w-full min-w-full md:min-w-[18.5rem] md:justify-start  2xl:w-[22rem] 2xl:my-2"> */}
      <div className="bg-white p-[15px]  pb-2 flex flex-col items-center my-4 mb-10 cursor-pointer rounded w-[280px] min-w-[280px] md:justify-between 2xl:my-2">
        {/* card top*/}
        <div className="w-full h-[180px] mb-2">
          {!image ? (
            <>
              <Image
                width={1440}
                height={600}
                src={"/heroSlider/1.jpg"}
                alt="/"
                className="rounded-t w-full h-full object-cover"
              />
            </>
          ) : (
            <Image
              width={1440}
              height={600}
              src={image}
              alt="/"
              className="rounded-t w-full h-full object-cover"
            />
          )}
        </div>
        {/* card bottom */}
        <div className="flex flex-col gap-2 text-gray-500 ">
          <div className="flex items-center justify-center gap-3 text-xs h-[24px] w-full">
            <div className="flex items-center gap-1 ">
              <BiSolidMap />
              {location}
            </div>
            <div className="flex items-center gap-1">
              <BiSolidBasket />
              {store}
            </div>
          </div>
          <div className="w-full flex justify-center p-1 text-green-300 font-mono font-medium text-2xl h-[30px]">
            {offer} OFF
          </div>
          <span className="text-base text-center  font-medium w-full h-[60px]">
            {description}
          </span>
          <div className="flex items-center justify-center gap-1 text-xs text-gray-400 w-full h-[20px]">
            <BiAlarm /> <span>Expires on {expires}</span>
          </div>
          <div className="w-full flex items-center justify-start relative h-[60px]">
            {showCode ? (
              <span
                className="w-[260px] p-3  bg-slate-300 text-red-600 font-mono rounded-md text-center text-sm border-dashed border-green-500 duration-500 ease-in-out cursor-pointer"
                onClick={() => setShowCode(!showCode)}
              >
                {code}
              </span>
            ) : (
              <span
                className="p-3 bg-green-400 rounded-md text-white w-[260px] text-center text-sm duration-500 ease-in-out cursor-pointer"
                onClick={() => setShowCode(!showCode)}
              >
                SHOW CODE
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponCard;
