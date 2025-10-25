import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';

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
            color={colors.primary}
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
    position: 'absolute',
    top: '6%',
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10),
  },
  backButton: {
    paddingLeft: moderateScale(15),
  },
  headerText: {
    fontSize: moderateScale(20),
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    flex: 1,
  },
});

export default Header;
