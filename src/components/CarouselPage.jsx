import React from "react";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";

const CarouselPage = ({ data }) => {
  return (
    <>
      <CCarousel controls indicators>
        { data.map((item, index) => {
          return <CCarouselItem className="max-h-96" key={index}>
            <CImage
              className="d-block w-100"
              src={"https://image.tmdb.org/t/p/w500/" + item.backdrop_path}
              alt={"Carousel " + (index + 1)}
            />
            <CCarouselCaption className="d-none d-md-block bg-semiBlack-200 bg-opacity-25">
              <p className="font-extrabold text-lg">{item.original_title}</p>
              <p>{item.overview}</p>
            </CCarouselCaption>
          </CCarouselItem>
        })}
      </CCarousel>
    </>
  );
};

export default CarouselPage;
