import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Provider } from "react-redux";

import store from "./store/store";
import HomeScreen from "./screens/HomeScreen";
import PersonalScreen from "./screens/PersonalScreen";

const Tab = createBottomTabNavigator();
const tabBarOptions = {
  showLabel: false,
  activeTintColor: "#FCA311",
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={tabBarOptions}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            style={{ fontSize: 40 }}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="newspaper" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="My Articles"
            component={PersonalScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="bookmark" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
