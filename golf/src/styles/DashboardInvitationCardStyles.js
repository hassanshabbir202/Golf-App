import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: colors.background,
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(15),
    marginHorizontal: moderateScale(16),
    borderWidth: 1,
    borderColor: colors.border,
  },
  title: {
    color: colors.rgbColor,
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsMedium,
    marginBottom: moderateScale(8),
  },
  buttonRow: {
    flexDirection: 'row',
    gap: moderateScale(10),
  },
  inviteButton: {
    borderWidth: 1,
    borderColor: colors.rgbColor,
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(15),
  },
  inviteText: {
    color: colors.rgbColor,
    fontFamily: fonts.poppinsBold,
    fontSize: moderateScale(11),
  },
  searchButton: {
    backgroundColor: colors.primary,
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(15),
  },
  searchText: {
    color: colors.background,
    fontFamily: fonts.poppinsBold,
    fontSize: moderateScale(11),
  },
});

export default styles;
