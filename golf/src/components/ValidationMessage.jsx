import React, { useEffect, useRef } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { moderateScale } from 'react-native-size-matters';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const ValidationMessage = ({ message, type = 'error', onHide }) => {
  const slideAnim = useRef(new Animated.Value(100)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (message) {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();

      const timer = setTimeout(() => {
        Animated.parallel([
          Animated.timing(slideAnim, {
            toValue: 100,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start(() => {
          onHide && onHide();
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!message) return null;

  const isError = type === 'error';
  const bgColor = colors.rgbColor;
  const iconName = isError ? 'x-circle' : 'check-circle';
  const iconColor = isError ? colors.errorIcon : colors.successIcon;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: bgColor,
          opacity,
          transform: [{ translateY: slideAnim }],
        },
      ]}
    >
      <Feather
        name={iconName}
        size={18}
        color={iconColor}
        style={styles.icon}
      />
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '88%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(12),
    borderRadius: moderateScale(8),
    shadowColor: colors.rgbColor,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 5,
    zIndex: 2,
  },
  icon: {
    marginRight: moderateScale(6),
  },
  text: {
    color: colors.background,
    fontSize: moderateScale(12),
    fontFamily: fonts.poppinsMedium,
    marginTop: moderateScale(2),
  },
});

export default ValidationMessage;
