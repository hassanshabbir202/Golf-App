import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

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

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  createButton: {
    backgroundColor: colors.createAccountBtn,
    paddingVertical: moderateScale(18),
    borderRadius: moderateScale(12),
    width: '100%',
    alignItems: 'center',
    marginBottom: moderateScale(10),
  },
  createText: {
    color: colors.background,
    fontSize: moderateScale(15),
    fontFamily: fonts.poppinsMedium,
  },
});

export default CreateAccountButton;
