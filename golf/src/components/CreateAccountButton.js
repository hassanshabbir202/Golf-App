import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const CreateAccountButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  createButton: {
    backgroundColor: '#a3a3809c',
    paddingVertical: moderateScale(20),
    borderRadius: moderateScale(12),
    width: '100%',
    alignItems: 'center',
    marginBottom: moderateScale(20),
  },
  createText: {
    color: '#fff',
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
});

export default CreateAccountButton;
