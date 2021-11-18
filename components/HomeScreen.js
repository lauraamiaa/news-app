import React from "react";
import { Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 30,
          textAlign: "center",
        }}
      >
        testing
      </Text>
      <Button
        title="Saved News"
        onPress={() => navigation.navigate("Saved News")}
      />
    </View>
  );
}
