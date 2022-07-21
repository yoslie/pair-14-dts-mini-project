import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiKey = "692c96d7a033ab16f5656de5da81ba23";

export const movieAPI = createApi({
  reducerPath: "movieAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),

  endpoints: (builder) => ({
    movies: builder.query({
      query: () => `/movie/popular?api_key=${apiKey}`,
    }),

    movieById: builder.query({
      query: (id) => ``,
    }),
  }),
});

export const { useMoviesQuery, useMovieByIdQuery } = movieAPI;
