import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import PageWrapper from '../../../commonComponents/pageWrapper';
import {FlatList} from 'react-native-gesture-handler';
import MovieListPreview from '../../../commonComponents/movieListPreview';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import CustomText from '../../../commonComponents/customText';
import COLOR from '../../../constants/color';
import {CATEGORIES} from '../../../constants/value';

export default function ExploreMovie() {
  const [selectedCategory, setSelectedCategory] = useState('now_playing');

  function handleCategoryChange(categoryKey) {
    setSelectedCategory(categoryKey);
  }

  return (
    <PageWrapper addSafeAreaMargin showNavbar>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          renderItem={({item}) => {
            return (
              <View
                style={[
                  style.categorytTextContainer,
                  {
                    borderBottomWidth: item.key === selectedCategory ? 1 : 0,
                  },
                ]}>
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
              </View>
            );
          }}
          style={style.categoryListContainer}
        />
      </View>
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
