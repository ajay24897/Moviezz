import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favoriteMovieList: {},
  section: {
    now_playing: {},
    popular: {},
    top_rated: {},
    upcomming: {},
  },
};

export const favoriteMovieSlice = createSlice({
  name: 'favoriteMovieSlice',
  initialState,
  reducers: {
    updateFavoriteMovie: (state, action) => {
      const {id, category} = action.payload;

      if (state.favoriteMovieList[id]) {
        delete state.favoriteMovieList[id];
        delete state.section[category][id];
        return;
      }
      state.favoriteMovieList[id] = action.payload;
      state.section[category][id] = '';
    },
  },
});

export const {updateFavoriteMovie} = favoriteMovieSlice.actions;

export default favoriteMovieSlice.reducer;
