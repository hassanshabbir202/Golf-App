import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const EmailVerification = ({ navigation }) => {
  const handleVerifyEmail = () => {
    navigation.navigate('ResetPasswordScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.verifyButton}
          onPress={handleVerifyEmail}
        >
          <Text style={styles.verifyText}>Verify Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <Text style={styles.backText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: moderateScale(40),
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    gap: moderateScale(12),
    marginVertical: moderateScale(20),
  },
  verifyButton: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(10),
    width: '100%',
    alignItems: 'center',
  },
  verifyText: {
    color: colors.background,
    fontFamily: fonts.poppinsMedium,
    fontSize: moderateScale(15),
  },
  backButton: {
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(10),
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  backText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: moderateScale(15),
  },
});

export default EmailVerification;
