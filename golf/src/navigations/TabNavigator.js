import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/DashboardScreen';
import PlayGolfScreen from '../screens/PlayGolfScreen';
import ChallengesScreen from '../screens/ChallengesScreen';
import PerformanceScreen from '../screens/PerformanceScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BenefitsScreen from '../screens/BenefitsScreen';
import SocialScreen from '../screens/SocialScreen';
import MoreScreen from '../screens/MoreScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';
import SettingsScreen from './../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MoreMain" component={MoreScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Performance" component={PerformanceScreen} />
      <Stack.Screen name="Benefits" component={BenefitsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home')
            iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Social')
            iconName = focused ? 'people' : 'people-outline';
          else if (route.name === 'PlayGolf')
            iconName = focused ? 'flag' : 'flag-outline';
          else if (route.name === 'Challenges')
            iconName = focused ? 'trophy' : 'trophy-outline';
          else if (route.name === 'More')
            iconName = focused ? 'menu' : 'menu-outline';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.rgbColor,
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Social" component={SocialScreen} />
      <Tab.Screen name="PlayGolf" component={PlayGolfScreen} />
      <Tab.Screen name="Challenges" component={ChallengesScreen} />
      <Tab.Screen name="More" component={MoreStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
