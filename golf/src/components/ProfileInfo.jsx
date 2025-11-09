import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../constants/colors';
import { moderateScale } from 'react-native-size-matters';
import fonts from '../constants/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileInfo = ({ navigation }) => {
  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView edges={['top']}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.settingsIconMain}>
            <TouchableOpacity
              style={styles.settingsIcon}
              onPress={handleSettings}
            >
              <Icon
                name="settings"
                size={moderateScale(22)}
                color={colors.rgbColor}
              />
            </TouchableOpacity>
          </View>

          <Image
            source={{
              uri: 'https://water.wha-industrialestate.com/images/logo_user.png',
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Hassan Shabbir</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statCount}>100</Text>
              <Text style={styles.statLabel}>COURSES</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statCount}>3.5K</Text>
              <Text style={styles.statLabel}>FOLLOWING</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statCount}>12.8K</Text>
              <Text style={styles.statLabel}>FOLLOWERS</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.editProfileButton}>
              <Text style={styles.editProfileButtonText}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Icon name="share" size={moderateScale(20)} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.additionalStatsContainer}>
            <View style={styles.additionalStatItem}>
              <Text style={styles.additionalStatCount}>85.5</Text>
              <Text style={styles.additionalStatLabel}>AVG SCORE</Text>
            </View>
            <View style={styles.additionalStatItem}>
              <Text style={styles.additionalStatCount}>25</Text>
              <Text style={styles.additionalStatLabel}>ROUNDS</Text>
            </View>
            <View style={styles.additionalStatItem}>
              <Text style={styles.additionalStatCount}>10</Text>
              <Text style={styles.additionalStatLabel}>HANDICAP</Text>
            </View>
          </View>

          <View style={styles.highlightsContainer}>
            <TouchableOpacity style={styles.highlights}>
              <View style={styles.highlightsLeft}>
                <Icon
                  name="star"
                  size={moderateScale(20)}
                  color={colors.primary}
                />
                <Text style={styles.highlightsText}>Highlights</Text>
              </View>
              <Icon
                name="chevron-right"
                size={moderateScale(22)}
                color={colors.placeHolderColor}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.commentBoxContainer}>
            <View style={styles.commentBox}>
              <View>
                <Image
                  source={{
                    uri: 'https://water.wha-industrialestate.com/images/logo_user.png',
                  }}
                  style={styles.commentAvatar}
                />
              </View>
              <View style={styles.profileInfoTxt}>
                <Text style={styles.title2}>Hassan Shabbir</Text>
                <Text style={styles.subTitle2}>2 days ago</Text>
              </View>
            </View>

            <View>
              <Text style={styles.mainComment}>
                Really Good Experience For the Last Round.
              </Text>
            </View>

            <View style={styles.commentIconsMain}>
              <Icon name="heart" size={22} color={colors.primary} />
              <Icon2
                name="comment-processing"
                size={22}
                color={colors.primary}
                style={styles.commentIcon}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

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

export default ProfileInfo;
