

import BannerCarousel from "@components/BannerCarousel";
import TopSection from "@components/home/TopSection";
import BestOffers from "@components/home/best-offers/BestOffers";
import TopStample from "@components/home/TopStample";

export default function Home({ children }) {
  return (
    <main>
      <div className="wrapper">
        <BannerCarousel />
        <TopSection />
        <BestOffers />
        <TopStample />
      </div>
    </main>
  );
}
