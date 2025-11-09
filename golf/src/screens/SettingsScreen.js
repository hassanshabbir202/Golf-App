import { StyleSheet, View } from 'react-native';
import ProfileSettings from './../components/ProfileSettings';
import Header from '../components/Header';
import { moderateScale } from 'react-native-size-matters';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="More" navigation={navigation} />
      <ProfileSettings />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(25),
  },
});

export default SettingsScreen;
