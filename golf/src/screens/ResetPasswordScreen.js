import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Header from '../components/Header';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import ResetPasswordForm from './../components/ResetPasswordForm';

const ResetPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Reset Password" navigation={navigation} />
      <Text style={styles.title}>Forgot your password?</Text>
      <Text style={styles.subTitle}>
        Enter your email and we’ll send instructions to reset your password.
      </Text>
      <ResetPasswordForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: moderateScale(25),
  },
  title: {
    fontSize: moderateScale(23),
    color: colors.primary,
    fontFamily: fonts.poppinsBold,
    marginBottom: moderateScale(12),
    textAlign: 'center',
    marginTop: '40%',
  },
  subTitle: {
    marginBottom: moderateScale(15),
    fontFamily: fonts.poppinsMedium,
    fontSize: moderateScale(14.5),
    textAlign: 'center',
    marginTop: moderateScale(-5),
    color: colors.subText,
    lineHeight: moderateScale(20),
  },
});

export default ResetPasswordScreen;
