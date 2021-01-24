import React, { forwardRef } from "react";
import { FontAwesome } from "@expo/vector-icons/";
import { Container, TInput } from "./styles";

interface InputProps {
  icon: any;
  color?: string;
  onChangeText?: ((text: string) => void) | undefined;
  value?: string | undefined;
}

const Input = (
  { icon, color, onChangeText, value, ...rest }: InputProps,
  ref: any
) => {
  return (
    <Container>
      <TInput
        ref={ref}
        onChangeText={onChangeText}
        value={value}
        {...{ color }}
        {...rest}
      />
      {icon && (
        <FontAwesome name={icon} size={20} color="rgba(255,255,255,0.6)" />
      )}
    </Container>
  );
};

export default forwardRef(Input);
