import {StyleSheet, View} from 'react-native';
import React from 'react';
import Navbar from './navbar';
import COLOR from '../constants/color';

export default function PageWrapper(props) {
  const {
    children,
    showNavbar = false,
    showBackButton,
    onBackClick,
    PageWrapperStyle,
  } = props;

  return (
    <View style={[style.navbarConainer, PageWrapperStyle]}>
      {showNavbar && (
        <Navbar showBackButton={showBackButton} onBackClick={onBackClick} />
      )}
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  navbarConainer: {flex: 1, backgroundColor: COLOR.SECONDARY[900]},
});
