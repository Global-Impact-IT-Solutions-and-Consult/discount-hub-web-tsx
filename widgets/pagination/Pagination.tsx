const Pagination = ({ currentPage, pages, onPageChange }: any) => {
  return (
    <div className="w-full flex items-center justify-center px-4 py-8">
      <div className="w-full flex items-center justify-center gap-1 bg-white rounded-lg p-4 shadow-lg md:gap-2 lg:text-lg">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 0}
          className={`paginationBtn text-gray-800 text-sm p-3 rounded-lg border-2 hover:bg-green-400 ${
            currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: pages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index)}
            className={`paginationBtn text-gray-800 text-sm p-3 rounded-lg border-2 hover:bg-green-400 ${
              currentPage === index ? "bg-green-400 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === pages - 1}
          className={`paginationBtn text-gray-800 text-sm p-3 rounded-lg border-2 hover:bg-green-400 ${
            currentPage === pages - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
