import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogOutButton from './LogOutButton';
import styles from '../styles/ProfileSettingsStyles';

const MoreScreen = () => {
  const menuItems1 = [
    { title: 'Profile Settings' },
    { title: 'Subscription' },
    { title: 'Language' },
  ];

  const menuItems2 = [
    { title: 'Help' },
    { title: 'Privacy Policy' },
    { title: 'Rate us on Play Store' },
    { title: 'Blog' },
  ];

  return (
    <SafeAreaView style={[styles.safeArea]} edges={['top']}>
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          {menuItems1.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.item,
                index === menuItems1.length - 1 && styles.lastItem,
              ]}
            >
              <Text style={styles.itemText}>{item.title}</Text>
              <Icon
                name="chevron-right"
                size={20}
                color={colors.placeHolderColor}
              />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.supportText}>SUPPORT</Text>
        <View style={styles.section}>
          {menuItems2.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.item,
                index === menuItems2.length - 1 && styles.lastItem,
              ]}
            >
              <Text style={styles.itemText}>{item.title}</Text>
              <Icon
                name="chevron-right"
                size={20}
                color={colors.placeHolderColor}
              />
            </TouchableOpacity>
          ))}
        </View>

        <LogOutButton />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreScreen;
