import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import AuthFooter from './AuthFooter';

const SignInForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSignIn = () => {
    console.log({ email, password });
  };

  return (
    <KeyboardAwareScrollView enableOnAndroid={true} extraScrollHeight={30}>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.placeHolderColor}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.placeHolderColor}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.optionsRow}>
          <View style={styles.wrapper}>
            <CheckBox
              value={agree}
              onValueChange={() => setAgree(!agree)}
              tintColors={{ true: colors.primary, false: colors.border }}
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPasswordScreen')}
            >
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
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
    marginBottom: moderateScale(15),
    borderWidth: 1,
    borderColor: colors.border,
    fontFamily: fonts.poppinsRegular,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: moderateScale(10),
  },
  wrapper: {
    display: 'flex',
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
