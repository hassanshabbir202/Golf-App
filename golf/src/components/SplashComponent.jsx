import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import appLogo from '../assets/app-logo.png';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';

const SplashComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={appLogo} style={styles.appLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogo: {
    height: moderateScale(300),
    width: moderateScale(300),
  },
});

export default SplashComponent;
