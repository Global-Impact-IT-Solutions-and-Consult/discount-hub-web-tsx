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

const Cart = ({ data }: any) => {
  return (
    <>
      <div className="w-full bg-white flex flex-col rounded-md mb-4">
        {/* card bottom */}

        <div className="p-5 flex flex-col gap-6 items-center justify-center shadow-lg text-center text-gray-800  ">
          <span className="font-light text-xl text-gray-800">
            {data.title}
            {/* Timberland Men’s Thorton Waterproof Boots */}
          </span>
          <div className="flex gap-3 items-center justify-center text-sm text-gray-800 w-full ">
            <div className="flex gap-1 items-center">
              <BiGlobe />
              {data.store.stores.title}
              {/* {"Card cash"} */}
            </div>
            <div className="flex gap-1 items-center">
              <BiSolidMap />
              {data.location}
              {/* {"Canada"} */}
            </div>
          </div>
          <span className="ppLineHeight text-sm   text-gray-500">
            {data.summary}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            voluptatum recusandae */}
          </span>
          <div className="text-3xl   text-green-400">
            £{data.price}
            {/* £390.00 */}
          </div>
          <span className="p-3 bg-green-400 rounded-md text-white w-full text-center text-sm duration-300 ease-in-out cursor-pointer hover:bg-green-500">
            BUY PRODUCT
          </span>
          {/* socials */}
          <div className="w-full flex items-center justify-center gap-4 py-3 cursor-pointer ">
            <div className="text-gray-600 hover:text-green-400">
              <a href={data.socialMediaLinks?.facebook}>
                <BiLogoFacebookSquare size={30} />
              </a>
            </div>
            <div className="text-gray-600 hover:text-green-400">
              <a href={data.socialMediaLinks?.instagram}>
                <BiLogoTwitter size={30} />
              </a>
            </div>
            <div className="text-gray-600 hover:text-green-400">
              <a href={data.socialMediaLinks?.pinterest}>
                <BiLogoPinterest size={30} />
              </a>
            </div>
            <div className="text-gray-600 hover:text-green-400">
              <a href={data.socialMediaLinks?.googleplus}>
                <BiLogoGooglePlus size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
