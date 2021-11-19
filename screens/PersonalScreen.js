import React from "react";
import { Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

export default function PersonalScreen() {
  const { saved } = useSelector((state) => state.newsReducer);

  console.log(saved);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 17,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Saved News
      </Text>
      <View>
        {saved.length === 0 ? (
          <Text>Add an article to the list</Text>
        ) : (
          <FlatList
            data={saved}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flex: 1,
                    marginLeft: 12,
                    paddingTop: 16,
                    paddingHorizontal: 16,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        fontSize: 15,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text style={{ fontSize: 10 }}>{item.content}</Text>
                  </View>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
}
