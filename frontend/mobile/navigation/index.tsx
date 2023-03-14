/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Welcome from "../screens/WelcomeScreen";
import { useSelector } from 'react-redux'
import { RootStackParamList } from "../types";
import { RootState, AppDispatch } from '../redux/store'
import AsyncStorage from '@react-native-async-storage/async-storage';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();
const storeData = async (value: string = "rr") => {
  try {
    await AsyncStorage.setItem('Key', value)
    // const value = await AsyncStorage.getItem("key")
    // console.log(value)
    let a = () => {
      AsyncStorage.getItem('Key', (err, result) => {
        console.log(result, "result");
      });
    }
    a()
  } catch (e) {
    // saving error
  }
}
function RootNavigator() {
  const token: string | null = useSelector((state: RootState) => state.token);
  token ? storeData(token) : '';

  // console.log("Token:", token);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {token ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
