import { StyleSheet } from 'react-native';
import fonts from '../constants/fonts';
import { moderateScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: moderateScale(8),
  },
  headerText: {
    fontSize: moderateScale(18),
    fontFamily: fonts.poppinsSemiBold,
    textAlign: 'center',
    flex: 1,
  },
});

export default styles;
