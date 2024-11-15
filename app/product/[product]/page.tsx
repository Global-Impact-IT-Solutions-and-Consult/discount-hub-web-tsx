// "use client";

// import { useEffect, useState } from "react";
// import axios from "axios";

// import RatingStars from "@/widgets/ratingStars/RatingStars";
// import ProductCard from "./ProductCard";
// import DescriptionSection from "./DescriptionSection";
// import ReviewSection from "./ReviewSection";
// import { BiSolidBasket, BiSolidMap } from "react-icons/bi";
// import RelatedProducts from "./RelatedProducts";
// import Cart from "./sidemenu/Cart";
// import Filter from "./sidemenu/Filter";
// import About from "./sidemenu/About";
// import Products from "./sidemenu/Products";
// import RecentReviews from "./sidemenu/RecentReviews";
// import Newsletter from "./sidemenu/Newsletter";

import ProductPage from "@/components/product/ProductPage";
// import ProductPage from "@/components/product/[product]/page";
// import ProductPage from "../../../components/product/[product]/page";

const Page = async ({ params }: any) => {
  return (
    <>
      <ProductPage id={params.product} />
      {/* <div className="w-full flex flex-col gap-4 md:flex-row 2xl:gap-10">
        <div className="w-full mb-8 md:w-1/3 flex flex-col gap-6">
          <Newsletter />
          <RecentReviews />
        </div>
      </div> */}
    </>
  );
};

export default Page;
