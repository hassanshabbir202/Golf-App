import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import fonts from '../constants/fonts';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(20),
    zIndex: 1,
  },
  footerText: {
    color: colors.subText,
    textAlign: 'center',
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsRegular,
  },
  link: {
    fontFamily: fonts.poppinsRegular,
  },
});

export default styles;
