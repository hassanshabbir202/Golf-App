import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/EmailVerificationStyles';

const EmailVerification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <Text style={styles.backText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EmailVerification;
