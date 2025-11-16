import { View } from 'react-native';
import PlayGolfComponent from './../components/PlayGolfComponent';

const PlayGolfScreen = ({ navigation }) => {
  return (
    <View>
      <PlayGolfComponent navigation={navigation} />
    </View>
  );
};

export default PlayGolfScreen;
