import {
  View,
  Dimensions,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
const poster = 'https://image.tmdb.org/t/p/original';

export default function MovieDetails() {
  const route = useRoute();
  const {info} = route.params; // Destructure the parameters
  console.log(info);

  return (
    <View style={style.container}>
      <ImageBackground
        source={{uri: poster + info.poster_path}}
        tintColorIntensity={1}
        resizeMethod={'scale'}
        style={style.backgroundImage}>
        <View style={style.darkImageCover} />
        <Image
          source={{uri: poster + info.poster_path}}
          tintColorIntensity={1}
          colorFilter="grayscale"
          style={style.image}
          resizeMode={'cover'}
          sharedTransitionTag={info.id}
        />
      </ImageBackground>
    </View>
  );
}

const style = StyleSheet.create({
  container: {position: 'relative'},
  darkImageCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000',
    opacity: 0.85,
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    resizeMode: 'cover',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * 1.25,
  },
});
