import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import apiConfig from '../constants/apiConfig';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import ValidationMessage from './ValidationMessage';

const ProfileComponent = () => {
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
      <ValidationMessage
        message={message}
        type={type}
        onHide={() => setMessage('')}
      />

      <Text style={styles.title}>Profile Screen</Text>

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  title: {
    fontSize: moderateScale(22),
    marginBottom: moderateScale(20),
    fontFamily: fonts.poppinsMedium,
  },
  logoutBtn: {
    backgroundColor: colors.primary,
    paddingHorizontal: moderateScale(30),
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(8),
  },
  logoutText: {
    color: colors.background,
    fontSize: moderateScale(16),
    fontFamily: fonts.poppinsMedium,
  },
});

export default ProfileComponent;
