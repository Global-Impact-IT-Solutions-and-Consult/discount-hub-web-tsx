import RatingStars from "@/widgets/ratingStars/RatingStars";

const AddReview = () => {
  return (
    <>
      <div className="ppLineHeight py-1 flex flex-col gap-1 text-sm text-gray-700 text-left   font-normal">
        <span>Add a review</span>
        <span>
          Your email address will not be published. Required fields are marked *
        </span>
      </div>
      <div className="ppLineHeight py-1 flex flex-col gap-1 text-sm text-gray-700 text-left   font-normal">
        <span className="font-light">Your rating *</span>
        <select
          id="rating"
          name="rating"
          className="p-3 border border-gray-300 px-3 bg-white rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none"
        >
          <option>Select your rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {/* <div>
          <RatingStars size={16} number={0} />
        </div> */}
      </div>
      <div className="ppLineHeight py-1 flex flex-col gap-1 text-sm text-gray-700 text-left   font-normal">
        <span className="font-light">Your review *</span>
        <textarea className="p-1 border border-gray-300   pl-3 bg-white rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none h-40" />
      </div>
      <div className="ppLineHeight py-1 flex flex-col gap-1 text-sm text-gray-700 text-left   font-normal">
        <span className="font-light">Name *</span>
        <input
          type="text"
          className="p-1 border border-gray-300   pl-3 bg-white rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none"
        />
      </div>
      <div className="ppLineHeight py-1 flex flex-col gap-1 text-sm text-gray-700 text-left   font-normal">
        <span className="font-light">Email *</span>
        <input
          type="text"
          className="p-1 border border-gray-300   pl-3 bg-white rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none"
        />
      </div>
      <button className="flex items-center justify-center rounded-md bg-green-400 text-white px-4 py-2 mt-3 mb-5 outline-none w-[5rem] text-sm font-light   focus:ring-2 focus:ring-gray-300 hover:bg-green-500">
        SUBMIT
      </button>
    </>
  );
};

export default AddReview;
