// pages/deals.tsx

import DealCard from "@/components/latestDeals/DealCard";
import Pagination from "@/widgets/pagination/Pagination";
import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";

const data = ({ apiData }: any) => {
  return (
    <>
      <div className="px-4 pt-8 w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        <SectionTopBar
          title={"Latest Deals"}
          linkText={"CONTACT US"}
          link={"#"}
        />
        {/* BOTTOM PART (CARDS) */}
        <div className="w-full flex flex-col gap-2 items-start md:flex-row md:justify-between md:flex-wrap 2xl:justify-center 2xl:gap-16">
          {/* card */}
          {apiData.length > 0 && (
            <>
              {apiData.map((item: any, i: any) => (
                <DealCard
                  key={i}
                  title={item.title}
                  image={item.image?.sourceUrl}
                  description={item.summary}
                  location={item.location}
                  store={item.store?.title}
                  price={item.price}
                  parentSiteLogo={item.parentSiteLogo}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <Pagination />
    </>
  );
};

export default data;
