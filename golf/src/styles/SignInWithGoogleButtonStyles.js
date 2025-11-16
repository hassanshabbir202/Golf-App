import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingVertical: moderateScale(18),
    borderRadius: moderateScale(12),
    width: '100%',
    justifyContent: 'center',
    marginBottom: moderateScale(12),
  },
  googleIcon: {
    width: moderateScale(22),
    height: moderateScale(22),
    marginRight: moderateScale(8),
  },
  googleText: {
    color: colors.text,
    fontSize: moderateScale(15),
    fontFamily: fonts.poppinsMedium,
  },
});

export default styles;
