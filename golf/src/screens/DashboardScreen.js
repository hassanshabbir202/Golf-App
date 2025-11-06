import { StyleSheet, Text, View } from 'react-native';
import DashboardComponent from './../components/DashboardComponent';
import { moderateScale } from 'react-native-size-matters';

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
