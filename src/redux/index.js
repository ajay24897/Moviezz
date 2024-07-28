import {configureStore} from '@reduxjs/toolkit';
import favoriteMovieSlice from './favoriteMovieSlice';

const store = configureStore({
  reducer: {favoriteMovieSlice},
});

export default store;
