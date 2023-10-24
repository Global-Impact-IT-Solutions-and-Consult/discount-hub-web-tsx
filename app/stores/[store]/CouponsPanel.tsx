import CouponsPanelCard from "./CouponsPanelCard";

const CouponsPanel = ({ coupons }: any) => {
  console.log(
    "🚀 ~ file: CouponsPanel.tsx:4 ~ CouponsPanel ~ coupons:",
    coupons
  );
  return (
    <>
      <>
        <div className="w-full flex flex-col flex-wrap justify-between gap-4 md:flex-row">
          {/* card */}
          {coupons.length > 0 ? (
            <>
              {coupons.map((item: any, i: any) => (
                <CouponsPanelCard
                  key={i}
                  image={"/heroSlider/1.jpg"}
                  location={item.coupons.location}
                  store={item.coupons.store?.title}
                  description={item.coupons.title}
                  offer={item.coupons.discount}
                  expires={item.coupons.expiryDate}
                  code={item.coupons.code}
                />
              ))}
            </>
          ) : (
            <>
              <div className="w-full flex items-center justify-center p-4 my-4 font-semibold text-lg font-sans">
                No Coupons
              </div>
            </>
          )}
          {/* <CouponsPanelCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
           */}
        </div>
      </>
    </>
  );
};

export default CouponsPanel;
