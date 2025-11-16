import { View } from 'react-native';
import GolfCourseDetails from '../components/GolfCourseDetails';

const GolfCourseDetailsScreen = ({ navigation }) => {
  return (
    <View>
      <GolfCourseDetails navigation={navigation} />
    </View>
  );
};

export default GolfCourseDetailsScreen;
