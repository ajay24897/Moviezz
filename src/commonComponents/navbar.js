import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function Navbar(props) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{marginTop: insets.top}}>
      <Text>Moviezz</Text>
    </View>
  );
}
