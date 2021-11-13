import React from "react";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import Footer from "../Shared/Footer/Footer";
import HeaderNav from "../Shared/HeaderNav/HeaderNav";
import AboutUs from "./AboutUs/AboutUs";
import HomeProperty from "./HomeProperty/HomeProperty";
import OurProgress from "./OurProgress/OurProgress";
import ReviewHome from "./ReviewHome/ReviewHome";

const Home = () => {
  return (
    <div>
      <HeaderNav />
      <CarouselSlider />
      <OurProgress />
      <HomeProperty />
      <ReviewHome />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Home;
