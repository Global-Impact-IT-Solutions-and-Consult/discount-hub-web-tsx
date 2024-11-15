import { useEffect, useState } from "react";
import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard";

const ReviewSection = ({ data }: any) => {
  const [apiData, setApiData] = useState<any>();

  return (
    <>
      <div className="w-full bg-white flex flex-col">
        {/* card bottom */}
        <div className="p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
          <span className="font-light text-xl text-gray-900">
            {/* {data.reviews.length} review(s) for {data.title} */}
          </span>
          {/* horizontal line */}
          <div className="w-full flex items-center">
            <div className="bg-green-400 p-[1px] w-1/12"></div>
            <div className="bg-gray-200 p-[1px] w-11/12"></div>
          </div>
          <div className="w-full flex flex-col gap-2">
            {apiData && (
              <>
                {apiData.map((item: any, i: any) => (
                  <ReviewCard
                    key={i}
                    date={item.date}
                    image={item.image?.sourceUrl}
                    name={item.name}
                    rating={item.rating}
                    review={item.review}
                  />
                ))}
              </>
            )}
          </div>
          <AddReview />
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
