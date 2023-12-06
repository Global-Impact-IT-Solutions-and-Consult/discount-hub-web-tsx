"use client";

import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./sidemenu/Cart";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Spinner from "@/widgets/spinner/Spinner";
import AppContext from "@/context/AppContext";

const ProductPage = ({ id }: any) => {
  const { url } = useContext(AppContext);

  const [switchSection, setSwitchSection] = useState(true);

  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchServices() {
      try {
        const client = new ApolloClient({
          uri: url,
          cache: new InMemoryCache(),
        });

        const response = await client.query({
          query: gql`
            query unemployed {
            discount(idType: DATABASE_ID, id: ${id}) {
                discounts {
                companyName
                discountPercentage
                discountPrice
                discountType
                normalPrice
                productImageUrl
                productName
                productUrl
                }
            }
            }
          `,
        });

        const getResponse: any = response.data.discount.discounts;
        // console.log(
        //   "🚀 ~ file: ProductPage.tsx:47 ~ fetchServices ~ getResponse:",
        //   getResponse
        // );

        setApiData(getResponse);
        setLoading(false);
      } catch (ex: any) {
        console.log("Error fetching data:", ex);
        console.log("Server response:", ex.response);
      }
    }
    fetchServices();
  }, [id]);

  return (
    <>
      <div className="w-full flex flex-col gap-4 md:flex-row 2xl:gap-10">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {/* left */}
            <div className="w-full flex flex-col gap-12 md:w-2/3">
              <ProductCard data={apiData} />
              <div className="flex flex-col w-full">
                {/* <div className="w-full flex justify-start items-center gap-1">
              <span
                onClick={() => setSwitchSection(!switchSection)}
                className={
                  switchSection
                    ? "px-8 py-2 rounded-sm bg-green-500 text-white duration-300 ease-in-out cursor-pointer   hover:bg-green-500"
                    : "px-8 py-2 rounded-sm bg-green-400 text-white duration-300 ease-in-out cursor-pointer   hover:bg-green-500"
                }
              >
                DESCRIPTION {id}
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
            </div> */}
                {/* {switchSection ? (
              <>
                <DescriptionSection />
              </>
            ) : (
              <>
                <ReviewSection />
              </>
            )} */}
              </div>
              {/* related products */}
              {/* <RelatedProducts /> */}
            </div>
            {/* right */}
            <div className="w-full mb-8 md:w-1/3 flex flex-col gap-6">
              <Cart data={apiData} />
              {/* <Filter />
          <About />
          <Products />
          <Newsletter />
          <RecentReviews /> */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductPage;
