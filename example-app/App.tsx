import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import RootNavigation from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar /> */}
      <RootNavigation />
    </SafeAreaProvider>
  );
}