import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./slice/bookSlice";

export const store = configureStore({
  reducer: booksSlice,
});
