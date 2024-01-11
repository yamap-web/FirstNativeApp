import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExpoCamera from './components/ExpoCamera';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>"React Native"アプリ開発部！</Text> */}
      <ExpoCamera />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
