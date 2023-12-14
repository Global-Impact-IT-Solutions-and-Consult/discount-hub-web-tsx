import React from "react";

const FeaturesSpecs = ({ data }: any) => {
  return (
    <>
      <div className="w-full bg-white flex flex-col shadow-lg md:flex-row">
        {/* card bottom */}
        <div className="p-4 w-[50%] flex flex-col gap-3 text-gray-800 md:w-full">
          <span className="font-light text-2xl text-gray-900">Features</span>
          <span className="ppLineHeight text-sm text-gray-800 text-left font-normal flex flex-col">
            <ul className="ppLineHeight text-sm text-gray-800 text-left font-normal ">
              {data?.keyFeatures
                ?.split("\n")
                .map((feature: any, index: any) => (
                  <>
                    <li key={index} className="flex gap-2 items-center">
                      <span className="flex items-center justify-center pt-[0.3rem]">
                        *
                      </span>
                      {feature}
                    </li>
                  </>
                ))}
            </ul>
            {/* {data?.keyFeatures} */}
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            numquam nostrum. amet. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Laboriosam, ipsum voluptatum. Eos, saepe harum
            culpa consequatur aut tenetur, earum, illum eum iste aliquam quam
            quisquam atque numquam magni voluptas deserunt! Adipisicing elit.
            Laboriosam, ipsum voluptatum. Eos, saepe harum culpa consequatur aut
            tenetur, earum, illum eum iste aliquam quam quisquam atque numquam
            magni voluptas deserunt! Laboriosam, ipsum voluptatum. Eos, saepe
            harum culpa consequatur aut tenetur, earum, illum eum iste aliquam
            quam quisquam atque numquam magni voluptas deserunt! */}
          </span>
          {/* <span className="ppLineHeight mb-4 text-sm text-gray-800 text-left   font-normal">
            Category: {data.category.map((item: any) => item.title)}
          </span> */}
        </div>
        <div className="p-4 w-[50%] flex flex-col gap-3 text-gray-800 md:w-full">
          <span className="font-light text-2xl text-gray-900">
            Specifications
          </span>
          <span className="ppLineHeight text-sm text-gray-800 text-left font-normal flex flex-col">
            <span className="ppLineHeight text-sm text-gray-800 text-left font-normal flex flex-col">
              {data?.specifications
                ?.split("\n")
                .map((detail: any, index: any) => (
                  <li key={index} className="flex gap-2 items-center">
                    <span className="flex items-center justify-center pt-[0.3rem]">
                      *
                    </span>
                    {detail}
                  </li>
                  // <span key={index}>{detail}</span>
                ))}
            </span>

            {/* {data?.specifications} */}
            {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            numquam nostrum. amet. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Laboriosam, ipsum voluptatum. Eos, saepe harum
            culpa consequatur aut tenetur, earum, illum eum iste aliquam quam
            quisquam atque numquam magni voluptas deserunt! Adipisicing elit.
            Laboriosam, ipsum voluptatum. Eos, saepe harum culpa consequatur aut
            tenetur, earum, illum eum iste aliquam quam quisquam atque numquam
            magni voluptas deserunt! Laboriosam, ipsum voluptatum. Eos, saepe
            harum culpa consequatur aut tenetur, earum, illum eum iste aliquam
            quam quisquam atque numquam magni voluptas deserunt! */}
          </span>
          {/* <span className="ppLineHeight mb-4 text-sm text-gray-800 text-left   font-normal">
            Category: {data.category.map((item: any) => item.title)}
          </span> */}
        </div>
      </div>
    </>
  );
};

export default FeaturesSpecs;
