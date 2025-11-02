import { StyleSheet, Text, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Header from '../components/Header';
import SignInForm from './../components/SignInForm';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Login" navigation={navigation} />
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subTitle}>Please sign in to continue</Text>
          <SignInForm navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: moderateScale(25),
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  content: {
    width: '100%',
  },
  title: {
    fontSize: moderateScale(30),
    color: colors.primary,
    fontFamily: fonts.poppinsSemiBoldItalic,
    textAlign: 'center',
  },
  subTitle: {
    marginBottom: moderateScale(15),
    fontFamily: fonts.poppinsMediumItalic,
    fontSize: moderateScale(14),
    textAlign: 'center',
    marginTop: moderateScale(-5),
  },
});

export default SignInScreen;
