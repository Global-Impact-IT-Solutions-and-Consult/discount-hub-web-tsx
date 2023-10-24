import RatingStars from "@/widgets/ratingStars/RatingStars";
import Image from "next/image";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { BiSolidConversation } from "react-icons/bi";
import { BiSolidBasket, BiSolidMap, BiSolidUser } from "react-icons/bi";

const NewsCard = ({
  day,
  month,
  image,
  title,
  author,
  comment,
  description,
  link,
}: any) => {
  return (
    <>
      <div className="bg-white flex flex-col items-center my-6 rounded w-full md:w-[21.5rem] lg:w-[24rem] xl:w-[21.5rem] 2xl:w-[22rem] 2xl:my-2">
        {/* card top*/}
        <div className="h-[190px] w-full relative">
          {!image ? (
            <>
              <Image
                width={1440}
                height={600}
                src={"/heroSlider/1.jpg"}
                alt="/"
                className="rounded-t-md w-full h-full object-cover"
              />
            </>
          ) : (
            <Image
              width={1440}
              height={600}
              src={image}
              alt="/"
              className="rounded-t-md w-full h-full object-cover"
            />
          )}

          <div className="flex flex-col items-center gap-2 py-3 px-5 bg-green-400 text-white text-sm absolute top-2 left-2 rounded">
            <span className="text-lg font-semibold">{day}</span>
            <span>{month}</span>
          </div>
        </div>
        {/* card bottom */}
        <div className="w-full p-5 flex flex-col gap-3 text-gray-500  ">
          <div className="w-full h-[60px] overflow-hidden ">
            <span className="font-light text-base my-2 text-truncate">
              {title}
            </span>
          </div>
          {/* <span className="font-light text-lg">{title}</span> */}
          <div className="flex gap-6 text-xs items-center text-gray-400 h-[24px] ">
            <div className="flex gap-1 items-center">
              <BiSolidUser />
              By: {author}
            </div>
            <div className="flex gap-1 items-center">
              <BiSolidConversation />
              <span className="font-semibold">{comment}</span> Comment(s)
            </div>
          </div>
          <span className="font-normal text-sm text-gray-400 h-[80px] ">
            {description}
          </span>
          <div className="w-full flex justify-end p-1 text-green-300 font-normal text-sm h-[20px] ">
            <a
              href={link}
              className="flex gap-1 items-center hover:border-b-[1px]"
            >
              CONTINUE READING <BiSolidRightArrowAlt />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
