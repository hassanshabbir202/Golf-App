import { View, Text, StyleSheet } from 'react-native';

const PreviewGolf = () => {
  return (
    <View style={styles.container}>
      <Text>Preview Golf</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PreviewGolf;
