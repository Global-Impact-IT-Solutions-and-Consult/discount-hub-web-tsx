import RatingStars from "@/widgets/ratingStars/RatingStars";
import Image from "next/image";
import { BiSolidBasket, BiSolidMap } from "react-icons/bi";

const ProductCard = ({ data }: any) => {
  console.log("🚀 ~ file: ProductCard.tsx:6 ~ ProductCard ~ data:", data);
  return (
    <>
      {/* left */}
      <div className="w-full bg-white flex flex-col rounded-md">
        {/* card top*/}
        {/* <div className="">
          <Image
            width={1440}
            height={600}
            src={"/heroSlider/1.jpg"}
            alt="/"
            className="rounded-t-md"
          />
          <img
            src={data.productImageUrl}
            alt="#"
            className="object-contain w-full h-full rounded-t"
          />
        </div> */}
        <div className="w-full h-[250px] mb-2 relative p-2 pt-4">
          {!data.productImageUrl ? (
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
              <img
                src={data.productImageUrl}
                alt="#"
                className="object-contain w-full h-full rounded-t"
              />
            </>
          )}
          {data.discountPercentage && (
            <div className="bg-red-300/40 text-orange-500 py-1 px-2 rounded-md flex items-center justify-center absolute top-2 right-2">
              - {data.discountPercentage}
            </div>
          )}
        </div>
        {/* card bottom */}
        <div className="p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
          <span className="font-light text-xl text-gray-800">
            {data.productName}{" "}
          </span>
          <div className="flex flex-col items-start justify-center gap-1">
            {data.productRating ? (
              <>
                {/* <RatingStars size={16} /> */}
                <RatingStars
                  size={26}
                  number={data.productRating?.split(" ")[0] || 4}
                />
                {/* {data.verifiedRatings ? (
                  <span>
                    {data.verifiedRatings}
                    (2 customer reviews)
                  </span>
                ) : (
                  <span className="text-sm text-gray-300">
                    No reviews available
                  </span>
                )} */}
              </>
            ) : (
              <span className="text-sm text-gray-300">No rating available</span>
            )}

            <h4 className="text-green-300 font-light text-[2rem] font-serif">
              {data.discountPrice}{" "}
              <span className="text-xl text-gray-300 line-through">
                {data.normalPrice}
              </span>
            </h4>
          </div>
          <span className="ppLineHeight text-sm text-gray-800 text-left   font-normal">
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            numquam nostrum. amet. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Laboriosam, ipsum voluptatum. Eos, saepe harum
            culpa consequatur aut tenetur, earum, illum eum iste aliquam quam
            quisquam atque numquam magni voluptas deserunt! Adipisicing elit.
            Laboriosam, ipsum voluptatum. Eos, saepe harum culpa consequatur aut
            tenetur, earum, illum eum iste aliquam quam quisquam atque numquam
            magni voluptas deserunt! Laboriosam, ipsum voluptatum. Eos, saepe
            harum culpa consequatur aut tenetur, earum, illum eum iste aliquam
            quam quisquam atque numquam magni voluptas deserunt! */}
          </span>
          <span className="ppLineHeight text-sm text-gray-800 text-left   font-normal">
            {/* Category: {data.discountType || "Uncategorized"} */}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

// return (
//   <>
//     <div className="w-full bg-white flex flex-col rounded-md">
//       <div className="">
//         <Image
//           width={1440}
//           height={600}
//           src={"/heroSlider/1.jpg"}
//           alt="/"
//           className="rounded-t-md"
//         />
//       </div>
//       <div className="p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
//         <span className="font-light text-xl text-gray-800">
//           Timberland Men’s Thorton Waterproof Boots
//         </span>
//         <div className="flex flex-col items-start justify-center gap-1">
//           <RatingStars size={16} />
//           <span className="text-sm text-gray-600">(2 customer reviews)</span>
//           <h4 className="text-green-300 font-light text-[2rem] font-serif">
//             £390.00
//           </h4>
//         </div>
//         <span className="ppLineHeight text-sm text-gray-800 text-left   font-normal">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
//           numquam nostrum. amet. Lorem ipsum dolor sit amet, consectetur
//           adipisicing elit. Laboriosam, ipsum voluptatum. Eos, saepe harum culpa
//           consequatur aut tenetur, earum, illum eum iste aliquam quam quisquam
//           atque numquam magni voluptas deserunt! Adipisicing elit. Laboriosam,
//           ipsum voluptatum. Eos, saepe harum culpa consequatur aut tenetur,
//           earum, illum eum iste aliquam quam quisquam atque numquam magni
//           voluptas deserunt! Laboriosam, ipsum voluptatum. Eos, saepe harum
//           culpa consequatur aut tenetur, earum, illum eum iste aliquam quam
//           quisquam atque numquam magni voluptas deserunt!
//         </span>
//         <span className="ppLineHeight text-sm text-gray-800 text-left   font-normal">
//           Category: Beauty
//         </span>
//       </div>
//     </div>
//   </>
// );
