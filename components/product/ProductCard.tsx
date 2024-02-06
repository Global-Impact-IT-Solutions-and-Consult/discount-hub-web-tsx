import RatingStars from "@/widgets/ratingStars/RatingStars";
import Image from "next/image";
import { useState } from "react";
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

const ProductCard = ({ data }: any) => {
  console.log("🚀 ~ file: ProductCard.tsx:6 ~ ProductCard ~ data:", data);

  const [displayImage, setDisplayImage] = useState(data.productImageUrl);

  return (
    <>
      <div className="w-full bg-white flex flex-col rounded-md shadow-lg md:flex-row md:items-start">
        {/* left */}
        <div className="w-full md:w-[50%] flex flex-col gap-6 py-2 pt-6">
          <div className="w-full flex items-center justify-center">
            <img
              src={displayImage}
              alt="#"
              className="object-contain w-[420px] rounded md:ml-[-11px]"
              // className="object-contain w-[320px] rounded-t"
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
              {data.imageUrls?.map((item: any, i: any) => (
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
            {data.productName}{" "}
          </span>
          <div className="flex flex-col items-start justify-center gap-5">
            {data.productRating ? (
              <>
                {/* <RatingStars size={16} /> */}
                <div className="flex items-start justify-center gap-3 w-full md:justify-start">
                  <RatingStars
                    size={26}
                    number={data.productRating?.split(" ")[0] || 0}
                  />
                  {data.verifiedRatings ? (
                    <span>{data.verifiedRatings}</span>
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
              <div className="flex gap-1 items-center">
                <BiGlobe />
                {data.companyName}{" "}
              </div>
              <div className="flex gap-1 items-center">
                <BiSolidMap />
                {data.crawledFrom}
              </div>
            </div>
            <span className="ppLineHeight text-sm text-gray-500 flex w-full justify-center md:justify-start">
              {data.itemsLeft}
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            voluptatum recusandae */}
            </span>

            <h4 className="font-light text-[2rem] font-serif flex items-center justify-center gap-3">
              {data.discountPrice}
              <span className="text-xl text-gray-300 line-through flex items-center">
                {data.normalPrice}
              </span>
              {data.discountPercentage && (
                <div className="py-1 px-2 rounded-md flex items-center justify-center text-green-300   md:text-base md:font-semibold">
                  ( - {data.discountPercentage})
                </div>
                // <div className="bg-red-300/40 text-orange-500 py-1 px-2 rounded-md flex items-center justify-center  md:text-xl md:font-semibold">
                //   (- {data.discountPercentage})
                // </div>
              )}
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
          <span className="ppLineHeight text-sm text-gray-800 text-left pb-6 my-4 font-normal">
            {/* Category: {data.discountType || "Uncategorized"} */}

            <a
              href={data.productUrl}
              className="py-4 px-8 bg-green-400 rounded-lg text-white w-full text-center text-lg duration-300 ease-in-out cursor-pointer font-sans font-semibold hover:bg-green-500"
            >
              GOTO PRODUCT
            </a>
          </span>
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
