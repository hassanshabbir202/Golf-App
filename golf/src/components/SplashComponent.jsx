import React from 'react';
import { Image, View } from 'react-native';
import appLogo from '../assets/app-logo.png';
import styles from '../styles/SplashComponentStyles';

const SplashComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={appLogo} style={styles.appLogo} />
    </View>
  );
};

export default SplashComponent;