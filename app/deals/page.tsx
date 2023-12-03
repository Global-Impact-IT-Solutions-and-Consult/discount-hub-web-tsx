"use client";

import { useContext, useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import DealCard from "@/components/latestDeals/DealCard";
import Pagination from "@/widgets/pagination/Pagination";
import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";

// Spinner
import Spinner from "@/widgets/spinner/Spinner";
import AppContext from "@/context/AppContext";

const Page = () => {
  const { allDiscounts } = useContext(AppContext);
  // console.log("🚀 ~ file: page.tsx:17 ~ Page ~ allDiscounts:", allDiscounts);

  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [visibleData, setVisibleData] = useState([]);
  // console.log("🚀 ~ file: page.tsx:18 ~ Page ~ visibleData:", visibleData);
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState(1);
  const itemsPerPage = 21;
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchServices = async () => {
    try {
      setLoading(true);

      const client = new ApolloClient({
        uri: "http://127.0.0.1:10019/graphql",
        cache: new InMemoryCache(),
      });

      const response = await client.query({
        query: gql`
          query unemployed {
            discounts(first: 1000000) {
              nodes {
                discounts {
                  companyName
                  discountPercentage
                  discountPrice
                  normalPrice
                  productImageUrl
                  productName
                  productUrl
                }
                databaseId
              }
            }
          }
        `,
        // variables: {
        //   first: 21,
        //   after: endCursor,
        // },
      });

      const responseData = response.data.discounts.nodes.map(
        (item: any) => item
      );
      // console.log(
      //   "🚀 ~ file: page.tsx:66 ~ fetchServices ~ responseData:",
      //   responseData
      // );

      setApiData(responseData);
      setVisibleData(responseData);
      console.log(
        "🚀 ~ file: page.tsx:72 ~ fetchServices ~ responseData:",
        responseData
      );
      // setCurrentPage(1);
      // setVisibleData(responseData.slice(0, itemsPerPage));
      // setHasNextPage(response.data.discounts.pageInfo.hasNextPage);
      // setHasPrevPage(response.data.discounts.pageInfo.hasPreviousPage);
      // setEndCursor(response.data.discounts.pageInfo.endCursor);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const getVisibleData = (apiData: any) => {
    const start = currentPage * itemsPerPage;
    setVisibleData(apiData.slice(start, start + itemsPerPage));
  };

  const handleNextPageChange = () => {
    setLoading(true);
    const nextPage = currentPage + 1;
    if (nextPage <= pages) {
      setCurrentPage(nextPage);
      getVisibleData(apiData);
      window.scrollTo({ top: 240, behavior: "smooth" });
    }
    setLoading(false);
  };

  const handlePrevPageChange = () => {
    setLoading(true);
    const prevPage = currentPage - 1;
    if (prevPage >= 0) {
      const startIndex = prevPage * itemsPerPage;
      setCurrentPage(prevPage);
      setVisibleData(apiData.slice(startIndex, startIndex + itemsPerPage));
      window.scrollTo({ top: 240, behavior: "smooth" });
    }
    setLoading(false);
  };

  // SearchBar Handler
  const onSearchCangeHandler = async (e: any) => {
    try {
      e.preventDefault();
      const filtrate = apiData.filter((item: any) =>
        item.discounts.productName
          .toLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      setFiltered(filtrate);
    } catch (err) {
      return err;
    }
  };

  // const handleSearch = (event: any) => {
  //   const searchTerm = event.target.value;
  //   setSearchTerm(searchTerm);
  //   const filteredData = apiData.filter((item: any) =>
  //     Object.values(item).some((value: any) =>
  //       value.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  //   setPages(Math.ceil(filteredData.length / itemsPerPage));
  //   setCurrentPage(0);
  //   getVisibleData(filteredData);
  // };

  // useEffect(() => {
  //   if (apiData) {
  //     const filteredData = apiData.filter((item) =>
  //       Object.values(item).some((value: any) =>
  //         value.toLowerCase().includes(searchTerm.toLowerCase())
  //       )
  //     );
  //     setPages(Math.ceil(filteredData.length / itemsPerPage));
  //     setCurrentPage(0);
  //     getVisibleData(filteredData);
  //   }
  // }, [apiData, searchTerm]);

  const handleSearch = (event: any) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    const filteredData = apiData.filter((item: any) => {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          const value = item[key];

          if (
            typeof value === "string" &&
            value.toLowerCase().includes(searchTerm)
          ) {
            return true; // Found a match in a string property
          } else if (
            typeof value === "number" &&
            value.toString().includes(searchTerm)
          ) {
            return true; // Found a match in a numeric property
          }
        }
      }
      return false; // No match found in the current object
    });

    setVisibleData(filteredData);
  };

  useEffect(() => {
    if (apiData) {
      const filteredData = apiData.filter((item: any) => {
        for (const key in item) {
          if (item.hasOwnProperty(key)) {
            const value = item[key];

            if (
              (typeof value === "string" || typeof value === "number") &&
              value.toString().toLowerCase().includes(searchTerm)
            ) {
              return true; // Found a match in a string or numeric property
            }
          }
        }
        return false; // No match found in the current object
      });

      setVisibleData(filteredData);
    }
  }, [apiData, searchTerm]);

  // populate filtered with allCaregivers on page load
  useEffect(() => {
    setFiltered(apiData);
  }, [apiData]);

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    if (apiData) {
      setPages(Math.ceil(apiData.length / itemsPerPage));
      setVisibleData(apiData);
    }
  }, [apiData]);

  return (
    <>
      <div className="px-4 pt-8 w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        {/* <SectionTopBar
          title={"Latest Deals"}
          linkText={"CONTACT US"}
          link={"#"}
        /> */}
        <div className="bg-white w-full text-gray-600 rounded-md flex items-center justify-between p-3 px-4  lg:text-lg font-normal shadow-sm">
          <span>Latest Deals</span>
          {/* search bar */}
          <div className="flex item-center">
            <span className="border-l-2 border-t-2 border-b-2 border-gray-300/50 rounded-l-lg p-2 flex justify-center item-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="#ABB1BB"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="search product..."
              className="border-r-2 border-t-2 border-b-2 border-gray-300/50 rounded-r-lg p-2 pl-4 font-light text-sm w-[450px] outline-green-400"
              onChange={handleSearch}
              // onChange={onSearchCangeHandler}
            />
          </div>
          {/* <a
            href="#"
            className="LinkBorder text-green-400 text-xs rounded-sm border-green-400 border-2  duration-300 ease-in-out    hover:text-white hover:bg-green-400 lg:px-4 lg:py-2"
          >
            CONTACT US
          </a> */}
        </div>
        {/* <Pagination
          currentPage={currentPage}
          hasNextPage={currentPage < Math.ceil(apiData.length / itemsPerPage)}
          handleNextPageChange={handleNextPageChange}
          handlePrevPageChange={handlePrevPageChange}
          pages={pages}
        /> */}

        {/* BOTTOM PART (CARDS) */}
        {/* <div className="w-full flex flex-col gap-3 items-start md:flex-row md:justify-start md:flex-wrap 2xl:justify-center 2xl:gap-16"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {/* card */}
              {visibleData.length > 0 && (
                <>
                  {visibleData.map((item: any, i: any) => (
                    <DealCard
                      key={i}
                      title={item.discounts.productName}
                      image={item.discounts.productImageUrl}
                      // description={item.discounts.summary}
                      // location={item.discounts.location}
                      store={item.discounts.companyName}
                      discountPrice={item.discounts.discountPrice}
                      normalPrice={item.discounts.normalPrice}
                      discountPercentage={item.discounts.discountPercentage}
                      link={item.databaseId}
                    />
                  ))}
                </>
              )}
            </>
          )}

          {/* <DealCard
            image={"/heroSlider/1.jpg"}
            title={"The Crash Bad Instant Folding Twin Bed"}
            location={"United States"}
            store={"Amazon"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
            }
            price={"£350.00"}
          /> */}
        </div>
      </div>

      {/* <Pagination /> */}
      {/* <Pagination
        currentPage={currentPage}
        hasNextPage={currentPage < Math.ceil(apiData.length / itemsPerPage)}
        handleNextPageChange={handleNextPageChange}
        handlePrevPageChange={handlePrevPageChange}
        pages={pages}
      /> */}
    </>
  );
};

export default Page;

// ***************
// ***************
// ***************
// ***************
// ***************
// ***************
// ***************
// ***************

// "use client";

// import React from "react";
// import { useQuery } from "react-query";
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// import DealCard from "@/components/latestDeals/DealCard";
// import Pagination from "@/widgets/pagination/Pagination";
// import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";

// const Page = () => {
//   const { data } = useQuery("latestDeals", async () => {
//     const client = new ApolloClient({
//         uri: "http://localhost/wp/graphql",
//       cache: new InMemoryCache(),
//     });

//     const response = await client.query({
//       query: gql`
//         query unemployed {
//           products {
//             nodes {
//               products {
//                 price
//                 rating
//                 title
//                 summary
//                 image {
//                   sourceUrl
//                 }
//                 location
//                 store {
//                   ... on Store {
//                     id
//  title
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `,
//     });

//     return response.data.products.nodes.map((item: any) => item.products);
//   });

//   return (
//     <>
//       <div className="px-4 pt-8  w-full flex flex-col items-center justify-start gap-8">
//         {/* TOP PART */}
//         <SectionTopBar
//           title={"Latest Deals"}
//           linkText={"CONTACT US"}
//           link={"#"}
//         />
//         {/* BOTTOM PART (CARDS) */}
//         <div className="w-full flex flex-col gap-2 items-start md:flex-row md:justify-between md:flex-wrap 2xl:justify-center 2xl:gap-16">
//           {/* card */}
//           {data.length > 0 && (
//             <>
//               {data.map((item: any) => (
//                 <DealCard
//                   key={item.id}
//                   title={item.title}
//                   image={item.image?.sourceUrl}
//                   description={item.summary}
//                   location={item.location}
//                   store={item.store?.title}
//                   price={item.price}
//                 />
//               ))}
//             </>
//           )}
//         </div>
//       </div>
//       <Pagination />
//     </>
//   );
// };

// export default Page;

// *******************
// *******************
// *******************
// *******************
// *******************
// *******************
// *******************
// *******************
// *******************
// *******************
// *******************

// "use client";

// import DealCard from "@/components/latestDeals/DealCard";
// import Pagination from "@/widgets/pagination/Pagination";
// import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// export async function generateStaticParams() {
//   const client = new ApolloClient({
//       uri: "http://localhost/wp/graphql",
//     cache: new InMemoryCache(),
//   });

//   const response = await client.query({
//     query: gql`
//       query unemployed {
//         products {
//           nodes {
//             products {
//               price
//               rating
//               title
//               summary
//               image {
//                 sourceUrl
//               }
//               location
//               store {
//                 ... on Store {
//                   id
//                   title
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//   });

//   const getResponse = response.data.products.nodes.map(
//     (item: any) => item.products
//   );

//   return {
//     props: {
//       apiData: getResponse,
//     },
//   };
// }

// const Page = ({ apiData }: any) => {
//   return (
//     <>
//       <div className="px-4 pt-8  w-full flex flex-col items-center justify-start gap-8">
//         {/* TOP PART */}
//         <SectionTopBar
//           title={"Latest Deals"}
//           linkText={"CONTACT US"}
//           link={"#"}
//         />
//         {/* BOTTOM PART (CARDS) */}
//         <div className="w-full flex flex-col gap-2 items-start md:flex-row md:justify-between md:flex-wrap 2xl:justify-center 2xl:gap-16">
//           {/* card */}
//           {apiData.length > 0 && (
//             <>
//               {apiData.map((item: any, i: any) => (
//                 <DealCard
//                   key={i}
//                   title={item.title}
//                   image={item.image?.sourceUrl}
//                   description={item.summary}
//                   location={item.location}
//                   store={item.store?.title}
//                   price={item.price}
//                 />
//               ))}
//             </>
//           )}
//         </div>
//       </div>
//       <Pagination />
//     </>
//   );
// };

// export default Page;

// *******************
// *******************
// *******************
// *******************
// *******************
// *******************
// "use client";

// import { useEffect, useState } from "react";

// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// import DealCard from "@/components/latestDeals/DealCard";
// import Pagination from "@/widgets/pagination/Pagination";
// import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";

// const Page = () => {
//   const [apiData, setApiData] = useState([]);
//   useEffect(() => {
//     async function fetchServices() {
//       const client = new ApolloClient({
//           uri: "http://localhost/wp/graphql",
//         cache: new InMemoryCache(),
//       });

//       const response = await client.query({
//         query: gql`
//           query unemployed {
//             products {
//               nodes {
//                 products {
//                   price
//                   rating
//                   title
//                   summary
//                   image {
//                     sourceUrl
//                   }
//                   location
//                   store {
//                     ... on Store {
//                       id
//                       title
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         `,
//       });

//       const getResponse = response.data.products.nodes.map(
//         (item: any) => item.products
//       );
//       console.log(
//         "🚀 ~ file: page.tsx:102 ~ fetchServices ~ getResponse:",
//         getResponse
//       );

//       setApiData(getResponse);
//     }
//     fetchServices();
//     // async function getServices() {
//     //   console.log("🚀 ~ file: page.tsx:59 ~ Page ~ apiData:", apiData);
//     //   const services = await fetchServices();
//     //   console.log("🚀 ~ file: page.tsx:96 ~ useEffect ~ services:", services);
//     // }
//     // getServices();
//   }, []);

//   return (
//     <>
//       <div className="px-4 pt-8  w-full flex flex-col items-center justify-start gap-8">
//         {/* TOP PART */}
//         <SectionTopBar
//           title={"Latest Deals"}
//           linkText={"CONTACT US"}
//           link={"#"}
//         />
//         {/* BOTTOM PART (CARDS) */}
//         <div className="w-full flex flex-col gap-2 items-start md:flex-row md:justify-between md:flex-wrap 2xl:justify-center 2xl:gap-16">
//           {/* card */}
//           {apiData.length > 0 && (
//             <>
//               {apiData.map((item: any, i) => (
//                 <DealCard
//                   key={i}
//                   title={item.title}
//                   image={item.image?.sourceUrl}
//                   description={item.summary}
//                   location={item.location}
//                   store={item.store?.title}
//                   price={item.price}
//                 />
//               ))}
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
//           /> */}
//         </div>
//       </div>

//       <Pagination />
//     </>
//   );
// };

// export default Page;
// *******************
// *******************
// *******************
// *******************
// *******************
