import React from 'react';
import * as SolidIcons from 'react-native-heroicons/solid';
import * as OutlineIcons from 'react-native-heroicons/outline';

export default function Icon({
  name,
  type = 'outline',
  color = null,
  fill = null,
  size = 20,
}) {
  let IconComponent;
  switch (type) {
    case 'solid':
      IconComponent = SolidIcons[name];
      break;
    case 'outline':
      IconComponent = OutlineIcons[name];
      break;
  }
  return <IconComponent color={color} fill={fill} size={size} />;
}
