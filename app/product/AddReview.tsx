import RatingStars from "@/widgets/ratingStars/RatingStars";

const AddReview = () => {
  return (
    <>
      <div className="ppLineHeight py-1 flex flex-col gap-1 text-sm text-gray-700 text-left font-sans font-normal">
        <span>Add a review</span>
        <span>
          Your email address will not be published. Required fields are marked *
        </span>
      </div>
      <div className="ppLineHeight py-1 flex flex-col gap-1 text-sm text-gray-700 text-left font-sans font-normal">
        <span className="font-light">Your rating *</span>
        <div>
          <RatingStars size={16} />
        </div>
      </div>
      <div className="ppLineHeight py-1 flex flex-col gap-1 text-sm text-gray-700 text-left font-sans font-normal">
        <span className="font-light">Your review *</span>
        <textarea className="p-1 border border-gray-300 font-sans pl-3 bg-white rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none h-40" />
      </div>
      <div className="ppLineHeight py-1 flex flex-col gap-1 text-sm text-gray-700 text-left font-sans font-normal">
        <span className="font-light">Name *</span>
        <input
          type="text"
          className="p-1 border border-gray-300 font-sans pl-3 bg-white rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none"
        />
      </div>
      <div className="ppLineHeight py-1 flex flex-col gap-1 text-sm text-gray-700 text-left font-sans font-normal">
        <span className="font-light">Email *</span>
        <input
          type="text"
          className="p-1 border border-gray-300 font-sans pl-3 bg-white rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none"
        />
      </div>
      <button className="flex items-center justify-center rounded-md bg-green-400 text-white px-4 py-2 mt-3 mb-5 outline-none w-[5rem] text-sm font-light font-sans focus:ring-2 focus:ring-gray-300 hover:bg-green-500">
        SUBMIT
      </button>
    </>
  );
};

export default AddReview;
