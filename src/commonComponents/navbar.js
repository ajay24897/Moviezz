import React from 'react';
import CustomText from './customText';
import COLOR from '../constants/color';
import {StyleSheet} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export default function Navbar() {
  return (
    <CustomText type={'bold'} size={'m'} textStyle={style.navbarTex}>
      Moviezz
    </CustomText>
  );
}

const style = StyleSheet.create({
  navbarTex: {
    color: COLOR.PRIMARY[700],
    alignSelf: 'center',
    letterSpacing: 2,
    marginBottom: responsiveWidth(2),
  },
});
