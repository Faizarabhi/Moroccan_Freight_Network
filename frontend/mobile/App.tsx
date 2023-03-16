import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from 'react-redux';
import fonts from "./config/fonts";
import {store} from './app/store'


import Navigation from "./navigation";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);
  return !fontsLoaded ? null : (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </Provider>
  );
}
