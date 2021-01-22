import React from "react";
import { Button, Text, Icon } from "./styles";

interface BuyButtonProps {
  children: string;
  onPress?: () => void;
}

const BuyButton = ({ children, ...rest }: BuyButtonProps) => {
  return (
    <Button {...rest}>
      <Icon name="shopping-cart" />
      <Text>{children}</Text>
    </Button>
  );
};

export default BuyButton;
