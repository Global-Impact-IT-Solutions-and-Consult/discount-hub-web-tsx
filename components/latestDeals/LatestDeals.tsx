"use client";

import { useContext, useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import DealCard from "./DealCard";
import Spinner from "@/widgets/spinner/Spinner";
import AppContext from "@/context/AppContext";

const LatestDeals = () => {
  const { url } = useContext(AppContext);

  const [apiData, setApiData] = useState([]);
  // console.log(
  //   "🚀 ~ file: LatestDeals.tsx:13 ~ LatestDeals ~ apiData:",
  //   apiData
  // );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchServices() {
      try {
        const client = new ApolloClient({
          // uri: "http://localhost/wp/graphql",
          // uri: "http://localhost:10019/graphql",
          uri: url,
          cache: new InMemoryCache(),
        });

        // const response = await client.query({
        //   query: gql`
        //     query unemployed {
        //       products {
        //         nodes {
        //           products {
        //             price
        //             rating
        //             title
        //             summary
        //             image {
        //               sourceUrl
        //             }
        //             location
        //             store {
        //               ... on Store {
        //                 id
        //                 title
        //               }
        //             }
        //           }
        //           slug
        //           databaseId
        //         }
        //       }
        //     }
        //   `,
        // });

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
                    parentSiteLogo
                  }
                  databaseId
                }
              }
            }
          `,
        });
        console.log(
          "🚀 ~ file: LatestDeals.tsx:72 ~ fetchServices ~ response:",
          response
        );

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
      <div className="py-8 w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        <SectionTopBar
          title={"Latest Deals"}
          linkText={"VIEW ALL"}
          link={"/deals"}
        />
        {/* BOTTOM PART (CARDS) */}
        {/* <div className="w-full flex flex-col gap-2 items-start md:flex-row md:justify-between md:flex-wrap 2xl:justify-center  2xl:gap-16"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* card */}
          {loading ? (
            <Spinner />
          ) : (
            <>
              {apiData.length > 0 && (
                <>
                  {/* <Loader /> */}
                  {apiData.map((item: any, i) => (
                    <DealCard
                      key={i}
                      title={item.discounts.productName}
                      image={item.discounts.productImageUrl}
                      // description={item.discounts.summary}
                      // location={item.discounts.location}
                      store={item.discounts.companyName}
                      discountPrice={item.discounts.discountPrice}
                      normalPrice={item.discounts.normalPrice}
                      discountPercentage={item.discounts.discountPercentage}
                      link={item.databaseId}
                      parentSiteLogo={item.discounts.parentSiteLogo}
                    />
                  ))}
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
