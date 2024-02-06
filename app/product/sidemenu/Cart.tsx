import React from "react";
import {
  BiGlobe,
  BiLogoFacebookSquare,
  BiLogoGooglePlus,
  BiLogoPinterest,
  BiLogoTwitter,
  BiSolidBasket,
  BiSolidMap,
} from "react-icons/bi";

const Cart = () => {
  return (
    <>
      <div className="w-full bg-white flex flex-col rounded-md mb-4">
        {/* card bottom */}

        <div className="p-5 flex flex-col gap-6 items-center justify-center shadow-lg text-center text-gray-800  ">
          <span className="font-light text-xl text-gray-800">
            Timberland Men’s Thorton Waterproof Boots
          </span>
          <div className="flex gap-3 items-center justify-center text-sm text-gray-800 w-full ">
            <div className="flex gap-1 items-center">
              <BiGlobe />
              {"Card cash"}
            </div>
            <div className="flex gap-1 items-center">
              <BiSolidMap />
              {"Canada"}
            </div>
          </div>
          <span className="ppLineHeight text-sm   text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            voluptatum recusandae
          </span>
          <div className="text-3xl   text-green-400">£390.00</div>
          <span className="p-3 bg-green-400 rounded-md text-white w-full text-center text-sm duration-300 ease-in-out cursor-pointer hover:bg-green-500">
            BUY PRODUCT
          </span>
          {/* socials */}
          <div className="w-full flex items-center justify-center gap-4 py-3 cursor-pointer ">
            <div className="text-gray-600 hover:text-green-400">
              <BiLogoFacebookSquare size={30} />
            </div>
            <div className="text-gray-600 hover:text-green-400">
              <BiLogoTwitter size={30} />
            </div>
            <div className="text-gray-600 hover:text-green-400">
              <BiLogoPinterest size={30} />
            </div>
            <div className="text-gray-600 hover:text-green-400">
              <BiLogoGooglePlus size={30} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
