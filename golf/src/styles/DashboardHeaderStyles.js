import { StyleSheet } from 'react-native';
import fonts from '../constants/fonts';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(22),
    paddingVertical: moderateScale(12),
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

export default styles;
