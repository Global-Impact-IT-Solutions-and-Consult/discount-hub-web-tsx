"use client";

import { createContext, useState, useEffect } from "react";
import axios from "axios";
// import { error } from "../helpers/Alert";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

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
            discountTypes {
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
      setLeftHero(getResponse);
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
      uri: "http://localhost:10019/graphql",
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
    const client = new ApolloClient({
      uri: `${url}`,
      cache: new InMemoryCache(),
    });

    const response = await client.query({
      query: gql`
        query unemployed {
          discounts(first: 1000000) {
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
  };

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

  return (
    <AppContext.Provider
      value={{
        // Misc
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
