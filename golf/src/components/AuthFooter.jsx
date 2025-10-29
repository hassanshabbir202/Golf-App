import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import fonts from '../constants/fonts';
import colors from '../constants/colors';

const AuthFooter = ({ text, linkText, onPress }) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}> {linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(20),
  },
  footerText: {
    color: colors.subText,
    textAlign: 'center',
    fontSize: moderateScale(13),
    fontFamily: fonts.poppinsRegular,
  },
  link: {
    fontFamily: fonts.poppinsRegular,
  },
});

export default AuthFooter;
