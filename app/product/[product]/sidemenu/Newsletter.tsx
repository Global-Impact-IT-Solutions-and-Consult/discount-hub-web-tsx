const Newsletter = () => {
  return (
    <>
      <div className="w-full bg-white flex flex-col rounded-md">
        {/* card bottom */}
        <div className="p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
          <span className="font-light text-xl text-gray-900">Newsletter</span>
          {/* horizontal line */}
          <div className="w-full flex items-center">
            <div className="bg-green-400 p-[1px] w-2/12"></div>
            <div className="bg-gray-200 p-[1px] w-10/12"></div>
          </div>
          <div className="flex items-center w-full mt-5">
            <input
              type="text"
              placeholder="Your email address"
              className="p-2 border-2 border-green-400   pl-3 bg-white rounded-l-sm w-3/4  outline-none text-sm"
            />
            <button className="flex items-center justify-center rounded-r-sm bg-green-400 text-white px-4 py-[0.6rem] focus:ring-2 focus:ring-green-400 outline-none w-2/5 text-sm   hover:bg-green-500">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
