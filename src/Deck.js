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

  function getCardStyle() {
    const rotate = position.x.interpolate({
      inputRange: [-500, 0, 500],
      outputRange: ["-90deg", "0deg", "90deg"],
    });
    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  }

  function renderCards() {
    return data.map((item, index) => {
      if (index == 0) {
        return (
          <Animated.View
            key={item.id}
            {...(panResponder != null ? panResponder.panHandlers : null)}
            style={getCardStyle()}
          >
            {renderCard(item)}
          </Animated.View>
        );
      } else return renderCard(item);
    });
  }
  return <View>{renderCards()}</View>;
};

export default Deck;
