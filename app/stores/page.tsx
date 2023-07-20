import Newsletter from "@/components/newsletter/Newsletter";
import StoreCard from "@/components/popularStores/StoreCard";
import {
  BiLogoAirbnb,
  BiLogoDrupal,
  BiLogoShopify,
  BiLogoSnapchat,
  BiLogoSpotify,
  BiLogoTiktok,
  BiLogoTwitch,
} from "react-icons/bi";

const page = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 2xl:gap-10">
        <span className="font-light py-8 text-xl text-gray-900">
          VIEW DEALS BY STORES
        </span>
        <div className="flex justify-evenly gap-8 md:gap-2 lg:gap-4 flex-wrap">
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
        </div>
        <Newsletter />
      </div>
    </>
  );
};

export default page;
