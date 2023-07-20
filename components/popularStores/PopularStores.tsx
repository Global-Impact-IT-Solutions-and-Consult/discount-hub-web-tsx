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

const PopularStores = () => {
  return (
    <>
      <div className="py-8 w-full flex flex-col items-center justify-start gap-8">
        <SectionTopBar
          title={"Popular Stores"}
          linkText={"VIEW ALL"}
          link={"/stores"}
        />
        <div className="w-full flex gap-4 overflow-x-scroll scrolling-auto items-center justify-start 2xl:gap-8">
          <StoreCard
            image={<BiLogoSpotify size={60} />}
            title={"Callaway Golf"}
          />
          <StoreCard
            image={<BiLogoSnapchat size={60} />}
            title={"Callaway Golf"}
          />
          <StoreCard
            image={<BiLogoAirbnb size={60} />}
            title={"Callaway Golf"}
          />
          <StoreCard
            image={<BiLogoDrupal size={60} />}
            title={"Callaway Golf"}
          />
          <StoreCard
            image={<BiLogoTiktok size={60} />}
            title={"Callaway Golf"}
          />
          <StoreCard
            image={<BiLogoShopify size={60} />}
            title={"Callaway Golf"}
          />
          <StoreCard
            image={<BiLogoTwitch size={60} />}
            title={"Callaway Golf"}
          />
        </div>
      </div>
    </>
  );
};

export default PopularStores;
