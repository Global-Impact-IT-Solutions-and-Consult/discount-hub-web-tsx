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
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [endCursor, setEndCursor] = useState(null);

  const { url } = useContext(AppContext);

  const fetchServices = async () => {
    try {
      setLoading(true);

      const client = new ApolloClient({
        uri: url,
        cache: new InMemoryCache(),
      });

      const response = await client.query({
        query: gql`
          query unemployed($first: Int!, $after: String) {
            discounts(first: $first, after: $after) {
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
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }
        `,
        variables: {
          first: 21,
          after: endCursor,
        },
      });

      const responseData = response.data.discounts.nodes.map(
        (item: any) => item.discounts
      );

      setApiData(responseData);
      setHasNextPage(response.data.discounts.pageInfo.hasNextPage);
      setHasPrevPage(response.data.discounts.pageInfo.hasPreviousPage);
      setEndCursor(response.data.discounts.pageInfo.endCursor);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const handleNextPageChange = (newPage: any) => {
    if (
      newPage > 0 &&
      newPage <= currentPage + 1 &&
      newPage !== currentPage &&
      hasNextPage
    ) {
      setCurrentPage(newPage);
    }
    fetchServices();
    window.scrollTo({ top: 240, behavior: "smooth" });
  };

  const handlePrevPageChange = (newPage: any) => {
    if (
      newPage > 0 &&
      newPage === currentPage - 1 &&
      newPage !== currentPage &&
      hasPrevPage
    ) {
      setCurrentPage(newPage);
    }
    fetchServices();
    window.scrollTo({ top: 240, behavior: "smooth" });
  };

  // const handlePageChange = (newPage: any) => {
  //   if (newPage > 0 && newPage <= currentPage && hasNextPage) {
  //     setCurrentPage(newPage);
  //     fetchServices();
  //   }
  // };

  return (
    <>
      <div className="px-4 pt-8  w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        <SectionTopBar
          title={"Latest Deals"}
          linkText={"CONTACT US"}
          link={"#"}
        />
        <Pagination
          currentPage={currentPage}
          hasNextPage={hasNextPage}
          handleNextPageChange={handleNextPageChange}
          handlePrevPageChange={handlePrevPageChange}
          top={true}
        />
        {/* BOTTOM PART (CARDS) */}
        <div className="w-full flex flex-col gap-2 items-start md:flex-row md:justify-between md:flex-wrap 2xl:justify-center 2xl:gap-16">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {/* card */}
              {apiData.length > 0 && (
                <>
                  {apiData.map((item: any, i: any) => (
                    <DealCard
                      key={i}
                      title={item.productName}
                      image={item.productImageUrl}
                      // description={item.summary}
                      // location={item.location}
                      store={item.companyName}
                      discountPrice={item.discountPrice}
                      normalPrice={item.normalPrice}
                      discountPercentage={item.discountPercentage}
                      link={item.productUrl}
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
      <Pagination
        currentPage={currentPage}
        hasNextPage={hasNextPage}
        handleNextPageChange={handleNextPageChange}
        handlePrevPageChange={handlePrevPageChange}
      />
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
