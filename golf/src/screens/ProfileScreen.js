import { View } from 'react-native';
import ProfileInfo from './../components/ProfileInfo';

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <ProfileInfo navigation={navigation} />
    </View>
  );
};

export default ProfileScreen;
