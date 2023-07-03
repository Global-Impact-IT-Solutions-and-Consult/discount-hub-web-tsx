import RatingStars from "@/widgets/ratingStars/RatingStars";
import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import Image from "next/image";
import { BiSolidBasket, BiSolidMap } from "react-icons/bi";
import DealCard from "./DealCard";

const LatestDeals = () => {
  return (
    <>
      <div className="px-4 py-8  w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        <SectionTopBar
          title={"Latest Deals"}
          linkText={"VIEW ALL"}
          link={"#"}
        />
        {/* BOTTOM PART (CARDS) */}
        {/* <div className="w-full flex flex-col gap-8 items-center md:flex-row md:justify-start md:flex-wrap md:pl-[0.5rem] lg:pl-[3rem] xl:pl-[2.5rem] 2xl:pl-[3rem] 2xl:gap-16"> */}
        {/* <div className="w-full flex flex-col gap-2 items-center lg:px-6  md:flex-row md:justify-evenly md:flex-wrap  2xl:gap-16"> */}
        <div className="w-full flex flex-col gap-2 items-center md:flex-row md:justify-between md:flex-wrap 2xl:justify-center  2xl:gap-16">
          {/* card */}
          <DealCard
            image={"/heroSlider/1.jpg"}
            title={"The Crash Bad Instant Folding Twin Bed"}
            location={"United States"}
            store={"Amazon"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
            }
            price={"£350.00"}
          />
          {/* card */}
          <DealCard
            image={"/heroSlider/1.jpg"}
            title={"The Crash Bad Instant Folding Twin Bed"}
            location={"United States"}
            store={"Amazon"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
            }
            price={"£350.00"}
          />
          {/* card */}
          <DealCard
            image={"/heroSlider/1.jpg"}
            title={"The Crash Bad Instant Folding Twin Bed"}
            location={"United States"}
            store={"Amazon"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
            }
            price={"£350.00"}
          />
          {/* card */}
          <DealCard
            image={"/heroSlider/1.jpg"}
            title={"The Crash Bad Instant Folding Twin Bed"}
            location={"United States"}
            store={"Amazon"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
            }
            price={"£350.00"}
          />
          {/* card */}
          <DealCard
            image={"/heroSlider/1.jpg"}
            title={"The Crash Bad Instant Folding Twin Bed"}
            location={"United States"}
            store={"Amazon"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
            }
            price={"£350.00"}
          />
          {/* card */}
          <DealCard
            image={"/heroSlider/1.jpg"}
            title={"The Crash Bad Instant Folding Twin Bed"}
            location={"United States"}
            store={"Amazon"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
            }
            price={"£350.00"}
          />
        </div>
      </div>
    </>
  );
};

export default LatestDeals;
