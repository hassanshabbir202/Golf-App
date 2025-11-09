import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';
import { SafeAreaView } from 'react-native-safe-area-context';

const MoreScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top']}>
      <View style={styles.container}>
        <Text style={styles.heading}>More Options</Text>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.optionText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('Performance')}
        >
          <Text style={styles.optionText}>Performance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.optionButton}
          onPress={() => navigation.navigate('Benefits')}
        >
          <Text style={styles.optionText}>Benefits</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(22),
  },
  heading: {
    fontSize: moderateScale(22),
    fontFamily: fonts.poppinsSemiBold,
    color: colors.primary,
    marginBottom: moderateScale(5),
  },
  optionButton: {
    paddingVertical: moderateScale(14),
    paddingHorizontal: moderateScale(15),
    backgroundColor: colors.background,
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(12),
  },
  optionText: {
    fontSize: moderateScale(16),
    color: colors.text,
    fontFamily: fonts.poppinsRegular,
  },
});

export default MoreScreen;
