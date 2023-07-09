import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import CouponCard from "./Couponcard";

const LatestCoupons = () => {
  return (
    <>
      <div className="py-8 w-full flex flex-col items-center justify-start gap-8">
        <SectionTopBar
          title={"Latest Coupons"}
          link={"#"}
          linkText={"VIEW ALL"}
        />

        <div className="w-full flex  gap-4 overflow-x-scroll scrolling-auto items-center justify-start  md:flex-row md:justify-start md:gap-4 2xl:gap-8">
          <CouponCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          <CouponCard
            image={"/heroSlider/2.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          <CouponCard
            image={"/heroSlider/5.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          <CouponCard
            image={"/heroSlider/4.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
          <CouponCard
            image={"/heroSlider/3.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />
        </div>
      </div>
    </>
  );
};

export default LatestCoupons;
