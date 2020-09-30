import React from "react";
import { View, Text, Animated } from "react-native";

const Deck = ({ data, renderCard }) => {
  function renderCards() {
    return data.map((item) => {
      return renderCard(item);
    });
  }
  return renderCards();
};

export default Deck;
