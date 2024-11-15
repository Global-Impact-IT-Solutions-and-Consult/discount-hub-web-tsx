"use client";

import AppContext from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";

// Spinner
import Spinner from "@/widgets/spinner/Spinner";
import NavDealCard from "./NavDealCard";

const Navbar = () => {
  const { baseURL, loading, setLoading, allProducts } = useContext(AppContext);
  console.log("🚀 ~ Navbar ~ allProducts:", allProducts);

  const [visibleData, setVisibleData] = useState([]);
  const itemsPerPage = 24;
  const [filtered, setFiltered] = useState([]);
  const [showData, setShowData] = useState(false);
  const [emptyArray, setEmptyArray] = useState([]);

  // SearchBar Handler
  const onSearchChangeHandler = async (e: any) => {
    try {
      if (e.target.value.length === 0) {
        setVisibleData(emptyArray);
        setFiltered([]); // Clear the filtered array when the search field is empty
        setShowData(false);
        return;
      }
      setShowData(true);
      e.preventDefault();
      const filtrate = allProducts.filter((item: any) =>
        item?.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      setFiltered(filtrate);
      setVisibleData(filtrate);

      // setPages(Math.ceil(visibleData.length / itemsPerPage));
    } catch (err) {
      return err;
    }
  };

  return (
    <div className="navBg">
      <div className="flex flex-wrap  items-center justify-between mx-auto px-4 lg:w-10/12 lg:flex lg:justify-between lg:items-center 2xl:w-8/12">
        {/* MOBILE MENU */}
        {/* <ul className="menu lg:menu-horizontal bg-base-200 rounded-box md:hidden">
          <li>
            <details open>
              <summary>
                <BiMenu className="" size={20} />
              </summary>
              <ul>
                <li>
                  <a>level 2 item 1</a>
                </li>
                <li>
                  <a>level 2 item 2</a>
                </li>
                <li>
                  <details open>
                    <summary>Parent</summary>
                    <ul>
                      <li>
                        <a>item 1</a>
                      </li>
                      <li>
                        <a>item 2</a>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
        </ul> */}

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
                href="/"
                className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
              >
                Home
              </a>
            </li>
            {/*<li>
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
            </li> */}
            {/* <li>
              <a
                href="/deals"
                className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
              >
                Deals
              </a>
            </li> */}
            <li>
              <a
                href="https://www.giitsc.com"
                className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
              >
                Contact us
              </a>
            </li>
            {/* <li>
              <a
                href="#"
                className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
              >
                Blog
              </a>
            </li> */}
          </ul>
        </div>

        {/* LEFT LINKS */}
        <div className="text-[13px]   text-white font-normal hidden md:flex ">
          <a
            href="/"
            className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
          >
            Home
          </a>
          {/* <div className="dropdown dropdown-hover p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400">
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
              <li className="p-4 text-sm duration-300 ease-in-out hover:bg-gray-100 hover:text-green-400">
                <a href="/deals">Top offers</a>
              </li>
              <li className="p-4 text-sm duration-300 ease-in-out hover:bg-gray-100 hover:text-green-400">
                <a href="/deals">Best deals</a>
              </li>
            </ul>
          </div> */}
          {/* <div className="dropdown dropdown-hover p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400">
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
              <li className="p-4 text-sm duration-300 ease-in-out hover:bg-gray-100 hover:text-green-400">
                <a href="/coupons">Top offers</a>
              </li>
              <li className="p-4 text-sm duration-300 ease-in-out hover:bg-gray-100 hover:text-green-400">
                <a href="/coupons">Best deals</a>
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
                <a href="/stores">Top offers</a>
              </li>
              <li className="p-4   text-sm duration-300 ease-in-out hover:bg-gray-100 hover:text-green-400">
                <a href="/stores">Best deals</a>
              </li>
            </ul>
          </div> */}
          {/* <a
            href="/deals"
            className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
          >
            Deals
          </a> */}
          <a
            href="https://www.giitsc.com"
            className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
          >
            Contact us
          </a>
          {/* <a
            href="#"
            className="p-5 duration-300 ease-in-out cursor-pointer hover:bg-green-400"
          >
            Blog
          </a> */}
        </div>

        {/* <a
          href="#"
          className="bg-green-400 p-5 duration-300 ease-in-out cursor-pointer text-white   text-sm hover:bg-green-500"
        >
          BETA VERSION
        </a> */}

        <div className="flex flex-col gap-2 relative">
          {/* search bar */}
          <div className="flex item-center">
            <span className="border-l-2 border-t-2 border-b-2 border-gray-300/50 rounded-l-lg p-2 flex justify-center item-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#ABB1BB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search product..."
              className="border-r-2 border-t-2 border-b-2 border-gray-300/50 rounded-r-lg p-2 pl-4 font-light text-white text-sm lg:w-[450px] outline-green-400 bg-white/5"
              // onChange={handleSearch}
              onChange={onSearchChangeHandler}
            />
          </div>
          {showData && (
            <>
              <div className="bg-white rounded-md absolute w-full top-[110%] z-[4] max-h-[400px] overflow-y-scroll shadow-md pb-2">
                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    {/* card */}
                    {visibleData.length > 0 ? (
                      <>
                        {visibleData.map((item: any, i: any) => (
                          <NavDealCard
                            key={i}
                            title={item?.name}
                            image={item?.images?.[0]}
                            // description={item.summary}
                            // location={item.location}
                            store={item?.store}
                            discountPrice={item?.discountPrice}
                            normalPrice={item?.price}
                            discountPercentage={
                              item.discountPercentage ||
                              ((item.price - item.discountPrice) / item.price) *
                                100
                            }
                            link={item._id}
                            parentSiteLogo={item?.parentSiteLogo}
                            rating={parseInt(item.rating.split(" out")[0]) || 3}
                          />
                        ))}
                      </>
                    ) : (
                      <>
                        <span className="w-full flex items-center justify-center font-medium font-poppins">
                          No product found.
                        </span>
                      </>
                    )}
                  </>
                )}
              </div>
            </>
          )}
        </div>

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

export default Navbar;
