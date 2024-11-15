import RatingStars from "@/widgets/ratingStars/RatingStars";
import Image from "next/image";
import { BiSolidBasket, BiSolidMap } from "react-icons/bi";

const DealCard = ({
  image,
  title,
  location,
  store,
  description,
  discountPrice,
  rating,
  link,
  normalPrice,
  discountPercentage,
  parentSiteLogo,
}: any) => {
  return (
    <>
      {/* <a href={link}> */}
      <a href={`/product/${link}`}>
        <div className="bg-white flex flex-col items-center my-6 cursor-pointer rounded w-full md:w-[21.5rem] lg:w-[24rem] xl:w-[21.5rem] 2xl:w-[22rem] 2xl:my-2">
          {/* card top*/}
          <div className="w-full h-[210px] mb-2 relative p-2 pt-4">
            {!image ? (
              <>
                <Image
                  loading="lazy"
                  width={1440}
                  height={600}
                  src={"/heroSlider/1.jpg"}
                  alt="/"
                  className="rounded-t w-full h-full object-cover"
                />
              </>
            ) : (
              <>
                <img
                  loading="lazy"
                  src={image}
                  alt="#"
                  className="object-contain w-full h-full rounded-t"
                />
              </>
            )}
            <div className=" text-orange-500 py-1 px-2 rounded-md flex items-center justify-center absolute top-2 right-2 w-16">
              {/* company logo */}
              <img
                src={parentSiteLogo ? parentSiteLogo : image}
                alt="#"
                className="object-contain w-full h-full rounded-t"
              />
            </div>
          </div>
          {/* card bottom */}
          <div className="w-full p-2 px-4 flex flex-col items-start text-gray-500">
            <div className="w-full min-h-[20px] flex items-start mb-2 ">
              <RatingStars number={rating} />
            </div>
            <div className="w-full h-[45px] overflow-hidden mb-2 ">
              <span className="font-semibold my-2 text-truncate">{title}</span>
              {/* {parentSiteLogo} */}
            </div>
            <div className="flex gap-4 text-sm w-full my-2 h-[20px] text-gray-400">
              {/* <div className="flex gap-1">
                <BiSolidMap />
                {location}
              </div> */}
              <div className="font-semibold flex items-center gap-1">
                {/* <BiSolidMap /> */}
                <BiSolidBasket />
                {store}
              </div>
            </div>
            {/* <div className="w-full h-[70px] overflow-hidden mb-2">
              <span className="font-light text-sm h-[50px] text-truncate text-gray-400">
                {description}
              </span>
            </div> */}
            <div className="flex justify-between items-center w-full relative mt-2">
              <div className="flex flex-col justify-start items-start">
                <div className="w-full flex py-1 text-green-300 text-[24px]">
                  ₦{new Intl.NumberFormat("en-NG").format(discountPrice)}
                </div>
                <div className="w-full flex py-1 text-gray-300 text-[18px] line-through">
                  ₦{new Intl.NumberFormat("en-NG").format(normalPrice)}
                </div>
              </div>
              <div className="bg-red-300/40 text-orange-500 py-4 px-2 rounded-md flex items-center justify-center absolute top-2 right-2">
                - {Math.floor(discountPercentage)} %
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default DealCard;

{
  /* <>
  <a href={`/product/${link}`}>
    <div className="bg-white flex flex-col items-center my-6 cursor-pointer rounded w-full md:w-[21.5rem] lg:w-[24rem] xl:w-[21.5rem] 2xl:w-[22rem] 2xl:my-2">
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
          <>
            <Image
              width={1440}
              height={600}
              src={image}
              alt="/"
              className="rounded-t w-full h-full object-cover"
            />
          </>
        )}
      </div>
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
          {price}
        </div>
        <div className="w-full flex justify-end p-1 text-gray-300 text-[18px] line-through">
          {price}
        </div>
      </div>
    </div>
  </a>
</>; */
}
