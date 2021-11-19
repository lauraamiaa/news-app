import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Store from "./store/configureStore";
import HomeScreen from "./screens/HomeScreen";
import PersonalScreen from "./screens/PersonalScreen";

const Tab = createBottomTabNavigator();
const tabBarOptions = {
  showLabel: false,
  activeTintColor: "#FCA311",
};

export default function App() {
  console.log(Store);
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
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
      </PersistGate>
    </Provider>
  );
}
