import Image from "next/image";
import {
  BiCartAlt,
  BiQuestionMark,
  BiSearch,
  BiSearchAlt,
  BiSolidBookReader,
  BiSolidLandmark,
  BiSolidLock,
  BiSolidUser,
} from "react-icons/bi";

const TopHeader = () => {
  return (
    <>
      <div className="w-full bg-gray-200 p-4 flex items-center justify-center">
        <div className="flex items-center justify-between text-sm font-sans lg:w-10/12 2xl:w-8/12">
          <div className="hidden md:flex md:gap-6 md:items-center md:justify-center">
            <a href="#">
              <div className="flex items-center gap-2 duration-300 ease-in cursor-pointer hover:text-green-400">
                {" "}
                <BiSolidBookReader className="text-green-400" /> Discounts Guide
              </div>
            </a>

            <a href="#">
              <div className="flex items-center gap-2 duration-300 ease-in cursor-pointer hover:text-green-400">
                {" "}
                <BiSolidBookReader className="text-green-400" /> Customer
                Assistance
              </div>
            </a>
          </div>
          <div className="flex gap-6 items-center justify-center">
            <a href="#">
              <div className="flex items-center gap-2 duration-300 ease-in cursor-pointer hover:text-green-400">
                <BiSolidLandmark className="text-green-400" /> English
              </div>
            </a>

            <a href="#">
              <div className="flex items-center gap-2 duration-300 ease-in cursor-pointer hover:text-green-400">
                <BiSolidLock className="text-green-400" />
                Sign In
              </div>
            </a>

            <a href="#">
              <div className="flex items-center gap-2 duration-300 ease-in cursor-pointer hover:text-green-400">
                <BiSolidUser className="text-green-400" />
                Sign Up
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="px-1 py-5 bg-white w-full flex items-center justify-center lg:p-8">
        <div className="flex flex-col gap-7 items-center justify-between md:flex-row  lg:flex-row lg:w-10/12 lg:gap-5 2xl:w-8/12">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={150}
            height={28}
            priority
          />
          <div className="flex justify-center lg:w-3/4">
            <input
              type="text"
              placeholder="Enter keyword here..."
              className="p-3 border-[2px] border-r-[1px] rounded-l-md w-2/5 text-sm font-sans outline-none focus:ring-2 focus:ring-gray-300"
            />
            <select
              name="search"
              id="search"
              className="text-xs bg-white border-[2px] border-l-[1px] border-r-none text-gray-500 px-2 w-2/5 font-sans p-2 focus:ring-2 focus:ring-gray-300 outline-none lg:w-1/4"
            >
              <option>Select your category</option>
            </select>
            <button className="bg-green-400 text-white px-3 focus:ring-2 focus:ring-gray-300 outline-none rounded-r-md duration-300 ease-in hover:bg-green-500 lg:px-4">
              <BiSearch className="font-bold" size={22} />
            </button>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 relative p-4  duration-300 ease-in-out hover:text-green-400 hover:animate-bounce"
          >
            <BiCartAlt size={30} />
            <span className="bg-red-400 text-white py-[2px] px-[8px] rounded-full absolute top-0 right-0">
              3
            </span>
          </a>
          {/* <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={80}
            height={22}
            priority
          /> */}
        </div>
      </div>
    </>
  );
};

export default TopHeader;
