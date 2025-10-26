import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import SignInWithGoogleButton from '../components/SignInWithGoogleButton';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import CreateAccountButton from './../components/CreateAccountButton';

const WelcomeScreen = ({ navigation }) => {
  const continueAsGuest = () => {
    navigation.navigate('MainTabs');
  };

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
        <SignInWithGoogleButton navigation={navigation} />
        <CreateAccountButton navigation={navigation} />

        <View style={styles.continueAsGuestContainer}>
          <Text style={styles.bottomText}> Want to explore first? </Text>

          <TouchableOpacity onPress={continueAsGuest}>
            <Text style={styles.signInText}>Continue as Guest</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: colors.rgbColor,
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
    color: colors.background,
    fontSize: moderateScale(34),
    fontFamily: fonts.poppinsBold,
    textAlign: 'center',
  },
  signInContainer: {
    width: '85%',
    alignItems: 'center',
  },
  continueAsGuestContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomText: {
    color: colors.background,
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsMedium,
  },
  signInText: {
    color: colors.background,
    fontFamily: fonts.poppinsMedium,
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
