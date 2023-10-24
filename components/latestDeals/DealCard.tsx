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
  rating,
  link,
}: any) => {
  return (
    <>
      <a href={`/product/${link}`}>
        <div className="bg-white flex flex-col items-center my-6 cursor-pointer rounded w-full md:w-[21.5rem] lg:w-[24rem] xl:w-[21.5rem] 2xl:w-[22rem] 2xl:my-2">
          {/* card top*/}
          <div className="w-full h-[180px] mb-2 ">
            {!image ? (
              <>
                <Image
                  width={1440}
                  height={600}
                  src={"/heroSlider/1.jpg"}
                  alt="/"
                  className="rounded-t w-full h-full object-cover"
                />
              </>
            ) : (
              <Image
                width={1440}
                height={600}
                src={image}
                alt="/"
                className="rounded-t w-full h-full object-cover"
              />
            )}
          </div>
          {/* card bottom */}
          <div className="w-full p-2 px-4 flex flex-col items-start text-gray-500">
            <div className="w-full min-h-[20px] flex items-start mb-2 ">
              <RatingStars number={rating} />
            </div>
            <div className="w-full h-[45px] overflow-hidden mb-2 ">
              <span className="font-semibold my-2 text-truncate">{title}</span>
            </div>
            <div className="flex gap-4 text-xs w-full my-2 h-[20px] text-gray-400">
              <div className="flex gap-1">
                <BiSolidMap />
                {location}
              </div>
              <div className="font-semibold flex gap-1">
                <BiSolidBasket />
                {store}
              </div>
            </div>
            <div className="w-full h-[70px] overflow-hidden mb-2">
              <span className="font-light text-sm h-[50px] text-truncate text-gray-400">
                {description}
              </span>
            </div>
            <div className="w-full flex justify-end p-1 text-green-300 text-[24px]">
              £{price}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default DealCard;
