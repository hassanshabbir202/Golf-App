import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../styles/HeaderStyles';

const Header = ({ title, navigation }) => {
  return (
    <SafeAreaView edges={['top']}>
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
    </SafeAreaView>
  );
};

export default Header;
