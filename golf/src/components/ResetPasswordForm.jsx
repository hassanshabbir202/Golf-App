import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const ResetPasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const renderPasswordInput = (
    placeholder,
    value,
    setValue,
    visible,
    setVisible,
  ) => (
    <View style={styles.passwordContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.placeHolderColor}
        secureTextEntry={!visible}
        value={value}
        onChangeText={setValue}
      />
      <TouchableOpacity
        onPress={() => setVisible(!visible)}
        style={styles.eyeIcon}
      >
        <Feather
          name={visible ? 'eye' : 'eye-off'}
          size={20}
          color={colors.subText}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderPasswordInput(
        'New Password',
        newPassword,
        setNewPassword,
        showNewPassword,
        setShowNewPassword,
      )}
      {renderPasswordInput(
        'Confirm Password',
        confirmPassword,
        setConfirmPassword,
        showConfirmPassword,
        setShowConfirmPassword,
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Reset Password</Text>
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: moderateScale(15),
    paddingRight: moderateScale(15),
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: moderateScale(14),
    fontFamily: fonts.poppinsRegular,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(17),
  },
  eyeIcon: {
    paddingHorizontal: moderateScale(5),
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
    width: '100%',
  },
  buttonText: {
    color: colors.background,
    fontSize: moderateScale(15),
    fontFamily: fonts.poppinsSemiBold,
  },
});

export default ResetPasswordForm;
