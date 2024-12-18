"use client";

import RatingStars from "@/widgets/ratingStars/RatingStars";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiGlobe,
  BiSolidBasket,
  BiSolidMap,
} from "react-icons/bi";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppContext from "@/context/AppContext";

const ProductCard = ({ data }: any) => {
  const [displayImage, setDisplayImage] = useState(data?.images?.[0]);

  const analyticsTracked = useRef(false); // Ref to track analytics tracking
  const productFetched = useRef(false); // Ref to track product fetching

  const { oneProductId, setOneProductId, getOneProduct } =
    useContext(AppContext);

  // Separate analytics tracking into its own effect
  useEffect(() => {
    const handleAnalytics = () => {
      if (
        typeof window !== "undefined" &&
        window.gtag &&
        data._id &&
        !analyticsTracked.current
      ) {
        // console.log("🚀 ~ handleAnalytics ~ data:", data);
        // console.log("analyticsTracked 1 : ", analyticsTracked.current);
        window.gtag("event", "view_item", {
          id: data._id,
          name: data.name,
          store: data.store,
          price: data.discountPrice,
        });
        analyticsTracked.current = true; // Mark as tracked
        // console.log(
        //   "🚀 ~ ProductCard ~ analyticsTracked:",
        //   analyticsTracked.current
        // );
      }
    };

    handleAnalytics();
  }, [data]); // Only run when data changes

  // Handle product fetching separately
  useEffect(() => {
    if (oneProductId?.length > 0 && !productFetched.current) {
      // console.log("🚀 ~ useEffect ~ oneProductId:", oneProductId);
      // console.log("🚀 ~ useEffect ~ productFetched:", productFetched.current);
      getOneProduct();
      productFetched.current = true; // Mark as fetched
    }
  }, [oneProductId, getOneProduct]); // Add proper dependencies

  return (
    <>
      <div className="w-full bg-white flex flex-col rounded-md shadow-lg md:flex-row md:items-start">
        {/* left */}
        <div className="w-full md:w-[50%] flex flex-col gap-6 py-2 pt-6">
          <div className="w-full flex items-center justify-center">
            <img
              src={displayImage || data?.images?.[0]}
              alt="#"
              // className="object-contain w-[420px] rounded md:ml-[-11px]"
              className="object-contain w-[320px] rounded-t"
            />
          </div>
          <div className="w-full flex items-center justify-center h-full gap-2 flex-wrap py-2 pb-6">
            <Slider
              dots={true}
              slidesToShow={5}
              slidesToScroll={1}
              className="w-[80%]"
              prevArrow={<div className="custom-arrow">Left</div>}
              nextArrow={<div className="custom-arrow">Right</div>}
            >
              {data.images?.map((item: any, i: any) => (
                <div key={i} className="slider-item">
                  <img
                    src={item}
                    alt="#"
                    className="object-contain w-[70px] rounded ease-in-out hover:shadow-xl cursor-pointer"
                    onClick={() => setDisplayImage(item)}
                  />
                </div>
              ))}
            </Slider>
          </div>
          {/* <div className="w-full flex items-center justify-center h-full gap-2 flex-wrap bg-gray-100 py-2">
            {data.imageUrls.slice(0, 7).map((item: any, i: any) => (
              <img
                key={i}
                src={item}
                alt="#"
                className="object-contain w-[70px] rounded ease-in-out hover:rounded-xl cursor-pointer"
                onClick={() => setDisplayImage(item)}
              />
            ))}
          </div> */}
        </div>
        {/* right */}
        <div className="w-full h-full md:w-[50%] p-4 flex flex-col gap-5 shadow-lg text-gray-800 items-center justify-center md:justify-start md:items-start md:pl-8">
          <span className="font-light text-xl text-center text-gray-800  my-2 md:text-3xl md:text-left">
            {data.name}{" "}
          </span>
          <div className="flex flex-col items-start justify-center gap-5">
            {data.rating ? (
              <>
                {/* <RatingStars size={16} /> */}
                <div className="flex items-end justify-center gap-3 w-full md:justify-start">
                  <RatingStars
                    size={26}
                    number={parseInt(data?.rating.split(" out")[0]) || 0}
                  />
                  {data?.rating ? (
                    <span>
                      {(() => {
                        const match = data?.rating.match(/\((\d+)\)/);
                        return match
                          ? `(${match[1]}) ratings`
                          : "No total number of ratings";
                      })()}
                    </span>
                  ) : (
                    <span className="text-sm text-gray-300">
                      No ratings available
                    </span>
                  )}
                </div>
              </>
            ) : (
              <span className="text-sm text-gray-300">No rating available</span>
            )}

            <div className="flex gap-4 items-start justify-center text-gray-800 w-full md:justify-start">
              {/* <div className="flex gap-1 items-center">
                <BiGlobe />
                {data.companyName}{" "}
              </div> */}
              <div className="flex gap-1 items-center">
                <BiSolidMap />
                {data.store}
                {/* {"Jumia"} */}
              </div>
            </div>
            <span className="ppLineHeight text-sm text-gray-500 flex w-full justify-center md:justify-start">
              {data.itemsLeft}
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            voluptatum recusandae */}
            </span>

            <h4 className="font-light text-[2rem] font-serif flex items-center justify-center gap-3">
              {data.discountPrice && (
                <>
                  ₦
                  {new Intl.NumberFormat("en-NG").format(data.discountPrice) ||
                    0}
                  <span className="text-xl text-gray-300 line-through flex items-center">
                    ₦{new Intl.NumberFormat("en-NG").format(data.price)}
                  </span>
                </>
              )}
              {data.discountPrice && (
                <div className="py-1 px-2 rounded-md flex items-center justify-center text-green-300   md:text-base md:font-semibold">
                  -
                  {Math.floor(
                    ((data?.price - data?.discountPrice) / data?.price) * 100
                  )}{" "}
                  %
                </div>
              )}
              {/* <div className="bg-red-300/40 text-orange-500 py-1 px-2 rounded-md flex items-center justify-center  md:text-xl md:font-semibold">
                   (- {data.discountPercentage})
                </div> */}
              {/* )} */}
            </h4>
          </div>
          <span className="ppLineHeight text-sm text-gray-800 text-left   font-normal">
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            numquam nostrum. amet. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Laboriosam, ipsum voluptatum. Eos, saepe harum
            culpa consequatur aut tenetur, earum, illum eum iste aliquam quam
            quisquam atque numquam magni voluptas deserunt! Adipisicing elit.
            Laboriosam, ipsum voluptatum. Eos, saepe harum culpa consequatur aut
            tenetur, earum, illum eum iste aliquam quam quisquam atque numquam
            magni voluptas deserunt! Laboriosam, ipsum voluptatum. Eos, saepe
            harum culpa consequatur aut tenetur, earum, illum eum iste aliquam
            quam quisquam atque numquam magni voluptas deserunt! */}
          </span>
          {data.name && (
            <span className="ppLineHeight text-sm text-gray-800 text-left pb-6 my-4 font-normal">
              {/* Category: {data.discountType || "Uncategorized"} */}

              <a
                href={data.link}
                className="py-4 px-8 bg-green-400 rounded-lg text-white w-full text-center text-lg duration-300 ease-in-out cursor-pointer font-sans font-semibold hover:bg-green-500"
              >
                GOTO PRODUCT
              </a>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;

// return (
//   <>
//     <div className="w-full bg-white flex flex-col rounded-md">
//       <div className="">
//         <Image
//           width={1440}
//           height={600}
//           src={"/heroSlider/1.jpg"}
//           alt="/"
//           className="rounded-t-md"
//         />
//       </div>
//       <div className="p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
//         <span className="font-light text-xl text-gray-800">
//           Timberland Men’s Thorton Waterproof Boots
//         </span>
//         <div className="flex flex-col items-start justify-center gap-1">
//           <RatingStars size={16} />
//           <span className="text-sm text-gray-600">(2 customer reviews)</span>
//           <h4 className="text-green-300 font-light text-[2rem] font-serif">
//             £390.00
//           </h4>
//         </div>
//         <span className="ppLineHeight text-sm text-gray-800 text-left   font-normal">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
//           numquam nostrum. amet. Lorem ipsum dolor sit amet, consectetur
//           adipisicing elit. Laboriosam, ipsum voluptatum. Eos, saepe harum culpa
//           consequatur aut tenetur, earum, illum eum iste aliquam quam quisquam
//           atque numquam magni voluptas deserunt! Adipisicing elit. Laboriosam,
//           ipsum voluptatum. Eos, saepe harum culpa consequatur aut tenetur,
//           earum, illum eum iste aliquam quam quisquam atque numquam magni
//           voluptas deserunt! Laboriosam, ipsum voluptatum. Eos, saepe harum
//           culpa consequatur aut tenetur, earum, illum eum iste aliquam quam
//           quisquam atque numquam magni voluptas deserunt!
//         </span>
//         <span className="ppLineHeight text-sm text-gray-800 text-left   font-normal">
//           Category: Beauty
//         </span>
//       </div>
//     </div>
//   </>
// );
