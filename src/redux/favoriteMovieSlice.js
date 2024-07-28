import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favoriteMovieList: {},
};

export const favoriteMovieSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateFavoriteMovie: (state, action) => {
      const {id} = action.payload;

      if (state.favoriteMovieList[id]) {
        delete state.favoriteMovieList[id];
        return;
      }
      state.favoriteMovieList[id] = action.payload;
    },
  },
});

export const {updateFavoriteMovie} = favoriteMovieSlice.actions;

export default favoriteMovieSlice.reducer;
