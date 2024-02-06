import { useEffect, useState } from "react";
import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const ReviewSection = ({ data }: any) => {
  const [apiData, setApiData] = useState<any>();

  let reviewArr: any = [];

  async function fetchServices() {
    const client = new ApolloClient({
      uri: "http://localhost/wp/graphql",
      cache: new InMemoryCache(),
    });

    const response = await client.query({
      query: gql`
        query unemployed {
          reviews {
            nodes {
              reviews {
                date
                image {
                  sourceUrl
                }
                product {
                  ... on Product {
                    databaseId
                  }
                }
                name
                rating
                review
              }
            }
          }
        }
      `,
    });
    // console.log(
    //   "🚀 ~ file: ReviewSection.tsx:40 ~ fetchServices ~ response:",
    //   response.data.reviews
    // );

    const getResponse = response.data.reviews.nodes.map((item: any) => {
      if (item.reviews.product.databaseId === 85) {
        return item.reviews;
      }
    });

    setApiData((prevApiData: any) => ({
      ...prevApiData,
      ...getResponse,
    }));

    return apiData;
  }

  reviewArr = fetchServices();

  return (
    <>
      <div className="w-full bg-white flex flex-col">
        {/* card bottom */}
        <div className="p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
          <span className="font-light text-xl text-gray-900">
            {data.reviews.length} review(s) for {data.title}
          </span>
          {/* horizontal line */}
          <div className="w-full flex items-center">
            <div className="bg-green-400 p-[1px] w-1/12"></div>
            <div className="bg-gray-200 p-[1px] w-11/12"></div>
          </div>
          <div className="w-full flex flex-col gap-2">
            {apiData && (
              <>
                {apiData.map((item: any, i: any) => (
                  <ReviewCard
                    key={i}
                    date={item.date}
                    image={item.image?.sourceUrl}
                    name={item.name}
                    rating={item.rating}
                    review={item.review}
                  />
                ))}
              </>
            )}
          </div>
          <AddReview />
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
