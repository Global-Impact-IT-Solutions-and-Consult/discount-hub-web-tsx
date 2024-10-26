"use client";

import { useContext, useEffect, useState } from "react";

import DealCard from "@/components/latestDeals/DealCard";
import Pagination from "@/widgets/pagination/Pagination";
import Spinner from "@/widgets/spinner/Spinner";
import AppContext from "@/context/AppContext";

const Page = () => {
  const { oneCategory, loading, setLoading, allProducts } =
    useContext(AppContext);

  const [apiData, setApiData] = useState<any[]>([]);
  const [visibleData, setVisibleData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(1);
  const [filtered, setFiltered] = useState<any[]>([]);
  const itemsPerPage = 24;

  const getActiveData = () =>
    oneCategory?.productsInCategory?.length
      ? oneCategory.productsInCategory
      : allProducts;

  const updateVisibleData = (data: any[], page: number) => {
    const startIndex = page * itemsPerPage;
    setVisibleData(data.slice(startIndex, startIndex + itemsPerPage));
  };

  const handlePageChange = (page: number) => {
    if (page >= 0 && page < pages) {
      setCurrentPage(page);
      updateVisibleData(filtered.length ? filtered : apiData, page);
      window.scrollTo({ top: 240, behavior: "smooth" });
    }
  };

  const onSearchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    const activeData = getActiveData();

    if (!query) {
      setFiltered([]);
      setCurrentPage(0);
      updateVisibleData(activeData, 0);
      setPages(Math.ceil(activeData.length / itemsPerPage));
      return;
    }

    const searchResults = activeData.filter((item: any) =>
      item?.name?.toLowerCase().includes(query)
    );

    setFiltered(searchResults);
    setCurrentPage(0);
    updateVisibleData(searchResults, 0);
    setPages(Math.ceil(searchResults.length / itemsPerPage));
  };

  useEffect(() => {
    const activeData = getActiveData();
    setApiData(activeData);
    updateVisibleData(activeData, 0);
    setPages(Math.ceil(activeData.length / itemsPerPage));
  }, [oneCategory, allProducts]);

  return (
    <>
      <div className="px-4 pt-8 w-full flex flex-col items-center justify-start gap-8">
        <div className="bg-white w-full text-gray-600 rounded-md flex items-center justify-between p-3 px-4 lg:text-lg font-normal shadow-sm">
          <span className="capitalize font-semibold">
            {oneCategory?.category?.name || "Latest Deals"}
          </span>

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
              placeholder="Search product..."
              className="border-r-2 border-t-2 border-b-2 border-gray-300/50 rounded-r-lg p-2 pl-4 font-light text-sm w-[450px] outline-green-400 bg-white"
              onChange={onSearchChangeHandler}
            />
          </div>
        </div>

        <div className="w-full gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:ml-8">
          {loading ? (
            <Spinner />
          ) : (
            visibleData.map((item, i) => (
              <DealCard
                key={i}
                title={item.name}
                image={item.images[0]}
                store={item.companyName}
                discountPrice={item.discountPrice}
                normalPrice={item.price}
                discountPercentage={
                  item.discountPercentage ||
                  ((item.price - item.discountPrice) / item.price) * 100
                }
                link={item._id}
                parentSiteLogo={item.parentSiteLogo}
                rating={parseInt(item.rating.split(" out")[0]) || 3}
              />
            ))
          )}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        pages={pages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Page;
