import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Header from '../components/Header';
import ResetPasswordForm from './../components/ResetPasswordForm';
import colors from '../constants/colors';

const ResetPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Reset Password" navigation={navigation} />
      <ResetPasswordForm navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    paddingHorizontal: moderateScale(25),
  },
});

export default ResetPasswordScreen;
