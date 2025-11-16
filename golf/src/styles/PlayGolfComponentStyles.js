import fonts from '../constants/fonts';
import colors from '../constants/colors';
import { moderateScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(22),
    height: '100%',
  },
  appName: {
    fontSize: moderateScale(22),
    fontFamily: fonts.poppinsSemiBold,
    color: colors.primary,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.border,
    borderRadius: moderateScale(12),
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: moderateScale(12),
    marginBottom: moderateScale(15),
  },
  input: {
    flex: 1,
    color: colors.border,
    fontSize: moderateScale(14),
    fontFamily: fonts.poppinsMedium,
    paddingVertical: moderateScale(12),
    marginLeft: moderateScale(4),
    height: moderateScale(50),
    color: colors.rgbColor,
  },
  gpsNeeded: {
    backgroundColor: colors.background,
    paddingHorizontal: moderateScale(12),
    paddingVertical: moderateScale(8),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.border,
  },
  gpsTitle: {
    color: colors.rgbColor,
    fontFamily: fonts.poppinsSemiBold,
    fontSize: moderateScale(16),
  },
  gpsSubTitle: {
    fontSize: moderateScale(10),
    fontFamily: fonts.poppinsLight,
  },
  turnOnGps: {
    fontFamily: fonts.poppinsSemiBold,
    color: colors.primary,
    marginTop: moderateScale(2),
  },
  noNearbyCourses: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(25),
  },
  titleNearbyCourses: {
    fontFamily: fonts.poppinsSemiBold,
    color: colors.rgbColor,
    fontSize: moderateScale(22),
  },
  subTitleNearbyCourses: {
    textAlign: 'center',
    fontFamily: fonts.poppinsRegular,
    color: colors.subText,
    fontSize: moderateScale(12),
    paddingHorizontal: moderateScale(15),
  },
  mapBtnContainer: {
    position: 'absolute',
    bottom: '5%',
    alignSelf: 'center',
  },

  mapBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(25),
    borderRadius: moderateScale(20),
    borderWidth: 1,
    borderColor: colors.border,
  },
  mapBtnText: {
    fontFamily: fonts.poppinsBold,
    color: colors.subText,
    paddingLeft: moderateScale(4),
  },
  golfCoursesMain: {
    height: moderateScale(200),
    width: '100%',
    marginBottom: moderateScale(15),
  },

  golfMainBgImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: moderateScale(12),
  },

  contentWrapper: {
    position: 'absolute',
    bottom: moderateScale(12),
    left: moderateScale(12),
    right: moderateScale(12),
    paddingHorizontal: moderateScale(10),
    paddingBottom: moderateScale(6),
  },

  title: {
    color: colors.background,
    fontSize: moderateScale(20),
    fontFamily: fonts.poppinsSemiBold,
    marginBottom: moderateScale(2),
  },

  country: {
    color: colors.background,
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsRegular,
    marginBottom: moderateScale(10),
  },

  buttonsRow: {
    flexDirection: 'row',
    gap: moderateScale(10),
  },

  btn1: {
    paddingVertical: moderateScale(11),
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.placeHolderColor,
    borderRadius: moderateScale(6),
  },

  btnText1: {
    color: colors.background,
    fontFamily: fonts.poppinsSemiBold,
  },

  btn2: {
    paddingVertical: moderateScale(11),
    paddingHorizontal: moderateScale(30),
    backgroundColor: colors.createAccountBtn,
    borderRadius: moderateScale(6),
  },

  btnText2: {
    color: colors.background,
    fontFamily: fonts.poppinsSemiBold,
  },
});

export default styles;
