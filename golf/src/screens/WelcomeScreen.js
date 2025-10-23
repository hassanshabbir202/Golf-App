import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import SignInWithGoogleButton from './../components/SignInWithGoogleButton';
import CreateAccountButton from './../components/CreateAccountButton';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/golf-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay} />

      <View style={styles.logoContainer}>
        <Image
          // source={require('../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Elevate Your Golf.{'\n'}Sign In Now.</Text>
      </View>

      <View style={styles.signInContainer}>
        <SignInWithGoogleButton />
        <CreateAccountButton />

        <Text style={styles.bottomText}>
          Already a member? <Text style={styles.signInText}>Sign in</Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: moderateScale(1),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(70),
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.83)',
  },
  logoContainer: {
    marginTop: moderateScale(40),
    alignItems: 'center',
  },
  logo: {
    width: moderateScale(150),
    height: moderateScale(60),
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: moderateScale(35),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signInContainer: {
    width: '85%',
    alignItems: 'center',
  },
  bottomText: {
    color: '#fff',
    fontSize: moderateScale(14),
  },
  signInText: {
    color: '#fff',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
