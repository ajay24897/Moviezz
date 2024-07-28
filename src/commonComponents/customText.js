import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export default function CustomText(props) {
  const fontFamily = style[props?.font ?? 'medium'];
  const fontSize = style[props?.size ?? 'm'];

  return (
    <Text {...props} style={[fontFamily, fontSize, props.textStyle]}>
      {props?.children}
    </Text>
  );
}

const style = StyleSheet.create({
  bold: {
    fontFamily: 'Roboto-Bold',
  },
  medium: {
    fontFamily: 'Roboto-Medium',
  },
  light: {
    fontFamily: 'Roboto-Light',
  },

  l: {
    fontSize: responsiveFontSize(5),
  },

  m: {
    fontSize: responsiveFontSize(3),
  },
  s: {
    fontSize: responsiveFontSize(2.5),
  },
  xs: {
    fontSize: responsiveFontSize(2),
  },
});
