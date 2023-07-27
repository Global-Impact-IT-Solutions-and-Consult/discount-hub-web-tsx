import RatingStars from "@/widgets/ratingStars/RatingStars";
import Image from "next/image";

const ReviewCard = () => {
  return (
    <>
      <div className="w-full flex gap-4 items-start py-4">
        {/* left */}
        <div className="w-1/3 md:w-2/12">
          <Image
            width={1440}
            height={600}
            src={"/heroSlider/1.jpg"}
            alt="/"
            className="rounded-md"
          />
        </div>
        {/* right */}
        <div className="flex flex-col gap-4 w-2/3 md:w-10/12">
          {/* right top */}
          <div className="flex flex-col gap-1">
            <RatingStars size={14} />
            <span className="text-sm text-gray-700 text-left   font-normal">
              <b>admin</b> – February 21, 2018
            </span>
          </div>
          {/* right bottom */}
          <span className="text-sm text-gray-700 text-left   font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            numquam nostrum.
          </span>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
