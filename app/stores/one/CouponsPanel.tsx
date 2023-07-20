import CouponsPanelCard from "./CouponsPanelCard";

const CouponsPanel = () => {
  return (
    <>
      <>
        <div className="w-full flex flex-col flex-wrap justify-between gap-4 md:flex-row">
          {/* card */}
          <CouponsPanelCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          {/* card */}
          <CouponsPanelCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          {/* card */}
          <CouponsPanelCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          {/* card */}
          <CouponsPanelCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          {/* card */}
          <CouponsPanelCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
        </div>
      </>
    </>
  );
};

export default CouponsPanel;
