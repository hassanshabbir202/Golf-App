import { Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import apiConfig from '../constants/apiConfig';
import ValidationMessage from './ValidationMessage';
import styles from '../styles/LogOutButtonStyles';

const LogOutButton = () => {
  const navigation = useNavigation();
  const [message, setMessage] = useState('');
  const [type, setType] = useState('success');

  const handleLogout = async () => {
    try {
      const response = await fetch(apiConfig.LOGOUT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      const data = await response.json();
      await AsyncStorage.removeItem('userToken');

      if (response.ok) {
        setType('success');
        setMessage('Logged out successfully');
      } else {
        setType('error');
        setMessage(data.message || 'Logout failed. Please try again.');
      }

      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Welcome' }],
        });
      }, 1000);
    } catch (error) {
      console.error(error);
      setType('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {message ? (
        <View style={styles.messageContainer}>
          <ValidationMessage
            message={message}
            type={type}
            onHide={() => setMessage('')}
          />
        </View>
      ) : null}

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogOutButton;
