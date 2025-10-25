import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const ResetPasswordForm = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('Reset link sent to:', email);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot your password?</Text>
      <Text style={styles.subTitle}>
        Enter your registered email address and we’ll send you a link to reset
        your password.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor={colors.placeHolderColor}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Back to Login</Text>
      </TouchableOpacity>
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
    fontSize: moderateScale(28),
    color: colors.primary,
    fontFamily: fonts.poppinsSemiBold,
    marginBottom: moderateScale(10),
    textAlign: 'center',
  },
  subTitle: {
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsRegular,
    color: colors.subText,
    textAlign: 'center',
    marginBottom: moderateScale(25),
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(17),
    color: colors.text,
    fontSize: moderateScale(14),
    marginBottom: moderateScale(15),
    borderWidth: 1,
    borderColor: colors.border,
    fontFamily: fonts.poppinsRegular,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    marginTop: moderateScale(5),
  },
  buttonText: {
    color: colors.background,
    fontSize: moderateScale(15),
    fontFamily: fonts.poppinsBold,
  },
  backText: {
    color: colors.secondary,
    textAlign: 'center',
    marginTop: moderateScale(20),
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsMedium,
  },
});

export default ResetPasswordForm;
