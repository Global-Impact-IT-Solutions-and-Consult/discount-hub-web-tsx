const DescriptionSection = ({ data }: any) => {
  return (
    <>
      <div className="w-full bg-white flex flex-col">
        {/* card bottom */}
        <div className="p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
          <span className="font-light text-2xl text-gray-900">Description</span>
          <span className="ppLineHeight text-sm text-gray-800 text-left   font-normal">
            <span className="ppLineHeight text-sm text-gray-800 text-left font-normal flex flex-col">
              {data.productDetails ? (
                <>
                  {data?.productDetails
                    ?.split("\n")
                    .map((detail: any, index: any) => (
                      <span key={index} className="my-2">
                        {detail}
                      </span>
                    ))}
                </>
              ) : (
                <span className="text-base text-gray-300">
                  Description not available
                </span>
              )}
            </span>

            {/* {data?.productDetails} */}
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
          <span className="ppLineHeight mb-4 text-sm text-gray-800 text-left   font-normal">
            {/* Category: {data.category.map((item: any) => item.title)} */}
          </span>
        </div>
      </div>
    </>
  );
};

export default DescriptionSection;
