import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

const RatingStars = ({ size }: any) => {
  return (
    <>
      <div className="flex">
        <BiSolidStar className="text-orange-500" size={size} />
        <BiSolidStar className="text-orange-500" size={size} />
        <BiSolidStar className="text-orange-500" size={size} />
        <BiSolidStar className="text-orange-500" size={size} />
        <BiSolidStarHalf className="text-orange-500" size={size} />
      </div>
    </>
  );
};

export default RatingStars;
