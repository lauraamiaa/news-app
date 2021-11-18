import React, { useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { getNews } from "../store/actions";

export default function HomeScreen() {
  const { news } = useSelector((state) => state.newsReducer);
  const dispatch = useDispatch();
  const fetchNews = () => dispatch(getNews());

  useEffect(() => {
    fetchNews();
  }, []);

  console.log(news.articles);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        marginTop: 30,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "center",
        }}
      >
        Popular News
      </Text>
      <FlatList
        data={news}
        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1, marginLeft: 12 }}>
              <View>
                <Text style={{ fontSize: 22, paddingRight: 16 }}>
                  {item.articles.title}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
