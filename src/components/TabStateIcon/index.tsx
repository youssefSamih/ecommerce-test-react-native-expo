import React, { useEffect } from "react";
import { FontAwesome } from "@expo/vector-icons/";
import { useSelector } from "react-redux";
import { TabIconProps } from "../interfaces";

import { Container, Circle, Number } from "./styles";

const TabIcon = ({ name, tintColor }: TabIconProps) => {
  const cartSize = useSelector((state: { cart: any[] }) => state.cart.length);
  const favoriteSize = useSelector(
    (state: { favorite: any[] }) => state.favorite.length
  );

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
