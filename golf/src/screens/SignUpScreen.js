import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import SignUpForm from './../components/SignUpForm';
import Header from '../components/Header';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Create Account" navigation={navigation} />
      <Text style={styles.title}>Welcome to the FairwayOne</Text>
      <Text style={styles.subTitle}>Let's start by creating an account!</Text>
      <SignUpForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(25),
  },
  title: {
    fontSize: moderateScale(20),
    color: colors.primary,
    fontFamily: fonts.poppinsBold,
    marginTop: moderateScale(15),
  },
  subTitle: {
    marginBottom: moderateScale(20),
    fontFamily: fonts.poppinsMedium,
    fontSize: moderateScale(12),
  },
});

export default SignUpScreen;
