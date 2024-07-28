import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  VirtualizedList,
} from 'react-native';

import axiosInstance from '../utils/axios/axiosInstance';
import COLOR from '../constants/color';

const poster = 'https://image.tmdb.org/t/p/original';

function MovieListPreview(props) {
  const {category} = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
    setMovieList([]);
    fetchMovies();
  }, [category]);

  async function fetchMovies(page = 1) {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(
        `movie/${category}?$language=en-US&page=${page}`,
      );
      setMovieList(prev => {
        return [...prev, ...response.data.results];
      });
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  function onEndReached() {
    setCurrentPage(prev => prev + 1);
    fetchMovies(currentPage + 1);
  }

  const getItem = (data, index) => data[index];
  const getItemCount = data => data.length;

  return (
    <>
      <VirtualizedList
        data={movieList}
        contentContainerStyle={style.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MoviePreview movie={item} />}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        getItemCount={getItemCount}
        getItem={getItem}
        initialNumToRender={20}
      />
      {isLoading && (
        <ActivityIndicator size="large" color={COLOR.PRIMARY[700]} />
      )}
    </>
  );
}

const MoviePreview = memo(({movie}) => {
  return (
    <View style={style.movieContainer}>
      <Image
        source={{uri: poster + movie.poster_path}}
        style={style.previewImage}
      />
    </View>
  );
});

const style = StyleSheet.create({
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  movieContainer: {
    display: 'flex',
  },
  previewImage: {
    width: Dimensions.get('window').width * 0.45,
    height: Dimensions.get('window').width * 0.65,
    flex: 1,
    resizeMode: 'stretch',
    borderRadius: 5,
    backgroundColor: COLOR.SECONDARY[700],
  },
});

export default memo(MovieListPreview);
