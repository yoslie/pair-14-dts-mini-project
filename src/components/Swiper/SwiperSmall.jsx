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

const SwiperSmall = ({ title }) => {
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
          data.results.map((movieItem) => {
            // return <MovieItem key={movieItem.id} movieItem={movieItem} />;
            return (
              <SwiperSlide key={movieItem.id}>
                <img
                  src={`${urlBackdropPath}/${movieItem.backdrop_path}`}
                  alt={`${movieItem.original_title}`}
                />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </div>
  );
};

export default SwiperSmall;
