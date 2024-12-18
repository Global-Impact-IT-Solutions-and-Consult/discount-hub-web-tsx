"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import RatingStars from "@/widgets/ratingStars/RatingStars";
import ProductCard from "./ProductCard";
import DescriptionSection from "./DescriptionSection";
import ReviewSection from "./ReviewSection";
import { BiSolidBasket, BiSolidMap } from "react-icons/bi";
import RelatedProducts from "./RelatedProducts";
import Cart from "./sidemenu/Cart";
import Filter from "./sidemenu/Filter";
import About from "./sidemenu/About";
import Products from "./sidemenu/Products";
import RecentReviews from "./sidemenu/RecentReviews";
import Newsletter from "./sidemenu/Newsletter";

const ProductPage = async ({ params }: any) => {
  const [switchSection, setSwitchSection] = useState(true);
  const [apiData, setApiData] = useState();
  const [reviewData, setReviewData] = useState();

  // let apiData = [];
  let prodArr: any = [];
  let reviewArr: any = [];

  return (
    <>
      <div className="w-full flex flex-col gap-4 md:flex-row 2xl:gap-10">
        {/* left */}
        <div className="w-full flex flex-col gap-12 md:w-2/3">
          <ProductCard data={prodArr} />
          {/* <div className="flex flex-col w-full">
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
                    ? "px-8 py-2 rounded-sm bg-green-400 text-white duration-300 ease-in-out cursor-pointer   hover:bg-green-500"
                    : "px-8 py-2 rounded-sm bg-green-500 text-white duration-300 ease-in-out cursor-pointer   hover:bg-green-500"
                }
              >
                REVIEWS (2)
              </span>
            </div>
            {switchSection ? (
              <>
                <DescriptionSection data={prodArr} />
              </>
            ) : (
              <>
                <ReviewSection data={prodArr} />
              </>
            )}
          </div> */}
          <div className="flex flex-col w-full">
            <div className="w-full flex justify-start items-center gap-1">
              <span className="px-8 py-2 rounded-sm bg-green-500 text-white duration-300 ease-in-out cursor-pointer   hover:bg-green-500">
                REVIEWS ({prodArr.reviews.length})
              </span>
            </div>
            <ReviewSection data={prodArr} />
          </div>
          {/* related products */}
          <RelatedProducts />
        </div>
        {/* right */}
        <div className="w-full mb-8 md:w-1/3 flex flex-col gap-6">
          <Cart data={prodArr} />
          {/* <Filter /> */}
          <About data={prodArr} />
          <Products data={prodArr} />
          <Newsletter />
          <RecentReviews />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
