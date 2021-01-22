import React from "react";
import { FontAwesome } from "@expo/vector-icons/";
import { TabIconProps } from "../interfaces";

const TabIcon = ({ name, tintColor }: TabIconProps) => {
  return <FontAwesome name={name} size={24} color={tintColor} />;
};

export default TabIcon;
