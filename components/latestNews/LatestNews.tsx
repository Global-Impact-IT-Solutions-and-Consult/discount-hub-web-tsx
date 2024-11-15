"use client";

import { useEffect, useState } from "react";

import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import { BiSolidBasket, BiSolidMap } from "react-icons/bi";
import NewsCard from "./NewsCard";

// Spinner
import Spinner from "@/widgets/spinner/Spinner";

const LatestNews = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

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
          {/* {loading ? (
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
          )} */}

          <NewsCard
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
          />
          <NewsCard
            day={"12"}
            month={"Apr"}
            image={"/heroSlider/1.jpg"}
            title={"RESTAURANT EMPLOYER READ CLIENTS ORDERS ON HIS IPAD"}
            author={"sinan"}
            comment={"4"}
            description={
              "Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac"
            }
            link={"#"}
          />
          <NewsCard
            day={"14"}
            month={"Oct"}
            image={"/heroSlider/1.jpg"}
            title={"RESTAURANT EMPLOYER READ CLIENTS ORDERS ON HIS IPAD"}
            author={"sinan"}
            comment={"4"}
            description={
              "Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac"
            }
            link={"#"}
          />
          <NewsCard
            day={"25"}
            month={"Aug"}
            image={"/heroSlider/1.jpg"}
            title={"RESTAURANT EMPLOYER READ CLIENTS ORDERS ON HIS IPAD"}
            author={"sinan"}
            comment={"4"}
            description={
              "Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac"
            }
            link={"#"}
          />
          <NewsCard
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
          />
          <NewsCard
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
          />
        </div>
      </div>
    </>
  );
};

export default LatestNews;
