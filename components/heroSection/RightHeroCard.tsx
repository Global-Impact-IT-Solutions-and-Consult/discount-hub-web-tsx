import RatingStars from "@/widgets/ratingStars/RatingStars";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import React, { useEffect, useState } from "react";

const RightHeroCard = () => {
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
              discounts(last: 9) {
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

        const truncate = getResponse.slice(0, 9);

        setApiData(truncate);
        setLoading(false);
      } catch (ex: any) {
        console.log("Error fetching data:", ex);
        console.log("Server response:", ex.response);
      }
    }
    fetchServices();
  }, []);

  return (
    <>
      <div className="w-full bg-white flex rounded-md h-[420px]">
        {/* card left*/}
        <div className="w-[50%] h-[250px] mb-2 relative p-2 pt-4 flex items-center justify-center">
          <img
            src="data.productImageUrl"
            alt="#"
            className="object-contain w-full h-full rounded-t m-auto"
          />
        </div>
        {/* card right */}
        <div className="relative w-[50%] p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
          <div className="bg-red-300/40 text-orange-500 py-1 px-2 rounded-md flex items-center justify-center absolute top-2 right-2 w-16">
            {/* company logo */}
            <img
              src={"image"}
              alt="#"
              className="object-contain w-full h-full rounded-t"
            />
          </div>
          <span className="font-light text-3xl text-gray-800">
            dataproductName
          </span>
          <div className="flex flex-col items-start justify-center gap-1">
            <RatingStars size={16} number={4} />
            {/* <span className="text-sm text-gray-600">(2 customer reviews)</span> */}
          </div>
          <span className="ppLineHeight text-sm text-gray-800 text-left   font-normal">
            {/* Category: {data.discountType || "Uncategorized"} */}
          </span>
          <div className="flex justify-between items-center w-full relative mt-2">
            <div className="flex flex-col justify-start items-start">
              <div className="w-full flex py-1 text-green-300 text-[24px]">
                {"discountPrice"}
              </div>
              <div className="w-full flex py-1 text-gray-300 text-[18px] line-through">
                {"normalPrice"}
              </div>
            </div>
            <div className="bg-red-300/40 text-orange-500 py-4 px-2 rounded-md flex items-center justify-center absolute top-2 right-2">
              - {"discountPercentage"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightHeroCard;
