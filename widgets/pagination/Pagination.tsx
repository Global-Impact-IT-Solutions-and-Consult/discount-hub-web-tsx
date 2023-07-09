const Pagination = () => {
  return (
    <>
      <div className="px-4 py-8 w-full flex items-center justify-center">
        <div className="px-4 py-8 w-full flex items-center justify-center gap-1 bg-white rounded-lg p-4 font-sans font-normal shadow-lg md:gap-2 lg:text-lg">
          <a
            href={"#"}
            className="paginationBtn text-gray-800 text-sm p-3 rounded-lg border-2 duration-300 ease-in-out font-sans hover:text-white hover:bg-green-400 lg:px-4 lg:py-2"
          >
            Previous
          </a>
          <a
            href={"#"}
            className="paginationBtn text-gray-800 text-sm p-3 rounded-lg border-2 duration-300 ease-in-out font-sans hover:text-white hover:bg-green-400 lg:px-4 lg:py-2"
          >
            1
          </a>
          <a
            href={"#"}
            className="paginationBtn text-gray-800 text-sm p-3 rounded-lg border-2 duration-300 ease-in-out font-sans hover:text-white hover:bg-green-400 lg:px-4 lg:py-2"
          >
            2
          </a>
          <a
            href={"#"}
            className="paginationBtn text-gray-800 text-sm p-3 rounded-lg border-2 duration-300 ease-in-out font-sans hover:text-white hover:bg-green-400 lg:px-4 lg:py-2"
          >
            Next
          </a>
        </div>
      </div>
    </>
  );
};

export default Pagination;
