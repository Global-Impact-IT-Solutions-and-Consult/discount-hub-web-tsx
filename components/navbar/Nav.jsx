import { BiMenu } from "react-icons/bi";

const Nav = () => {
  return (
    <div className="navBg">
      <div className="flex flex-wrap  items-center justify-between mx-auto px-4 lg:w-10/12 lg:flex lg:justify-between lg:items-center 2xl:w-8/12">
        {/* MOBILE MENU */}
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn m-1">
            <BiMenu className="" size={20} />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[5] menu p-2 rounded-box bg-white min-w-full w-[90dvw] shadow-md"
          >
            <li>
              <a
                href="#"
                className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
              >
                Home
              </a>
            </li>
            <li>
              <details open>
                <summary className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400">
                  Deals
                </summary>
                <ul className="bg-white min-w-full ml-[-8px] text-gray-700">
                  <li className="p-4   text-sm duration-300 ease-in-out  hover:bg-gray-100 hover:text-green-400">
                    <a href="#">Top offers</a>
                  </li>
                  <li className="p-4   text-sm duration-300 ease-in-out  hover:bg-gray-100 hover:text-green-400">
                    <a href="#">Best deals</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400">
                  Coupons
                </summary>
                <ul className="bg-white min-w-full ml-[-8px] text-gray-700">
                  <li className="p-4   text-sm duration-300 ease-in-out  hover:bg-gray-100 hover:text-green-400">
                    <a href="#">Top offers</a>
                  </li>
                  <li className="p-4   text-sm duration-300 ease-in-out  hover:bg-gray-100 hover:text-green-400">
                    <a href="#">Best deals</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400">
                  Stores
                </summary>
                <ul className="bg-white min-w-full ml-[-8px] text-gray-700">
                  <li className="p-4   text-sm duration-300 ease-in-out  hover:bg-gray-100 hover:text-green-400">
                    <a href="#">Top offers</a>
                  </li>
                  <li className="p-4   text-sm duration-300 ease-in-out  hover:bg-gray-100 hover:text-green-400">
                    <a href="#">Best deals</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a
                href="#"
                className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* LEFT LINKS */}
        <div className="text-sm   text-white font-normal hidden md:flex">
          <a
            href="#"
            className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
          >
            Home
          </a>
          <div className="dropdown dropdown-hover p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400">
            <label tabIndex={0} className="flex gap-2 cursor-pointer">
              Deals{" "}
              <svg
                className="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] bg-white min-w-full mt-5 ml-[-20px] shadow-md text-gray-700"
            >
              <li className="p-4   text-sm duration-300 ease-in-out hover:bg-gray-100 hover:text-green-400">
                <a href="#">Top offers</a>
              </li>
              <li className="p-4   text-sm duration-300 ease-in-out hover:bg-gray-100 hover:text-green-400">
                <a href="#">Best deals</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400">
            <label tabIndex={0} className="flex gap-2 cursor-pointer">
              Coupons{" "}
              <svg
                className="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] bg-white min-w-full mt-5 ml-[-20px] shadow-md text-gray-700"
            >
              <li className="p-4   text-sm duration-300 ease-in-out hover:bg-gray-100 hover:text-green-400">
                <a href="#">Top offers</a>
              </li>
              <li className="p-4   text-sm duration-300 ease-in-out hover:bg-gray-100 hover:text-green-400">
                <a href="#">Best deals</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-hover p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400">
            <label tabIndex={0} className="flex gap-2 cursor-pointer">
              Stores{" "}
              <svg
                className="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content z-[1] bg-white min-w-full mt-5 ml-[-20px] shadow-md text-gray-700"
            >
              <li className="p-4   text-sm duration-300 ease-in-out hover:bg-gray-100 hover:text-green-400">
                <a href="/stores">Top stores</a>
              </li>
              <li className="p-4   text-sm duration-300 ease-in-out hover:bg-gray-100 hover:text-green-400">
                <a href="#">Best deals</a>
              </li>
            </ul>
          </div>
          <a
            href="/contact-us"
            className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
          >
            Contact us
          </a>
          <a
            href="#"
            className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
          >
            Blog
          </a>
        </div>

        <a
          href="#"
          className="bg-green-400 p-5 duration-300 ease-in-out cursor-pointer text-white   text-sm hover:bg-green-500"
        >
          RLT VERSION
        </a>

        {/* <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="flex gap-2">
                  Hover{" "}
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </label>

                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-32"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
            </li>{" "}
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Nav;
