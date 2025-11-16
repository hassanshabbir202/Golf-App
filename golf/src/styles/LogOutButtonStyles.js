import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  messageContainer: {
    position: 'absolute',
    top: '10%',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 999,
  },
  logoutBtn: {
    backgroundColor: colors.primary,
    width: '100%',
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(8),
  },
  logoutText: {
    color: colors.background,
    fontSize: moderateScale(16),
    fontFamily: fonts.poppinsMedium,
    textAlign: 'center',
  },
});

export default styles;
