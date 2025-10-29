import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const Header = ({ title, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon
            name="arrow-back"
            size={moderateScale(22)}
            color={colors.rgbColor}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>{title}</Text>
        <View style={styles.rightSpace} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(40),
  },
  headerText: {
    fontSize: moderateScale(18),
    fontFamily: fonts.poppinsSemiBold,
    textAlign: 'center',
    flex: 1,
  },
});

export default Header;
