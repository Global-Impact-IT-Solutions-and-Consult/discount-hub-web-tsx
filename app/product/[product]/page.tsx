"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import RatingStars from "@/widgets/ratingStars/RatingStars";
import ProductCard from "./ProductCard";
import DescriptionSection from "./DescriptionSection";
import ReviewSection from "./ReviewSection";
import { BiSolidBasket, BiSolidMap } from "react-icons/bi";
import RelatedProducts from "./RelatedProducts";
import Cart from "./sidemenu/Cart";
import Filter from "./sidemenu/Filter";
import About from "./sidemenu/About";
import Products from "./sidemenu/Products";
import RecentReviews from "./sidemenu/RecentReviews";
import Newsletter from "./sidemenu/Newsletter";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const Page = async ({ params }: any) => {
  const [switchSection, setSwitchSection] = useState(true);
  const [apiData, setApiData] = useState();
  const [reviewData, setReviewData] = useState();

  // let apiData = [];
  let prodArr: any = [];
  let reviewArr: any = [];

  // login
  const WPlogin = async () => {
    try {
      // const { username, password } = req.body;
      const username = "admin";
      const password = "admin";
      const response = await axios.post(
        "http://localhost/wp/wp-json/jwt-auth/v1/token",
        {
          username,
          password,
        }
      );
      console.log("🚀 ~ file: page.tsx:44 ~ WPlogin ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ file: page.tsx:47 ~ WPlogin ~ error:", error);
    }
  };

  WPlogin();

  async function fetchServices() {
    const client = new ApolloClient({
      uri: "http://localhost/wp/graphql",
      cache: new InMemoryCache(),
    });

    const response = await client.query({
      query: gql`
        query unemployed {
          product(id: ${params.product}, idType: DATABASE_ID) {
            products {
              category {
                ... on ProductCategory {
                  title
                }
              }
              description
              image {
                sourceUrl
              }
              location
              price
              rating
              reviews {
                date
                image {
                  sourceUrl
                }
                name
                rating
                review
              }
              socialMediaLinks {
                facebook
                googlePlus
                instagram
                pinterest
              }
              store {
                ... on Store {
                  id
                  stores {
                    description
                    rating
                    ratingCount
                    title
                    products {
                      product {
                        ... on Product {
                          products {
                            price
                            rating
                            title
                            image {
                              sourceUrl
                            }
                          }
                          slug
                          id
                          databaseId
                        }
                      }
                    }
                  }
                }
              }
              summary
              title
            }
          }
        }
      `,
    });
    // console.log("🚀 ~ file: page.tsx:81 ~ fetchServices ~ response:", response);

    // const getResponse = response.data.products.nodes.map((item: any) => {
    //   return item.products;
    // });

    const getResponse = response.data.product.products;
    // console.log(
    //   "🚀 ~ file: page.tsx:90 ~ fetchServices ~ getResponse:",
    //   getResponse
    // );
    setApiData(getResponse);
    return getResponse;
  }

  prodArr = await fetchServices();

  async function fetchReviews() {
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
    // console.log("🚀 ~ file: page.tsx:151 ~ fetchReviews ~ response:", response);

    const getResponse = response.data.reviews.nodes.map((item: any) => {
      if (item.reviews.product.databaseId === 84) {
        return item.reviews;
      }
    });

    setReviewData((prevApiData: any) => ({
      ...prevApiData,
      ...getResponse,
    }));
  }

  // fetchReviews();

  async function createReview() {
    const client = new ApolloClient({
      uri: "http://localhost/wp/graphql",
      cache: new InMemoryCache(),
    });

    try {
      const { data } = await client.mutate({
        mutation: gql`
          mutation MyMutation {
            createReview(
              input: {
                content: "scribble scribble"
                date: "2022-10-03"
                clientMutationId: "createReview"
                title: "test"
              }
            ) {
              review {
                id
                title
                content
                date
              }
            }
          }
        `,
      });

      console.log("Review created:", data.createReview);
    } catch (error) {
      console.error("Error creating review:", error);
    }
    // console.log("🚀 ~ file: page.tsx:186 ~ createReview ~ response:", response);
  }

  // createReview();

  // const postToWordPress = async () => {
  //   // Prepare your post data
  //   const postData = {
  //     name: "Your Post Title",
  //     date: "2022-10-03",
  //     rating: 4,
  //     review: "MEHHHHHHHH",
  //     // Include any other custom fields as needed for your custom post type
  //   };

  //   // Set the API URL for your custom post type
  //   const apiUrl = "http://localhost/wp/wp-json/wp/v2/reviews"; // Replace 'reviews' with your custom post type slug

  //   try {
  //     const response = await axios.post(apiUrl, postData, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         // Add any authentication headers if required
  //       },
  //     });
  //     console.log(
  //       "🚀 ~ file: page.tsx:186 ~ postToWordPress ~ response:",
  //       response
  //     );

  //     if (response.status === 201) {
  //       // Post created successfully
  //       console.log("Post created:", response.data);
  //     } else {
  //       // Handle errors here
  //       console.error("Error:", response.statusText);
  //     }
  //   } catch (error) {
  //     // Handle any other errors
  //     console.error("Error:", error);
  //   }
  // };

  // postToWordPress(); // Call the function to initiate the request

  return (
    <>
      <div className="w-full flex flex-col gap-4 md:flex-row 2xl:gap-10">
        {/* left */}
        <div className="w-full flex flex-col gap-12 md:w-2/3">
          <ProductCard data={prodArr} />
          {/* <div className="flex flex-col w-full">
            <div className="w-full flex justify-start items-center gap-1">
              <span
                onClick={() => setSwitchSection(!switchSection)}
                className={
                  switchSection
                    ? "px-8 py-2 rounded-sm bg-green-500 text-white duration-300 ease-in-out cursor-pointer   hover:bg-green-500"
                    : "px-8 py-2 rounded-sm bg-green-400 text-white duration-300 ease-in-out cursor-pointer   hover:bg-green-500"
                }
              >
                DESCRIPTION
              </span>
              <span
                onClick={() => setSwitchSection(!switchSection)}
                className={
                  switchSection
                    ? "px-8 py-2 rounded-sm bg-green-400 text-white duration-300 ease-in-out cursor-pointer   hover:bg-green-500"
                    : "px-8 py-2 rounded-sm bg-green-500 text-white duration-300 ease-in-out cursor-pointer   hover:bg-green-500"
                }
              >
                REVIEWS (2)
              </span>
            </div>
            {switchSection ? (
              <>
                <DescriptionSection data={prodArr} />
              </>
            ) : (
              <>
                <ReviewSection data={prodArr} />
              </>
            )}
          </div> */}
          <div className="flex flex-col w-full">
            <div className="w-full flex justify-start items-center gap-1">
              <span className="px-8 py-2 rounded-sm bg-green-500 text-white duration-300 ease-in-out cursor-pointer   hover:bg-green-500">
                REVIEWS ({prodArr.reviews.length})
              </span>
            </div>
            <ReviewSection data={prodArr} />
          </div>
          {/* related products */}
          <RelatedProducts />
        </div>
        {/* right */}
        <div className="w-full mb-8 md:w-1/3 flex flex-col gap-6">
          <Cart data={prodArr} />
          {/* <Filter /> */}
          <About data={prodArr} />
          <Products data={prodArr} />
          <Newsletter />
          <RecentReviews />
        </div>
      </div>
    </>
  );
};

export default Page;
