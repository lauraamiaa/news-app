import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { fetchedNews } from "../store/actions";

export default function HomeScreen() {
  const { news } = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const createAlert = () =>
    Alert.alert(
      "Saved!",
      "To see all your saved articles go to your bookmarks",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginTop: 20,
      }}
    >
      <View
        style={{
          marginBottom: 20,
        }}
      >
        <TextInput
          value={query}
          onChangeText={(query) => {
            setQuery(query);
          }}
          placeholder="Enter your search terms"
          style={{
            height: 40,
            width: 200,
            paddingLeft: 10,
            borderColor: "#FCA311",
            borderWidth: 1,
            borderRadius: 5,
            textAlign: "center",
            marginBottom: 10,
          }}
        />
        <TouchableOpacity
          onPress={() => dispatch(fetchedNews(query))}
          style={{
            backgroundColor: "#FCA311",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
            height: 40,
          }}
        >
          <FontAwesome5 name="search" />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 17,
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        Search Results
      </Text>
      <FlatList
        data={news}
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
                <TouchableOpacity onPress={createAlert}>
                  <FontAwesome5 name="bookmark" color="#FCA311" size="20" />
                </TouchableOpacity>
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
    </View>
  );
}
