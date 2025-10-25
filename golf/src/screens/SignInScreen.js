import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Header from '../components/Header';
import SignInForm from './../components/SignInForm';
import colors from '../constants/colors';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Login" navigation={navigation} />
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subTitle}>Please sign in to continue</Text>
      <SignInForm navigation={navigation} />
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
    fontSize: moderateScale(30),
    color: colors.primary,
    fontFamily: 'Poppins-Bold',
    marginTop: moderateScale(15),
    textAlign: 'center',
  },
  subTitle: {
    marginBottom: moderateScale(15),
    fontFamily: 'Poppins-Medium',
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
});

export default SignInScreen;
