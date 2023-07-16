import { BiEnvelope, BiPhone, BiSolidMap } from "react-icons/bi";

const page = () => {
  return (
    <>
      <div className="bg-white">
        <div className="pt-4 w-full flex flex-col items-start justify-start gap-8 md:gap-4 lg:gap-8 lg:flex-row">
          <div className="w-full px-4 md:w-[50%]">
            <span className="font-light text-xl text-gray-900">
              CONTACT INFORMATIONS
            </span>
            {/* horizontal line */}
            <div className="w-full flex items-center py-4">
              <div className="bg-green-400 p-[1px] w-1/12"></div>
              <div className="bg-gray-200 p-[1px] w-11/12"></div>
            </div>
            <div className="flex flex-col items-start justify-start gap-8">
              <span className="ppLineHeight text-sm text-gray-700 text-left font-sans font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                repellat est quo harum! Ipsa facere perferendis voluptatum
                mollitia omnis consequatur ab id inventore delectus eos!
              </span>
              {/* address */}
              <div className="flex gap-4 items-center">
                <div className="bg-green-400 rounded-md text-white p-3 flex items-center justify-center">
                  <BiSolidMap size={28} className="text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-base text-gray-800 text-left font-sans font-light">
                    Address
                  </span>
                  <span className="text-xs text-gray-500 text-left font-sans font-normal lg:text-sm">
                    Comre, 404 Design Street, Melbourne, Australia
                  </span>
                </div>
              </div>
              {/* Email */}
              <div className="flex gap-4 items-center">
                <div className="bg-green-400 rounded-md text-white p-3 flex items-center justify-center">
                  <BiEnvelope size={28} className="text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-base text-gray-800 text-left font-sans font-light">
                    Email
                  </span>
                  <span className="text-xs text-gray-500 text-left font-sans font-normal lg:text-sm">
                    email@address.com
                  </span>
                </div>
              </div>
              {/* Our Phone */}
              <div className="flex gap-4 items-center">
                <div className="bg-green-400 rounded-md text-white p-3 flex items-center justify-center">
                  <BiPhone size={28} className="text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-base text-gray-800 text-left font-sans font-light">
                    Our Phone
                  </span>
                  <span className="text-xs text-gray-500 text-left font-sans font-normal lg:text-sm">
                    (+212) 584-241-654
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-[50%]">
            <span className="font-light text-xl text-gray-900">
              GET IN TOUCH
            </span>
            {/* horizontal line */}
            <div className="w-full flex items-center py-4">
              <div className="bg-green-400 p-[1px] w-1/12"></div>
              <div className="bg-gray-200 p-[1px] w-11/12"></div>
            </div>
            {/* form */}
            <div className="w-full flex flex-col items-start justify-start gap-3">
              {/* name */}
              <div className="ppLineHeight  w-full py-1 flex flex-col gap-1 text-sm text-gray-700 text-left font-sans font-normal">
                <span className="">Your Name (required)</span>
                <input
                  type="text"
                  className="p-1 border border-gray-300 font-sans pl-3 bg-white rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
              {/* email */}
              <div className="ppLineHeight  w-full py-1 flex flex-col gap-1 text-sm text-gray-700 text-left font-sans font-normal">
                <span className="">Your Email (required)</span>
                <input
                  type="text"
                  className="p-1 border border-gray-300 font-sans pl-3 bg-white rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
              {/* Subject */}
              <div className="ppLineHeight  w-full py-1 flex flex-col gap-1 text-sm text-gray-700 text-left font-sans font-normal">
                <span className="">Subject</span>
                <input
                  type="text"
                  className="p-1 border border-gray-300 font-sans pl-3 bg-white rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
              {/* Your Message */}
              <div className="ppLineHeight  w-full py-1 flex flex-col gap-1 text-sm text-gray-700 text-left font-sans font-normal">
                <span className="">Your Message</span>
                <textarea className="p-1 border border-gray-300 font-sans pl-3 bg-white rounded-md w-full focus:ring-2 focus:ring-green-400 outline-none h-40" />
              </div>
              <button className="flex items-center justify-center rounded-md bg-green-400 text-white px-4 py-2 mt-3 mb-5 outline-none w-[10rem] text-sm font-light font-sans focus:ring-2 focus:ring-gray-300 hover:bg-green-500">
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
