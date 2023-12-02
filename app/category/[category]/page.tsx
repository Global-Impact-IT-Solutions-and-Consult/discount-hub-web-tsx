// "use client";

import Pagination from "@/widgets/pagination/Pagination";
import About from "../../product/sidemenu/About";
import Filter from "../../product/sidemenu/Filter";
import Newsletter from "../../product/sidemenu/Newsletter";
import Products from "../../product/sidemenu/Products";
import RecentReviews from "../../product/sidemenu/RecentReviews";
import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import ProductCard from "../../product/ProductCard";
import DealCard from "@/components/latestDeals/DealCard";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
// import { useEffect, useState } from "react";
// import AppContext from "@/context/AppContext";
import Category from "@/components/category/Category";

const Page = async ({ params }: any) => {
  // const { allDiscounts } = useContext(AppContext);
  // console.log("🚀 ~ file: page.tsx:19 ~ Page ~ allDiscounts:", allDiscounts);

  // console.log("🚀 ~ file: page.tsx:14 ~ page ~ params:", params);
  let apiData: any = [];
  let prodArr: any = [];

  // const [discounts, setDiscounts] = useState([]);

  async function fetchServices() {
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
                discountType
                discountPrice
                discountPercentage
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
    });
    // console.log("🚀 ~ file: page.tsx:48 ~ fetchServices ~ response:", response);

    // const getResponse = response.data.discountTypes.nodes.map((item: any) => {
    //   return item;
    // });
    // setDiscounts(getResponse);

    response.data.discounts.nodes.map((item: any) => {
      item.products.category.map((cat: any) => {
        if (cat.slug === params.category) {
          prodArr.push(item);
        }
      });
      // return item.products;
    });

    const getResponse = response.data.discounts.nodes.map((item: any) => {
      return item.products;
    });
    return getResponse;

    return response.data;
  }

  // apiData = await fetchServices();
  // console.log("🚀 ~ file: page.tsx:77 ~ page ~ apiData:", apiData);

  // console.log("🚀 ~ file: page.tsx:16 ~ page ~ prodArr:", prodArr);

  // useEffect(() => {
  //   // fetchServices();
  // }, []);

  return (
    <>
      <Category slug={params.category} />
      <div className="w-full my-4 flex flex-col gap-4 md:flex-row 2xl:gap-10">
        {/* left */}
        <div className="w-full flex flex-col items-start gap-4 md:w-2/3">
          {/* <div className="bg-white w-full rounded-lg flex items-center justify-between p-4   lg:text-lg font-normal shadow-lg">
            <span> </span>
            <select
              name="#"
              id="#"
              className="shopSelectOptions text-gray-800 text-xs px-2 py-1 rounded-sm border-green-400 duration-300 ease-in-out   lg:px-4 lg:py-2 "
            >
              <option value="#">Default Sorting</option>
              <option value="#">Sort by popularity</option>
              <option value="#">Sort by average rating</option>
              <option value="#">Sort by latest</option>
              <option value="#">Sort by price: high to low</option>
              <option value="#">Sort by price: low to high</option>
            </select>
          </div> */}
          <div className="flex flex-col items-start gap-4 md:flex-row md:flex-wrap 2xl:gap-10">
            {/* {prodArr ? (
              <>
                {prodArr.map((item: any, i: any) => (
                  <DealCard
                    key={i}
                    title={item.products.title}
                    image={item.products.image?.sourceUrl}
                    description={item.products.summary}
                    location={item.products.location}
                    store={item.products.store?.title}
                    price={item.products.price}
                    link={item.databaseId}
                  />
                ))}
              </>
            ) : (
              <>
                {" "}
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
                        link={item.databaseId}
                      />
                    ))}
                  </>
                )}
              </>
            )} */}
            {/* <DealCard
              image={"/heroSlider/1.jpg"}
              title={"The Crash Bad Instant Folding Twin Bed"}
              location={"United States"}
              store={"Amazon"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
              }
              price={"£350.00"}
              link={"/product"}
            />{" "}
            <DealCard
              image={"/heroSlider/1.jpg"}
              title={"The Crash Bad Instant Folding Twin Bed"}
              location={"United States"}
              store={"Amazon"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
              }
              price={"£350.00"}
              link={"/product"}
            />{" "}
            <DealCard
              image={"/heroSlider/1.jpg"}
              title={"The Crash Bad Instant Folding Twin Bed"}
              location={"United States"}
              store={"Amazon"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
              }
              price={"£350.00"}
              link={"/product"}
            />{" "}
            <DealCard
              image={"/heroSlider/1.jpg"}
              title={"The Crash Bad Instant Folding Twin Bed"}
              location={"United States"}
              store={"Amazon"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
              }
              price={"£350.00"}
              link={"/product"}
            />{" "}
            <DealCard
              image={"/heroSlider/1.jpg"}
              title={"The Crash Bad Instant Folding Twin Bed"}
              location={"United States"}
              store={"Amazon"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
              }
              price={"£350.00"}
              link={"/product"}
            />{" "}
            <DealCard
              image={"/heroSlider/1.jpg"}
              title={"The Crash Bad Instant Folding Twin Bed"}
              location={"United States"}
              store={"Amazon"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
              }
              price={"£350.00"}
              link={"/product"}
            />{" "}
            <DealCard
              image={"/heroSlider/1.jpg"}
              title={"The Crash Bad Instant Folding Twin Bed"}
              location={"United States"}
              store={"Amazon"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
              }
              price={"£350.00"}
              link={"/product"}
            />{" "}
            <DealCard
              image={"/heroSlider/1.jpg"}
              title={"The Crash Bad Instant Folding Twin Bed"}
              location={"United States"}
              store={"Amazon"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
              }
              price={"£350.00"}
              link={"/product"}
            />{" "}
            <DealCard
              image={"/heroSlider/1.jpg"}
              title={"The Crash Bad Instant Folding Twin Bed"}
              location={"United States"}
              store={"Amazon"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
              }
              price={"£350.00"}
              link={"/product"}
            />{" "}
            <DealCard
              image={"/heroSlider/1.jpg"}
              title={"The Crash Bad Instant Folding Twin Bed"}
              location={"United States"}
              store={"Amazon"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
              }
              price={"£350.00"}
              link={"/product"}
            />{" "}
            <DealCard
              image={"/heroSlider/1.jpg"}
              title={"The Crash Bad Instant Folding Twin Bed"}
              location={"United States"}
              store={"Amazon"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
              }
              price={"£350.00"}
              link={"/product"}
            /> */}
          </div>
          {/* <Pagination /> */}
        </div>
        {/* right */}
        <div className="w-full mb-8 items-start flex flex-col gap-6 md:w-1/3">
          {/* <Filter />
          <About />
          <Products />
          <Newsletter />
          <RecentReviews /> */}
        </div>
      </div>
    </>
  );
};

export default Page;
