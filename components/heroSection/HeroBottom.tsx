import Image from "next/image";

const HeroBottom = () => {
  return (
    <>
      <div className="w-full py-4 px-2 md:flex md:flex-row md:gap-4 lg:flex lg:flex-row lg:gap-6 2xl:gap-16">
        {/* card */}
        <div className="bg-white rounded-t-lg flex gap-2 items-center justify-center px-2 py-6 shadow-lg lg:w-4/12 lg:py-6 lg:rounded-lg 2xl:px-4 2xl:py-12">
          {/* left */}
          <div className="w-1/3 flex items-center justify-center">
            <Image src="/heroBottom/hb1.png" alt="#" width={85} height={85} />
          </div>
          {/* right */}
          <div className="flex flex-col gap-4 text-left items-center justify-start w-2/3">
            {/* right top */}
            <div className="text-left w-full font-sans md:text-sm lg:text-base">
              Deals & Coupons
            </div>
            {/* right bottom */}
            <div className="text-left w-full text-sm font-sans font-light md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              aspernatur
            </div>
          </div>
        </div>
        {/* card */}
        <div className="bg-white flex gap-2 items-center justify-center px-2 py-6 shadow-lg lg:w-4/12 lg:py-6 lg:rounded-lg 2xl:px-4 2xl:py-12">
          {/* left */}
          <div className="w-1/3 flex items-center justify-center">
            <Image src="/heroBottom/hb2.png" alt="#" width={85} height={85} />
          </div>
          {/* right */}
          <div className="flex flex-col gap-4 text-left items-center justify-start w-2/3">
            {/* right top */}
            <div className="text-left w-full font-sans md:text-sm lg:text-base">
              Deals & Coupons
            </div>
            {/* right bottom */}
            <div className="text-left w-full text-sm font-sans font-light md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              aspernatur
            </div>
          </div>
        </div>
        {/* card */}
        <div className="bg-white rounded-b-lg flex gap-2 items-center justify-center px-2 py-6 shadow-lg lg:w-4/12 lg:py-6 lg:rounded-lg 2xl:px-4 2xl:py-12">
          {/* left */}
          <div className="w-1/3 flex items-center justify-center">
            <Image src="/heroBottom/hb3.png" alt="#" width={85} height={85} />
          </div>
          {/* right */}
          <div className="flex flex-col gap-4 text-left items-center justify-start w-2/3">
            {/* right top */}
            <div className="text-left w-full font-sans md:text-sm lg:text-base">
              Deals & Coupons
            </div>
            {/* right bottom */}
            <div className="text-left w-full text-sm font-sans font-light md:text-xs lg:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              aspernatur
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBottom;
