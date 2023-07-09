import RatingStars from "@/widgets/ratingStars/RatingStars";
import Image from "next/image";
import { BiSolidBasket, BiSolidMap } from "react-icons/bi";

const DealCard = ({
  image,
  title,
  location,
  store,
  description,
  price,
  link,
}: any) => {
  return (
    <>
      <a href={link}>
        <div className="bg-white flex flex-col items-center my-6 hover:shadow-lg cursor-pointer rounded-md w-full md:w-[21.5rem] lg:w-[24rem] xl:w-[21.5rem] 2xl:w-[22rem] 2xl:my-2">
          {/* card top*/}
          <div className="h-[30%]">
            <Image
              width={1440}
              height={600}
              src={image}
              alt="/"
              className="rounded-t-md"
            />
          </div>
          {/* card bottom */}
          <div className="h-[70%] p-4 flex flex-col gap-3 shadow-lg text-gray-500 font-sans">
            <RatingStars />
            <span className="font-light text-lg">{title}</span>
            <div className="flex gap-3 text-xs">
              <div className="flex gap-1">
                <BiSolidMap />
                {location}
              </div>
              <div className="font-semibold flex gap-1">
                <BiSolidBasket />
                {store}
              </div>
            </div>
            <span className="text-sm font-light">{description}</span>
            <div className="w-full flex justify-end p-1 text-green-300 font-semibold">
              {price}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default DealCard;
