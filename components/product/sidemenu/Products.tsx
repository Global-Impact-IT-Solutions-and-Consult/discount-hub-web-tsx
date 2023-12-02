import React from "react";
import ProductCard from "./widgets/ProductCard";

const Products = () => {
  return (
    <>
      <div className="w-full bg-white flex flex-col rounded-md">
        {/* card bottom */}
        <div className="p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
          <span className="font-light text-xl text-gray-900">Products</span>
          {/* horizontal line */}
          <div className="w-full flex items-center">
            <div className="bg-green-400 p-[1px] w-2/12"></div>
            <div className="bg-gray-200 p-[1px] w-10/12"></div>
          </div>
          <div className="flex flex-col items-center gap-2 w-full mt-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
