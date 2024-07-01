import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookslice";

export const store = configureStore({
  reducer: {
    books: bookSlice,
  },
});
