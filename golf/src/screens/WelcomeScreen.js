import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
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

      {/* Main Container with space-between */}
      <View style={styles.mainContainer}>
        {/* Centered Text */}
        <View style={styles.centerContainer}>
          <Text style={styles.title}>Elevate Your Golf.{'\n'}Sign In Now.</Text>
        </View>

        {/* Bottom Buttons */}
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
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.rgbColor,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(40),
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: moderateScale(15),
  },
  bottomText: {
    color: colors.background,
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsMedium,
    marginRight: moderateScale(5),
  },
  signInText: {
    color: colors.background,
    fontFamily: fonts.poppinsMedium,
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
