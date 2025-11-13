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
import ValidationMessage from './ValidationMessage';
import apiConfig from '../constants/apiConfig';

const SignUpForm = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('error');
  const [loading, setLoading] = useState(false);

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSignUp = async () => {
    const trimmedEmail = email.trim();

    if (!firstName.trim()) return showMessage('Enter your first name');
    if (!lastName.trim()) return showMessage('Enter your last name');
    if (!trimmedEmail) return showMessage('Enter your email');
    if (!validateEmail(trimmedEmail))
      return showMessage('Invalid email address');
    if (password.length === 0) return showMessage('Please enter your password');
    if (password.length < 8)
      return showMessage('Password must be at least 8 characters');
    if (!agree) return showMessage('Accept the Terms & Conditions');

    try {
      setLoading(true);
      const response = await fetch(apiConfig.SIGNUP, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: trimmedEmail,
          password,
          inviteCode: inviteCode.trim() || '',
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        return showMessage(data.message || 'Signup failed');
      }

      setType('success');
      setMessage('Registration successful!');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setInviteCode('');
      setAgree(false);

      setTimeout(() => {
        navigation.navigate('SignInScreen');
      }, 1200);
    } catch (error) {
      setLoading(false);
      console.error(error);
      showMessage('Network error. Please try again.');
    }
  };

  const showMessage = msg => {
    setMessage(msg);
    setType('error');
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
          placeholder="First Name"
          placeholderTextColor={colors.placeHolderColor}
          value={firstName}
          onChangeText={text => {
            setFirstName(text);
            setMessage('');
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor={colors.placeHolderColor}
          value={lastName}
          onChangeText={text => {
            setLastName(text);
            setMessage('');
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.placeHolderColor}
          keyboardType="email-address"
          value={email}
          onChangeText={text => {
            setEmail(text);
            setMessage('');
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.placeHolderColor}
          secureTextEntry
          value={password}
          onChangeText={text => {
            setPassword(text);
            setMessage('');
          }}
        />

        <TextInput
          style={styles.input}
          placeholder="Invite Code (Optional)"
          placeholderTextColor={colors.placeHolderColor}
          value={inviteCode}
          onChangeText={text => {
            setInviteCode(text);
            setMessage('');
          }}
        />

        <View style={styles.wrapper}>
          <CheckBox
            value={agree}
            onValueChange={() => setAgree(!agree)}
            tintColors={{ true: colors.primary, false: colors.border }}
          />
          <Text style={styles.termsAndCondtion}>
            I agree to the Terms & Conditions
          </Text>
        </View>

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.6 }]}
          onPress={!loading ? handleSignUp : null}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Please wait...' : 'Sign Up'}
          </Text>
        </TouchableOpacity>

        <AuthFooter
          text="Already have an account?"
          linkText="Login"
          onPress={() => navigation.navigate('SignInScreen')}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
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
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  termsAndCondtion: {
    color: colors.text,
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsRegular,
    marginTop: moderateScale(6),
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
    fontFamily: fonts.poppinsSemiBold,
  },
});

export default SignUpForm;
