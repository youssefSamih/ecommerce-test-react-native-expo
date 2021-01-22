import React, { ElementType } from "react";
import { Text } from "react-native";

interface CustomTextProps {
  children: ElementType | string;
  onPress?: any;
}

const CustomText = ({ children, ...rest }: CustomTextProps) => {
  return <Text {...rest}>{children}</Text>;
};

export default CustomText;
