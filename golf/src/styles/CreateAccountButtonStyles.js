import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  createButton: {
    backgroundColor: colors.createAccountBtn,
    paddingVertical: moderateScale(18),
    borderRadius: moderateScale(12),
    width: '100%',
    alignItems: 'center',
    marginBottom: moderateScale(10),
  },
  createText: {
    color: colors.background,
    fontSize: moderateScale(15),
    fontFamily: fonts.poppinsMedium,
  },
});

export default styles;
