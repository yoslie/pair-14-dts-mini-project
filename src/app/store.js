import { configureStore } from "@reduxjs/toolkit";

import { movieAPI } from "../services/movieAPI";

export const store = configureStore({
  reducer: {
    [movieAPI.reducerPath]: movieAPI.reducer,
  },

  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware().concat(movieAPI.middleware);
  // },
});
