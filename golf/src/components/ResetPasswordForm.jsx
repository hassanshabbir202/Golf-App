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
      <View>
        <Text style={styles.label}>Enter email Adress:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={colors.placeHolderColor}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: moderateScale(5),
    paddingTop: moderateScale(30),
  },
  label: {
    fontFamily: fonts.poppinsMedium,
    marginBottom: moderateScale(5),
    marginTop: moderateScale(-10),
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(17),
    color: colors.text,
    fontSize: moderateScale(14),
    borderWidth: 1,
    borderColor: colors.border,
    fontFamily: fonts.poppinsRegular,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: moderateScale(30),
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(30),
    alignItems: 'center',
    width: '95%',
  },
  buttonText: {
    color: colors.background,
    fontSize: moderateScale(15),
    fontFamily: fonts.poppinsSemiBold,
  },
});

export default ResetPasswordForm;
