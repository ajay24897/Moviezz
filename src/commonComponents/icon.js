import React from 'react';
import * as SolidIcons from 'react-native-heroicons/solid';
import * as OutlineIcons from 'react-native-heroicons/outline';

import COLOR from '../constants/color';

export default function Icon(props) {
  const {
    name,
    type = 'outline',
    color = COLOR.SECONDARY[900],
    fill = null,
    size = 30,
    style = {position: 'relative'},
  } = props;
  let IconComponent;
  switch (type) {
    case 'solid':
      IconComponent = SolidIcons[name];
      break;
    case 'outline':
      IconComponent = OutlineIcons[name];
      break;
  }

  return (
    <IconComponent color={color} fill={fill} size={size} style={style}>
      {props?.children}
    </IconComponent>
  );
}
