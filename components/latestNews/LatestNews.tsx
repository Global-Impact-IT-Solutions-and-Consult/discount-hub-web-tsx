import Image from "next/image";
import RatingStars from "@/widgets/ratingStars/RatingStars";
import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import { BiSolidBasket, BiSolidMap } from "react-icons/bi";
import NewsCard from "./NewsCard";

const LatestNews = () => {
  return (
    <>
      <div className="px-4 py-8  w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        <SectionTopBar
          title={"Latest News"}
          linkText={"VIEW BLOG"}
          link={"#"}
        />
        {/* BOTTOM PART (CARDS) */}
        {/* <div className="w-full flex flex-col gap-2 items-center lg:px-6  md:flex-row md:justify-evenly md:flex-wrap  2xl:gap-16"> */}
        <div className="w-full flex flex-col gap-2 items-center md:flex-row md:justify-between md:flex-wrap 2xl:justify-center  2xl:gap-16">
          {/* card */}
          <NewsCard
            date={"6 Mar"}
            image={"/heroSlider/1.jpg"}
            title={"RESTAURANT EMPLOYER READ CLIENTS ORDERS ON HIS IPAD"}
            author={"sinan"}
            comment={"4"}
            description={
              "Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac"
            }
            link={"#"}
          />
          {/* card */}
          <NewsCard
            date={"6 Mar"}
            image={"/heroSlider/1.jpg"}
            title={"RESTAURANT EMPLOYER READ CLIENTS ORDERS ON HIS IPAD"}
            author={"sinan"}
            comment={"4"}
            description={
              "Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac"
            }
            link={"#"}
          />
          {/* card */}
          <NewsCard
            date={"6 Mar"}
            image={"/heroSlider/1.jpg"}
            title={"RESTAURANT EMPLOYER READ CLIENTS ORDERS ON HIS IPAD"}
            author={"sinan"}
            comment={"4"}
            description={
              "Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac"
            }
            link={"#"}
          />
          {/* card */}
          <NewsCard
            date={"6 Mar"}
            image={"/heroSlider/1.jpg"}
            title={"RESTAURANT EMPLOYER READ CLIENTS ORDERS ON HIS IPAD"}
            author={"sinan"}
            comment={"4"}
            description={
              "Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac"
            }
            link={"#"}
          />
          {/* card */}
          <NewsCard
            date={"6 Mar"}
            image={"/heroSlider/1.jpg"}
            title={"RESTAURANT EMPLOYER READ CLIENTS ORDERS ON HIS IPAD"}
            author={"sinan"}
            comment={"4"}
            description={
              "Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac"
            }
            link={"#"}
          />
          {/* card */}
          <NewsCard
            date={"6 Mar"}
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
