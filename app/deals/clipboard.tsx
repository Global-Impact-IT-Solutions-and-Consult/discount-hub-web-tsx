"use client";

import { useContext, useEffect, useState } from "react";

import DealCard from "@/components/latestDeals/DealCard";
import Pagination from "@/widgets/pagination/Pagination";
import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";

// Spinner
import Spinner from "@/widgets/spinner/Spinner";
import AppContext from "@/context/AppContext";

const Page = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [endCursor, setEndCursor] = useState(null);

  const { baseURL } = useContext(AppContext);

  const handleNextPageChange = (newPage: any) => {
    if (
      newPage > 0 &&
      newPage <= currentPage + 1 &&
      newPage !== currentPage &&
      hasNextPage
    ) {
      setCurrentPage(newPage);
    }
    window.scrollTo({ top: 240, behavior: "smooth" });
  };

  const handlePrevPageChange = (newPage: any) => {
    if (
      newPage > 0 &&
      newPage === currentPage - 1 &&
      newPage !== currentPage &&
      hasPrevPage
    ) {
      setCurrentPage(newPage);
    }
    window.scrollTo({ top: 240, behavior: "smooth" });
  };

  // const handlePageChange = (newPage: any) => {
  //   if (newPage > 0 && newPage <= currentPage && hasNextPage) {
  //     setCurrentPage(newPage);
  //     fetchServices();
  //   }
  // };

  return (
    <>
      <div className="px-4 pt-8  w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        <SectionTopBar
          title={"Latest Deals"}
          linkText={"CONTACT US"}
          link={"#"}
        />
        <Pagination
          currentPage={currentPage}
          hasNextPage={hasNextPage}
          handleNextPageChange={handleNextPageChange}
          handlePrevPageChange={handlePrevPageChange}
          top={true}
        />
        {/* BOTTOM PART (CARDS) */}
        <div className="w-full flex flex-col gap-2 items-start md:flex-row md:justify-between md:flex-wrap 2xl:justify-center 2xl:gap-16">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {/* card */}
              {apiData.length > 0 && (
                <>
                  {apiData.map((item: any, i: any) => (
                    <DealCard
                      key={i}
                      title={item.productName}
                      image={item.productImageUrl}
                      // description={item.summary}
                      // location={item.location}
                      store={item.companyName}
                      discountPrice={item.discountPrice}
                      normalPrice={item.normalPrice}
                      discountPercentage={item.discountPercentage}
                      link={item.productUrl}
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
        hasNextPage={hasNextPage}
        handleNextPageChange={handleNextPageChange}
        handlePrevPageChange={handlePrevPageChange}
      />
    </>
  );
};

export default Page;
