import React from 'react';

import SearchMovie from '../screens/homeScreen/searchMovie/searchMovie';
import ExploreMovie from '../screens/homeScreen/exploreMovie/exploreMovie';
import FavouriteMovie from '../screens/homeScreen/favouriteMovie/favouriteMovie';
import Icon from '../commonComponents/icon';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import COLOR from '../constants/color';

const Tab = createBottomTabNavigator();

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

const HomeScreenRoute = () => {
  return (
    <Tab.Navigator
      shifting={true}
      labeled={false}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLOR.SECONDARY[900],
          borderTopWidth: 0,
          paddingTop: 10,
        },
      }}
      initialRouteName="exploreMovie">
      {TabList.map((tab, index) => {
        return (
          <Tab.Screen
            key={index}
            name={tab.route}
            component={tab.component}
            options={{
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Icon
                  name={tab.iconName}
                  color={focused ? COLOR.PRIMARY[700] : COLOR.SECONDARY[500]}
                  fill={focused ? COLOR.PRIMARY[700] : COLOR.SECONDARY[900]}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default HomeScreenRoute;
