import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";

const Footer = () => {
  return (
    <>
      <div className="navBg bg- flex flex-col items-center justify-center w-full">
        {/* TOP PART */}
        {/* <div className="w-full flex-col items-center justify-center lg:w-10/12 lg:flex-col  2xl:w-8/12">
          <div className="w-full flex flex-col flex-wrap gap-6 py-12 px-4 items-center justify-start lg:flex-row lg:flex-nowrap lg:gap-2">
            <div className="w-full flex flex-col gap-5 justify-evenly md:flex-row">
              <div className="flex flex-col gap-6 items-start justify-center w-full md:w-[55%]">
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={120}
                  height={32}
                  priority
                />
                <span className="  text-smtext-white leading-7 text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laboriosam dolores quidem mollitia id ipsa nisi necessitatibus
                  iure repudiandae aperiam, odit ipsam dolor fugiat corporis
                  nesciunt illo nemo minus.
                </span>
              </div>
              <div className="flex text-white flex-col gap-6">
                <div className="font-normal  ">TWITTER FEED</div>
                <span className="text-sm   font-semibold text-gray-300">
                  Could not authenticate you.
                </span>
              </div>
            </div>

            <div className="w-full flex flex-col gap-10 justify-evenly md:flex-row">
              <div className="flex text-white flex-col gap-6">
                <div className="font-normal  ">QUICK LINKS</div>
                <div className="flex flex-col gap-2">
                  <div>
                    <a
                      href="/deals"
                      className="flex items-center justify-start gap-2 cursor-pointer hover:text-green-300 duration-300 ease-in-out text-sm  "
                    >
                      <BiChevronRight size={23} className="text-green-300" />{" "}
                      <span className="text-gray-300">Latest Deals</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="/coupons"
                      className="flex items-center justify-start gap-2 cursor-pointer hover:text-green-300 duration-300 ease-in-out text-sm  "
                    >
                      <BiChevronRight size={23} className="text-green-300" />{" "}
                      <span className="text-gray-300">Newest Coupons</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="/contact"
                      className="flex items-center justify-start gap-2 cursor-pointer hover:text-green-300 duration-300 ease-in-out text-sm  "
                    >
                      <BiChevronRight size={23} className="text-green-300" />{" "}
                      <span className="text-gray-300">Contact Us</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="flex items-center justify-start gap-2 cursor-pointer hover:text-green-300 duration-300 ease-in-out text-sm  "
                    >
                      <BiChevronRight size={23} className="text-green-300" />{" "}
                      <span className="text-gray-300">Terms & Conditions</span>
                    </a>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="flex items-center justify-start gap-2 cursor-pointer hover:text-green-300 duration-300 ease-in-out text-sm  "
                    >
                      <BiChevronRight size={23} className="text-green-300" />{" "}
                      <span className="text-gray-300">FAQ</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex text-white flex-col gap-6">
                <div className="font-normal  ">INSTAGRAM</div>
                <span className="text-sm   font-semibold text-gray-300">
                  ...
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center gap-2 my-8">
            <Image
              className="rounded-sm"
              width={60}
              height={10}
              src="/footerCards/1.jpg"
              alt="/"
            />
            <Image
              className="rounded-sm"
              width={60}
              height={10}
              src="/footerCards/2.jpg"
              alt="/"
            />
            <Image
              className="rounded-sm"
              width={60}
              height={10}
              src="/footerCards/3.jpg"
              alt="/"
            />
            <Image
              className="rounded-sm"
              width={60}
              height={10}
              src="/footerCards/4.jpg"
              alt="/"
            />
            <Image
              className="rounded-sm"
              width={60}
              height={10}
              src="/footerCards/5.jpg"
              alt="/"
            />
          </div>
        </div> */}
        {/* COPYWRIGHT */}
        <div className="w-full footerBottomBg p-4 flex items-center justify-center text-slate-500   text-md">
          Copyright 2022.KlbTheme . All rights reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
