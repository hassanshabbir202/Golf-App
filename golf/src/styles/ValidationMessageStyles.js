import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '88%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(8),
    shadowColor: colors.rgbColor,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 5,
    zIndex: 2,
  },
  icon: {
    marginRight: moderateScale(6),
  },
  text: {
    color: colors.background,
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsMedium,
    marginTop: moderateScale(2),
  },
});

export default styles;
