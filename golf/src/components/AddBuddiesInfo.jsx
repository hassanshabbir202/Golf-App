import { TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import styles from '../styles/AddBuddiesStyles';

const AddBuddiesInfo = () => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.infoMain}>
        <Text style={styles.title}>Play Golf with Friends!</Text>
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

export default AddBuddiesInfo;
