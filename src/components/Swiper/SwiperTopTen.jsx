// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import styles from "./Swiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";

import { useMoviesQuery } from "../../services/movieAPI";

const urlBackdropPath = "https://image.tmdb.org/t/p/w500";

const SwiperTopTen = ({ title }) => {
  const { data, error, isLoading } = useMoviesQuery();
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
        {error ? (
          <>Ada error disini</>
        ) : isLoading ? (
          <>Loading</>
        ) : (
          data.results.slice(0, 5).map((movieItem, index) => {
            return (
              <SwiperSlide key={movieItem.id}>
                <div className="flex flex-row">
                  <img
                    className="h-52 w-20"
                    src={process.env.PUBLIC_URL + "assets/images/rank-one.svg"}
                    alt={`Rank ${index}`}
                  />
                  <img
                    className="h-52 w-36"
                    src={`${urlBackdropPath}/${movieItem.poster_path}`}
                    alt={`${movieItem.original_title}`}
                  />
                </div>
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </div>
  );
};

export default SwiperTopTen;
