import React, {memo, useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  ActivityIndicator,
  VirtualizedList,
  TouchableOpacity,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import axiosInstance from '../utils/axios/axiosInstance';
import COLOR from '../constants/color';
import CustomText from './customText';
import Icon from './icon';

const poster = 'https://image.tmdb.org/t/p/original';

function MovieListPreview(props) {
  const {category} = props;

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);

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
  const navigation = useNavigation();

  function onMovieClick() {
    navigation.navigate('movieDetails', {info: movie});
  }

  return (
    <TouchableOpacity style={style.movieContainer} onPress={onMovieClick}>
      <ImageBackground
        source={{uri: poster + movie.poster_path}}
        style={style.previewImage}>
        <Icon
          name={'StarIcon'}
          type={'solid'}
          fill={'yellow'}
          size={45}
          style={style.startIcon}
        />
        <CustomText
          style={style.rating}
          size={'xm'}
          font={'medium'}
          textStyle={{
            ...style.rating,
          }}>
          {movie?.vote_average.toFixed(1)}
        </CustomText>
      </ImageBackground>
      <View
        style={{
          marginHorizontal: responsiveWidth(3),
          marginVertical: responsiveWidth(2),
        }}>
        <CustomText
          numberOfLines={1}
          size={'s'}
          font={'medium'}
          textStyle={{
            color: COLOR.SECONDARY[300],
            marginBottom: responsiveWidth(1),
          }}>
          {movie?.title}
        </CustomText>
        <CustomText
          numberOfLines={1}
          size={'xs'}
          font={'light'}
          textStyle={{color: COLOR.SECONDARY[300]}}>
          {movie?.release_date}
        </CustomText>
      </View>
    </TouchableOpacity>
  );
});

const imageWidth = Dimensions.get('window').width * 0.45;

const style = StyleSheet.create({
  contentContainerStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  movieContainer: {
    display: 'flex',
    position: 'relative',
    width: imageWidth,
    marginBottom: responsiveWidth(4),
    backgroundColor: COLOR.SECONDARY[800],
    overflow: 'hidden',
    borderRadius: 10,
  },
  previewImage: {
    width: imageWidth,
    height: Dimensions.get('window').width * 0.65,
    flex: 1,
    resizeMode: 'stretch',
    backgroundColor: COLOR.SECONDARY[700],
  },
  startIcon: {position: 'absolute', top: 10, right: 10},
  rating: {
    position: 'absolute',
    top: 25,
    right: 23,
    color: COLOR.SECONDARY[800],
    marginBottom: responsiveWidth(1),
  },
});

export default memo(MovieListPreview);
