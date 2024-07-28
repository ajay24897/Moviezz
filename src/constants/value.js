import {Dimensions} from 'react-native';

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
export const CATEGORIES = [
  {label: 'Now Playing', key: 'now_playing'},
  {label: 'Popular', key: 'popular'},
  {label: 'Top Rated', key: 'top_rated'},
  {label: 'Upcoming', key: 'upcoming'},
];

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} =
  Dimensions.get('window');
