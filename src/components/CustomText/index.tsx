import React, { ElementType } from "react";
import { Text } from "react-native";

interface CustomTextProps {
  children: ElementType | string;
}

const CustomText = ({ children, ...rest }: CustomTextProps) => {
  return <Text {...rest}>{children}</Text>;
};

export default CustomText;
