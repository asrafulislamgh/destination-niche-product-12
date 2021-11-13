import React from "react";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import Footer from "../Shared/Footer/Footer";
import HeaderNav from "../Shared/HeaderNav/HeaderNav";
import HomeProperty from "./HomeProperty/HomeProperty";
import ReviewHome from "./ReviewHome/ReviewHome";

const Home = () => {
  return (
    <div>
      <HeaderNav />
      <CarouselSlider />
      <HomeProperty />
      <ReviewHome />
      <Footer />
    </div>
  );
};

export default Home;
