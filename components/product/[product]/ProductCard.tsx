import RatingStars from "@/widgets/ratingStars/RatingStars";
import Image from "next/image";
import { BiSolidBasket, BiSolidMap } from "react-icons/bi";

const ProductCard = ({ data }: any) => {
  // console.log("🚀 ~ file: ProductCard.tsx:6 ~ ProductCard ~ data:", data);
  return (
    <>
      {/* left */}
      <div className="w-full bg-white flex flex-col rounded-md">
        {/* card top*/}
        <div className="">
          <Image
            width={1440}
            height={600}
            src={"/heroSlider/1.jpg"}
            alt="/"
            className="rounded-t-md"
          />
        </div>
        {/* card bottom */}
        <div className="p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
          <span className="font-light text-xl text-gray-800">
            {/* Timberland Men’s Thorton Waterproof Boots */}
            {data?.title}
          </span>
          <div className="flex flex-col items-start justify-center gap-1">
            <RatingStars size={16} number={data.rating} />
            <span className="text-sm text-gray-600">
              {data?.reviews.length} customer reviews
            </span>
            <h4 className="text-green-300 font-light text-[2rem] font-serif">
              £{data?.price}
            </h4>
          </div>
          <span className="ppLineHeight text-sm text-gray-800 text-left   font-normal">
            {data?.description}
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
            Category: {data.category.map((item: any) => `${item.title}, `)}
            {/* Category: Beauty */}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
