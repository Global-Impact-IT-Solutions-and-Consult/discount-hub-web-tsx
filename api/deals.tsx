// pages/deals.tsx

import DealCard from "@/components/latestDeals/DealCard";
import Pagination from "@/widgets/pagination/Pagination";
import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const data = ({ apiData }: any) => {
  return (
    <>
      <div className="px-4 pt-8 w-full flex flex-col items-center justify-start gap-8">
        {/* TOP PART */}
        <SectionTopBar
          title={"Latest Deals"}
          linkText={"CONTACT US"}
          link={"#"}
        />
        {/* BOTTOM PART (CARDS) */}
        <div className="w-full flex flex-col gap-2 items-start md:flex-row md:justify-between md:flex-wrap 2xl:justify-center 2xl:gap-16">
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
                  parentSiteLogo={item.parentSiteLogo}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <Pagination />
    </>
  );
};

export async function getStaticProps() {
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
            }
          }
        }
      }
    `,
  });

  const getResponse = response.data.products.nodes.map(
    (item: any) => item.products
  );

  return {
    props: {
      apiData: getResponse,
    },
  };
}

export default data;

// import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";

// const link = new HttpLink({
//     uri: "http://localhost/wp/graphql",
//   fetchOptions: {
//     credentials: "same-origin",
//   },
// });

// export const fetchServices = async () => {
//   const client = new ApolloClient({
//     link: link,
//     cache: new InMemoryCache(),
//   });

//   const response = await client.query({
//     query: gql`
//       query discountHub {
//         products {
//           nodes {
//             products {
//               location
//               price
//               productRating
//               store
//               summary
//               title
//             }
//           }
//         }
//       }
//     `,
//   });

//   console.log("🚀 ~ file: page.tsx:39 ~ fetchServices ~ response:", response);

//   const getResponse = response.data.footer.footers;
//   return getResponse;
// };
