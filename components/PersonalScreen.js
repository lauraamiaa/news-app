import React from "react";
import { Text, View } from "react-native";

export default function PersonalScreen() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        personal screen
      </Text>
    </View>
  );
}
