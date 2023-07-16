import React from "react";
import {
  BiCalendar,
  BiCartAlt,
  BiFemale,
  BiSolidCoffee,
  BiSolidHomeAlt2,
  BiSolidHot,
  BiSolidImage,
  BiSolidPizza,
  BiSolidPlaneAlt,
  BiSolidZap,
} from "react-icons/bi";

const LeftHero = () => {
  return (
    <>
      <div className="w-full md:w-2/5 lg:w-1/4">
        <ul className="">
          <li className="first:rounded-t-lg last:rounded-b-lg">
            <a
              href="/shop"
              className="specialHover p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 hover:pl-5  duration-300 ease-in-out cursor-pointer text-sm font-sans md:text-xs"
            >
              <div className=" flex justify-center items-center px-2 pr-4 border-r-[1px]">
                <BiFemale className="text-green-400" size={18} />
              </div>
              BEAUTY{" "}
              <span className="text-gray-300 font-normal text-xs">2</span>
            </a>
          </li>
          <li className="first:rounded-t-lg last:rounded-b-lg">
            <a
              href="/shop"
              className="specialHover p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 hover:pl-5  duration-300 ease-in-out cursor-pointer text-sm font-sans md:text-xs"
            >
              <div className=" flex justify-center items-center px-2 pr-4 border-r-[1px]">
                <BiCalendar className="text-green-400" size={18} />
              </div>
              EVENTS{" "}
              <span className="text-gray-300 font-normal text-xs">2</span>
            </a>
          </li>
          <li className="first:rounded-t-lg last:rounded-b-lg">
            <a
              href="/shop"
              className="specialHover p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 hover:pl-5  duration-300 ease-in-out cursor-pointer text-sm font-sans md:text-xs"
            >
              <div className=" flex justify-center items-center px-2 pr-4 border-r-[1px]">
                <BiSolidHot className="text-green-400" size={18} />
              </div>
              FASHION{" "}
              <span className="text-gray-300 font-normal text-xs">2</span>
            </a>
          </li>
          <li className="first:rounded-t-lg last:rounded-b-lg">
            <a
              href="/shop"
              className="specialHover p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 hover:pl-5  duration-300 ease-in-out cursor-pointer text-sm font-sans md:text-xs"
            >
              <div className=" flex justify-center items-center px-2 pr-4 border-r-[1px]">
                <BiSolidZap className="text-green-400" size={18} />
              </div>
              FITNESS{" "}
              <span className="text-gray-300 font-normal text-xs">2</span>
            </a>
          </li>
          <li className="first:rounded-t-lg last:rounded-b-lg">
            <a
              href="/shop"
              className="specialHover p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 hover:pl-5  duration-300 ease-in-out cursor-pointer text-sm font-sans md:text-xs"
            >
              <div className=" flex justify-center items-center px-2 pr-4 border-r-[1px]">
                <BiSolidImage className="text-green-400" size={18} />
              </div>
              FURNITURE{" "}
              <span className="text-gray-300 font-normal text-xs">2</span>
            </a>
          </li>
          <li className="first:rounded-t-lg last:rounded-b-lg">
            <a
              href="/shop"
              className="specialHover p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 hover:pl-5  duration-300 ease-in-out cursor-pointer text-sm font-sans md:text-xs"
            >
              <div className=" flex justify-center items-center px-2 pr-4 border-r-[1px]">
                <BiSolidPlaneAlt className="text-green-400" size={18} />
              </div>
              TRAVEL{" "}
              <span className="text-gray-300 font-normal text-xs">2</span>
            </a>
          </li>
          <li className="first:rounded-t-lg last:rounded-b-lg">
            <a
              href="/shop"
              className="specialHover p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 hover:pl-5  duration-300 ease-in-out cursor-pointer text-sm font-sans md:text-xs"
            >
              <div className=" flex justify-center items-center px-2 pr-4 border-r-[1px]">
                <BiCartAlt className="text-green-400" size={18} />
              </div>
              SHOPPING{" "}
              <span className="text-gray-300 font-normal text-xs">2</span>
            </a>
          </li>
          <li className="first:rounded-t-lg last:rounded-b-lg">
            <a
              href="/shop"
              className="specialHover p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 hover:pl-5  duration-300 ease-in-out cursor-pointer text-sm font-sans md:text-xs"
            >
              <div className=" flex justify-center items-center px-2 pr-4 border-r-[1px]">
                <BiSolidHomeAlt2 className="text-green-400" size={18} />
              </div>
              HOME & GARDEN{" "}
              <span className="text-gray-300 font-normal text-xs">2</span>
            </a>
          </li>
          <li className="first:rounded-t-lg last:rounded-b-lg">
            <a
              href="/shop"
              className="specialHover p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 hover:pl-5  duration-300 ease-in-out cursor-pointer text-sm font-sans md:text-xs"
            >
              <div className=" flex justify-center items-center px-2 pr-4 border-r-[1px]">
                <BiSolidCoffee className="text-green-400" size={18} />
              </div>
              FOOD & DRINK{" "}
              <span className="text-gray-300 font-normal text-xs">2</span>
            </a>
          </li>
          <li className="specialHover p-3 pl-5 flex gap-4 items-center border-b-[1px] bg-white font-normal font-sans text-gray-600 hover:pl-3 duration-300 ease-in-out lg:last:rounded-b-lg cursor-pointer text-sm">
            ALL CATEGORIES
          </li>
        </ul>
      </div>
    </>
  );
};

export default LeftHero;
