import { StyleSheet } from 'react-native';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  imageContainer: {
    alignSelf: 'center',
    position: 'relative',
  },
  profileImage: {
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: moderateScale(45),
    marginBottom: moderateScale(10),
    backgroundColor: colors.primary,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 5,
    right: 8,
    backgroundColor: colors.primary,
    padding: moderateScale(6),
    borderRadius: moderateScale(20),
  },
  formGroup: {
    marginTop: moderateScale(10),
  },
  label: {
    fontFamily: fonts.poppinsMedium,
    fontSize: moderateScale(13),
    marginBottom: moderateScale(5),
    color: colors.text,
  },
  input: {
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(14),
    color: colors.text,
    fontSize: moderateScale(13),
    borderWidth: 1,
    borderColor: colors.border,
    fontFamily: fonts.poppinsRegular,
  },
  saveButton: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(12),
    borderRadius: moderateScale(8),
    marginTop: moderateScale(15),
  },
  saveButtonText: {
    color: colors.background,
    textAlign: 'center',
    fontFamily: fonts.poppinsSemiBold,
    fontSize: moderateScale(16),
  },
});

export default styles;
