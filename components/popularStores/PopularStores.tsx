"use client";

import { useEffect, useState } from "react";

import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import StoreCard from "./StoreCard";
import {
  BiLogoAirbnb,
  BiLogoDrupal,
  BiLogoShopify,
  BiLogoSnapchat,
  BiLogoSpotify,
  BiLogoTiktok,
  BiLogoTwitch,
} from "react-icons/bi";

// Spinner
import Spinner from "@/widgets/spinner/Spinner";

const PopularStores = () => {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState([]);

  return (
    <>
      <div className="py-8 w-full flex flex-col items-center justify-start gap-8">
        <SectionTopBar
          title={"Popular Stores"}
          linkText={"VIEW ALL"}
          link={"/stores"}
        />
        <div className="w-full flex gap-4 overflow-x-scroll scrolling-auto items-center justify-start 2xl:gap-8">
          {/* {loading ? <Spinner /> : <></>} */}
          {/* {loading ? (
            <Spinner />
          ) : (
            <>
              {apiData.length > 0 && (
                <>
                  {apiData.map((item: any, i) => (
                    <StoreCard
                      key={i}
                      image={<BiLogoDrupal size={60} />}
                      title={item.stores.title}
                      link={item.databaseId}
                    />
                  ))}
                </>
              )}
            </>
          )} */}

          <StoreCard
            image={<BiLogoSpotify size={60} />}
            title={"Callaway Golf"}
            link={"/stores/one"}
          />
          <StoreCard
            image={<BiLogoSnapchat size={60} />}
            title={"Callaway Golf"}
            link={"/stores/one"}
          />
          <StoreCard
            image={<BiLogoAirbnb size={60} />}
            title={"Callaway Golf"}
            link={"/stores/one"}
          />
          <StoreCard
            image={<BiLogoDrupal size={60} />}
            title={"Callaway Golf"}
            link={"/stores/one"}
          />
          <StoreCard
            image={<BiLogoTiktok size={60} />}
            title={"Callaway Golf"}
            link={"/stores/one"}
          />
          <StoreCard
            image={<BiLogoShopify size={60} />}
            title={"Callaway Golf"}
            link={"/stores/one"}
          />
          <StoreCard
            image={<BiLogoTwitch size={60} />}
            title={"Callaway Golf"}
            link={"/stores/one"}
          />
        </div>
      </div>
    </>
  );
};

export default PopularStores;
