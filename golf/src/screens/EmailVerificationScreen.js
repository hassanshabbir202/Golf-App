import { Image, StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import EmailVerification from '../components/EmailVerification';
import emailLogo from '../assets/email.png';
import Header from '../components/Header';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const EmailVerificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Reset Password" navigation={navigation} />
      <View style={styles.emailInfoContainer}>
        <Image
          source={emailLogo}
          style={styles.imgStyle}
          resizeMode="contain"
        />
        <Text style={styles.title}>Check Your Email</Text>
        <Text style={styles.subTitle}>
          We’ve sent a password reset link to your email. Please check your
          inbox and follow the instructions.
        </Text>
      </View>
      <EmailVerification navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: moderateScale(25),
  },
  emailInfoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgStyle: {
    height: moderateScale(90),
    width: moderateScale(100),
    marginTop: '40%',
  },
  title: {
    fontSize: moderateScale(28),
    color: colors.primary,
    fontFamily: fonts.poppinsSemiBold,
    marginBottom: moderateScale(12),
    marginTop: moderateScale(10),
    textAlign: 'center',
  },
  subTitle: {
    marginBottom: moderateScale(15),
    fontFamily: fonts.poppinsMediumItalic,
    fontSize: moderateScale(13),
    textAlign: 'center',
    marginTop: moderateScale(-15),
    color: colors.subText,
    lineHeight: moderateScale(20),
  },
});

export default EmailVerificationScreen;
