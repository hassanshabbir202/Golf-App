import colors from '../constants/colors';
import { moderateScale } from 'react-native-size-matters';
import fonts from '../constants/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  headerContainer: {
    alignItems: 'center',
  },
  settingsIconMain: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  settingsIcon: {
    paddingHorizontal: moderateScale(22),
    paddingTop: moderateScale(12),
  },
  profileImage: {
    width: moderateScale(90),
    height: moderateScale(90),
    borderRadius: moderateScale(45),
    marginBottom: moderateScale(10),
    backgroundColor: colors.primary,
  },
  profileName: {
    fontSize: moderateScale(20),
    fontFamily: fonts.poppinsSemiBold,
    color: colors.rgbColor,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: moderateScale(10),
  },
  statItem: {
    alignItems: 'center',
  },
  statCount: {
    fontSize: moderateScale(18),
    fontFamily: fonts.poppinsSemiBold,
    color: colors.rgbColor,
  },
  statLabel: {
    fontSize: moderateScale(11),
    fontFamily: fonts.poppinsLight,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: moderateScale(5),
    width: '80%',
    justifyContent: 'center',
  },
  editProfileButton: {
    backgroundColor: colors.primary,
    paddingVertical: moderateScale(8),
    paddingHorizontal: moderateScale(30),
    borderRadius: moderateScale(5),
    marginRight: moderateScale(10),
    flex: 1,
    alignItems: 'center',
  },
  editProfileButtonText: {
    fontSize: moderateScale(16),
    color: colors.background,
    fontFamily: fonts.poppinsMedium,
  },
  shareButton: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: moderateScale(8),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(45),
  },
  additionalStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '85%',
    marginTop: moderateScale(15),
    paddingVertical: moderateScale(15),
    backgroundColor: colors.background,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.border,
  },
  additionalStatItem: {
    alignItems: 'center',
  },
  additionalStatCount: {
    fontSize: moderateScale(20),
    fontFamily: fonts.poppinsBold,
    color: colors.primary,
    marginBottom: moderateScale(3),
  },
  additionalStatLabel: {
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsRegular,
    color: colors.subText,
  },
  highlightsContainer: {
    width: '85%',
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },

  highlights: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    paddingVertical: moderateScale(12),
    paddingHorizontal: moderateScale(15),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.border,
  },
  highlightsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  highlightsText: {
    fontSize: moderateScale(14),
    fontFamily: fonts.poppinsMedium,
    marginLeft: moderateScale(10),
    color: colors.text,
  },
  commentBoxContainer: {
    flexDirection: 'column',
    width: '85%',
    alignSelf: 'center',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
    backgroundColor: colors.background,
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
  },
  commentAvatar: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(45),
  },
  commentBox: {
    flexDirection: 'row',
  },
  profileInfoTxt: {
    paddingLeft: moderateScale(10),
  },
  title2: {
    fontFamily: fonts.poppinsSemiBold,
  },
  subTitle2: {
    fontFamily: fonts.poppinsLight,
    fontSize: moderateScale(10),
    marginTop: moderateScale(-2),
  },
  mainComment: {
    fontFamily: fonts.poppinsRegular,
    fontSize: moderateScale(14),
    paddingVertical: moderateScale(8),
  },
  commentIconsMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentIcon: {
    paddingLeft: moderateScale(5),
  },
});

export default styles;
