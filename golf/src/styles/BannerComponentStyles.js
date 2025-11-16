import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  bannerContainer: {
    width: width,
    height: moderateScale(180),
  },
  imageWrapper: {
    width: width,
    alignItems: 'center',
  },
  bannerImage: {
    width: '90%',
    height: '90%',
    borderRadius: moderateScale(18),
  },
  overlay: {
    position: 'absolute',
    width: '90%',
    height: '90%',
    borderRadius: moderateScale(18),
    backgroundColor: colors.bannerOverlay,
  },
});

export default styles;
