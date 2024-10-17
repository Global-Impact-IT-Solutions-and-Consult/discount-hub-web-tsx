"use client";

import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { error } from "../helpers/Alert";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// const redis = require("redis");
// const util = require("util");

// const { redisClient, getAsync, setexAsync } = require("../utils/redis");

const AppContext = createContext<any>(null);

export const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  // const url = `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp/graphql`;
  const url = `${process.env.NEXT_API_BASE_URL}`;
  console.log("🚀 ~ url:", url);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});
  const [topbarName, setTopbarName] = useState("Welcome!");
  const [baseURL, setBaseURL] = useState("http://localhost:6001");

  // HERO SECTION
  const [leftHero, setLeftHero] = useState([]);

  // PRODUCTS
  const [allProducts, setAllProducts] = useState([]);
  const [oneProductId, setOneProductId] = useState();
  const [oneProduct, setOneProduct] = useState([]);

  // CATEGORIES
  const [allCategories, setAllCategories] = useState([]);

  //************/
  //*******/

  // **************** //
  //*** FUNCTIONS ***//
  // **************** //

  // HERO SECTION

  // const fetchServices = async () => {
  //   const client = new ApolloClient({
  //     // uri: "http://discounthub.local/graphql",
  //     uri: url,
  //     cache: new InMemoryCache(),
  //   });

  //   const response = await client.query({
  //     query: gql`
  //       query unemployed {
  //         discounts {
  //           edges {
  //             node {
  //               discounts {
  //                 companyName
  //                 discountPercentage
  //                 discountPrice
  //                 normalPrice
  //                 productImageUrl
  //                 productName
  //                 productUrl
  //               }
  //             }
  //           }
  //         }
  //       }
  //     `,
  //   });
  //   // console.log(
  //   //   "🚀 ~ file: AppContext.js:54 ~ fetchServices ~ response:",
  //   //   response
  //   // );

  //   // const getResponse = response.data.products.nodes.map((item) => {
  //   //   return item;
  //   // });

  //   // const getResponse = response.data.footer.footers;
  //   // return getResponse;
  // };

  // PRODUCTS
  // Fetch all discounts

  // const getAllProducts = async () => {
  //   try {
  //     // const client = new ApolloClient({
  //     //   uri: `${url}`,
  //     //   cache: new InMemoryCache(),
  //     // });

  //     // let allProducts = [];
  //     // let cursor = null;
  //     // let hasNextPage = true;

  //     // while (hasNextPage) {
  //     //   const response = await client.query({
  //     //     query: gql`
  //     //       query unemployed($cursor: String) {
  //     //         discounts(first: 100, after: $cursor) {
  //     //           nodes {
  //     //             discounts {
  //     //               companyName
  //     //               discountPercentage
  //     //               discountPrice
  //     //               normalPrice
  //     //               productImageUrl
  //     //               productName
  //     //               productUrl
  //     //               parentSiteLogo
  //     //               productRating
  //     //             }
  //     //             databaseId
  //     //           }
  //     //           pageInfo {
  //     //             endCursor
  //     //             hasNextPage
  //     //           }
  //     //         }
  //     //       }
  //     //     `,
  //     //     variables: { cursor },
  //     //   });

  //     //   const { nodes, pageInfo } = response.data.products;

  //     //   // Flatten arrays within each iteration and include databaseId
  //     //   allProducts = allProducts.concat(nodes);

  //     //   cursor = pageInfo.endCursor;
  //     //   hasNextPage = pageInfo.hasNextPage;
  //     // }

  //     // Update the state with all discounts

  //     setAllProducts([]);
  //   } catch (error) {
  //     console.log("Error fetching discounts:", error);
  //   }
  // };

  // const getAllProducts = async () => {
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
  //       //   "🚀 ~ getAllProducts ~ response:",
  //       //   response.data.products.nodes.length
  //       // );

  //       const { nodes, pageInfo } = response.data.products;
  //       console.log("🚀 ~ getAllProducts ~ nodes:", nodes);
  //       setAllProducts((prevDiscounts) => [
  //         ...prevDiscounts,
  //         ...nodes,
  //         // ...nodes.map((item) => item.discounts).flat(),
  //       ]);

  //       // newDiscounts = newDiscounts.concat(
  //       //   nodes.map((item) => item.discounts).flat()
  //       // );

  //       // setAllProducts(() => ({
  //       //   ...allProducts,
  //       //   nodes,
  //       // }));

  //       cursor = pageInfo.endCursor;
  //       hasNextPage = pageInfo.hasNextPage;
  //     }
  //     // console.log("🚀 ~ getAllProducts ~ allProducts:", newDiscounts);
  //     // setAllProducts(newDiscounts.flat());
  //   } catch (error) {
  //     console.log("Error fetching discounts:", error);
  //   }
  // };

  // const getAllProductss = async () => {
  //   try {
  //     const client = new ApolloClient({
  //       uri: `${url}`,
  //       cache: new InMemoryCache(),
  //     });

  //     const response = await client.query({
  //       query: gql`
  //         query unemployed {
  //           discounts(first: 200) {
  //             nodes {
  //               discounts {
  //                 companyName
  //                 discountType
  //                 discountPrice
  //                 discountPercentage
  //                 normalPrice
  //                 productImageUrl
  //                 productName
  //                 productUrl
  //               }
  //             }
  //           }
  //         }
  //       `,
  //     });

  //     const getResponse = response.data.products.nodes.map((item) => {
  //       return item;
  //     });
  //     setAllProducts(getResponse);
  //   } catch (error) {
  //     console.log(
  //       "🚀 ~ file: AppContext.js:147 ~ getAllProducts ~ error:",
  //       error
  //     );
  //   }
  // };

  // const getAllProducts = async () => {
  //   try {
  //     // Try to fetch data from Redis cache
  //     const cachedData = await getAsync("allProducts");

  //     if (cachedData) {
  //       console.log("🚀 ~ getAllProducts ~ cachedData:", cachedData);
  //       // If data is found in the cache, use it
  //       setAllProducts(JSON.parse(cachedData));
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
  //       const getResponse = response.data.products.nodes.map((item) => item);
  //       console.log("🚀 ~ getAllProducts ~ getResponse:", getResponse);
  //       setAllProducts(getResponse);

  //       // Store the data in the Redis cache with a TTL of 1 hour (3600 seconds)
  //       await setexAsync("allProducts", 3600, JSON.stringify(getResponse));
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

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/product`, {
        headers: {
          "content-type": "application/json",
        },
      });
      // console.log("🚀 ~ getAllProducts ~ response:", response);
      setLoading(false);
      if (response.status === 200) {
        setAllProducts(response.data.data);
      }
    } catch (err: any) {
      setLoading(false);
      console.log("🚀 ~ getAllProducts ~ err:", err);
      // error(
      //   err.response?.data?.message
      //     ? err?.response?.data?.message
      //     : err.response?.data?.error
      // );
    }
  };

  const getOneProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/product/${oneProductId}`, {
        headers: {
          "content-type": "application/json",
        },
      });
      console.log("🚀 ~ getOneProduct ~ response:", response);
      setLoading(false);
      if (response.status === 200) {
        setOneProduct(response.data.data);
      }
    } catch (err: any) {
      setLoading(false);
      console.log("🚀 ~ getOneProduct ~ err:", err);
      // error(
      //   err.response?.data?.message
      //     ? err?.response?.data?.message
      //     : err.response?.data?.error
      // );
    }
  };

  // CATEGORIES
  // Fetch left hero categories
  const getAllCategories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${baseURL}/product/categories/product-count`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log("🚀 ~ getAllCategories ~ response:", response);
      setLoading(false);
      if (response.status === 200) {
        setAllCategories(response.data.data);
      }
    } catch (err: any) {
      setLoading(false);
      console.log("🚀 ~ getAllCategories ~ err:", err);
      // error(
      //   err.response?.data?.message
      //     ? err?.response?.data?.message
      //     : err.response?.data?.error
      // );
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("3dik4n.init");
      // fetchServices();
      // getLeftHeroCategories();
      // getAllProducts();
      getAllProducts();
      getAllCategories();
    }
    getAllProducts();
    getAllCategories();
  }, []);

  useEffect(() => {
    if (oneProductId) {
      getOneProduct();
    }
  }, [oneProductId]);

  return (
    <AppContext.Provider
      value={{
        url,
        user,
        loading,
        topbarName,

        setLoading,

        // HERO SECTION
        leftHero,

        setLeftHero,
        // getLeftHeroCategories,

        // PRODUCTS
        oneProduct,
        allProducts,
        oneProductId,

        setOneProduct,
        setAllProducts,
        getAllProducts,
        setOneProductId,

        // CATEGORIES
        allCategories,

        getAllCategories,
        setAllCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
