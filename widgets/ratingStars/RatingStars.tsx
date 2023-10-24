import { BiStar, BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

const RatingStars = ({ size, number }: any) => {
  // Calculate the number of full stars and whether a half star is needed
  const fullStars = Math.floor(number);
  const hasHalfStar = number % 1 !== 0;

  // Calculate the number of empty stars needed to make up 5 stars
  const emptyStars = 5 - (fullStars + (hasHalfStar ? 1 : 0));

  // Create an array of star components based on the number
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <BiSolidStar
        key={`full-star-${i}`}
        className="text-orange-500"
        size={size}
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <BiSolidStarHalf
        key="half-star"
        className="text-orange-500"
        size={size}
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <BiStar key={`empty-star-${i}`} className="text-orange-500" size={size} />
    );
  }

  return <div className="flex">{stars}</div>;
};

export default RatingStars;

// import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi";

// const RatingStars = ({ size, number }: any) => {
//   return (
//     <>
//       <div className="flex">
//         {/* please create a loop that generates the BiSolidStar based on the number variable passed in, .5 value addes a BiSolidStarHalf at the end of it */}
//         <BiSolidStar className="text-orange-500" size={size} />
//         <BiSolidStar className="text-orange-500" size={size} />
//         <BiSolidStar className="text-orange-500" size={size} />
//         <BiSolidStar className="text-orange-500" size={size} />
//         <BiSolidStarHalf className="text-orange-500" size={size} />
//       </div>
//     </>
//   );
// };

// export default RatingStars;
