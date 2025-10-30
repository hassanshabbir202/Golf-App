import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import AuthFooter from './AuthFooter';
import ValidationMessage from './ValidationMessage';

const SignInForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('error');

  const handleSignIn = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail || !trimmedPassword) {
      setMessage('Please enter both email and password');
      setType('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setMessage('Invalid email address');
      setType('error');
      return;
    }

    if (trimmedPassword.length < 8) {
      setMessage('Password at least 8 characters');
      setType('error');
      return;
    }

    if (!agree) {
      setMessage('Accept Remember Me to continue');
      setType('error');
      return;
    }

    setType('success');
    setMessage('Login successful');
    setEmail('');
    setPassword('');

    setTimeout(() => {
      navigation.navigate('MainTabs');
    }, 1200);
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} extraScrollHeight={30}>
      <View>
        <ValidationMessage
          message={message}
          type={type}
          onHide={() => setMessage('')}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.placeHolderColor}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1, marginBottom: 0, borderWidth: 0 }]}
            placeholder="Password"
            placeholderTextColor={colors.placeHolderColor}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}
          >
            <Feather
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color={colors.subText}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.optionsRow}>
          <View style={styles.wrapper}>
            <CheckBox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              tintColors={{ true: colors.primary, false: colors.border }}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPasswordScreen')}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <AuthFooter
          text="Don’t have an account?"
          linkText="SignUp"
          onPress={() => navigation.navigate('SignUpScreen')}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(17),
    color: colors.text,
    fontSize: moderateScale(14),
    marginBottom: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.border,
    fontFamily: fonts.poppinsRegular,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: moderateScale(10),
    paddingRight: moderateScale(15),
  },
  eyeIcon: {
    paddingHorizontal: moderateScale(5),
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(10),
  },
  wrapper: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  rememberText: {
    color: colors.text,
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsRegular,
    marginTop: moderateScale(6),
  },
  forgotText: {
    color: colors.subText,
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsMedium,
    marginTop: moderateScale(4),
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    marginTop: moderateScale(2),
  },
  buttonText: {
    color: colors.background,
    fontSize: moderateScale(16),
    fontFamily: fonts.poppinsSemiBold,
  },
});

export default SignInForm;
