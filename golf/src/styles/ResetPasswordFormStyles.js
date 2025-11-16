import { StyleSheet } from 'react-native';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: moderateScale(5),
    paddingTop: moderateScale(30),
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: moderateScale(15),
    paddingRight: moderateScale(15),
  },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: moderateScale(14),
    fontFamily: fonts.poppinsRegular,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(17),
  },
  eyeIcon: { paddingHorizontal: moderateScale(5) },
  buttonContainer: {
    position: 'absolute',
    bottom: moderateScale(30),
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(14),
    borderRadius: moderateScale(10),
    marginVertical: moderateScale(30),
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: colors.background,
    fontSize: moderateScale(15),
    fontFamily: fonts.poppinsSemiBold,
  },
});

export default styles;
