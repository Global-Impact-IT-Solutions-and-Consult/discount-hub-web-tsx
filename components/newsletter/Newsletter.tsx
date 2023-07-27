import { BiEnvelope } from "react-icons/bi";

const Newsletter = () => {
  return (
    <>
      <div className="w-full p-8 flex items-center justify-center">
        <div className="p-4 flex flex-col gap-4 items-center justify-center md:w-[50rem]">
          <div className="flex items-center gap-2">
            <BiEnvelope className="text-green-400" size={30} />{" "}
            <span className="  text-gray-700 text-center font-medium text-sm md:text-lg">
              Sign up for our weekly email newsletter
            </span>
          </div>
          <div className="text-center text-xs font-normal text-gray-600   md:text-sm lg:w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            animi magni accusantium architecto possimus.
          </div>
          <div className="flex items-center lg:w-[80%]">
            <input
              type="text"
              placeholder="Your email address"
              className="p-1 border border-gray-300   pl-3 bg-white rounded-l-md w-3/4 focus:ring-2 focus:ring-gray-300 outline-none"
            />
            <button className="flex items-center justify-center rounded-r-md bg-green-400 text-white px-4 py-2 focus:ring-2 focus:ring-gray-300 outline-none w-2/5 text-sm  ">
              SIGN UP
            </button>
          </div>
          <div className="text-[10px] md:text-xs text-center text-gray-500">
            We’ll never share your email address with a third-party.
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
