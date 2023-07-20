import DealCard from "@/components/latestDeals/DealCard";
import DealsPanelCard from "./DealsPanelCard";

const DealsPanel = () => {
  return (
    <>
      <div className="w-full flex flex-col flex-wrap justify-between gap-4 md:flex-row">
        {/* card */}
        <DealsPanelCard
          image={"/heroSlider/1.jpg"}
          title={"The Crash Bad Instant Folding Twin Bed"}
          location={"United States"}
          store={"Amazon"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
          }
          price={"£350.00"}
          link={"/product"}
        />
        {/* card */}
        <DealsPanelCard
          image={"/heroSlider/1.jpg"}
          title={"The Crash Bad Instant Folding Twin Bed"}
          location={"United States"}
          store={"Amazon"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum."
          }
          price={"£350.00"}
          link={"/product"}
        />
      </div>
    </>
  );
};

export default DealsPanel;
