import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import LottieView from "lottie-react-native";
import CustomText from "../../components/CustomText";
import colors from "../../styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 5px;
  background: ${colors.background};
`;

export const TotalWrapper = styled.View`
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-end;
  line-height: 0;
  margin: 5px 0;
  padding: 5px;
  background: ${colors.white};
  border-radius: 4px;
`;

export const TotalText = styled(CustomText)`
  font-size: 16px;
  color: ${colors.primary};
`;

export const TotalPrice = styled(CustomText)`
  font-size: 28px;
  color: ${colors.text};
`;

export const FinishButton = styled(RectButton)`
  background: ${colors.primary};
  border-radius: 4px;
  padding: 12px 20px;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BuyButton = styled(RectButton)`
  background: ${colors.primary};
  border-radius: 4px;
  padding: 12px 20px;
  align-self: center;
  align-items: center;
  justify-content: center;
  width: 200px;
  margin-top: 20px;
`;

export const ButtonText = styled(CustomText)`
  font-size: 18px;
  color: ${colors.white};
`;

export const WrapperAnimation = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CheckoutAnimation = styled(LottieView).attrs({
  resizeMode: "contain",
})`
  height: 150px;
  width: 150px;
`;

export const TotalContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
`;
