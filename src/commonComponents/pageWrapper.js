import {StyleSheet, View} from 'react-native';
import React from 'react';
import Navbar from './navbar';
import COLOR from '../constants/color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export default function PageWrapper(props) {
  const {
    children,
    showNavbar = false,
    showBackButton,
    onBackClick,
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
      {showNavbar && (
        <Navbar showBackButton={showBackButton} onBackClick={onBackClick} />
      )}
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
