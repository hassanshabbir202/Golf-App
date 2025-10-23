import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  const handleSignUp = () => {
    console.log({ firstName, lastName, email, password, inviteCode });
  };

  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#777"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#777"
          value={lastName}
          onChangeText={setLastName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#777"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#777"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Invite Code"
          placeholderTextColor="#777"
          value={inviteCode}
          onChangeText={setInviteCode}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>
        Already have an account? <Text style={styles.link}>Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F6F6F6',
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(17),
    color: '#333',
    fontSize: moderateScale(14),
    marginBottom: moderateScale(15),
    borderWidth: 1,
    borderColor: '#E0E0E0',
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: '#0f0f0991',
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    marginTop: moderateScale(10),
  },
  buttonText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontFamily: 'Poppins-Bold',
  },
  footerText: {
    color: '#555',
    textAlign: 'center',
    marginTop: moderateScale(25),
    fontSize: moderateScale(13),
    fontFamily: 'Poppins-Regular',
  },
  link: {
    color: '#4A90E2',
    fontFamily: 'Poppins-Medium',
  },
});

export default SignUpForm;
