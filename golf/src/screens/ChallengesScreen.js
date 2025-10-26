import { StyleSheet, Text, View } from 'react-native';

const ChallengesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Challenges Screen</Text>
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

export default ChallengesScreen;
