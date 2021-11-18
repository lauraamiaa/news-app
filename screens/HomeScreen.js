import React, { useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { getNews } from "../store/actions";

export default function HomeScreen() {
  const { news } = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();
  const fetchNews = () => dispatch(getNews());

  useEffect(() => {
    fetchNews();
  }, []);

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
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View>
                <Text style={{ fontSize: 15, padding: 16 }}>{item.title}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
