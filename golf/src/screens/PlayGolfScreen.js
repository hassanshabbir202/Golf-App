import { View, Text, StyleSheet } from 'react-native';

const PlayGolfScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PlayGolf Screen</Text>
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

export default PlayGolfScreen;
