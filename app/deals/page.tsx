"use client";

import { useEffect, useState } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import DealCard from "@/components/latestDeals/DealCard";
import Pagination from "@/widgets/pagination/Pagination";
import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";

// Spinner
import Spinner from "@/widgets/spinner/Spinner";

const Page = async () => {
  let apiData = [];
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  async function fetchServices() {
    setLoading(true);

    const client = new ApolloClient({
      uri: "http://localhost/wp/graphql",
      cache: new InMemoryCache(),
    });

    const response = await client.query({
      query: gql`
        query unemployed {
          products {
            nodes {
              products {
                price
                rating
                title
                summary
                image {
                  sourceUrl
                }
                location
                store {
                  ... on Store {
                    id
                    title
                  }
                }
                category {
                  ... on ProductCategory {
                    slug
                    title
                  }
                }
              }
            }
          }
        }
      `,
    });

    const getResponse = response.data.products.nodes.map(
      (item: any) => item.products
    );

    setLoading(false);

    // setApiData(getResponse);
    return getResponse;
  }
  fetchServices();
  // async function getServices() {
  //   console.log("🚀 ~ file: page.tsx:59 ~ Page ~ apiData:", apiData);
  //   const services = await fetchServices();
  //   console.log("🚀 ~ file: page.tsx:96 ~ useEffect ~ services:", services);
  // }
  // getServices();
  // }, []);

  apiData = await fetchServices();

  return (
    <>
      <div className="px-4 pt-8  w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        <SectionTopBar
          title={"Latest Deals"}
          linkText={"CONTACT US"}
          link={"#"}
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
                      title={item.title}
                      image={item.image?.sourceUrl}
                      description={item.summary}
                      location={item.location}
                      store={item.store?.title}
                      price={item.price}
                      rating={item.rating}
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

      <Pagination />
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
//       uri: "http://localhost/wp/graphql",
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
//     uri: "http://localhost/wp/graphql",
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
//         uri: "http://localhost/wp/graphql",
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
