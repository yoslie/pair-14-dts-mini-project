// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";

import styles from "./Swiper.module.css"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css';

const SwiperTopTen = ({title}) => {
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
          <div className="flex flex-row">
            <img
              className="h-52 w-20"
              src={process.env.PUBLIC_URL + "assets/images/rank-one.svg"}
              alt="Rank 1"
            />
            <img className="h-52 w-36" src="https://image.tmdb.org/t/p/w500/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg" alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row">
            <img
              className="h-52 w-20"
              src={process.env.PUBLIC_URL + "assets/images/rank-two.svg"}
              alt="Rank 1"
            />
            <img className="h-52 w-36" src="https://image.tmdb.org/t/p/w500/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg" alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row">
            <img
              className="h-52 w-20"
              src={process.env.PUBLIC_URL + "assets/images/rank-three.svg"}
              alt="Rank 1"
            />
            <img className="h-52 w-36" src="https://image.tmdb.org/t/p/w500/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg" alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row">
            <img
              className="h-52 w-20"
              src={process.env.PUBLIC_URL + "assets/images/rank-four.svg"}
              alt="Rank 1"
            />
            <img className="h-52 w-36" src="https://image.tmdb.org/t/p/w500/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg" alt="Slide 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row">
            <img
              className="h-52 w-20"
              src={process.env.PUBLIC_URL + "assets/images/rank-five.svg"}
              alt="Rank 1"
            />
            <img className="h-52 w-36" src="https://image.tmdb.org/t/p/w500/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg" alt="Slide 1" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperTopTen;
