import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import PageWrapper from '../../../commonComponents/pageWrapper';
import {useSelector} from 'react-redux';
import {IMAGE_BASE_URL} from '../../../constants/value';
import CustomText from '../../../commonComponents/customText';
import {capitalizeFirstLetterOfEachWord} from '../../../utils/function/function';
import COLOR from '../../../constants/color';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Icon from '../../../commonComponents/icon';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

export default function FavouriteMovie() {
  const {favoriteMovieList, section} = useSelector(
    state => state.favoriteMovieSlice,
  );

  if (Object.keys(favoriteMovieList).length === 0) {
    return (
      <PageWrapper addSafeAreaMargin showNavbar>
        <View style={style.emptyComponentContainer}>
          <Icon
            name="FilmIcon"
            type="outline"
            size={60}
            color={COLOR.PRIMARY[700]}
          />
          <CustomText
            size={'s'}
            textStyle={style.emptyListText}
            entering={FadeInDown.duration(500)}
            exiting={FadeInUp.duration(200)}>
            Your list of favorite movies is empty.
          </CustomText>
        </View>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper addSafeAreaMargin showNavbar>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.entries(section).map(sectionItem => {
          return (
            Object.keys(sectionItem[1])?.length > 0 && (
              <View style={style.section}>
                <CustomText
                  textStyle={{
                    color: COLOR.SECONDARY[400],
                    marginBottom: responsiveWidth(3),
                  }}>
                  {capitalizeFirstLetterOfEachWord(
                    sectionItem[0].replace('_', ' '),
                  )}
                </CustomText>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={Object.keys(sectionItem[1])}
                  renderItem={({item}) => <HorizonatalList id={item} />}
                />
              </View>
            )
          );
        })}
      </ScrollView>
    </PageWrapper>
  );
}

function HorizonatalList({id}) {
  const {favoriteMovieList} = useSelector(state => state.favoriteMovieSlice);
  const navigation = useNavigation();

  function onMovieClick() {
    navigation.navigate('movieDetails', {info: favoriteMovieList[id]});
  }
  return (
    <TouchableOpacity
      style={style.horizontalMoviePreview}
      onPress={onMovieClick}>
      <Animated.Image
        style={style.imageStyle}
        resizeMode={'cover'}
        source={{uri: IMAGE_BASE_URL + favoriteMovieList[id].poster_path}}
        sharedTransitionTag={id.toString()}
      />
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  horizontalMoviePreview: {
    borderRadius: 10,
    overflow: 'hidden',
    width: 150,
    height: 200,
    marginRight: responsiveWidth(4),
  },
  imageStyle: {width: 150, height: 200},
  emptyListText: {
    color: COLOR.SECONDARY[100],
    textAlign: 'center',
    margin: responsiveWidth(3),
  },
  emptyComponentContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {marginBottom: responsiveWidth(4)},
});
