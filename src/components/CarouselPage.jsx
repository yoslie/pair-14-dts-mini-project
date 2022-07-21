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
        {/* <CCarouselItem className="max-h-96">
          <CImage
            className="d-block w-100"
            src={`${urlBackdropPath}/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg`}
            alt="slide 1"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem className="max-h-96">
          <CImage
            className="d-block w-100"
            src={`${urlBackdropPath}/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg`}
            alt="slide 2"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem className="max-h-96">
          <CImage
            className="d-block w-100"
            src={`${urlBackdropPath}/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg`}
            alt="slide 3"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem> */}
      </CCarousel>
    </>
  );
};

export default CarouselPage;
