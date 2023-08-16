"use client";

import { useState } from "react";

import About from "@/app/product/sidemenu/About";
import DealsPanel from "./DealsPanel";
import CouponsPanel from "./CouponsPanel";
import { BiSolidMessageRounded, BiSolidStar } from "react-icons/bi";

const Page = () => {
  const [switchSection, setSwitchSection] = useState(true);

  return (
    <>
      <div className="flex flex-col gap-4 items-start md:flex-row">
        <div className=" w-full flex flex-col md:w-3/12">
          <About />
          <div className="bg-gray-100 flex items-center justify-center p-4 rounded-b-md gap-8 mt-[-5px] font-gray-700 font-light text-lg">
            <div className="flex flex-col gap-2 items-center justify-center ">
              <span>2</span>
              <span>Deals</span>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <span>5</span>
              <span>Coupons</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-9/12">
          <div className="bg-white w-full rounded-md flex items-center justify-start gap-6 p-2 px-4   lg:text-lg font-normal shadow-lg mb-4">
            <div
              className={
                switchSection
                  ? "flex items-center gap-2 text-green-500 text-base   cursor-pointer duration-300 ease-in-out hover:text-green-500"
                  : "flex items-center gap-2 text-gray-800 text-base   cursor-pointer duration-300 ease-in-out hover:text-green-500"
              }
              onClick={() => setSwitchSection(true)}
            >
              {" "}
              <BiSolidMessageRounded /> Deals
            </div>
            <div
              className={
                switchSection
                  ? "flex items-center gap-2 text-gray-800 text-base   cursor-pointer duration-300 ease-in-out hover:text-green-500"
                  : "flex items-center gap-2 text-green-500 text-base   cursor-pointer duration-300 ease-in-out hover:text-green-500"
              }
              onClick={() => setSwitchSection(false)}
            >
              {" "}
              <BiSolidStar /> Coupons
            </div>
          </div>
          {switchSection ? (
            <>
              <DealsPanel />
            </>
          ) : (
            <>
              <CouponsPanel />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
