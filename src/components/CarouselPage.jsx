import React from "react";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";

import { useMoviesQuery } from "../services/movieAPI";

const urlBackdropPath = "https://image.tmdb.org/t/p/w500";

const CarouselPage = () => {
  const { data, error, isLoading } = useMoviesQuery();

  return (
    <>
      <CCarousel controls indicators>
        {error ? (
          <>Ada error disini</>
        ) : isLoading ? (
          <>Loading</>
        ) : (
          data.results.slice(0, 5).map((movieItem) => {
            // return <MovieItem key={movieItem.id} movieItem={movieItem} />;
            return (
              <CCarouselItem key={movieItem.id} className="max-h-96">
                <CImage
                  className="d-block w-100"
                  src={`${urlBackdropPath}/${movieItem.backdrop_path}`}
                  alt={`${movieItem.original_title}`}
                />
                <CCarouselCaption className="d-none d-md-block">
                  <h5>{movieItem.original_title}</h5>
                  <p>{movieItem.release_date}</p>
                </CCarouselCaption>
              </CCarouselItem>
            );
          })
        )}
      </CCarousel>
    </>
  );
};

export default CarouselPage;
