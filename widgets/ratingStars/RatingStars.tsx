import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

const RatingStars = () => {
  return (
    <>
      <div className="flex">
        <BiSolidStar className="text-orange-500" size={20} />
        <BiSolidStar className="text-orange-500" size={20} />
        <BiSolidStar className="text-orange-500" size={20} />
        <BiSolidStar className="text-orange-500" size={20} />
        <BiSolidStarHalf className="text-orange-500" size={20} />
      </div>
    </>
  );
};

export default RatingStars;
