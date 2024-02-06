"use client";

// import AppContext from "@/context/AppContext";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import AppContext from "../../context/AppContext";
import React, { useContext, useEffect, useState } from "react";
import DealCard from "../latestDeals/DealCard";
import ProductCard from "../product/ProductCard";
// import Spinner from "../../widgets/spinner/Spinner";
import Spinner from "@/widgets/spinner/Spinner";
import Pagination from "@/widgets/pagination/Pagination";

const Category = ({ slug }: any) => {
  const { url, loading, setLoading, allDiscounts } = useContext(AppContext);
  const [discounts, setDiscounts] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(1);
  const itemsPerPage = 21;
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [heading, setHeading] = useState("");

  async function fetchServices() {
    try {
      setLoading(true);
      const client = new ApolloClient({
        uri: url,
        cache: new InMemoryCache(),
      });

      const response = await client.query({
        query: gql`
          query unemployed {
            discounts(first: 1000000) {
              nodes {
                discounts {
                  companyName
                  discountType
                  discountPrice
                  discountPercentage
                  normalPrice
                  productImageUrl
                  productName
                  productUrl
                  parentSiteLogo
                  productRating
                }
                databaseId
              }
            }
          }
        `,
      });
      // console.log("🚀 ~ file: page.tsx:48 ~ fetchServices ~ response:", response);

      const filteredDiscounts = response.data.discounts.nodes
        .filter((item: any) => item.discounts.discountType === slug)
        .map((item: any) => item);
      // console.log(
      //   "🚀 ~ file: Category.tsx:55 ~ fetchServices ~ filteredDiscounts:",
      //   filteredDiscounts
      // );

      setDiscounts(filteredDiscounts);
      setVisibleData(filteredDiscounts.slice(0, itemsPerPage));
      setHeading(await getHeading(filteredDiscounts[0].discounts.discountType));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log("🚀 ~ file: Category.tsx:19 ~ fetchServices ~ error:", error);
    }
  }

  async function getHeading(inputString: string) {
    return inputString
      .replace(/_([a-z])/g, (_, match) => ` ${match.toUpperCase()}`)
      .replace(/^([a-z])/, (_, match) => match.toUpperCase());
  }

  useEffect(() => {
    fetchServices();
  }, [slug]);

  const getVisibleData = (apiData: any) => {
    const start = currentPage * itemsPerPage;
    setVisibleData(apiData.slice(start, start + itemsPerPage));
  };

  const handleNextPageChange = () => {
    setLoading(true);
    const nextPage = currentPage + 1;
    if (nextPage <= pages) {
      setCurrentPage(nextPage);
      getVisibleData(discounts);
      window.scrollTo({ top: 240, behavior: "smooth" });
    }
    setLoading(false);
  };

  const handlePrevPageChange = () => {
    setLoading(true);
    const prevPage = currentPage - 1;
    if (prevPage >= 0) {
      const startIndex = prevPage * itemsPerPage;
      setCurrentPage(prevPage);
      setVisibleData(discounts.slice(startIndex, startIndex + itemsPerPage));
      window.scrollTo({ top: 240, behavior: "smooth" });
    }
    setLoading(false);
  };

  // SearchBar Handler
  const onSearchCangeHandler = async (e: any) => {
    try {
      e.preventDefault();
      const filtrate = discounts.filter((item: any) =>
        item.discounts.productName
          .toLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      console.log(
        "🚀 ~ file: page.tsx:126 ~ onSearchCangeHandler ~ filtrate:",
        filtrate
      );
      setFiltered(filtrate);
      setVisibleData(filtrate);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    if (discounts) {
      const filteredData = discounts.filter((item: any) => {
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const value = item[key];

            if (
              (typeof value === "string" || typeof value === "number") &&
              value.toString().toLowerCase().includes(searchTerm)
            ) {
              return true; // Found a match in a string or numeric property
            }
          }
        }
        return false; // No match found in the current object
      });

      setVisibleData(filteredData);
    }
  }, [discounts, searchTerm]);

  const handleSearch = (event: any) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    const filteredData = discounts.filter((item: any) =>
      Object.values(item).some((value: any) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setPages(Math.ceil(filteredData.length / itemsPerPage));
    setCurrentPage(0);
    getVisibleData(filteredData);
  };

  useEffect(() => {
    if (discounts) {
      const filteredData = discounts.filter((item) =>
        Object.values(item).some((value: any) =>
          value.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setPages(Math.ceil(filteredData.length / itemsPerPage));
      setCurrentPage(0);
      getVisibleData(filteredData);
    }
  }, [discounts, searchTerm]);

  // populate filtered with allCaregivers on page load
  useEffect(() => {
    setFiltered(discounts);
  }, [discounts]);

  useEffect(() => {
    if (discounts) {
      setPages(Math.ceil(discounts.length / itemsPerPage));
      getVisibleData(discounts);
    }
  }, [discounts]);

  return (
    <>
      <div className="px-4 pt-8 w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        <div className="bg-white w-full text-gray-600 rounded-md flex items-center justify-between p-3 px-4  lg:text-lg font-normal shadow-sm">
          <span>{heading}</span>
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search product..."
              className="border-r-2 border-t-2 border-b-2 border-gray-300/50 rounded-r-lg p-2 pl-4 font-light text-sm w-[450px] outline-green-400 bg-white"
              // onChange={handleSearch}
              onChange={onSearchCangeHandler}
            />
          </div>
          {/* <div></div> */}
          {/* <a
            href="#"
            className="LinkBorder text-green-400 text-xs rounded-sm border-green-400 border-2  duration-300 ease-in-out    hover:text-white hover:bg-green-400 lg:px-4 lg:py-2"
          >
            CONTACT US
          </a> */}
        </div>

        {/* BOTTOM PART (CARDS) */}
        {/* <div className="w-full flex flex-col gap-3 items-start md:flex-row md:justify-start md:flex-wrap 2xl:justify-center 2xl:gap-16"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {/* card */}
              {visibleData.length > 0 && (
                <>
                  {visibleData.map((item: any, i: any) => (
                    <DealCard
                      key={i}
                      title={item.discounts.productName}
                      image={item.discounts.productImageUrl}
                      // description={item.discounts.summary}
                      // location={item.discounts.location}
                      store={item.discounts.companyName}
                      discountPrice={item.discounts.discountPrice}
                      normalPrice={item.discounts.normalPrice}
                      discountPercentage={item.discounts.discountPercentage}
                      link={item.databaseId}
                      parentSiteLogo={item.discounts.parentSiteLogo}
                      rating={
                        item.discounts.productRating?.split(" ")[0] || 3.5
                      }
                    />
                  ))}
                </>
              )}
            </>
          )}

          {/* <DealCard
            image={"/heroSlider/1.jpg"}
            title={"The Crash Bad Instant Folding Twin Bed"}
            location={"United States"}
            store={"Amazon"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
            }
            price={"£350.00"}
          /> */}
        </div>
      </div>

      {/* <Pagination /> */}
      {/* <Pagination
        currentPage={currentPage}
        hasNextPage={currentPage < Math.ceil(apiData.length / itemsPerPage)}
        handleNextPageChange={handleNextPageChange}
        handlePrevPageChange={handlePrevPageChange}
        pages={pages}
      /> */}
    </>
  );

  return (
    <>
      {/* <ProductCard data={prodArr} /> */}
      <div className="w-full my-4 flex flex-col gap-4 md:flex-row 2xl:gap-10">
        {/* left */}
        <div className="w-full flex flex-col items-start gap-4 md:w-2/3">
          {/* <div className="bg-white w-full rounded-lg flex items-center justify-between p-4   lg:text-lg font-normal shadow-lg">
            <span> </span>
            <select
              name="#"
              id="#"
              className="shopSelectOptions text-gray-800 text-xs px-2 py-1 rounded-sm border-green-400 duration-300 ease-in-out   lg:px-4 lg:py-2 "
            >
              <option value="#">Default Sorting</option>
              <option value="#">Sort by popularity</option>
              <option value="#">Sort by average rating</option>
              <option value="#">Sort by latest</option>
              <option value="#">Sort by price: high to low</option>
              <option value="#">Sort by price: low to high</option>
            </select>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {/* card */}
            {loading ? (
              <Spinner />
            ) : (
              <>
                <ProductCard data={discounts} />
                {discounts.length > 0 && (
                  <>
                    {/* <Loader /> */}
                    {discounts.map((item: any, i: any) => (
                      <DealCard
                        key={i}
                        title={item.discounts.productName}
                        image={item.discounts.productImageUrl}
                        // description={item.discounts.summary}
                        // location={item.discounts.location}
                        store={item.discounts.companyName}
                        discountPrice={item.discounts.discountPrice}
                        normalPrice={item.discounts.normalPrice}
                        discountPercentage={item.discounts.discountPercentage}
                        link={item.databaseId}
                      />
                    ))}
                  </>
                )}
              </>
            )}
            {/* <DealCard
            image={"/heroSlider/1.jpg"}
            title={"The Crash Bad Instant Folding Twin Bed"}
            location={"United States"}
            store={"Amazon"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
            }
            price={"£350.00"}
            link={"/product"}
          /> */}
          </div>
          <div className="flex flex-col items-start gap-4 md:flex-row md:flex-wrap 2xl:gap-10">
            {discounts ? (
              <>
                {discounts.map((item: any, i: any) => (
                  <DealCard
                    key={i}
                    title={item.discounts.productName}
                    image={item.discounts.productImageUrl}
                    // description={item.discounts.summary}
                    // location={item.discounts.location}
                    store={item.discounts.companyName}
                    discountPrice={item.discounts.discountPrice}
                    normalPrice={item.discounts.normalPrice}
                    discountPercentage={item.discounts.discountPercentage}
                    link={item.databaseId}
                  />
                ))}
              </>
            ) : (
              <>
                {" "}
                {discounts.length > 0 && (
                  <>
                    {discounts.map((item: any, i: any) => (
                      <DealCard
                        key={i}
                        title={item.discounts.productName}
                        image={item.discounts.productImageUrl}
                        // description={item.discounts.summary}
                        // location={item.discounts.location}
                        store={item.discounts.companyName}
                        discountPrice={item.discounts.discountPrice}
                        normalPrice={item.discounts.normalPrice}
                        discountPercentage={item.discounts.discountPercentage}
                        link={item.databaseId}
                      />
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
