import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import axiosInstance from '../utils/axios/axiosInstance';

function MovieListPreview(props) {
  const {category} = props;
  const poster = 'https://image.tmdb.org/t/p/original';

  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    if (movieList.length) {
      setMovieList([]);
    }
    fetchMovies();
  }, [category]);

  async function fetchMovies() {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get(
        `movie/${category}?$language=en-US&page=1`,
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

  const renderFooter = () => {
    return isLoading && <ActivityIndicator size="large" color="#0000ff" />;
  };

  console.log('movieList', movieList);

  function onEndReached() {}

  return (
    <FlatList
      data={movieList}
      contentContainerStyle={style.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <View style={style.movieContainer}>
          <Image
            source={{uri: poster + item.poster_path}}
            style={style.previewImage}
          />
        </View>
      )}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
    />
  );
}

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
    backgroundColor: 'red',
  },
});

export default memo(MovieListPreview);
