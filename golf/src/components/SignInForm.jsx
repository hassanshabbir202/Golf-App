import { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import CheckBox from '@react-native-community/checkbox';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../constants/colors';
import AuthFooter from './AuthFooter';
import ValidationMessage from './ValidationMessage';
import apiConfig from '../constants/apiConfig';
import styles from '../styles/SignInFormStyles';

const SignInForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('error');
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
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
      setMessage('Password must be at least 8 characters');
      setType('error');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(apiConfig.LOGIN, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: trimmedEmail,
          password: trimmedPassword,
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        setType('error');
        setMessage('Invalid credentials. Please try again.');
        return;
      }

      setType('success');
      setMessage('Login successful');
      await AsyncStorage.setItem('userToken', data.user.token || 'true');
      await AsyncStorage.setItem('userId', data.user.id || 'true');

      console.log('TOKEN : ', data.user.token);
      setEmail('');
      setPassword('');
      setAgree(false);

      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MainTabs' }],
        });
      }, 1200);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setType('error');
      setMessage('Network error. Please try again.');
    }
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

        <TouchableOpacity
          style={[styles.button, loading && { opacity: 0.6 }]}
          onPress={!loading ? handleSignIn : null}
        >
          <Text style={styles.buttonText}>
            {loading ? 'Please wait...' : 'Login'}
          </Text>
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

export default SignInForm;
