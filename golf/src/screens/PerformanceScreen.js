import { View, Text, StyleSheet } from 'react-native';

const PerformanceScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Performance Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PerformanceScreen;
