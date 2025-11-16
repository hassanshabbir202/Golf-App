import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/DashboardHeaderStyles';

const DashboardHeader = () => {
  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.headerContainer}>
        <Text style={styles.appName}>FairwayOne</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name="account-plus-outline"
              size={26}
              color={colors.rgbColor}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="bell-outline" size={26} color={colors.rgbColor} />
            <View style={styles.notificationBadge}>
              <Text style={styles.notificationText}>1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardHeader;
