import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import colors from '../constants/colors';
import styles from '../styles/LoaderStyles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loader;
