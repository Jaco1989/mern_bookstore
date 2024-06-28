import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  books: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    setBooks: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.books = payload;
    },
  },
});

export const { setBooks, setError, setLoading } = booksSlice.actions;
export default booksSlice.reducer;
