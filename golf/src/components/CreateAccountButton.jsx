import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/CreateAccountButtonStyles';

const CreateAccountButton = ({ navigation }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('SignUpScreen')}
      >
        <Text style={styles.createText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountButton;
