import React, { useEffect, useState } from "react";
import { View, Text, Animated, PanResponder } from "react-native";

const Deck = ({ data, renderCard }) => {
  const [panResponder, setPanResponder] = useState(null);
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {},
    });
    const position = new Animated.ValueXY();

    setPanResponder(panResponder);
    setPosition(position);
  }, []);

  function renderCards() {
    return data.map((item) => {
      return renderCard(item);
    });
  }
  return (
    <Animated.View
      {...(panResponder != null ? panResponder.panHandlers : null)}
      style={position?.getLayout() ? position.getLayout() : null}
    >
      {renderCards()}
    </Animated.View>
  );
};

export default Deck;
