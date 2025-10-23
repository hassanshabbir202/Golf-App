import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import SignUpForm from './../components/SignUpForm';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Golf!</Text>
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
    fontSize: moderateScale(26),
    color: '#333',
    fontFamily: 'Poppins-SemiBold',
  },
  subTitle: {
    marginBottom: moderateScale(40),
    fontFamily: 'Poppins-MediumItalic',
  },
});

export default SignUpScreen;
