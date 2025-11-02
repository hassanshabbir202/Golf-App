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
import ValidationMessage from './ValidationMessage';

const ForgotPasswordForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('error');
  const [loading, setLoading] = useState(false);

  const handleSendResetLink = () => {
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setMessage('Enter your email');
      setType('error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setMessage('Invalid email address');
      setType('error');
      return;
    }

    setType('success');
    setMessage('Reset link sent successfully');
    setEmail('');

    setTimeout(() => {
      navigation.navigate('EmailVerificationScreen');
    }, 1200);
  };

  return (
    <View style={styles.container}>
      <ValidationMessage
        message={message}
        type={type}
        onHide={() => setMessage('')}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor={colors.placeHolderColor}
        keyboardType="email-address"
        value={email}
        onChangeText={text => {
          setEmail(text);
          setMessage('');
        }}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.6 }]}
          onPress={!loading ? handleSendResetLink : null}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Please wait...' : 'Send Reset Link'}
          </Text>
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
    width: '100%',
  },
  buttonText: {
    color: colors.background,
    fontSize: moderateScale(15),
    fontFamily: fonts.poppinsSemiBold,
  },
});

export default ForgotPasswordForm;
