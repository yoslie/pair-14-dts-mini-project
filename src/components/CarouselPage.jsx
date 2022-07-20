import React from "react";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";

const CarouselPage = () => {
  return (
    <>
      <CCarousel controls indicators>
        <CCarouselItem className="max-h-96">
          <CImage
            className="d-block w-100"
            src="https://image.tmdb.org/t/p/w500/393mh1AJ0GYWVD7Hsq5KkFaTAoT.jpg"
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
            src="https://image.tmdb.org/t/p/w500/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg"
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
            src="https://image.tmdb.org/t/p/w500/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg"
            alt="slide 3"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </>
  );
};

export default CarouselPage;
