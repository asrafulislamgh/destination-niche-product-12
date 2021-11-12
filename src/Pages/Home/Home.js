import React from "react";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import HomeProperty from "./HomeProperty/HomeProperty";
import ReviewHome from "./ReviewHome/ReviewHome";

const Home = () => {
  return (
    <div>
      <CarouselSlider />
      <HomeProperty />
      <ReviewHome />
    </div>
  );
};

export default Home;
