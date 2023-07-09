import DealCard from "@/components/latestDeals/DealCard";

const RelatedProducts = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 mb-8">
        <span className="font-light text-3xl text-gray-800 text-left md:text-center lg:text-left">
          Related Products
        </span>
        <div className="w-full flex flex-col items-center justify-start gap-6 lg:flex-row lg:flex-wrap ">
          {/* card */}
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
          />
          {/* card */}
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
          />
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
