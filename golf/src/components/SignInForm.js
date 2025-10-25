import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const SignInForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    console.log({ email, password, rememberMe });
  };

  return (
    <View>
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
          <Pressable
            style={styles.rememberContainer}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkedBox]} />
            <Text style={styles.rememberText}>Remember Me</Text>
          </Pressable>

          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignUpScreen');
        }}
      >
        <Text style={styles.footerText}>
          Don't have an account? <Text style={styles.link}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
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
    marginBottom: moderateScale(15),
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: moderateScale(18),
    height: moderateScale(18),
    borderWidth: 1,
    borderColor: colors.placeHolderColor,
    borderRadius: moderateScale(4),
    marginRight: moderateScale(8),
  },
  checkedBox: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  rememberText: {
    color: colors.text,
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsRegular,
    marginTop: moderateScale(4),
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
    marginTop: moderateScale(10),
  },
  buttonText: {
    color: colors.background,
    fontSize: moderateScale(16),
    fontFamily: fonts.poppinsBold,
  },
  footerText: {
    color: colors.subText,
    textAlign: 'center',
    marginTop: moderateScale(25),
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsRegular,
  },
  link: {
    color: colors.secondary,
    fontFamily: fonts.poppinsMedium,
  },
});

export default SignInForm;
