import React from "react";
import StorePage from "@/components/StorePage";

const page = ({ params }: any) => {
  return <StorePage params={params} />;
};

export default page;

// "use client";

// import { useState, useEffect } from "react";

// import About from "@/app/product/sidemenu/About";
// import DealsPanel from "./DealsPanel";
// import CouponsPanel from "./CouponsPanel";
// import {
//   BiLogoTwitch,
//   BiSolidMessageRounded,
//   BiSolidStar,
// } from "react-icons/bi";

// import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// import RatingStars from "@/widgets/ratingStars/RatingStars";

// // Spinner
// import Spinner from "@/widgets/spinner/Spinner";

// const Page = async ({ params }: any) => {
//   const [switchSection, setSwitchSection] = useState(true);
//   // const [loading, setLoading] = useState(true);

//   let store: any = [];
//   let prodArr: any = [];
//   let dealSlug;
//   let deals: any = [];
//   let coupons: any = [];

//   async function fetchStore() {
//     // setLoading(true);
//     const client = new ApolloClient({
//       uri: "http://localhost/wp/graphql",
//       cache: new InMemoryCache(),
//     });

//     const response = await client.query({
//       query: gql`
//         query unemployed {
//           store(id: ${params.store}, idType: DATABASE_ID) {
//             stores {
//               description
//               rating
//               ratingCount
//               title
//             }
//             slug
//           }
//         }
//       `,
//     });

//     store = response.data.store;
//     // const getResponse = response.data.store;
//     // dealSlug = response.data.store.slug;

//     const dealsQuery = await client.query({
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
//                     title
//                     slug
//                     databaseId
//                   }
//                 }
//                 category {
//                   ... on ProductCategory {
//                     slug
//                     title
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `,
//     });

//     deals = dealsQuery.data.products.nodes.map(async (item: any) => {
//       return item;
//     });

//     await fetchDeals();
//     // await fetchCoupons();

//     // return getResponse;

//     // return response.data;
//   }

//   // store = await fetchStore();

//   async function fetchDeals() {
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
//                     title
//                     slug
//                     databaseId
//                   }
//                 }
//                 category {
//                   ... on ProductCategory {
//                     slug
//                     title
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `,
//     });
//     // console.log("🚀 ~ file: page.tsx:48 ~ fetchServices ~ response:", response);

//     // const getResponse = response.data.store.stores;
//     // console.log("🚀 ~ file: page.tsx:87 ~ fetchDeals ~ getResponse:", getResponse)

//     response.data.products.nodes.map(async (item: any) => {
//       // return item.products.store.databaseId === params.store;
//       if (item.products.store.databaseId === parseInt(params.store)) {
//         await deals.push(item);
//       }
//       // if (item.products.store.slug === store.slug) {
//       //   await deals.push(item);
//       // }
//       // return item.products;
//     });

//     // return getResponse;

//     // return response.data;
//   }

//   // async function fetchCoupons() {
//   //   const client = new ApolloClient({
//   //     uri: "http://localhost/wp/graphql",
//   //     cache: new InMemoryCache(),
//   //   });

//   //   const response = await client.query({
//   //     query: gql`
//   //       query unemployed {
//   //         store(id: "75", idType: DATABASE_ID) {
//   //           stores {
//   //             description
//   //             rating
//   //             ratingCount
//   //             title
//   //           }
//   //         }
//   //       }
//   //     `,
//   //   });
//   // console.log("🚀 ~ file: page.tsx:48 ~ fetchServices ~ response:", response);

//   // const getResponse = response.data.store.stores;
//   // return getResponse;

//   // return response.data;
//   // }

//   // useEffect(() => {
//   //   fetchStore()
//   // }, [])

//   return (
//     <>
//       <div className="flex flex-col gap-4 items-start md:flex-row">
//         <div className=" w-full flex flex-col md:w-3/12">
//           {/* <About store={store} /> */}
//           <div className="w-full bg-white flex flex-col rounded-md">
//             {/* card bottom */}
//             <div className="p-4 flex flex-col gap-3 shadow-lg text-gray-800  ">
//               <span className="font-light text-xl text-gray-900">
//                 About Seller
//               </span>
//               {/* horizontal line */}
//               <div className="w-full flex items-center">
//                 <div className="bg-green-400 p-[1px] w-2/12"></div>
//                 <div className="bg-gray-200 p-[1px] w-10/12"></div>
//               </div>
//               <div className="flex flex-col gap-4 items-center justify-center text-sm   text-gray-800 px-4 py-6">
//                 <BiLogoTwitch size={60} />
//                 <span className="cursor-pointer text-lg duration-300 ease-in-out hover:text-green-400">
//                   <a href="www.twitch.com">{store?.stores?.title}</a>
//                 </span>
//                 <div className="flex items-center justify-center gap-4">
//                   <RatingStars size={16} />({store.stores?.ratingCount} rates)
//                 </div>
//                 <span className="text-center">
//                   {store.stores?.description}
//                   {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Repudiandae quis, architecto perferendis nostrum quo commodi
//               consectetur, blanditiis mollitia sequi nam necessitatibus,
//               corporis exercitationem beatae libero. */}
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="bg-gray-100 flex items-center justify-center p-4 rounded-b-md gap-8 mt-[-5px] font-gray-700 font-light text-lg">
//             <div className="flex flex-col gap-2 items-center justify-center ">
//               <span>{deals.length}</span>
//               <span>Deals</span>
//             </div>
//             <div className="flex flex-col gap-2 items-center justify-center">
//               <span>5</span>
//               <span>Coupons</span>
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-9/12">
//           <div className="bg-white w-full rounded-md flex items-center justify-start gap-6 p-2 px-4   lg:text-lg font-normal shadow-lg mb-4">
//             <div
//               className={
//                 switchSection
//                   ? "flex items-center gap-2 text-green-500 text-base   cursor-pointer duration-300 ease-in-out hover:text-green-500"
//                   : "flex items-center gap-2 text-gray-800 text-base   cursor-pointer duration-300 ease-in-out hover:text-green-500"
//               }
//               onClick={() => setSwitchSection(true)}
//             >
//               {" "}
//               <BiSolidMessageRounded /> Deals
//             </div>
//             <div
//               className={
//                 switchSection
//                   ? "flex items-center gap-2 text-gray-800 text-base   cursor-pointer duration-300 ease-in-out hover:text-green-500"
//                   : "flex items-center gap-2 text-green-500 text-base   cursor-pointer duration-300 ease-in-out hover:text-green-500"
//               }
//               onClick={() => setSwitchSection(false)}
//             >
//               {" "}
//               <BiSolidStar /> Coupons
//             </div>
//           </div>
//           {/* {loading ? (
//             <Spinner />
//           ) : (
//             <>
//               {switchSection ? (
//                 <>
//                   <DealsPanel />
//                 </>
//               ) : (
//                 <>
//                   <CouponsPanel />
//                 </>
//               )}
//             </>
//           )} */}
//           <Spinner />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Page;
