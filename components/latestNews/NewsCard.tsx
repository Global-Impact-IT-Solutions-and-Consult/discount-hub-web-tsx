import RatingStars from "@/widgets/ratingStars/RatingStars";
import Image from "next/image";
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { BiSolidConversation } from "react-icons/bi";
import { BiSolidBasket, BiSolidMap, BiSolidUser } from "react-icons/bi";

const NewsCard = ({
  date,
  image,
  title,
  author,
  comment,
  description,
  link,
}) => {
  return (
    <>
      <div className="bg-white flex flex-col items-center my-6 hover:shadow-lg rounded-md w-full md:w-[21.5rem] lg:w-[24rem] xl:w-[21.5rem] 2xl:w-[22rem] 2xl:my-2">
        {/* card top*/}
        <div className="h-[30%] relative">
          <Image
            width={1440}
            height={600}
            src="/heroSlider/5.jpg"
            alt="/"
            className="rounded-t-md"
          />
          <div className="p-4 bg-green-400 text-white font-sans text-sm absolute top-2 left-2 rounded-md">
            {date}
          </div>
        </div>
        {/* card bottom */}
        <div className="h-[70%] p-5 flex flex-col gap-4 shadow-lg text-gray-500 font-sans">
          <span className="font-light text-lg">{title}</span>
          <div className="flex gap-3 text-sm items-center text-gray-400">
            <div className="flex gap-2 items-center">
              <BiSolidUser />
              By:{author}
            </div>
            <div className="flex gap-2 items-center">
              <BiSolidConversation />
              <span className="font-semibold">{comment}</span> Comments
            </div>
          </div>
          <span className="font-normal font-sans text-sm text-gray-400">
            {description}
          </span>
          <div className="w-full flex justify-end p-1 text-green-300 font-normal font-sans text-sm ">
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
