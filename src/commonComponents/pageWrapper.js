import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {responsiveWidth} from 'react-native-responsive-dimensions';

import Navbar from './navbar';
import COLOR from '../constants/color';

export default function PageWrapper(props) {
  const {
    children,
    showNavbar = false,
    PageWrapperStyle,
    addSafeAreaMargin,
  } = props;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        style.pageWrapperConainer,
        addSafeAreaMargin && {paddingTop: insets.top},
        PageWrapperStyle,
      ]}>
      {showNavbar && <Navbar />}
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  pageWrapperConainer: {
    flex: 1,
    backgroundColor: COLOR.SECONDARY[900],
    paddingHorizontal: responsiveWidth(3),
  },
});
