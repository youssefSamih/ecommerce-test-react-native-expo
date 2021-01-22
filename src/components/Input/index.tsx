import React, { forwardRef } from "react";
import { FontAwesome } from "@expo/vector-icons/";

import { Container, TInput } from "./styles";
import { TextInput } from "react-native";

interface InputProps {
  icon: any;
  keyboardType?: any;
  autoCorrect?: boolean;
  autoCapitalize?: any;
  returnKeyType?: any;
  placeholder?: string;
  onSubmitEditing?: () => any;
  value?: string;
  onChangeText?: React.Dispatch<React.SetStateAction<string>>;
  secureTextEntry?: boolean;
}

type ref =
  | ((instance: TextInput | null) => void)
  | React.RefObject<TextInput>
  | null
  | undefined;

const Input = ({ icon, ...rest }: InputProps, ref: ref) => {
  return (
    <Container>
      <TInput ref={ref} {...rest} />
      {icon && (
        <FontAwesome name={icon} size={20} color="rgba(255,255,255,0.6)" />
      )}
    </Container>
  );
};

export default forwardRef(Input);
