import React, { useEffect, useState } from "react";
import { View, Text, Animated, PanResponder } from "react-native";

const Deck = ({ data, renderCard }) => {
  const [panResponder, setPanResponder] = useState(null);

  useEffect(() => {
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
      },
      onPanResponderRelease: () => {},
    });

    setPanResponder(panResponder);
  }, []);

  function renderCards() {
    return data.map((item) => {
      return renderCard(item);
    });
  }
  return (
    <View {...(panResponder != null ? panResponder.panHandlers : null)}>
      {renderCards()}
    </View>
  );
};

export default Deck;
