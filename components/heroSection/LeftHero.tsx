"use client";

import { useContext, useEffect, useState } from "react";
import {
  BiCategory,
  BiSolidHomeAlt2,
  BiSolidCoffee,
  BiSolidHot,
  BiSolidPizza,
  BiSolidPlaneAlt,
  BiSolidZap,
} from "react-icons/bi";

import AppContext from "@/context/AppContext";
import Spinner from "@/widgets/spinner/Spinner";
import { useRouter } from "next/navigation";

const LeftHero = () => {
  const { loading, allCategories, setOneCategory } = useContext(AppContext);
  console.log("🚀 ~ LeftHero ~ allCategories:", allCategories);
  const router = useRouter();

  // Filter categories with productCount > 0 and get the top 7
  const topCategories = allCategories
    .filter((item: any) => item.productCount > 0)
    .slice(0, 7);

  const selectOneCategory = (item: any) => {
    setOneCategory(item);
    // router.push(`/category/${item.category.name}`);
    // router.push(`/deals/${item.category.name}`);
    router.push(`/deals`);
  };

  return (
    <div className="w-full md:w-2/5 lg:w-1/4">
      <ul>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {topCategories.length > 0 ? (
              topCategories.map((item: any, i: number) => (
                <li key={i} className="first:rounded-t last:rounded-b">
                  <a
                    // href={`/category/${item.category.name}`}
                    onClick={() => selectOneCategory(item)}
                    className="specialHover p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 hover:pl-5 duration-300 ease-in-out cursor-pointer text-sm capitalize md:text-xs"
                  >
                    <div className="flex justify-center items-center px-2 pr-4 border-r-[1px]">
                      <BiCategory className="text-green-400" size={18} />
                    </div>
                    {item.category.name}
                    <span className="text-gray-300 font-normal text-xs">
                      {item.productCount}
                    </span>
                  </a>
                </li>
              ))
            ) : (
              <li className="p-3 text-sm text-gray-500">
                No categories available
              </li>
            )}
          </>
        )}
        <li className="specialHover p-3 pl-5 flex gap-4 items-center border-b-[1px] bg-white font-normal text-gray-600 hover:pl-3 duration-300 ease-in-out lg:last:rounded-b cursor-pointer text-sm">
          <a href="/deals">ALL CATEGORIES</a>
        </li>
      </ul>
    </div>
  );
};

export default LeftHero;

// "use client";

// // Import necessary modules
// import React, { useState } from "react";
// import { BiSolidZap } from "react-icons/bi";
// import { useQuery } from "@apollo/client";
// import gql from "graphql-tag";

// // GraphQL query to fetch data
// const GET_PRODUCT_CATEGORIES = gql`
//   query GetProductCategories {
//     productCategories {
//       nodes {
//         slug
//         productCategories {
//           title
//           icon
//         }
//       }
//     }
//   }
// `;

// const LeftHero = () => {
//   // Use useQuery from @apollo/client to fetch data
//   const { loading, error, data } = useQuery(GET_PRODUCT_CATEGORIES);

//   // State to hold the selected category
//   const [selectedCategory, setSelectedCategory] = useState("");

//   if (loading) {
//     // You can display a loading indicator here
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     // Handle any GraphQL query errors here
//     return <p>Error: {error.message}</p>;
//   }

//   const productCategories = data.productCategories.nodes;

//   return (
//     <div className="w-full md:w-2/5 lg:w-1/4">
//       <ul className="">
//         {productCategories.map((item: any, i: any) => (
//           <li key={i} className="first:rounded-t last:rounded-b">
//             <a
//               href={`/shop?category=${item.slug}`}
//               className={`specialHover p-3 flex gap-4 items-center border-b-[1px] bg-white font-light text-gray-600 hover:pl-5  duration-300 ease-in-out cursor-pointer text-sm   md:text-xs ${
//                 selectedCategory === item.slug ? "bg-gray-200" : ""
//               }`}
//               onClick={() => setSelectedCategory(item.slug)}
//             >
//               <div className=" flex justify-center items-center px-2 pr-4 border-r-[1px]">
//                 <BiSolidZap className="text-green-400" size={18} />
//                 <i></i>
//               </div>
//               {item.productCategories.title}
//               <span className="text-gray-300 font-normal text-xs">2</span>
//             </a>
//           </li>
//         ))}
//         <li className="specialHover p-3 pl-5 flex gap-4 items-center border-b-[1px] bg-white font-normal text-gray-600 hover:pl-3 duration-300 ease-in-out lg:last:rounded-b cursor-pointer text-sm">
//           ALL CATEGORIES
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default LeftHero;
