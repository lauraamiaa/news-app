import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./components/HomeScreen";
import PersonalScreen from "./components/PersonalScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#14213D",
          },
          headerTintColor: "#FCA311",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Saved News" component={PersonalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
