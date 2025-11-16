import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.screenBackground,
  },
  section: {
    backgroundColor: colors.background,
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(15),
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(15),
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  lastItem: {
    borderBottomWidth: 0,
  },
  itemText: {
    fontSize: moderateScale(14),
    fontFamily: fonts.poppinsMedium,
    color: colors.text,
  },
  supportText: {
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsMedium,
    color: colors.subText,
    marginBottom: moderateScale(6),
    marginLeft: moderateScale(5),
  },
});

export default styles;
