import React from "react";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import FeaturesProperty from "./FeaturesProperty/FreaturesProperty";
import HomeProperty from "./HomeProperty/HomeProperty";
import ReviewHome from "./ReviewHome/ReviewHome";

const Home = () => {
  return (
    <div>
      <CarouselSlider />
      <HomeProperty />
      <ReviewHome />
      <FeaturesProperty />
    </div>
  );
};

export default Home;
