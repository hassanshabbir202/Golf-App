import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: moderateScale(40),
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    gap: moderateScale(12),
    marginVertical: moderateScale(20),
  },
  backButton: {
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(10),
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: colors.primary,
  },
  backText: {
    fontFamily: fonts.poppinsMedium,
    fontSize: moderateScale(15),
    color: colors.background,
  },
});

export default styles;
