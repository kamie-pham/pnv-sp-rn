import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/navigation";
import redux from './src/redux'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from 'expo-font';
import { useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'HKGrotesk': require('./src/assets/fonts/HKGrotesk-Regular.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={redux.store as any}>
      <PersistGate persistor={redux.persistor}>
        <SafeAreaProvider>
          {/* <StatusBar /> */}
          <RootNavigation />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
