import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/navigation";
import redux from './src/redux'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
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
