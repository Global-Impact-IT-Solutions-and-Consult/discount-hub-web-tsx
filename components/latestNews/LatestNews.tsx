"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import { BiSolidBasket, BiSolidMap } from "react-icons/bi";
import NewsCard from "./NewsCard";

// Spinner
import Spinner from "@/widgets/spinner/Spinner";

const LatestNews = () => {
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
            newsPlural {
              nodes {
                news {
                  author
                  summary
                  title
                  date
                  image {
                    sourceUrl
                  }
                  comment {
                    comment
                    author
                    date
                    image {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
        `,
      });

      const getResponse: any = response.data.newsPlural.nodes.map(
        (item: any) => item.news
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
          title={"Latest News"}
          linkText={"VIEW BLOG"}
          link={"#"}
        />
        {/* BOTTOM PART (CARDS) */}
        {/* <div className="w-full flex flex-col gap-2 items-center lg:px-6  md:flex-row md:justify-evenly md:flex-wrap  2xl:gap-16"> */}
        <div className="w-full flex flex-col gap-2 items-start md:flex-row md:justify-between md:flex-wrap 2xl:justify-center  2xl:gap-16">
          {/* card */}
          {loading ? (
            <Spinner />
          ) : (
            <>
              {apiData.length > 0 && (
                <>
                  {apiData.map((item: any, i) => (
                    <NewsCard
                      key={i}
                      title={item.title}
                      image={item.image?.sourceUrl}
                      description={item.summary}
                      day={item.date.split(" ")[0]}
                      month={item.date.split(" ")[1].slice(0, 4)}
                      author={item.author}
                      comment={item.comment?.length}
                      link={"#"}
                    />
                  ))}
                </>
              )}
            </>
          )}

          {/* <NewsCard
            day={"6"}
            month={"Mar"}
            image={"/heroSlider/1.jpg"}
            title={"RESTAURANT EMPLOYER READ CLIENTS ORDERS ON HIS IPAD"}
            author={"sinan"}
            comment={"4"}
            description={
              "Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac"
            }
            link={"#"}
          /> */}
        </div>
      </div>
    </>
  );
};

export default LatestNews;
