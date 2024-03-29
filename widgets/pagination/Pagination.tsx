const Pagination = ({
  top,
  currentPage,
  setCurrentPage,
  hasNextPage,
  handleNextPageChange,
  handlePrevPageChange,
  pages,
  setVisibleData,
  visibleData,
  allDiscounts,
  itemsPerPage,
}: any) => {
  const gotoPageHandler = (index: any) => {
    const startingIndex = index * itemsPerPage;
    const endingIndex = startingIndex + itemsPerPage;
    setVisibleData(allDiscounts.slice(startingIndex, endingIndex));
    setCurrentPage(index);
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  // const prevPageHandler = (index) => {

  // }

  return (
    <div
      className={
        top
          ? "w-full flex items-center justify-center"
          : "px-4 py-8 w-full flex items-center justify-center"
      }
    >
      <div className="px-4 py-8 w-full flex items-center justify-center gap-1 bg-white rounded-lg p-4 font-normal shadow-lg md:gap-2 lg:text-lg">
        {/* <button
          onClick={() => handlePrevPageChange()}
          // onClick={() => prevPageHandler()}
          className={`paginationBtn text-gray-800 text-sm p-3 rounded-lg border-2 duration-300 ease-in-out hover:text-white hover:bg-green-400 lg:px-4 lg:py-2 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button> */}

        {Array.from({ length: pages }).map((_, index) => (
          <button
            key={index}
            // onClick={() => handleNextPageChange(index + 1)}
            onClick={() => gotoPageHandler(index)}
            className={`paginationBtn text-gray-800 text-sm p-3 rounded-lg border-2 duration-300 ease-in-out hover:text-white hover:bg-green-400 lg:px-4 lg:py-2 ${
              currentPage === index ? "bg-green-400 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* <button
          onClick={() => handleNextPageChange()}
          className={`paginationBtn text-gray-800 text-sm p-3 rounded-lg border-2 duration-300 ease-in-out hover:text-white hover:bg-green-400 lg:px-4 lg:py-2 ${
            !hasNextPage ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!hasNextPage}
        >
          Next
        </button> */}
      </div>
    </div>
  );
};

export default Pagination;
