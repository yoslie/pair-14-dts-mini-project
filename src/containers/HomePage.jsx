import React from "react";

import CarouselPage from "../components/CarouselPage";

const HomePage = () => {
  // @todo: update homepage
  return (
    <>
      <CarouselPage />
      <div className="h-full w-full bg-semiBlack-200 text-white px-8 pb-6 pt-24">
        Halo, ini adalah halaman utama setelah login
      </div>
    </>
  );
};

export default HomePage;
