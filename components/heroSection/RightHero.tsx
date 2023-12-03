"use client";

import { useEffect, useState } from "react";
import SliderData from "./SliderData";
import {
  BiChevronLeft,
  BiChevronRight,
  BiSolidStar,
  BiSolidStarHalf,
} from "react-icons/bi";
import RatingStars from "@/widgets/ratingStars/RatingStars";
import RightHeroCard from "./RightHeroCard";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const RightHero = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchServices() {
      try {
        const client = new ApolloClient({
          uri: "http://127.0.0.1:10019/graphql",
          cache: new InMemoryCache(),
        });

        const response = await client.query({
          query: gql`
            query unemployed {
              discounts(first: 5) {
                nodes {
                  discounts {
                    companyName
                    discountPercentage
                    discountPrice
                    normalPrice
                    productImageUrl
                    productName
                    productUrl
                  }
                  databaseId
                }
              }
            }
          `,
        });
        // console.log(
        //   "🚀 ~ file: LatestDeals.tsx:72 ~ fetchServices ~ response:",
        //   response
        // );

        const getResponse: any = response.data.discounts.nodes.map(
          (item: any) => item
        );

        const truncate = getResponse.slice(0, 5);
        console.log(
          "🚀 ~ file: RightHero.tsx:58 ~ fetchServices ~ truncate:",
          truncate
        );

        setApiData(truncate);
        setLoading(false);
      } catch (ex: any) {
        console.log("Error fetching data:", ex);
        console.log("Server response:", ex.response);
      }
    }
    fetchServices();
  }, []);

  const [current, setCurrent] = useState(0);
  const length = apiData.length;

  const nextSlide = () => {
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
  };

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  if (!Array.isArray(apiData) || apiData.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="w-full flex items-center justify-center lg:w-3/4">
        <div className="relative w-full max-w-[800px] overflow-hidden">
          {/* <RightHeroCard /> */}
          {apiData.map((item: any, index: any) => {
            // return <img src={slide.image} alt="/" key={index} />;
            return (
              <>
                <div
                  key={index}
                  className={
                    index === current
                      ? "opacity-[1] ease-in duration-1000 relative"
                      : "opacity-[0] absolute"
                  }
                >
                  <BiChevronLeft
                    size={40}
                    onClick={prevSlide}
                    className="absolute top-[50%] text-white/70 cursor-pointer select-none z-[2] p-1 bg-gray-800/70 hover:bg-gray-800 ease-in duration-300"
                  />
                  {/* {index === current && slide.image} */}

                  <div className="overflow-hidden top-0 bg-black/60 rounded-md p-2 w-full md:w-[800px] flex flex-col gap-1">
                    <div className="w-full bg-white flex flex-col rounded-md md:h-[340px] md:flex-row">
                      {/* card left */}
                      <div className="w-full md:w-[50%] h-full mb-2 relative p-2 flex items-center justify-center">
                        <img
                          src={item.discounts.productImageUrl}
                          alt="#"
                          className="object-contain w-full h-full rounded-t m-auto"
                        />
                      </div>
                      {/* card right */}
                      <div className="w-full md:w-[50%] relative p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
                        <div className="bg-red-300/40 text-orange-500 py-1 px-2 rounded-md flex items-center justify-center absolute top-2 right-2 w-16">
                          {/* company logo */}
                          <img
                            src={"image"}
                            alt="#"
                            className="object-contain w-full h-full rounded-t"
                          />
                        </div>
                        <span className="font-light text-2xl text-gray-800 w-[80%] h-[100px]">
                          {item.discounts.productName}
                        </span>
                        <div className="flex flex-col items-start justify-center gap-1 h-[30px]">
                          <RatingStars size={16} number={4} />
                          {/* <span className="text-sm text-gray-600">(2 customer reviews)</span> */}
                        </div>
                        {/* <span className="ppLineHeight text-sm text-gray-800 text-left font-normal h-[100px]">
                          Category: {data.discountType || "Uncategorized"}
                        </span> */}
                        <div className="flex justify-between items-center w-full relative md:mt-2 h-[100px]">
                          <div className="flex flex-col justify-start items-start">
                            <div className="w-full flex py-1 text-green-300 text-[24px]">
                              {item.discounts.discountPrice}
                            </div>
                            <div className="w-full flex py-1 text-gray-300 text-[18px] line-through">
                              {item.discounts.normalPrice}
                            </div>
                          </div>
                          <div className="bg-red-300/40 text-orange-500 py-4 px-2 rounded-md flex items-center justify-center absolute top-2 right-2 md:mr-4">
                            - {item.discounts.discountPercentage}
                          </div>
                        </div>
                        <a
                          href={`/product/${item.databaseId}`}
                          className="p-3 bg-green-400 rounded-md text-white w-full text-center text-sm duration-300 ease-in-out cursor-pointer hover:bg-green-500"
                        >
                          GO TO PRODUCT
                        </a>
                      </div>
                    </div>

                    {/* <RatingStars />
                    <span className="text-white   font-light text-xs lg:text-base">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </span> */}
                  </div>

                  <BiChevronRight
                    size={40}
                    onClick={nextSlide}
                    className="absolute top-[50%] right-0 text-white/70 cursor-pointer select-none z-[2] p-1 bg-gray-800/70 hover:bg-gray-800 ease-in duration-300"
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RightHero;
