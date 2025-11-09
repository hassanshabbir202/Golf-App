import { StyleSheet, View } from 'react-native';
import DashboardComponent from './../components/DashboardComponent';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <DashboardComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DashboardScreen;
