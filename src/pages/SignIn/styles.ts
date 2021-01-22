import styled from "styled-components/native";
import CustomText from "../../components/CustomText";
import colors from "../../styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: ${colors.primary};
`;

export const Wrapper = styled.View`
  margin: 10px 10px;
  align-items: flex-start;
`;

export const CustomImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 100px;
  margin-bottom: 20px;
`;

export const Label = styled(CustomText)`
  font-family: "roboto-bold";
  font-size: 16;
  color: ${colors.white};
`;

export const LoginButton = styled.TouchableOpacity`
  height: 50px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  margin: 20px 10px;
`;

export const ButtonText = styled(CustomText)`
  font-family: "roboto-bold";
  font-size: 20;
  color: ${colors.primary};
`;
