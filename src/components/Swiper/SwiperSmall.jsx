// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import styles from "./Swiper.module.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css';

const SwiperSmall = ({title, data}) => {
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
        { data.map((item, index) => {
          return <SwiperSlide key={index}>
            <img src={"https://image.tmdb.org/t/p/w500/" + item.backdrop_path} alt={"Slide " + (index + 1)} />
          </SwiperSlide>
        })}
      </Swiper>
    </div>
  );
};

export default SwiperSmall;
