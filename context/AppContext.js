"use client";

import { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { error } from "../helpers/Alert";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// const redis = require("redis");
// const util = require("util");

// const { redisClient, getAsync, setexAsync } = require("../utils/redis");

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [url, setUrl] = useState("http://127.0.0.1:10019/graphql");
  const [loading, setLoading] = useState(false);
  const [leftPanelLoading, setLeftPanelLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  const [printing, setPrinting] = useState(false);
  const [topbarName, setTopbarName] = useState("Welcome!");

  // HERO SECTION
  const [leftHero, setLeftHero] = useState([]);

  // DISCOUNTS
  const [allDiscounts, setAllDiscounts] = useState([]);

  //************/
  //*******/

  // **************** //
  //*** FUNCTIONS ***//
  // **************** //

  // HERO SECTION
  // Fetch left hero categories
  const getLeftHeroCategories = async () => {
    try {
      setLoading(true);
      const client = new ApolloClient({
        // uri: "http://localhost/wp/graphql",
        uri: `${url}`,
        cache: new InMemoryCache(),
      });

      const response = await client.query({
        query: gql`
          query unemployed {
            discountTypes(where: { hideEmpty: true }) {
              nodes {
                name
                count
                slug
              }
            }
          }
        `,
      });

      const getResponse = response.data.discountTypes.nodes.map((item) => {
        return item;
      });
      const truncate = getResponse.slice(0, 7);

      setLeftHero(truncate);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(
        "🚀 ~ file: AppContext.js:38 ~ getLeftHeroCategories ~ error:",
        error
      );
    }
  };

  const fetchServices = async () => {
    const client = new ApolloClient({
      // uri: "http://discounthub.local/graphql",
      uri: url,
      cache: new InMemoryCache(),
    });

    const response = await client.query({
      query: gql`
        query unemployed {
          discounts {
            edges {
              node {
                discounts {
                  companyName
                  discountPercentage
                  discountPrice
                  normalPrice
                  productImageUrl
                  productName
                  productUrl
                }
              }
            }
          }
        }
      `,
    });
    // console.log(
    //   "🚀 ~ file: AppContext.js:54 ~ fetchServices ~ response:",
    //   response
    // );

    // const getResponse = response.data.discounts.nodes.map((item) => {
    //   return item;
    // });

    // const getResponse = response.data.footer.footers;
    // return getResponse;
  };

  // DISCOUNTS
  // Fetch all discounts

  const getAllDiscounts = async () => {
    try {
      const client = new ApolloClient({
        uri: `${url}`,
        cache: new InMemoryCache(),
      });

      let allDiscounts = [];
      let cursor = null;
      let hasNextPage = true;

      while (hasNextPage) {
        const response = await client.query({
          query: gql`
            query unemployed($cursor: String) {
              discounts(first: 100, after: $cursor) {
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
                    productRating
                  }
                  databaseId
                }
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
            }
          `,
          variables: { cursor },
        });

        const { nodes, pageInfo } = response.data.discounts;

        // Flatten arrays within each iteration and include databaseId
        allDiscounts = allDiscounts.concat(nodes);

        cursor = pageInfo.endCursor;
        hasNextPage = pageInfo.hasNextPage;
      }

      // Update the state with all discounts
      setAllDiscounts(allDiscounts);
    } catch (error) {
      console.log("Error fetching discounts:", error);
    }
  };

  // const getAllDiscounts = async () => {
  //   try {
  //     const client = new ApolloClient({
  //       uri: `${url}`,
  //       cache: new InMemoryCache(),
  //     });

  //     let newDiscounts = [];
  //     let cursor = null;
  //     let hasNextPage = true;

  //     while (hasNextPage) {
  //       const response = await client.query({
  //         query: gql`
  //           query unemployed($cursor: String) {
  //             discounts(first: 100, after: $cursor) {
  //               nodes {
  //                 discounts {
  //                   companyName
  //                   discountType
  //                   discountPrice
  //                   discountPercentage
  //                   normalPrice
  //                   productImageUrl
  //                   productName
  //                   productUrl
  //                 }
  //               }
  //               pageInfo {
  //                 endCursor
  //                 hasNextPage
  //               }
  //             }
  //           }
  //         `,
  //         variables: { cursor },
  //       });
  //       // console.log(
  //       //   "🚀 ~ getAllDiscounts ~ response:",
  //       //   response.data.discounts.nodes.length
  //       // );

  //       const { nodes, pageInfo } = response.data.discounts;
  //       console.log("🚀 ~ getAllDiscounts ~ nodes:", nodes);
  //       setAllDiscounts((prevDiscounts) => [
  //         ...prevDiscounts,
  //         ...nodes,
  //         // ...nodes.map((item) => item.discounts).flat(),
  //       ]);

  //       // newDiscounts = newDiscounts.concat(
  //       //   nodes.map((item) => item.discounts).flat()
  //       // );

  //       // setAllDiscounts(() => ({
  //       //   ...allDiscounts,
  //       //   nodes,
  //       // }));

  //       cursor = pageInfo.endCursor;
  //       hasNextPage = pageInfo.hasNextPage;
  //     }
  //     // console.log("🚀 ~ getAllDiscounts ~ allDiscounts:", newDiscounts);
  //     // setAllDiscounts(newDiscounts.flat());
  //   } catch (error) {
  //     console.log("Error fetching discounts:", error);
  //   }
  // };

  const getAllDiscountss = async () => {
    try {
      const client = new ApolloClient({
        uri: `${url}`,
        cache: new InMemoryCache(),
      });

      const response = await client.query({
        query: gql`
          query unemployed {
            discounts(first: 200) {
              nodes {
                discounts {
                  companyName
                  discountType
                  discountPrice
                  discountPercentage
                  normalPrice
                  productImageUrl
                  productName
                  productUrl
                }
              }
            }
          }
        `,
      });

      const getResponse = response.data.discounts.nodes.map((item) => {
        return item;
      });
      setAllDiscounts(getResponse);
    } catch (error) {
      console.log(
        "🚀 ~ file: AppContext.js:147 ~ getAllDiscounts ~ error:",
        error
      );
    }
  };

  // const getAllDiscounts = async () => {
  //   try {
  //     // Try to fetch data from Redis cache
  //     const cachedData = await getAsync("allDiscounts");

  //     if (cachedData) {
  //       console.log("🚀 ~ getAllDiscounts ~ cachedData:", cachedData);
  //       // If data is found in the cache, use it
  //       setAllDiscounts(JSON.parse(cachedData));
  //     } else {
  //       // If data is not in the cache, fetch it from the GraphQL endpoint
  //       const client = new ApolloClient({
  //         uri: `${url}`,
  //         cache: new InMemoryCache(),
  //       });

  //       const response = await client.query({
  //         query: gql`
  //           query unemployed {
  //             discounts(first: 1000000) {
  //               nodes {
  //                 discounts {
  //                   companyName
  //                   discountType
  //                   discountPrice
  //                   discountPercentage
  //                   normalPrice
  //                   productImageUrl
  //                   productName
  //                   productUrl
  //                 }
  //               }
  //             }
  //           }
  //         `,
  //       });

  //       // Extract and set the response data
  //       const getResponse = response.data.discounts.nodes.map((item) => item);
  //       console.log("🚀 ~ getAllDiscounts ~ getResponse:", getResponse);
  //       setAllDiscounts(getResponse);

  //       // Store the data in the Redis cache with a TTL of 1 hour (3600 seconds)
  //       await setexAsync("allDiscounts", 3600, JSON.stringify(getResponse));
  //     }
  //   } catch (error) {
  //     console.log("Error:", error);
  //   }
  // };

  //*******/
  //************/
  // fetch everything on startup
  //************/
  //*******/

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // console.log("Fetch everything");
      // fetchServices();
      getLeftHeroCategories();
      getAllDiscounts();
    }
  }, []);

  // useEffect(() => {
  //   extractDiscounts();
  // }, [allDiscounts]);

  return (
    <AppContext.Provider
      value={{
        // Misc
        url,
        user,
        loading,
        topbarName,

        setLoading,

        // HERO SECTION
        leftHero,

        setLeftHero,
        getLeftHeroCategories,

        // DISCOUNTS
        allDiscounts,

        setAllDiscounts,
        getAllDiscounts,
      }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};

export default AppContext;
