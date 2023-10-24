"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import DealCard from "./DealCard";
import Spinner from "@/widgets/spinner/Spinner";

const LatestDeals = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchServices() {
      const client = new ApolloClient({
        uri: "http://localhost/wp/graphql",
        cache: new InMemoryCache(),
      });

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
                    }
                  }
                }
                slug
                databaseId
              }
            }
          }
        `,
      });

      const getResponse: any = response.data.products.nodes.map(
        (item: any) => item
      );

      const truncate = getResponse.slice(0, 6);

      setApiData(truncate);
      setLoading(false);
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
        <div className="w-full flex flex-col gap-2 items-start md:flex-row md:justify-between md:flex-wrap 2xl:justify-center  2xl:gap-16">
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
                      title={item.products.title}
                      image={item.products.image?.sourceUrl}
                      description={item.products.summary}
                      location={item.products.location}
                      store={item.products.store?.title}
                      price={item.products.price}
                      rating={item.products.rating}
                      link={item.databaseId}
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
