import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashComponent from '../components/SplashComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const checkLoginAndNavigate = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');

        // Optional: 1.5 sec splash delay
        setTimeout(() => {
          if (token) {
            // User already logged in → MainTabs
            navigation.reset({
              index: 0,
              routes: [{ name: 'MainTabs' }],
            });
          } else {
            // Not logged in → Welcome
            navigation.replace('Welcome');
          }
        }, 1500);
      } catch (error) {
        console.error('Error checking login:', error);
        navigation.replace('Welcome');
      }
    };

    checkLoginAndNavigate();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <SplashComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SplashScreen;
