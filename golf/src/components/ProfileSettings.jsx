import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';
import LogOutButton from './LogOutButton';
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

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.screenBackground,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(15),
  },
  headerTitle: {
    fontSize: moderateScale(18),
    fontFamily: fonts.poppinsSemiBold,
    color: colors.text,
  },
  section: {
    backgroundColor: colors.background,
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(15),
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(15),
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  itemText: {
    fontSize: moderateScale(14),
    fontFamily: fonts.poppinsMedium,
    color: colors.text,
  },
  supportText: {
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsMedium,
    color: colors.subText,
    marginBottom: moderateScale(6),
    marginLeft: moderateScale(5),
  },
});
