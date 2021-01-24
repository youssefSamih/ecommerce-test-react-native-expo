import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons/";
import CustomText from "../CustomText";
import colors from "../../styles/colors";

interface ContainerProps {
  margin?: number;
  rtl?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  padding: 20px;
  background: ${colors.white};
  margin: ${({ margin }) => (margin !== 0 ? `${margin}px 0` : `1px 0px`)};
  flex-direction: ${({ rtl }) => (rtl ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled(CustomText)`
  font-size: 15px;
  color: ${colors.grey};
`;

export const Icon = styled(FontAwesome).attrs({
  color: colors.grey,
  size: 22,
})`
  width: 25px;
`;

export const Wrapper = styled.View<ContainerProps>`
  flex: 1;
  align-items: flex-start;
  margin-left: 20px;
  flex-direction: ${({ rtl }) => (rtl ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
`;
