import React, {useState} from 'react';
import {StyleSheet} from 'react-native';

import PageWrapper from '../../../commonComponents/pageWrapper';
import {FlatList} from 'react-native-gesture-handler';
import MovieListPreview from '../../../commonComponents/movieListPreview';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import CustomText from '../../../commonComponents/customText';
import COLOR from '../../../constants/color';
import {CATEGORIES} from '../../../constants/value';
import Animated, {ZoomIn} from 'react-native-reanimated';

export default function ExploreMovie() {
  const [selectedCategory, setSelectedCategory] = useState('now_playing');

  function handleCategoryChange(categoryKey) {
    setSelectedCategory(categoryKey);
  }

  return (
    <PageWrapper addSafeAreaMargin showNavbar>
      <Animated.View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          renderItem={({item}, index) => {
            return (
              <Animated.View
                style={[
                  style.categorytTextContainer,
                  {
                    borderBottomWidth: item.key === selectedCategory ? 1 : 0,
                  },
                ]}
                entering={ZoomIn.delay(index * 200)}>
                <CustomText
                  size={'s'}
                  font={'medium'}
                  onPress={() => handleCategoryChange(item.key)}
                  textStyle={{
                    color:
                      item.key === selectedCategory
                        ? COLOR.SECONDARY[100]
                        : COLOR.SECONDARY[600],
                    paddingBottom: responsiveWidth(2.5),
                  }}>
                  {item.label}
                </CustomText>
              </Animated.View>
            );
          }}
          style={style.categoryListContainer}
        />
      </Animated.View>
      <MovieListPreview category={selectedCategory} />
    </PageWrapper>
  );
}

const style = StyleSheet.create({
  categoryListContainer: {
    marginBottom: responsiveWidth(2),
  },
  categorytTextContainer: {
    marginRight: responsiveWidth(3),
    borderBottomColor: COLOR.PRIMARY[600],
  },
});
