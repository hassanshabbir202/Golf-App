import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';
import ValidationMessage from './ValidationMessage';
import styles from '../styles/ForgotPasswordFormStyles';

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
    setMessage('Reset link Sent Successfully');
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

export default ForgotPasswordForm;
