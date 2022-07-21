import React, { useEffect, useState } from "react";

import CarouselPage from "../components/CarouselPage";
import SwiperSmall from "../components/Swiper/SwiperSmall";
import SwiperTopTen from "../components/Swiper/SwiperTopTen";

import axios from "axios";

const HomePage = () => {
  const [ nowPlayingMovies, setNowPlayingMovies ] = useState([]);
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [ topMovies, setTopMovies ] = useState([]);

  useEffect(() => {  
    try {
      const fetchNowPlayingMovies = async () => {
        const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=982599a363d8d878561e682f56899bb0");
        setNowPlayingMovies(response.data.results);
      }
      const fetchPopularMovies = async () => {
        const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=982599a363d8d878561e682f56899bb0");
        setPopularMovies(response.data.results);
      }
      const fetchTopMovies = async () => {
        const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=982599a363d8d878561e682f56899bb0");
        setTopMovies(response.data.results);
      }

      fetchNowPlayingMovies();
      fetchPopularMovies();
      fetchTopMovies();
    } catch (error) {
      console.log('Error', error);
    }
  });


  return (
    <>
      <CarouselPage data={nowPlayingMovies} />
      <SwiperSmall title={"Popular"} data={popularMovies} />
      <SwiperTopTen title={"Top 10 Movies"} data={topMovies} />
    </>
  );
};

export default HomePage;
