import RatingStars from "@/widgets/ratingStars/RatingStars";
import Image from "next/image";
import { BiSolidBasket, BiSolidMap } from "react-icons/bi";

const NavDealCard = ({
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
        <div className="flex items-between gap-4 my-3 cursor-pointer rounded w-full px-2 h-[100px] shadow-sm hover:bg-green-200">
          {/* card left*/}
          <div className="w-[20%] mb-2 relative h-[100px] flex items-start">
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
                  className="object-contain w-full h-full rounded"
                />
              </>
            )}
          </div>
          {/* card right */}
          <div className="w-full h-[100px] flex flex-col items-start text-gray-500">
            {/* <div className="py-1 px-2 rounded-md flex items-center justify-center w-12">
              <img
                src={parentSiteLogo ? parentSiteLogo : image}
                alt="#"
                className="object-contain w-full h-full rounded"
              />
            </div> */}
            {/* <div className="w-full min-h-[20px] flex items-start mb-2 ">
              <RatingStars number={rating} />
            </div> */}
            <div className="w-full h-[60px] overflow-hidden">
              <span className="font-semibold text-truncate lg:text-sm">
                {title}
              </span>
            </div>
            <div className="w-full overflow-hidden">
              <span className="flex items-center gap-1 font-light text-truncate lg:text-sm">
                <BiSolidBasket /> {store}
              </span>
            </div>
            <div className="flex justify-start items-center w-full gap-4">
              {/* <div className="flex flex-col justify-start items-start"> */}
              <div className="flex py-1 text-green-400 text-sm">
                ₦{new Intl.NumberFormat("en-NG").format(discountPrice)}
              </div>
              <div className="flex py-1 text-gray-300 text-sm line-through">
                ₦{new Intl.NumberFormat("en-NG").format(normalPrice)}
              </div>
              <div className="flex py-1 px-2 rounded-md text-sm bg-red-300/40 text-orange-500">
                - {Math.floor(discountPercentage)} %
              </div>
              {/* </div> */}
              {/* <div className="bg-red-300/40 text-orange-500 py-4 px-2 rounded-md flex items-center justify-center absolute top-2 right-2">
                - {Math.floor(discountPercentage)} %
              </div> */}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default NavDealCard;
