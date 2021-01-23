import React, { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons/";
import { TabIconProps } from "../interfaces";

import { Container, Circle, Number } from "./styles";

const TabIcon = ({ name, tintColor }: TabIconProps) => {
  const cartSize = 0;
  const favoriteSize = 0;

  useEffect(() => {}, [cartSize]);

  return (
    <Container>
      <FontAwesome name={name} size={24} color={tintColor} />
      {name === "shopping-cart"
        ? cartSize > 0 && (
            <Circle>
              <Number>{cartSize}</Number>
            </Circle>
          )
        : favoriteSize > 0 && (
            <Circle>
              <Number>{favoriteSize}</Number>
            </Circle>
          )}
    </Container>
  );
};

export default TabIcon;
