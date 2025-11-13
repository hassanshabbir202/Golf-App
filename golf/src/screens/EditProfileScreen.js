import { StyleSheet, View } from 'react-native';
import EditProfile from '../components/EditProfile';
import Header from '../components/Header';
import { moderateScale } from 'react-native-size-matters';

const EditProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Edit Profile" navigation={navigation} />
      <EditProfile navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(22),
  },
});

export default EditProfileScreen;
