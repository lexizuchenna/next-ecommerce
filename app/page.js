"use client";

// import { SnackbarProvider } from "notistack";
// import { SnackbarUtilsConfigurator } from "@utils/snackbar";

import BannerCarousel from "@components/BannerCarousel";
import Category from "@components/Category";
import TopSection from "@components/home/TopSection";
import BestOffers from "@components/home/best-offers/BestOffers";
import AllProducts from "@components/home/AllProducts";
import Loader from "@components/Loader";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home({}) {
  return (
    <main>
      <div className="wrapper">
        <BannerCarousel />
        <Category />
        <BestOffers />
        <TopSection />
        <AllProducts />
      </div>
    </main>
  );
}
