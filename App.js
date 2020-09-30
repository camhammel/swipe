import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, Button } from "react-native-elements";
import Deck from "./src/Deck";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri:
      "https://images.unsplash.com/photo-1526615735835-530c611a3d8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2702&q=80.jpg",
  },
  {
    id: 2,
    text: "Card #2",
    uri:
      "https://images.unsplash.com/photo-1591254467235-a82a70c915ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60.jpg",
  },
  {
    id: 3,
    text: "Card #3",
    uri:
      "https://images.unsplash.com/photo-1562215991-08f3dc328f57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80.jpg",
  },
  {
    id: 4,
    text: "Card #4",
    uri:
      "https://images.unsplash.com/photo-1589782636423-0464b36415e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80.jpg",
  },
  {
    id: 5,
    text: "Card #5",
    uri:
      "https://images.unsplash.com/photo-1519163219899-21d2bb723b3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80.jpg",
  },
  {
    id: 6,
    text: "Card #6",
    uri:
      "https://images.unsplash.com/photo-1589782050836-cbe60d49e880?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80.jpg",
  },
  {
    id: 7,
    text: "Card #7",
    uri:
      "https://images.unsplash.com/photo-1589820781411-91ef68a61183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80.jpg",
  },
];

export default function App() {
  function renderCard(item) {
    return (
      <Card
        title={item.text}
        titleStyle={{ marginTop: 10 }}
        image={{ uri: item.uri }}
        key={item.id}
        containerStyle={{ borderRadius: 15 }}
      >
        <Text style={{ marginBottom: 10 }}>I can customize</Text>
        <Button
          icon={{ name: "code", color: "#fff" }}
          backgroundColor="#03a9f4"
          title="View"
        />
      </Card>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Deck data={DATA} renderCard={renderCard} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 10,
    paddingTop: 50,
  },
  cardStyle: {
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 50,
    marginVertical: 15,
    padding: 15,
  },
});
