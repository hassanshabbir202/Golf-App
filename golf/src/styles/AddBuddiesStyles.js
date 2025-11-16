import fonts from '../constants/fonts';
import colors from '../constants/colors';
import { moderateScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoMain: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    marginTop: moderateScale(15),
  },
  title: {
    fontFamily: fonts.poppinsSemiBold,
    color: colors.rgbColor,
    fontSize: moderateScale(22),
    textAlign: 'center',
  },
  subTitle: {
    textAlign: 'center',
    fontFamily: fonts.poppinsRegular,
    color: colors.subText,
    fontSize: moderateScale(12),
    paddingHorizontal: moderateScale(15),
  },
  addBuddiesBtn: {
    backgroundColor: colors.primary,
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    marginVertical: moderateScale(5),
  },
  addBuddiesText: {
    color: colors.background,
    fontFamily: fonts.poppinsBold,
    fontSize: moderateScale(11),
  },
});

export default styles;
