import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import fonts from '../constants/fonts';
import colors from '../constants/colors';
import { moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const PlayGolfComponent = () => {
  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.container}>
        <Text style={styles.appName}>FairwayOne</Text>

        <View style={styles.searchBox}>
          <Icon
            name="search"
            size={moderateScale(18)}
            color={colors.placeHolderColor}
          />
          <TextInput
            style={styles.input}
            placeholder="Search All Courses"
            placeholderTextColor={colors.placeHolderColor}
          />
        </View>

        <View style={styles.gpsNeeded}>
          <Text style={styles.gpsTitle}>GPS Needed</Text>
          <Text style={styles.gpsSubTitle}>
            Please enable your phones GPS to use features such as finding nearby
            courses and flyover maps
          </Text>
          <Text style={styles.turnOnGps}>Turn on GPS</Text>
        </View>

        <View style={styles.noNearbyCourses}>
          <Text style={styles.titleNearbyCourses}>No nearby courses</Text>
          <Text style={styles.subTitleNearbyCourses}>
            We can't find any courses within a 100km radius. Try searching for
            your favorites instead.
          </Text>
        </View>

        <View style={styles.mapBtnContainer}>
          <TouchableOpacity style={styles.mapBtn}>
            <Icon2
              name="map-legend"
              size={moderateScale(18)}
              color={colors.primary}
            />
            <Text style={styles.mapBtnText}>Map</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(22),
    paddingVertical: moderateScale(12),
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
    height: moderateScale(48),
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
});

export default PlayGolfComponent;
