"use client";

import { useContext } from "react";
import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import DealCard from "./DealCard";
import Spinner from "@/widgets/spinner/Spinner";
import AppContext from "@/context/AppContext";

const LatestDeals = () => {
  const { loading, allProducts } = useContext(AppContext);

  // Shuffle function to pick 9 random products
  const getRandomProducts = (products: any, count: number) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Only pick 9 random products if products are available
  const randomProducts =
    allProducts.length > 9 ? getRandomProducts(allProducts, 9) : allProducts;

  return (
    <div className="py-8 w-full flex flex-col items-center justify-start gap-8">
      {/* TOP PART */}
      <SectionTopBar
        title={"Latest Deals"}
        linkText={"VIEW ALL"}
        link={"/deals"}
      />
      {/* BOTTOM PART (CARDS) */}
      <div className="w-full gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:ml-8">
        {loading ? (
          <Spinner />
        ) : (
          <>
            {randomProducts.length > 0 && (
              <>
                {randomProducts.map((item: any, i: number) => (
                  <DealCard
                    key={i}
                    title={item?.name}
                    image={item?.images[0]}
                    store={item?.store}
                    discountPrice={item?.discountPrice}
                    normalPrice={item?.price}
                    discountPercentage={
                      item?.discountPercentage ||
                      ((item?.price - item?.discountPrice) / item?.price) * 100
                    }
                    link={item?._id}
                    parentSiteLogo={item?.parentSiteLogo}
                    rating={parseInt(item?.rating.split(" out")[0]) || 0}
                  />
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LatestDeals;

// "use client";

// import { useContext } from "react";
// import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
// import DealCard from "./DealCard";
// import Spinner from "@/widgets/spinner/Spinner";
// import AppContext from "@/context/AppContext";

// const LatestDeals = () => {
//   const { loading, allProducts } = useContext(AppContext);

//   return (
//     <>
//       <div className="py-8 w-full flex flex-col items-center justify-start gap-8">
//         {/* TOP PART */}
//         <SectionTopBar
//           title={"Latest Deals"}
//           linkText={"VIEW ALL"}
//           link={"/deals"}
//         />
//         {/* BOTTOM PART (CARDS) */}
//         {/* <div className="w-full flex flex-col gap-2 items-start md:flex-row md:justify-between md:flex-wrap 2xl:justify-center  2xl:gap-16"> */}
//         <div className="w-full gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:ml-8">
//           {/* card */}
//           {loading ? (
//             <Spinner />
//           ) : (
//             <>
//               {allProducts.length > 0 && (
//                 <>
//                   {/* <Loader /> */}
//                   {allProducts.map((item: any, i: number) => {
//                     if (i < 9) {
//                       return (
//                         <DealCard
//                           key={i}
//                           title={item?.name}
//                           image={item?.images[0]}
//                           store={item?.store}
//                           discountPrice={item?.discountPrice}
//                           normalPrice={item?.price}
//                           discountPercentage={
//                             item?.discountPercentage ||
//                             ((item?.price - item?.discountPrice) /
//                               item?.price) *
//                               100
//                           }
//                           link={item?._id}
//                           parentSiteLogo={item?.parentSiteLogo}
//                           // rating={item?.productRating?.split(" ")[0] || 3}
//                           rating={parseInt(item?.rating.split(" out")[0]) || 0}
//                         />
//                       );
//                     }
//                     return null;
//                   })}
//                 </>
//               )}
//             </>
//           )}
//           {/* <DealCard
//             image={"/heroSlider/1.jpg"}
//             title={"The Crash Bad Instant Folding Twin Bed"}
//             location={"United States"}
//             store={"Amazon"}
//             description={
//               "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
//             }
//             price={"£350.00"}
//             link={"/product"}
//           /> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default LatestDeals;
