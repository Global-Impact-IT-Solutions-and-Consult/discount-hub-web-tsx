import Image from "next/image";

const HeroBottom = () => {
  return (
    <>
      <div className="w-full py-4  md:flex md:flex-row md:gap-4 lg:flex lg:flex-row lg:gap-6 2xl:gap-16">
        {/* card */}
        <div className="bg-white rounded-t flex gap-2 items-center justify-center px-2 py-6 shadow-sm lg:w-4/12 lg:py-6 lg:rounded 2xl:px-4 2xl:py-12">
          {/* left */}
          <div className="w-1/3 flex items-center justify-center">
            <Image src="/heroBottom/hb1.png" alt="#" width={85} height={85} />
          </div>
          {/* right */}
          <div className="flex flex-col gap-4 text-left items-center justify-start w-2/3">
            {/* right top */}
            <div className="text-left w-full   md:text-sm lg:text-base">
              Deals & Coupons
            </div>
            {/* right bottom */}
            <div className="text-left w-full text-sm text-gray-600 md:text-xs lg:text-sm">
              Stay up to date with the latest deals and coupons as we bring them
              right to you in record time.
            </div>
          </div>
        </div>
        {/* card */}
        <div className="bg-white flex gap-2 items-center justify-center px-2 py-6 shadow-sm lg:w-4/12 lg:py-6 lg:rounded 2xl:px-4 2xl:py-12">
          {/* left */}
          <div className="w-1/3 flex items-center justify-center">
            <Image src="/heroBottom/hb2.png" alt="#" width={85} height={85} />
          </div>
          {/* right */}
          <div className="flex flex-col gap-4 text-left items-center justify-start w-2/3">
            {/* right top */}
            <div className="text-left w-full   md:text-sm lg:text-base">
              Best Percentages
            </div>
            {/* right bottom */}
            <div className="text-left w-full text-sm text-gray-600 md:text-xs lg:text-sm">
              Get the best percentages off on your favorite products without the
              stress of searching through multiple sites.
            </div>
          </div>
        </div>
        {/* card */}
        <div className="bg-white rounded-b flex gap-2 items-center justify-center px-2 py-6 shadow-sm lg:w-4/12 lg:py-6 lg:rounded 2xl:px-4 2xl:py-12">
          {/* left */}
          <div className="w-1/3 flex items-center justify-center">
            <Image src="/heroBottom/hb3.png" alt="#" width={85} height={85} />
          </div>
          {/* right */}
          <div className="flex flex-col gap-4 text-left items-center justify-start w-2/3">
            {/* right top */}
            <div className="text-left w-full   md:text-sm lg:text-base">
              Save Money
            </div>
            {/* right bottom */}
            <div className="text-left w-full text-sm text-gray-600 md:text-xs lg:text-sm">
              We have a collection of the best discounts aimed at helping you
              spend little but still get the quality product you want.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBottom;
