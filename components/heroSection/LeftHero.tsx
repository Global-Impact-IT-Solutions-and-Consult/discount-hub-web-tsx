"use client";

import { useContext, useEffect, useState } from "react";
import {
  BiCategory,
  BiSolidHomeAlt2,
  BiSolidCoffee,
  BiSolidHot,
  BiSolidPizza,
  BiSolidPlaneAlt,
  BiSolidZap,
} from "react-icons/bi";

import AppContext from "@/context/AppContext";
import Spinner from "@/widgets/spinner/Spinner";
import { useRouter } from "next/navigation";

const LeftHero = () => {
  const { loading, allCategories, setOneCategory } = useContext(AppContext);
  const router = useRouter();

  const [showExtra, setShowExtra] = useState(false);

  // Filter categories with productCount > 0 and get the top 7
  const topCategories = allCategories
    .filter((item: any) => item.productCount > 0)
    .slice(0, 7);

  const extraCategories = allCategories.filter(
    (item: any) => item.productCount > 0
  );

  const selectOneCategory = (item: any) => {
    setOneCategory(item);
    // router.push(`/category/${item.category.name}`);
    // router.push(`/deals/${item.category.name}`);
    router.push(`/deals`);
  };

  const handleShowCategories = () => {};

  return (
    <div className="w-full md:w-2/5 lg:w-1/4">
      <ul className="relative">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {topCategories.length > 0 ? (
              topCategories.map((item: any, i: number) => (
                <li key={i} className="first:rounded-t last:rounded-b">
                  <a
                    // href={`/category/${item.category.name}`}
                    onClick={() => selectOneCategory(item)}
                    className="specialHover p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 hover:pl-5 duration-300 ease-in-out cursor-pointer text-sm capitalize md:text-xs"
                  >
                    <div className="flex justify-center items-center px-2 pr-4 border-r-[1px]">
                      <BiCategory className="text-green-400" size={18} />
                    </div>
                    {item.category.name}
                    <span className="text-gray-300 font-normal text-xs">
                      {item.productCount}
                    </span>
                  </a>
                </li>
              ))
            ) : (
              <li className="p-3 text-sm text-gray-500">
                No categories available
              </li>
            )}
          </>
        )}
        <li
          onClick={() => setShowExtra(!showExtra)}
          className="specialHover p-3 pl-5 flex gap-4 items-center border-b-[1px] bg-white font-normal text-gray-600 hover:pl-3 duration-300 ease-in-out lg:last:rounded-b cursor-pointer text-sm"
        >
          {/* <a href="/deals">ALL CATEGORIES</a> */}
          <a href="#">
            {!showExtra ? "ALL CATEGORIES" : "HIDE EXTRA CATEGORIES"}
          </a>
          {/* <span>ALL CATEGORIES</span> */}
        </li>
        {showExtra && (
          <div className="absolute z-50 shadow-2xl w-[100vw] bg-white rounded-lg p-4 flex flex-wrap items-center justify-start gap-4 lg:w-[1200px]">
            {extraCategories.length > 0 &&
              extraCategories.map((item: any, i: number) => (
                <li key={i} className="first:rounded-t last:rounded-b">
                  <a
                    // href={`/category/${item.category.name}`}
                    onClick={() => selectOneCategory(item)}
                    className="group p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 duration-300 ease-in-out cursor-pointer text-sm capitalize md:text-xs hover:text-white hover:bg-green-500 hover:rounded-xl"
                  >
                    <div className="flex justify-center items-center px-2 pr-4 border-r-[1px]">
                      <BiCategory
                        className="text-green-400 group-hover:text-white"
                        size={18}
                      />
                    </div>
                    {item.category.name}
                    <span className="text-gray-300 font-normal text-xs group-hover:text-white">
                      {item.productCount}
                    </span>
                  </a>
                </li>
              ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default LeftHero;
