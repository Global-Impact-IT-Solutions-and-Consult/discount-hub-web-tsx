"use client";

import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./sidemenu/Cart";
import Spinner from "@/widgets/spinner/Spinner";
import AppContext from "@/context/AppContext";
import DescriptionSection from "./[product]/DescriptionSection";
import ReviewSection from "./[product]/ReviewSection";
import FeaturesSpecs from "./[product]/FeaturesSpecs";

const ProductPage = ({ id }: any) => {
  const { baseURL, loading, setOneProductId, oneProduct } =
    useContext(AppContext);
  // console.log("🚀 ~ ProductPage ~ oneProduct:", oneProduct);

  const [switchSection, setSwitchSection] = useState(true);

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    if (id) {
      setOneProductId(id);
    }
  }, []);

  return (
    <>
      <div className="w-full flex flex-col gap-4 md:flex-row 2xl:gap-10">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {/* left */}
            <div className="w-full flex flex-col gap-12">
              <ProductCard data={oneProduct} />
              <div className="flex flex-col w-full">
                <div className="w-full flex justify-start items-center gap-1">
                  <span
                    onClick={() => setSwitchSection(!switchSection)}
                    className={
                      switchSection
                        ? "px-8 py-2 rounded-sm bg-green-500 text-white duration-300 ease-in-out cursor-pointer   hover:bg-green-500"
                        : "px-8 py-2 rounded-sm bg-green-400 text-white duration-300 ease-in-out cursor-pointer   hover:bg-green-500"
                    }
                  >
                    DESCRIPTION
                  </span>
                  <span
                    onClick={() => setSwitchSection(!switchSection)}
                    className={
                      switchSection
                        ? "px-8 py-2 rounded-sm bg-green-400 text-white duration-300 ease-in-out cursor-pointer hover:bg-green-500"
                        : "px-8 py-2 rounded-sm bg-green-500 text-white duration-300 ease-in-out cursor-pointer hover:bg-green-500"
                    }
                  >
                    {/* REVIEWS (2) */}
                    FEATURES AND SPECIFICATIONS
                  </span>
                </div>
                {switchSection ? (
                  <>
                    <DescriptionSection data={oneProduct} />
                  </>
                ) : (
                  <>
                    <FeaturesSpecs data={oneProduct} />
                    {/* <ReviewSection data={apiData} />{" "} */}
                  </>
                )}
              </div>
              {/* related products */}
              {/* <RelatedProducts /> */}
            </div>
            {/* right */}
            {/* <div className="w-full mb-8 md:w-1/3 flex flex-col gap-6">
              <Cart data={apiData} />
              <Filter />
              <About />
              <Products />
              <Newsletter />
              <RecentReviews />
            </div> */}
          </>
        )}
      </div>
    </>
  );
};

export default ProductPage;
