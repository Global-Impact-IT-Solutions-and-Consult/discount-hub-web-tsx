"use client";

import { useEffect, useState } from "react";

import CouponCard from "@/components/latestCoupons/Couponcard";
import Pagination from "@/widgets/pagination/Pagination";
import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";

// Spinner
import Spinner from "@/widgets/spinner/Spinner";

const Page = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="px-4 pt-8  w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        <SectionTopBar
          title={"All Coupons"}
          linkText={"CONTACT US"}
          link={"/contact-us"}
        />
        {/* BOTTOM PART (CARDS) */}
        <div className="w-full flex flex-col gap-2 items-center md:flex-row  md:justify-around md:flex-wrap 2xl:justify-center  2xl:gap-16">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {/* card */}
              {apiData.length > 0 && (
                <>
                  {apiData.map((item: any, i) => (
                    <CouponCard
                      key={i}
                      description={item.title}
                      image={item.image?.sourceUrl}
                      location={item.location}
                      store={item.store?.title}
                      price={item.price}
                      code={item.code}
                      expires={item.expiryDate}
                      offer={item.discount}
                    />
                  ))}
                </>
              )}
            </>
          )}

          {/* <CouponCard
            image={"/heroSlider/1.jpg"}
            location={"United States"}
            store={"Amazon"}
            description={"Flat 40% off hotel bookings in 10 cities"}
            offer={"35"}
            expires={"07-14-2023"}
            code={"X410-17GT-OL57"}
          />{" "} */}
        </div>
      </div>

      <Pagination />
    </>
  );
};

export default Page;
