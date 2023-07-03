const SectionTopBar = ({ title, linkText, link }: any) => {
  return (
    <>
      <div className="bg-white w-full rounded-lg flex items-center justify-between p-4 font-sans lg:text-lg font-normal shadow-lg">
        <span>{title}</span>
        <a
          href={link}
          className="LinkBorder text-green-400 text-xs px-2 py-1 rounded-sm border-green-400 border-2  duration-300 ease-in-out font-sans  hover:text-white hover:bg-green-400 lg:px-4 lg:py-2"
        >
          {linkText}
        </a>
      </div>
    </>
  );
};

export default SectionTopBar;
