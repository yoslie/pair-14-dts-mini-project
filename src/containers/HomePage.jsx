import React from "react";

import CarouselPage from "../components/CarouselPage";
import SwiperSmall from "../components/Swiper/SwiperSmall";
import SwiperTopTen from "../components/Swiper/SwiperTopTen";

const HomePage = () => {
  // @todo: update homepage
  return (
    <>
      <CarouselPage />
      <SwiperSmall title={"Popular"} />
      <SwiperSmall title={"Series"} />
      <SwiperSmall title={"Movies"} />
      <SwiperTopTen title={"Top 10 Indonesian Movies"} />
      <SwiperSmall title={"My List"} />
    </>
  );
};

export default HomePage;
