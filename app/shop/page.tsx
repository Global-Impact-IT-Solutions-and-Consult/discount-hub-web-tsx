import Pagination from "@/widgets/pagination/Pagination";
import About from "../product/sidemenu/About";
import Filter from "../product/sidemenu/Filter";
import Newsletter from "../product/sidemenu/Newsletter";
import Products from "../product/sidemenu/Products";
import RecentReviews from "../product/sidemenu/RecentReviews";
import SectionTopBar from "@/widgets/sectionTopBar/SectionTopBar";
import ProductCard from "../product/ProductCard";
import DealCard from "@/components/latestDeals/DealCard";

const page = () => {
  return (
    <>
      <div className="w-full my-4 flex flex-col gap-4 md:flex-row 2xl:gap-10">
        {/* left */}
        <div className="w-full flex flex-col items-start gap-4 md:w-2/3">
          <div className="bg-white w-full rounded-lg flex items-center justify-between p-4   lg:text-lg font-normal shadow-lg">
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
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap 2xl:gap-10">
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
            />
          </div>
          <Pagination />
        </div>
        {/* right */}
        <div className="w-full mb-8 items-start flex flex-col gap-6 md:w-1/3">
          <Filter />
          <About />
          <Products />
          <Newsletter />
          <RecentReviews />
        </div>
      </div>
    </>
  );
};

export default page;
