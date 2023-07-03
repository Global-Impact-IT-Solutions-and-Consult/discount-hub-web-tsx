import HeroSection from "@/components/heroSection/HeroSection";
import LatestCoupons from "@/components/latestCoupons/LatestCoupons";
import LatestDeals from "@/components/latestDeals/LatestDeals";
import LatestNews from "@/components/latestNews/LatestNews";
import Newsletter from "@/components/newsletter/Newsletter";
import PopularStores from "@/components/popularStores/PopularStores";

export default function Home() {
  return (
    <>
      <HeroSection />
      <LatestDeals />
      <LatestCoupons />
      <PopularStores />
      <LatestNews />
      <Newsletter />
    </>
  );
}
