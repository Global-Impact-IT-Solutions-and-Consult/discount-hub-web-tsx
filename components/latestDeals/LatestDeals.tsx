"use client";

import { useContext, useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import DealCard from "./DealCard";
import Spinner from "@/widgets/spinner/Spinner";
import AppContext from "@/context/AppContext";

const LatestDeals = () => {
  const { url, loading, setLoading, allProducts } = useContext(AppContext);
  // console.log("🚀 ~ LatestDeals ~ allProducts:", allProducts);

  const [apiData, setApiData] = useState([]);
  // console.log(
  //   "🚀 ~ file: LatestDeals.tsx:13 ~ LatestDeals ~ apiData:",
  //   apiData
  // );
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   async function fetchServices() {
  //     try {
  //       const client = new ApolloClient({
  //         // uri: "http://localhost/wp/graphql",
  //         // uri: "http://localhost:10019/graphql",
  //         uri: url,
  //         cache: new InMemoryCache(),
  //       });

  //       // const response = await client.query({
  //       //   query: gql`
  //       //     query unemployed {
  //       //       products {
  //       //         nodes {
  //       //           products {
  //       //             price
  //       //             rating
  //       //             title
  //       //             summary
  //       //             image {
  //       //               sourceUrl
  //       //             }
  //       //             location
  //       //             store {
  //       //               ... on Store {
  //       //                 id
  //       //                 title
  //       //               }
  //       //             }
  //       //           }
  //       //           slug
  //       //           databaseId
  //       //         }
  //       //       }
  //       //     }
  //       //   `,
  //       // });

  //       const response = await client.query({
  //         query: gql`
  //           query unemployed {
  //             products(last: 9) {
  //               nodes {
  //                 products {
  //                   companyName
  //                   discountPercentage
  //                   discountPrice
  //                   normalPrice
  //                   productImageUrl
  //                   productName
  //                   productUrl
  //                   parentSiteLogo
  //                   productRating
  //                 }
  //                 databaseId
  //               }
  //             }
  //           }
  //         `,
  //       });
  //       console.log(
  //         "🚀 ~ file: LatestDeals.tsx:72 ~ fetchServices ~ response:",
  //         response
  //       );

  //       const getResponse: any = response.data.products.nodes.map(
  //         (item: any) => item
  //       );

  //       const truncate = getResponse.slice(0, 9);

  //       setApiData(truncate);
  //       setLoading(false);
  //     } catch (ex: any) {
  //       console.log("Error fetching data:", ex);
  //       console.log("Server response:", ex.response);
  //     }
  //   }
  //   fetchServices();
  // }, []);

  return (
    <>
      <div className="py-8 w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        <SectionTopBar
          title={"Latest Deals"}
          linkText={"VIEW ALL"}
          link={"/deals"}
        />
        {/* BOTTOM PART (CARDS) */}
        {/* <div className="w-full flex flex-col gap-2 items-start md:flex-row md:justify-between md:flex-wrap 2xl:justify-center  2xl:gap-16"> */}
        <div className="w-full gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:ml-6">
          {/* card */}
          {loading ? (
            <Spinner />
          ) : (
            <>
              {allProducts.length > 0 && (
                <>
                  {/* <Loader /> */}
                  {allProducts.map((item: any, i: number) => {
                    if (i < 9) {
                      return (
                        <DealCard
                          key={i}
                          title={item?.name}
                          image={item?.images[0]}
                          store={item?.companyName}
                          discountPrice={item?.discountPrice}
                          normalPrice={item?.price}
                          discountPercentage={
                            item?.discountPercentage ||
                            ((item?.price - item?.discountPrice) /
                              item?.price) *
                              100
                          }
                          link={item?._id}
                          parentSiteLogo={item?.parentSiteLogo}
                          // rating={item?.productRating?.split(" ")[0] || 3}
                          rating={parseInt(item?.rating.split(" out")[0]) || 0}
                        />
                      );
                    }
                    return null;
                  })}
                </>
              )}
            </>
          )}
          {/* <DealCard
            image={"/heroSlider/1.jpg"}
            title={"The Crash Bad Instant Folding Twin Bed"}
            location={"United States"}
            store={"Amazon"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
            }
            price={"£350.00"}
            link={"/product"}
          /> */}
        </div>
      </div>
    </>
  );
};

export default LatestDeals;
