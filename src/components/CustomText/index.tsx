import React, { useState, useEffect, ElementType } from "react";
import { Text } from "react-native";
import * as Font from "expo-font";

interface CustomTextProps {
  children: string;
}

const CustomText = ({ children, ...rest }: CustomTextProps) => {
  const [fontLoad, setFontLoad] = useState(false);

  useEffect(() => {
    const handleFont = async () => {
      await Font.loadAsync({
        "roboto-regular": require("../../../assets/fonts/Roboto-Regular.ttf"),
        "roboto-bold": require("../../../assets/fonts/Roboto-Bold.ttf"),
      });
      setFontLoad(true);
    };
    handleFont();
  }, []);

  return fontLoad ? <Text {...rest}>{children}</Text> : <></>;
};

export default CustomText;
