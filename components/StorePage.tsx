"use client";

import { useState, useEffect } from "react";

import About from "@/app/product/sidemenu/About";
import DealsPanel from "../app/stores/[store]/DealsPanel";
import CouponsPanel from "../app/stores/[store]/CouponsPanel";
import {
  BiLogoTwitch,
  BiSolidMessageRounded,
  BiSolidStar,
} from "react-icons/bi";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import RatingStars from "@/widgets/ratingStars/RatingStars";

// Spinner
import Spinner from "@/widgets/spinner/Spinner";

const StorePage = ({ params }: any) => {
  const [switchSection, setSwitchSection] = useState(true);
  const [store, setStore] = useState([]);
  const [deals, setDeals] = useState([]);
  // const [links, setLinks] = useState([]);
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);

  let link: any = [];

  async function fetchStore() {
    setLoading(true);
    // Initialize Apollo Client
    const client = new ApolloClient({
      uri: "http://localhost/wp/graphql",
      cache: new InMemoryCache(),
    });

    try {
      const response = await client.query({
        query: gql`
          query unemployed {
            store(id: ${params.store}, idType: DATABASE_ID) {
              stores {
                description
                rating
                ratingCount
                title
              }
              slug
            }
          }
        `,
      });

      const getResponse = response.data.store.stores;
      setStore(getResponse);
      setLoading(false);

      fetchDeals();
      fetchCoupons();
    } catch (error) {
      console.error("Error fetching store data:", error);
      setLoading(false);
    }
  }

  async function fetchDeals() {
    // Initialize Apollo Client
    const client = new ApolloClient({
      uri: "http://localhost/wp/graphql",
      cache: new InMemoryCache(),
    });

    try {
      const response = await client.query({
        query: gql`
          query unemployed {
            products {
              nodes {
                products {
                  price
                  rating
                  title
                  summary
                  image {
                    sourceUrl
                  }
                  location
                  store {
                    ... on Store {
                      id
                      title
                      slug
                      databaseId
                    }
                  }
                  category {
                    ... on ProductCategory {
                      slug
                      title
                    }
                  }
                }
                databaseId
              }
            }
          }
        `,
      });

      const fetchedDeals = response.data.products.nodes.filter((item: any) => {
        return item.products.store.databaseId === parseInt(params.store);
      });

      // response.data.products.nodes.map((item: any) => {
      //   if (item.products.store.databaseId === parseInt(params.store)) {
      //     link.push(item.databaseId);
      //     // setLinks(response.);
      //   }
      // });

      setDeals(fetchedDeals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching deals data:", error);
      setLoading(false);
    }
  }

  async function fetchCoupons() {
    setLoading(false);
    const client = new ApolloClient({
      uri: "http://localhost/wp/graphql",
      cache: new InMemoryCache(),
    });

    const response = await client.query({
      query: gql`
        query unemployed {
          coupons {
            nodes {
              coupons {
                code
                discount
                expiryDate
                location
                title
                image {
                  sourceUrl
                }
                store {
                  ... on Store {
                    databaseId
                    title
                  }
                }
              }
            }
          }
        }
      `,
    });
    console.log("🚀 ~ file: page.tsx:48 ~ fetchServices ~ response:", response);

    const fetchedCoupons = response.data.coupons.nodes.filter((item: any) => {
      return item.coupons.store.databaseId === parseInt(params.store);
    });

    setCoupons(fetchedCoupons);
    setLoading(false);

    // const getResponse = response.data.store.stores;
    // return getResponse;

    // return response.data;
  }

  useEffect(() => {
    fetchStore();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 items-start md:flex-row">
        <div className=" w-full flex flex-col md:w-3/12">
          {/* <About store={store} /> */}
          <div className="w-full bg-white flex flex-col rounded-md">
            {/* card bottom */}
            <div className="p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
              <span className="font-light text-xl text-gray-900">
                About Seller
              </span>
              {/* horizontal line */}
              <div className="w-full flex items-center">
                <div className="bg-green-400 p-[1px] w-2/12"></div>
                <div className="bg-gray-200 p-[1px] w-10/12"></div>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center text-sm   text-gray-800 px-4 py-6">
                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    <BiLogoTwitch size={60} />
                    <span className="cursor-pointer text-lg duration-300 ease-in-out hover:text-green-400">
                      {/* <a href="www.twitch.com">{store?.title}</a> */}
                    </span>
                    <div className="flex items-center justify-center gap-4">
                      {/* <RatingStars size={16} />({store?.ratingCount} rates) */}
                    </div>
                    <span className="text-center">
                      {/* {store?.description} */}
                      {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae quis, architecto perferendis nostrum quo commodi
              consectetur, blanditiis mollitia sequi nam necessitatibus,
              corporis exercitationem beatae libero. */}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-100 flex items-center justify-center p-4 rounded-b-md gap-8 mt-[-5px] font-gray-700 font-light text-lg">
            <div className="flex flex-col gap-2 items-center justify-center ">
              <span>{deals.length}</span>
              <span>Deals</span>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <span>{coupons.length}</span>
              <span>Coupons</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-9/12">
          <div className="bg-white w-full rounded-md flex items-center justify-start gap-6 p-2 px-4   lg:text-lg font-normal shadow-lg mb-4">
            <div
              className={
                switchSection
                  ? "flex items-center gap-2 text-green-500 text-base   cursor-pointer duration-300 ease-in-out hover:text-green-500"
                  : "flex items-center gap-2 text-gray-800 text-base   cursor-pointer duration-300 ease-in-out hover:text-green-500"
              }
              onClick={() => setSwitchSection(true)}
            >
              {" "}
              <BiSolidMessageRounded /> Deals
            </div>
            <div
              className={
                switchSection
                  ? "flex items-center gap-2 text-gray-800 text-base   cursor-pointer duration-300 ease-in-out hover:text-green-500"
                  : "flex items-center gap-2 text-green-500 text-base   cursor-pointer duration-300 ease-in-out hover:text-green-500"
              }
              onClick={() => setSwitchSection(false)}
            >
              {" "}
              <BiSolidStar /> Coupons
            </div>
          </div>
          {loading ? (
            <Spinner />
          ) : (
            <>
              {switchSection ? (
                <>
                  <DealsPanel deals={deals} />
                </>
              ) : (
                <>
                  <CouponsPanel coupons={coupons} />
                </>
              )}
            </>
          )}
          {/* <DealsPanel /> */}
        </div>
      </div>
    </>
  );
};

export default StorePage;
