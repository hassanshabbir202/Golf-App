import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './../styles/SignInWithGoogleButtonStyles';

const SignInWithGoogleButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require('../assets/google-icon.png')}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Sign Up with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInWithGoogleButton;
