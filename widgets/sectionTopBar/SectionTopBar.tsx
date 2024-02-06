const SectionTopBar = ({ title, linkText, link }: any) => {
  return (
    <>
      <div className="bg-white w-full text-gray-600 rounded-md flex items-center justify-between p-3 px-4  lg:text-lg font-normal shadow-sm">
        <span>{title}</span>
        <a
          href={link}
          className="LinkBorder text-green-400 text-xs rounded-sm border-green-400 border-2  duration-300 ease-in-out    hover:text-white hover:bg-green-400 lg:px-4 lg:py-2"
        >
          {linkText}
        </a>
      </div>
    </>
  );
};

export default SectionTopBar;
