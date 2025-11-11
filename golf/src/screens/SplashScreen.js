import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashComponent from '../components/SplashComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const checkLoginAndNavigate = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        setTimeout(() => {
          if (token) {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MainTabs' }],
            });
          } else {
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
