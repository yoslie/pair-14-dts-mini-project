// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import styles from "./Swiper.module.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css';

const SwiperSmall = ({title}) => {
  return (
    <div className="p-4 bg-semiBlack-200">
      <div className="text-smokeWhite font-medium font-inter text-lg mb-3">
        {title}
      </div>
      <Swiper
        className={styles.swiper}
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={5}
      >
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w500/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w500/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w500/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg" alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w500/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg" alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w500/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg" alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image.tmdb.org/t/p/w500/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg" alt="Slide 6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSmall;
