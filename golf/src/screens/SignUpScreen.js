import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import SignUpForm from './../components/SignUpForm';
import Header from '../components/Header';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Create Account" navigation={navigation} />
      <Text style={styles.title}>Welcome to the FairwayOne</Text>
      <Text style={styles.subTitle}>Let's start by creating an account!</Text>
      <SignUpForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(25),
  },
  title: {
    fontSize: moderateScale(20),
    color: '#060604a8',
    fontFamily: 'Poppins-SemiBold',
    marginTop:moderateScale(15)
  },
  subTitle: {
    marginBottom: moderateScale(20),
    fontFamily: 'Poppins-MediumItalic',
    fontSize: moderateScale(12),
  },
});

export default SignUpScreen;
