import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <ImageBackground
      source={require('./images/background.png')}
      style={styles.backgroundImage}
      resizeMode="contain"
    >
      <Image
        source={require('./images/logo.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </ImageBackground>
    <Text style={styles.text}>Crypto Converter</Text>
  </View>
);

export default Logo;
