import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import SearchMovie from '../screens/homeScreen/searchMovie/searchMovie';
import ExploreMovie from '../screens/homeScreen/exploreMovie/exploreMovie';
import FavouriteMovie from '../screens/homeScreen/favouriteMovie/favouriteMovie';
import Icon from '../commonComponents/icon.commonComponent';

const Tab = createMaterialBottomTabNavigator();

const HomeScreenRoute = () => {
  const TabList = [
    {
      route: 'searchMovie',
      component: SearchMovie,
      iconName: 'MagnifyingGlassIcon',
    },
    {
      route: 'exploreMovie',
      component: ExploreMovie,
      iconName: 'FilmIcon',
    },
    {
      route: 'favouriteMovie',
      component: FavouriteMovie,
      iconName: 'HeartIcon',
    },
  ];

  return (
    <Tab.Navigator shifting={true} labeled={false}>
      {TabList.map((tab, index) => {
        return (
          <Tab.Screen
            key={index}
            name={tab.route}
            component={tab.component}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: () => <Icon name={tab.iconName} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default HomeScreenRoute;
