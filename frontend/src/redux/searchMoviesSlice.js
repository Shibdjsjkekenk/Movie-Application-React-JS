import { createSlice } from "@reduxjs/toolkit";

const searchMoviesSlice = createSlice({
  name: "searchMovies",
  initialState: {
    searchResults: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    searchMoviesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    searchMoviesSuccess: (state, action) => {
      state.isLoading = false;
      state.searchResults = action.payload;
    },
    searchMoviesFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  searchMoviesStart,
  searchMoviesSuccess,
  searchMoviesFailure,
} = searchMoviesSlice.actions;

export default searchMoviesSlice.reducer;
