import {
  View,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';

import COLOR from '../../constants/color';
import CustomText from '../../commonComponents/customText';
import Icon from '../../commonComponents/icon';
import {updateFavoriteMovie} from '../../redux/favoriteMovieSlice';
const poster = 'https://image.tmdb.org/t/p/original';

export default function MovieDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {favoriteMovieList} = useSelector(state => state.favoriteMovieSlice);
  const {info} = route.params;

  function onBackPress() {
    navigation.goBack();
  }

  function handleFavoriteMovie() {
    dispatch(updateFavoriteMovie(info));
  }

  return (
    <View style={style.container}>
      <ImageBackground
        source={{uri: poster + info.poster_path}}
        tintColorIntensity={1}
        resizeMethod={'scale'}
        style={style.backgroundImage}>
        <View style={style.darkImageCover} />
        <TouchableOpacity style={style.backButton} onPress={onBackPress}>
          <Icon name={'ArrowLeftIcon'} type={'outline'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[style.backButton, style.heartButton]}
          onPress={handleFavoriteMovie}>
          <Icon
            name={'HeartIcon'}
            type={'outline'}
            color={COLOR.PRIMARY[700]}
            fill={
              favoriteMovieList[info.id]
                ? COLOR.PRIMARY[700]
                : COLOR.SECONDARY[100]
            }
          />
        </TouchableOpacity>
        <ScrollView>
          <Image
            source={{uri: poster + info.poster_path}}
            tintColorIntensity={1}
            colorFilter="grayscale"
            style={style.image}
            resizeMode={'cover'}
            sharedTransitionTag={info.id}
          />
          <View style={style.detailsContainer}>
            <CustomText size={'l'} font="bold" textStyle={style.title}>
              {info.title}
            </CustomText>

            <CustomText
              size={'xs'}
              font="light"
              textStyle={{
                color: COLOR.SECONDARY[300],
                marginVertical: responsiveWidth(4),
              }}>
              {info?.overview}
            </CustomText>

            <View style={style.releaseDateInfo}>
              <View style={style.flexSpaceBetween}>
                <CustomText {...commonFont}>Release date</CustomText>
                <CustomText {...commonFont}>{info.release_date}</CustomText>
              </View>
              <View style={style.flexSpaceBetween}>
                <CustomText {...commonFont}>Rating</CustomText>
                <CustomText {...commonFont}>
                  {info.vote_average.toFixed(1)} / 10
                </CustomText>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const commonFont = {
  size: 'xs',
  font: 'light',
  textStyle: {color: '#fff'},
};

const style = StyleSheet.create({
  container: {position: 'relative'},
  detailsContainer: {display: 'flex', marginHorizontal: responsiveWidth(4)},
  darkImageCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000',
    opacity: 0.85,
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 1.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  releaseDateInfo: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLOR.SECONDARY[800],
    padding: responsiveWidth(4),
    borderRadius: 20,
    marginBottom: responsiveWidth(4),
    borderTopLeftRadius: 20,
  },
  flexSpaceBetween: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveWidth(2),
  },
  title: {
    color: COLOR.SECONDARY[300],
    fontSize: responsiveFontSize(4),
    alignSelf: 'center',
    textAlign: 'center',
    marginHorizontal: responsiveWidth(4),
    marginTop: responsiveWidth(4),
  },
  backButton: {
    padding: responsiveWidth(2),
    backgroundColor: COLOR.SECONDARY[100],
    position: 'absolute',
    top: responsiveWidth(15),
    left: 20,
    borderRadius: responsiveWidth(15),
    zIndex: 10,
  },
  heartButton: {
    right: 20,
    left: null,
  },
});
