import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';

// Import Screens
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import EmailVerificationScreen from './src/screens/EmailVerificationScreen';
import TabNavigator from './src/navigations/TabNavigator';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import SplashScreen from './src/screens/SplashScreen';

const Stack = createNativeStackNavigator();

// ✅ Deep linking configuration
const linking = {
  prefixes: ['https://golf-app-backend-production.up.railway.app'],
  config: {
    screens: {
      ResetPasswordScreen: 'api/auth/reset-password/:token',
    },
  },
};

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator
          initialRouteName="SplashScreen"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen
            name="ForgotPasswordScreen"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            name="EmailVerificationScreen"
            component={EmailVerificationScreen}
          />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="MainTabs" component={TabNavigator} />
        </Stack.Navigator>

        <Toast />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
