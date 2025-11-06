import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import fonts from '../constants/fonts';
import colors from '../constants/colors';

const DashboardHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.appName}>FairwayOne</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="account-plus-outline" size={26} color={colors.rgbColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="bell-outline" size={26} color={colors.rgbColor} />
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>1</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(12),
    paddingTop: moderateScale(50),
  },
  appName: {
    fontSize: moderateScale(22),
    fontFamily: fonts.poppinsSemiBold,
    color: colors.primary,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: moderateScale(20),
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: moderateScale(-5),
    right: moderateScale(-2),
    backgroundColor: colors.red,
    borderRadius: moderateScale(10),
    width: moderateScale(16),
    height: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  notificationText: {
    color: colors.background,
    fontSize: moderateScale(10),
    fontFamily: fonts.poppinsBold,
  },
});
