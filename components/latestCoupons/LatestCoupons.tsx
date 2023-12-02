"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import CouponCard from "./Couponcard";

// Spinner
import Spinner from "@/widgets/spinner/Spinner";

const LatestCoupons = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setLoading(true);
  //   async function fetchServices() {
  //     const client = new ApolloClient({
  //       uri: "http://localhost/wp/graphql",
  //       cache: new InMemoryCache(),
  //     });

  //     const response = await client.query({
  //       query: gql`
  //         query unemployed {
  //           coupons {
  //             nodes {
  //               coupons {
  //                 code
  //                 discount
  //                 expiryDate
  //                 location
  //                 title
  //                 image {
  //                   sourceUrl
  //                 }
  //                 store {
  //                   ... on Store {
  //                     title
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       `,
  //     });

  //     const getResponse = response.data.coupons.nodes.map(
  //       (item: any) => item.coupons
  //     );

  //     const truncate = getResponse.slice(0, 5);
  //     setApiData(truncate);
  //     setLoading(false);
  //   }
  //   fetchServices();
  // }, []);

  return (
    <>
      <div className="py-8 w-full flex flex-col items-center justify-start gap-8">
        <SectionTopBar
          title={"Latest Coupons"}
          link={"/coupons"}
          linkText={"VIEW ALL"}
        />

        <div className="w-full flex  gap-4 overflow-x-scroll scrolling-auto items-start justify-start md:flex-row md:justify-start md:gap-4 2xl:gap-8">
          {/* {loading ? (
            <Spinner />
          ) : (
            <>
              {apiData.length > 0 && (
                <>
                  {apiData.map((item: any, i) => (
                    <CouponCard
                      key={i}
                      description={item.title}
                      image={item.image?.sourceUrl}
                      location={item.location}
                      store={item.store?.title}
                      price={item.price}
                      code={item.code}
                      expires={item.expiryDate}
                      offer={item.discount}
                    />
                  ))}
                </>
              )}
            </>
          )} */}

          <CouponCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          <CouponCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          <CouponCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          <CouponCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          <CouponCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          <CouponCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
        </div>
      </div>
    </>
  );
};

export default LatestCoupons;
