import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogo: {
    height: moderateScale(300),
    width: moderateScale(300),
  },
});

export default styles;
