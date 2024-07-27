import React, {useState} from 'react';
import {Text} from 'react-native';

import PageWrapper from '../../../commonComponents/pageWrapper';
import {FlatList} from 'react-native-gesture-handler';
import MovieListPreview from '../../../commonComponents/movieListPreview';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export default function ExploreMovie() {
  const [selectedCategory, setSelectedCategory] = useState('now_playing');

  const categories = [
    {label: 'Now Playing', key: 'now_playing'},
    {label: 'Popular', key: 'popular'},
    {label: 'Top Rated', key: 'top_rated'},
    {label: 'Upcoming', key: 'upcoming'},
  ];

  function handleCategoryChange(categoryKey) {
    setSelectedCategory(categoryKey);
  }

  return (
    <PageWrapper addSafeAreaMargin>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}) => {
          return (
            <Text
              onPress={() => handleCategoryChange(item.key)}
              style={{
                color: item.key === selectedCategory ? 'red' : '#fff',
                marginRight: responsiveWidth(2),
              }}>
              {item.label}
            </Text>
          );
        }}
      />
      <MovieListPreview category={selectedCategory} />
    </PageWrapper>
  );
}
