"use client";

import DealCard from "@/components/latestDeals/DealCard";
import DealsPanelCard from "./DealsPanelCard";

const DealsPanel = ({ deals }: any) => {
  // console.log("🚀 ~ file: DealsPanel.tsx:5 ~ DealsPanel ~ deals:", deals);
  return (
    <>
      <div className="w-full flex flex-col flex-wrap justify-between gap-4 md:flex-row">
        {/* card */}
        {deals ? (
          <>
            {deals.map((item: any, i: any) => (
              <DealsPanelCard
                key={i}
                image={"/heroSlider/1.jpg"}
                title={item.products.title}
                description={item.products.summary}
                location={item.products.location}
                store={item.products.store?.title}
                price={item.products.price}
                link={"#"}
              />
            ))}
          </>
        ) : (
          <>
            {" "}
            <div className="w-full flex items-center justify-center p-4 my-4 font-semibold text-lg font-sans">
              No Deals
            </div>
          </>
        )}
        {/* <DealsPanelCard
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
    </>
  );
};

export default DealsPanel;
