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

const SignUpForm = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [agree, setAgree] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('error');

  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignUp = () => {
    const trimmedEmail = email.trim();

    if (!firstName.trim()) {
      setMessage('Enter your first name');
      setType('error');
      return;
    }

    if (!lastName.trim()) {
      setMessage('Enter your last name');
      setType('error');
      return;
    }

    if (!trimmedEmail) {
      setMessage('Enter your email');
      setType('error');
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setMessage('Invalid email address');
      setType('error');
      return;
    }

    if (password.length == 0) {
      setMessage('Please enter your password');
      setType('error');
      return;
    }

    if (password.length < 8) {
      setMessage('Password at least 8 characters');
      setType('error');
      return;
    }

    if (!agree) {
      setMessage('Accept the Terms & Conditions');
      setType('error');
      return;
    }

    // Success
    setType('success');
    setMessage('Registration successfully!');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setInviteCode('');
    setAgree(false);

    setTimeout(() => {
      navigation.navigate('SignInScreen');
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
          placeholder="Invite Code"
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

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
