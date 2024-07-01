import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks: (state, actions) => {
      state.books = actions.payload.map((book) => {
        return {
          _id: book._id,
          index: +1,
          title: book.title,
          author: book.author,
          publishYear: book.publishYear,
          createdAt: book.createdAt,
          updatedAt: book.updatedAt,
        };
      });
    },
    createBook: (state, action) => {
      state.books.push(action.payload);
    },
    getBook: (state, actions) => {
      state.books = actions.payload;
    },
  },
});

export const { getBooks, createBook } = bookSlice.actions;
export default bookSlice.reducer;
