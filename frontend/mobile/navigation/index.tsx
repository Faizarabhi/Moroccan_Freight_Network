/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import { HomeScreen, LoginScreen, RegisterScreen, WelcomeScreen, CoordinatScreen } from "../screens";
import Welcome from "../screens/WelcomeScreen";
import { useSelector } from 'react-redux'
import { RootStackParamList } from "../types";
import { RootState } from "../app/store";
import { token } from "../app/features/auth/authService";
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

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {

  


console.log('token',token)
  // console.log("Token:", tokenStored);
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
          <Stack.Screen name="Coordinate" component={CoordinatScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
