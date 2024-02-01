"use client";

import { useContext, useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import DealCard from "@/components/latestDeals/DealCard";
import Pagination from "@/widgets/pagination/Pagination";

// Spinner
import Spinner from "@/widgets/spinner/Spinner";
import AppContext from "@/context/AppContext";

const Page = () => {
  const { url, loading, setLoading, allDiscounts } = useContext(AppContext);
  const [apiData, setApiData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(1);
  const itemsPerPage = 24;
  const [filtered, setFiltered] = useState([]);

  const fetchServices = async () => {
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
                  discountPercentage
                  discountPrice
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
        // variables: {
        //   first: 21,
        //   after: endCursor,
        // },
      });

      const responseData = response.data.discounts.nodes.map(
        (item: any) => item
      );
      // console.log(
      //   "🚀 ~ file: page.tsx:66 ~ fetchServices ~ responseData:",
      //   responseData
      // );

      setApiData(responseData);
      // setVisibleData(responseData.slice(0, itemsPerPage));
      setVisibleData(responseData);
      console.log(
        "🚀 ~ file: page.tsx:72 ~ fetchServices ~ responseData:",
        responseData
      );
      // setCurrentPage(1);
      // setVisibleData(responseData.slice(0, itemsPerPage));
      // setHasNextPage(response.data.discounts.pageInfo.hasNextPage);
      // setHasPrevPage(response.data.discounts.pageInfo.hasPreviousPage);
      // setEndCursor(response.data.discounts.pageInfo.endCursor);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleNextPageChange = () => {
    setLoading(true);
    const nextPage = currentPage + 1;
    if (nextPage <= pages) {
      setCurrentPage(nextPage);
      // getVisibleData(apiData);
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
      setVisibleData(apiData.slice(startIndex, startIndex + itemsPerPage));
      window.scrollTo({ top: 240, behavior: "smooth" });
    }
    setLoading(false);
  };

  // SearchBar Handler
  const onSearchChangeHandler = async (e: any) => {
    try {
      if (e.target.value.length === 0) {
        setVisibleData(allDiscounts.slice(0, itemsPerPage));
      }
      e.preventDefault();
      const filtrate = allDiscounts.filter((item: any) =>
        item.discounts.productName
          .toLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      setFiltered(filtrate);
      setVisibleData(filtrate);

      // setPages(Math.ceil(visibleData.length / itemsPerPage));
    } catch (err) {
      return err;
    }
  };

  // useEffect(() => {
  //   // set number of pages
  //   console.log("🚀 ~ useEffect ~ allDiscounts:", allDiscounts);

  //   setVisibleData(allDiscounts);
  //   fetchServices();
  // }, []);

  useEffect(() => {
    // set number of pages
    setPages(Math.ceil(allDiscounts.length / itemsPerPage));
    setVisibleData(allDiscounts.slice(0, itemsPerPage));
    // setVisibleData(allDiscounts);
  }, [allDiscounts]);

  return (
    <>
      <div className="px-4 pt-8 w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        <div className="bg-white w-full text-gray-600 rounded-md flex items-center justify-between p-3 px-4  lg:text-lg font-normal shadow-sm">
          <span>Latest Deals</span>
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
              onChange={onSearchChangeHandler}
            />
          </div>
        </div>
        {/* <Pagination
          currentPage={currentPage}
          hasNextPage={currentPage < Math.ceil(apiData.length / itemsPerPage)}
          handleNextPageChange={handleNextPageChange}
          handlePrevPageChange={handlePrevPageChange}
          pages={pages}
        /> */}

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
                      // description={item.summary}
                      // location={item.location}
                      store={item.discounts.companyName}
                      discountPrice={item.discounts.discountPrice}
                      normalPrice={item.discounts.normalPrice}
                      discountPercentage={item.discounts.discountPercentage}
                      link={item.databaseId}
                      parentSiteLogo={item.discounts.parentSiteLogo}
                      rating={item.discounts.productRating?.split(" ")[0] || 0}
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
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        hasNextPage={currentPage < Math.ceil(apiData.length / itemsPerPage)}
        handleNextPageChange={handleNextPageChange}
        handlePrevPageChange={handlePrevPageChange}
        pages={pages}
        setVisibleData={setVisibleData}
        visibleData={visibleData}
        allDiscounts={allDiscounts}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

export default Page;
