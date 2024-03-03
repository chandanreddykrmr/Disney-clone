import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: null,
  newDisney: null,
  original: null,
  trending: null,
};

// one we get the data from the API, we will dispatch an action to update the state
export const movieSlice = createSlice({
  name: "movies",
  initialState,
  // reducers are functions that take the current state and an action and return a new state
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommended;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

// actions are payloads of information that send data from your application to your store
export const { setMovies } = movieSlice.actions;

// selectors are functions that take the Redux state as an argument and return some data to pass to the component
export const selectRecommended = (state) => state.movie.recommended;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginals = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;
export const selectMovies = (state) => state.movie;

export default movieSlice.reducer;
