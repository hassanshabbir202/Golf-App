import { TouchableOpacity } from 'react-native';
import { StyleSheet, View, Text } from 'react-native';
import fonts from '../constants/fonts';
import colors from '../constants/colors';
import { moderateScale } from 'react-native-size-matters';

const AddBuddiesInfo = () => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoMain}>
        <Text style={styles.title}>Play FairwayOne with Friends!</Text>
        <Text style={styles.subTitle}>
          Find and add buddies. They might have good golf tips or new cources
          for you.
        </Text>
        <TouchableOpacity style={styles.addBuddiesBtn}>
          <Text style={styles.addBuddiesText}>ADD BUDDIES</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoMain: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: moderateScale(18),
    color: colors.text,
    fontFamily: fonts.poppinsSemiBold,
    textAlign: 'center',
    marginTop: moderateScale(5),
  },
  subTitle: {
    fontFamily: fonts.poppinsMedium,
    fontSize: moderateScale(10),
    textAlign: 'center',
    color: colors.subText,
  },
  addBuddiesBtn: {
    backgroundColor: colors.primary,
    borderRadius: moderateScale(10),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    marginVertical: moderateScale(5),
  },
  addBuddiesText: {
    color: colors.background,
    fontFamily: fonts.poppinsBold,
    fontSize: moderateScale(11),
  },
});

export default AddBuddiesInfo;
